import { track, LightningElement } from "lwc";

import { debounce } from "../../../shared/debounce";
import { getJSON } from "../../../shared/fetch";

import * as search from "./lib/search";
import { Listbox, ListboxState } from "./lib/listbox";
import * as user from "./lib/user";

export type Config = {
  coveo: {
    locale: string;
    querySuggestUrl: string;
  };
  csrfToken: string;
  labels: {
    placeholder: string;
    recentItems: string;
    recentFavorites: string;
  };
  searchUrl: string;
};

export type RecentSection = {
  items: user.Recent[];
  title: string;
};

export const CONFIG_PATH = "/api/v1/ui/search";

export default class extends LightningElement {
  private completionTerms: string | undefined;
  private completionController: AbortController | undefined;
  @track
  private completions: search.Completion[] = [];

  @track
  private config: Config | undefined;
  private get configLabels(): Config["labels"] {
    if (this.config) return this.config.labels;
    // @ts-ignore
    return {};
  }

  private listbox = new Listbox({
    onChange: state => {
      this.listboxState = state;
    },
    onSelect: index => {
      let { config, completions, hasCompletions, hasRecents, recents } = this;
      if (!config) return;
      if (hasCompletions) {
        let query = new URLSearchParams({
          keywords: completions[index].expression,
          suggested: "true"
        }).toString();
        window.location.href = `${config.searchUrl}?${query}`;
      } else if (hasRecents) {
        let recent = recents!.flatMap(s => s.items)[index];
        window.location.href = recent.path;
      }
    },
    onSubmit: () => {
      let { config, completionTerms } = this;
      if (!config) return;
      if (!completionTerms) return;
      let query = new URLSearchParams({
        keywords: completionTerms
      }).toString();
      window.location.href = `${config.searchUrl}?${query}`;
    },
    shadowRoot: this.template
  });
  @track
  private listboxState: ListboxState | undefined;

  private getCompletions = debounce(async (terms: string) => {
    let { completionController: prevController, config } = this;
    if (prevController) prevController.abort();
    if (!config) return;
    if (!terms.length) {
      this.completions = [];
      return;
    }
    let controller = (this.completionController = new AbortController());
    let url = await search.getCompletionsUrl({
      baseUrl: config.coveo.querySuggestUrl,
      csfrToken: config.csrfToken,
      locale: config.coveo.locale,
      terms
    });
    let completions = await search.getCompletions(url, {
      signal: controller.signal
    });
    if (this.completionTerms === terms) this.completions = completions;
  }, 250);

  @track
  private recents: RecentSection[] | undefined;

  private async getConfig() {
    try {
      this.config = await getJSON<{ data: Config }>(
        `${process.env.API_URL}${CONFIG_PATH}`
      ).then(res => res.data);
    } catch (e) {
      console.error(e);
    }
  }

  private async getRecents() {
    let { config } = this;
    if (!config) return;
    try {
      let recents = await user.getRecents();
      let { recent_favorite, recent_item } = recents.reduce<
        {
          [type in user.Recent["type"]]: user.Recent[];
        }
      >((a, b) => (a[b.type].push(b), a), {
        recent_favorite: [],
        recent_item: []
      });
      this.recents = [
        { items: recent_item, title: config.labels.recentItems },
        { items: recent_favorite, title: config.labels.recentFavorites }
      ].filter(s => s.items.length);
    } catch (e) {
      console.error(e);
    }
  }

  private get hasCompletions() {
    return this.completions.length > 0;
  }

  private get hasRecents() {
    return typeof this.recents !== "undefined" && this.recents.length > 0;
  }

  private onFocus(e: FocusEvent) {
    if (!this.recents) this.getRecents();
  }

  private onInput(e: InputEvent) {
    let { value } = e.currentTarget as HTMLInputElement;
    let terms = value.trim();
    this.completionTerms = terms;
    this.getCompletions(terms);
  }

  private get showRecents() {
    let { hasCompletions, hasRecents, listboxState } = this;
    if (!listboxState) return false;
    return listboxState.active && hasRecents && !hasCompletions;
  }

  private get showCompletions() {
    let { hasCompletions, listboxState } = this;
    if (!listboxState) return false;
    return listboxState.active && hasCompletions;
  }

  connectedCallback() {
    this.getConfig();
  }

  renderedCallback() {
    this.listbox.renderedCallback();
  }

  disconnectedCallback() {
    this.listbox.disconnectedCallback();
  }
}
