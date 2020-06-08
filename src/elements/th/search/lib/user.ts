import { getJSON } from "../../../../shared/fetch";

export type Recent = {
  color: string | null;
  completion: string | null;
  content_type: string;
  icon_url: string;
  path: string;
  title: string;
  type: "recent_favorite" | "recent_item";
};

export const RECENTS_PATH = "/users/recents";

export async function getRecents() {
  let { recents } = await getJSON<{ recents: Recent[] }>(
    `${process.env.API_URL}${RECENTS_PATH}`
  );
  return recents;
}
