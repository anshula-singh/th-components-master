import { html } from "lit-html";

export default {
  title: "tm/pages/Content",
  parameters: {
    modules: ["/modules/tds.js", "/modules/tm.js"]
  }
};

const summaryAuthenticatedModuleCompleted = {
  color: "rgb(75, 139, 201)",
  description:
    "Drive adoption of sales features through customizations that work best for your company.",
  estimatedTime: "~30 mins", // labels?
  href:
    "https://trailhead.salesforce.com/en/content/learn/modules/sales_admin_salesforce_sales_process_and_you",
  image: "/images/badge-1.png",
  labels: {
    points: "+300 Points"
  },
  pretitle: "Module",
  title: "Lightning Experience For Sales",
  type: "module",
  user: {
    estimatedTimeLeft: "",
    finishedAt: "3/30/2020",
    percentageComplete: 100
  }
};

const summaryTrail = {
  color: "rgb(221, 49, 49)",
  description:
    "Navigate and personalize Analytics, and explore data on desktop and mobile.",
  estimatedTime: "~30 mins", // labels?
  href:
    "https://trailhead.salesforce.com/en/content/learn/trails/wave_analytics_explorer",
  image: "/images/badge-trail-1.png",
  labels: {
    points: "+300 Points"
  },
  pretitle: "Trail",
  title: "Explore With Analytics",
  type: "trail"
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
  </style>

  <h1>Content Items</h1>

  <h2>Header + Unit List</h2>

  <div class="module">
    <tds-content-header
      .summary=${summaryAuthenticatedModuleCompleted}
    ></tds-content-header>
    <!-- TODO: make this take summary object? abstract to slots like summary/ContentSummary ? -->
    <tds-content-child-list-item
      title="Send Email Through Salesforce"
      subtitle="+100 Points"
      href="/"
    ></tds-content-child-list-item>
    <tds-content-child-list-item
      title="Send Email Through Salesforce"
      subtitle="+100 Points"
      href="/"
    ></tds-content-child-list-item>
    <tds-content-child-list-item
      title="Send Email Through Salesforce"
      subtitle="+100 Points"
      href="/"
    ></tds-content-child-list-item>
  </div>

  <h2>Tiles / Bricks</h2>

  <div class="tile-grid">
    <tds-content-tile
      .summary=${summaryAuthenticatedModuleCompleted}
    ></tds-content-tile>
    <tds-content-tile .summary=${summaryTrail}></tds-content-tile>
    <tds-content-tile
      .summary=${summaryAuthenticatedModuleCompleted}
    ></tds-content-tile>
    <tds-content-tile .summary=${summaryTrail}></tds-content-tile>
    <tds-content-tile
      .summary=${summaryAuthenticatedModuleCompleted}
    ></tds-content-tile>
  </div>

  <h2>Lists</h2>

  <div class="list">
    <tds-content-list-item .summary=${summaryTrail}></tds-content-list-item>
    <tds-content-list-item
      .summary=${summaryAuthenticatedModuleCompleted}
    ></tds-content-list-item>
    <tds-content-list-item
      .summary=${summaryAuthenticatedModuleCompleted}
    ></tds-content-list-item>
  </div>
`;
