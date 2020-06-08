import { html } from "lit-html";

export default {
  title: "tm/pages/Starter Pack",
  parameters: {
    modules: [
      "/modules/tds.js",
      "/modules/th-header.js",
      "/modules/th-footer-links.js",
      "/modules/th-footer-global.js",
      "/modules/tm.js"
    ]
  }
};

export const Home = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-header></th-header>
  <tm-page class="theme--starter">
    <tm-hero-a
      background="white"
      img-src="/images/starter-hero.png"
      title="Starter Pack"
      subtitle="Hello Trailblazer! Lets get you started on the most popular Salesforce topics."
      cta-href="/"
      cta-label="Get Started for Free"
      img-align="bottom"
    ></tm-hero-a>

    <tm-section-a title="The perfect place to start" background="light">
      <tm-text-item-grid-a icon-type="left" background="dark">
        <tm-grid-item
          icon-symbol="fallback"
          title="The absolute essentials"
          description="We have broken everything down to give you the absolute essentials to get started"
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="note"
          title="We will teach you"
          description="Our content is designed to break things down in a fun and engaging way"
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="trail"
          title="All for free"
          description="Trailhead is completely free. We want to help you build a Salesforce career path."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a background="white" title="Lets get started with the basics">
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          description="Deliver insights that assist you in making timely business decisions."
          img-src="/images/starter-pack-1.png"
          pretitle="Starter Pack"
          title="Reports & Dashboards"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          description="Development platform for building software as a service applications on top of Salesforce.com's customer relationship management functionality."
          img-src="/images/starter-pack-2.png"
          pretitle="Starter Pack"
          title="Apex"
          cta-href="https://trailhead.salesforce.com/en/users/strailhead/trailmixes/be-an-innovator-with-flow"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          description="Data modeling (data modelling) is the process of creating a data model for the data to be stored in a Database."
          img-src="/images/starter-pack-3.png"
          pretitle="Starter Pack"
          title="Data Modeling"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          description="The Salesforce security features help you empower your users to do their jobs safely and efficiently."
          img-src="/images/starter-pack-4.png"
          pretitle="Starter Pack"
          title="Security"
          cta-href="https://trailhead.salesforce.com/en/users/strailhead/trailmixes/be-an-innovator-with-flow"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          description="Component-based framework for app development from Salesforce.com that is designed to simplify processes for business users."
          img-src="/images/starter-pack-5.png"
          pretitle="Starter Pack"
          title="Lightning"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          description="We've gathered all the associated resources and guidance for each step of this adventure in a hand-dandy trailmix."
          img-src="/images/starter-pack-6.png"
          pretitle="Starter Pack"
          title="Mobile"
          cta-href="https://trailhead.salesforce.com/en/users/strailhead/trailmixes/be-an-innovator-with-flow"
          cta-title="Start"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a title="So what exactly is Trailhead?" background="light">
      <tm-feature-grid-a>
        <tm-grid-item
          description="Chances are, your next job will require Salesforce skills. Learn them for free today! Prove your skills and earn globally-recognized credentials that lead to top jobs."
          img-src="/images/starter-trailhead-1.png"
          title="Learn In-Demand Skills"
        ></tm-grid-item>
        <tm-grid-item
          description="Prove your skills and earn globally-recognized credentials that lead to top jobs."
          img-src="/images/starter-trailhead-2.png"
          title="Earn Resume-Worthy Credentials"
        ></tm-grid-item>
        <tm-grid-item
          description="Join our Trailblazer Community for mentorship along the way and help finding jobs."
          img-src="/images/starter-trailhead-3.png"
          title="Connect to Opportunities"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="/"
      cta-label="Get Started"
      img-src="/images/admin-goat.png"
      subtitle="Learn in-demand skills that lead to top jobs"
      title="Sign Up for free"
    ></tm-end-cap-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;

export const Topic = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-header></th-header>
  <tm-page class="theme--starter">
    <tm-hero-b
      background="light"
      img-src="/images/starter-pack-reports.png"
      img-align="bottom"
      title="Start Reports and Dashboards"
      subtitle="Deliver insights that assist you in making timely business decisions."
      cta-href="/"
      cta-label="Get Started for Free"
    ></tm-hero-b>

    <tm-section-a background="white">
      <tm-feature-grid-a>
        <tm-grid-item
          description="Reports give you access to your Salesforce data. You can examine your Salesforce data in almost infinite combinations, display it in easy-to-understand formats, and share the resulting insights with others. Before building, reading, and sharing reports, review these reporting basics."
          img-src="/images/starter-report-1.png"
          title="Reports"
        ></tm-grid-item>
        <tm-grid-item
          description="Dashboards help you visually understand changing business conditions so you can make decisions based on the real-time data you have gathered with reports. Use dashboards to help users identify trends, sort out quantities, and measure the impact of their activities. Before building, reading, and sharing dashboards, review these dashboard basics."
          img-src="/images/starter-report-2.png"
          title="...and Dashboards"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Reports & dashbaords give you superhero powers"
      background="white"
    >
      <tm-text-item-grid-a icon-type="left" background="dark">
        <tm-grid-item
          icon-symbol="collection_variable"
          title="Custom Summary Formula field"
          description="User can define formula based on summary report is generated."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="locker_service_api_viewer"
          title="Exception Reports"
          description="These reports are used to show highlight the position where data doesn’t exist. These reports are created  using cross filters."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="date_input"
          title="Custom Summary Formulas"
          description="These formulas are used on reports to calculate complex data from summary level."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="display_text"
          title="Historical Trend Reporting"
          description="This will allow you to track your data. This will allow you to track upto 8 fields on Opportunity object and 3 fields up to custom objects."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="favorite"
          title="Bucket Field"
          description="Salesforce allows us to categorize records without using any formula. This is known as Bucketing."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="graph"
          title="Condition High-lighting"
          description="To highlight field values on summary or matrix reports based on some criteria like value ranges user can apply conditional highlighting."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="hierarchy"
          title="Automated advanced scheduling"
          description="Dashboards to consolidate reports across multiple objects, and display multiple formats in one page"
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="light_bulb"
          title="Highlight business questions"
          description="Provide easy to find data summaries to answer report business questions."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Lets start your journey here"
      background="light"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          cta-href="https://www.youtube.com/watch?v=_z7S1dFG-q4&feature=emb_logo"
          cta-target="_blank"
          cta-title="Begin Lesson"
          description="Get started with Salesforce CRM and explore Lightning Experience"
          img-src="/images/starter-badge-1.png"
          pretitle="Video #1 • April 22, 2020"
          title="CRM for Lightning Experience"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="https://www.youtube.com/watch?v=_z7S1dFG-q4&feature=emb_logo"
          cta-title="Begin Lesson"
          description="Set up users and control how they can view or edit your business data."
          img-src="/images/starter-badge-2.png"
          pretitle="Video #2 • April 21, 2020"
          title="User Management"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="https://www.youtube.com/watch?v=_z7S1dFG-q4&feature=emb_logo"
          cta-title="Begin Lesson"
          description="Learn how to import and export data in Salesforce."
          img-src="/images/starter-badge-3.png"
          pretitle="Video #3 • April 22, 2020"
          title="Data Management"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Perhaps you prefer starting with a video..."
      background="white"
    >
      <iframe
        data-chromatic="ignore"
        style="border-radius: 1rem; box-shadow: 0 4px 14px 1px rgba(0, 0, 0, 0.1);"
"
        width="100%"
        height="700px"
        src="https://www.youtube.com/embed/7SkqLFuRpUI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </tm-section-a>

    <tm-section-a
      background="white"
      title="Even more ways to get your feet wet"
    >
      <tm-card-grid-d>
        <tm-grid-item
          description="You have a supportive community behind you for you to learn and connect with other Trailblazers trying to learn."
          img-src="/images/starter-more-1.png"
          pretitle="Community"
          title="Community "
          cta-href="https://trailblazercommunitygroups.com/events/details/salesforce-portland-or-nonprofit-group-presents-best-practices-for-creating-sales-reports-and-dashboards/"
          cta-title="Get Chattin"
        ></tm-grid-item>
        <tm-grid-item
          description="Ready to jump into your fill journey? We have a single path for you to learn everything report and dashboards."
          img-src="/images/admin-trailmix.png"
          pretitle="Trailmix"
          title="Reports & Dashboard Trail"
          cta-href="https://trailhead.salesforce.com/en/users/strailhead/trailmixes/be-an-innovator-with-flow"
          cta-title="Start Trail"
        ></tm-grid-item>
      </tm-card-grid-d>
    </tm-section-a>

    <tm-section-a title="So what exactly is Trailhead?" background="light">
      <tm-feature-grid-a>
        <tm-grid-item
          description="Chances are, your next job will require Salesforce skills. Learn them for free today! Prove your skills and earn globally-recognized credentials that lead to top jobs."
          img-src="/images/starter-trailhead-1.png"
          title="Learn In-Demand Skills"
        ></tm-grid-item>
        <tm-grid-item
          description="Prove your skills and earn globally-recognized credentials that lead to top jobs."
          img-src="/images/starter-trailhead-2.png"
          title="Earn Resume-Worthy Credentials"
        ></tm-grid-item>
        <tm-grid-item
          description="Join our Trailblazer Community for mentorship along the way and help finding jobs."
          img-src="/images/starter-trailhead-3.png"
          title="Connect to Opportunities"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="/"
      cta-label="Get Started"
      img-src="/images/admin-goat.png"
      subtitle="Learn in-demand skills that lead to top jobs"
      title="Sign Up for free"
    ></tm-end-cap-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
