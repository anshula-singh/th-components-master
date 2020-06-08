import { html } from "lit-html";

import {
  modul,
  moduleWithProgress,
  moduleComplete,
  unit,
  unitComplete
} from "../__fixtures__/content";

export default {
  title: "tds/pages/TrailheadOnPlatform",
  parameters: {
    modules: ["/modules/tds.js", "/modules/tm.js"]
  }
};

const navigateHandler = e => {
  console.log("onNavigate", e.detail);
};

export const Home = () => html`
  <style>
    #root {
      background: #f0f0f0;
      margin: 0;
      padding: var(--tds-spacing-4);
    }
    .tile-grid {
      display: flex;
      flex-wrap: wrap;
      margin: -12px;
    }
    .tile-grid > * {
      box-sizing: border-box;
      flex-basis: 33.333%;
      padding: var(--tds-spacing-4);
    }
    .list > * {
      border-bottom: 1px solid var(--tds-color-fog);
    }
    .module > * {
      border-bottom: 1px solid var(--tds-color-fog);
    }
    .description {
      background: white;
      font-size: var(--tds-font-size-xs);
      margin: var(--tds-spacing-4) 0;
      padding: var(--tds-spacing-2) var(--tds-spacing-4);
    }
  </style>

  <h1>Content Items</h1>

  <h2>Header</h2>

  <div class="description">
    <pre>
const data = {
  color: "rgb(75, 139, 201)",
  description: "Drive adoption of sales features through customizations that work best for your company.", // LearningContent Description
  estimatedTime: 30, // LearningContent DurationCount (minutes)
  path: "/path/to/module", // Derived from LearningContent Id
  image: "/images/badge-1.png", // LearningContent ImageUrl
  points: 300, // LearningContent AvailablePointCount
  pretitle: "Module", // LearningContent ContentType, hardcoded to "Module" for 228
  title: "Lightning Experience For Sales", // LearningContent Title
  type: "module" // LearningContent ContentType, hardcoded to "module" for 228
}

const navigateHandler = e => {
  console.log('onNavigate', e.detail)
}

&#x3C;tds-content-header lang="en" onnavigate={navigateHandler} .summary={data}&#x3E;&#x3C;/tds-content-header&#x3E;
    </pre
    >

    <p>Take note of the onnavigate attribute. This fires an event when the title is clicked. The event detail includes the summary of the content.</p>
  </div>

  <tds-content-header @navigate=${navigateHandler} .summary=${modul}></tds-content-header>

  <h2>Header + Unit List</h2>

  <h3>Base</h3>

  <div class="description">
    <pre>
const unit = {
  title: "Send Email Through Salesforce", // LearningContentItem Title
  estimatedTime: 10, // LearningContentItem DurationCount
  path: "/path/to/content" // Derived from LearningContentItem Id
}

&#x3C;tds-content-header lang="es-MX" .summary={data}&#x3E;&#x3C;/tds-content-header&#x3E;

&#x3C;tds-content-child-list-item lang="es-MX" .summary={unit}&#x3E;&#x3C;/tds-content-child-list-item&#x3E;
&#x3C;tds-content-child-list-item lang="es-MX" .summary={unit}&#x3E;&#x3C;/tds-content-child-list-item&#x3E;
    </pre
    >

    <p>Notice the presence of the lang="es-MX" attribute. This translates the labels in the components for points and duration. We currently support ["en", "es", "de", "fr", "pt", "ja"]. If a region is specified, and not present in the label dictionary, it drops it and defaults to the language. If the attribute is not present for the specified language, it falls back to "en".</p>
  </div>

  <div class="module">
    <tds-content-header @navigate=${navigateHandler} lang="es-MX" .summary=${modul}></tds-content-header>
    <tds-content-child-list-item @navigate=${navigateHandler} lang="es-MX" .summary=${unit}></tds-content-child-list-item>
    <tds-content-child-list-item @navigate=${navigateHandler} lang="es-MX" .summary=${unit}></tds-content-child-list-item>
  </div>

  <h3>With Progress</h3>

  <div class="description">
    <pre>
const dataWithProgress = {
  ...data,
  user: {
    estimatedTimeLeft: 20, // LearningContentProgress TimeRemainingCount
    percentageComplete: 50 // derive from LearningContentProgress CompletedItemCount and LearningContent ItemCount
  }
}

const unitComplete = {
  ...unit,
  user: {
    finishedAt: "3/13/1998", // LearningContentItemProgress CompletedDate
    pointsEarned: 125 // LearningContentItemProgress EarnedPointCount
  }
}

&#x3C;tds-content-header .summary={dataWithProgress}&#x3E;&#x3C;/tds-content-header&#x3E;

&#x3C;tds-content-child-list-item .summary={unitComplete}&#x3E;&#x3C;/tds-content-child-list-item&#x3E;
&#x3C;tds-content-child-list-item .summary={unit}&#x3E;&#x3C;/tds-content-child-list-item&#x3E;

    </pre
    >
  </div>

  <div class="module">
    <tds-content-header .summary=${moduleWithProgress}></tds-content-header>
    <!-- TODO: make this take summary object? abstract to slots like summary/ContentSummary ? -->
    <tds-content-child-list-item
      .summary=${unitComplete}
    ></tds-content-child-list-item>
    <tds-content-child-list-item
      .summary=${unit}
    ></tds-content-child-list-item>
  </div>

    <h3>Complete</h3>

    <div class="description">
      <pre>
const dataComplete = {
  ...data,
  user: {
    pointsEarned: 250, // LearningContentProgress EarnedPointCount
    finishedAt: "3/30/2020", // LearningContentProgress CompletedDate
    percentageComplete: 100 // derive from LearningContentProgress CompletedItemCount and LearningContent ItemCount
  }
}

&#x3C;tds-content-header .summary={dataComplete}&#x3E;&#x3C;/tds-content-header&#x3E;

&#x3C;tds-content-child-list-item .summary={unitComplete}&#x3E;&#x3C;/tds-content-child-list-item&#x3E;
&#x3C;tds-content-child-list-item .summary={unitComplete}&#x3E;&#x3C;/tds-content-child-list-item&#x3E;

      </pre>
    </div>

    <div class="module">
      <tds-content-header .summary=${moduleComplete}></tds-content-header>
      <!-- TODO: make this take summary object? abstract to slots like summary/ContentSummary ? -->
      <tds-content-child-list-item
        .summary=${unitComplete}
      ></tds-content-child-list-item>
      <tds-content-child-list-item
        .summary=${unitComplete}
      ></tds-content-child-list-item>
    </div>

    <h2>Lists</h2>

    <div class="description">
      <p>
        tds-content-list-item has the same interface as the tds-content-header
      </p>
      <pre>
const data = {
  color: "rgb(75, 139, 201)",
  description: "Drive adoption of sales features through customizations that work best for your company.", // LearningContent Description
  estimatedTime: 30, // LearningContent DurationCount (minutes)
  href: "/path/to/module", // Derived from LearningContent Id
  image: "/images/badge-1.png", // LearningContent ImageUrl
  points: 300, // LearningContent AvailablePointCount
  pretitle: "Module", // LearningContent ContentType, hardcoded to "Module" for 228
  title: "Lightning Experience For Sales", // LearningContent Title
  type: "module" // LearningContent ContentType, hardcoded to "module" for 228
}

const dataWithProgress = {
  ...data,
  user: {
    estimatedTimeLeft: 20, // LearningContentProgress TimeRemainingCount
    percentageComplete: 50 // derive from LearningContentProgress CompletedItemCount and LearningContent ItemCount
  }
}

const dataComplete = {
  ...data,
  user: {
    pointsEarned: 250, // LearningContentProgress EarnedPointCount
    finishedAt: "3/30/2020", // LearningContentProgress CompletedDate
    percentageComplete: 100 // derive from LearningContentProgress CompletedItemCount and LearningContent ItemCount
  }
}

&#x3C;style&#x3E;
.list > * {
  border-bottom: 1px solid var(--tds-color-fog);
}
&#x3C;/style&#x3E;
&#x3C;div class="list"&#x3E;
  &#x3C;tds-content-list-item onnavigate={navigateHandler} .summary={data}&#x3E;&#x3C;/tds-content-list-item&#x3E;
  &#x3C;tds-content-list-item lang="es-MX" onnavigate={navigateHandler} .summary={dataWithProgress}&#x3E;&#x3C;/tds-content-list-item&#x3E;
  &#x3C;tds-content-list-item lang="ja" onnavigate={navigateHandler} .summary={dataComplete}&#x3E;&#x3C;/tds-content-list-item&#x3E;
&#x3C;/div&#x3E;
    </pre>
    </div>

    <div class="list">
      <tds-content-list-item @navigate=${navigateHandler} .summary=${modul}></tds-content-list-item>
      <tds-content-list-item lang="es-MX" @navigate=${navigateHandler}
        .summary=${moduleWithProgress}
      ></tds-content-list-item>
      <tds-content-list-item  lang="ja" @navigate=${navigateHandler} .summary=${moduleComplete}></tds-content-list-item>
    </div>

    <h2>Content Icon</h2>

    <div class="description">
      <pre>
&#x3C;tds-content-icon src="/images/badge-1.png" checked&#x3E;&#x3C;/tds-content-icon&#x3E;
      </pre>
    </div>

    <tds-content-icon
      src="/images/badge-1.png"
      .checked=${true}
    ></tds-content-icon>
  </div>
`;
