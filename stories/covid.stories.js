import { html } from "lit-html";

export default {
  title: "tm/pages/Covid",
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

export const LandingFull = () => html`
  <style>
    #root {
      padding: 0;
    }

    .card {
      margin: auto;
      overflow: hidden;
      max-width: 800px;
      background-color: var(--tds-color-white);
      border-radius: var(--tds-radius-lg);
      box-shadow: var(--tds-shadow-sm);
    }
    /* styling bar graph*/
    .bar-graph-container {
      display: flex;
      height: 340px;
      justify-content: space-between;
      padding: var(--tds-spacing-12);
    }
    .y-label-group {
      display: flex;
      flex-direction: column;
    }
    .label-group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;
      font-size: 16px;
    }
    .label-bottom-space {
      height: 10%;
      margin: 10px 5px 20px 5px;
    }
    .bar-container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      width: 15%;
    }
    .bar-title {
      font-size: 1rem;
      text-align: center;
      height: 10%;
      margin: 10px 5px 20px 5px;
    }
    .bar {
      width: 60px;
      align-items: center;
      opacity: 1;
      border-radius: 0.5rem;
    }
    .bar:hover {
      background-color: #0070d1;
      cursor: pointer;
    }
    .percent {
      justify-content: center;
      display: flex;
      margin: -28px;
      opacity: 1;
      font-family: "Neutraface";
      font-size: 1.5rem;
    }
    .bar:hover .percent {
      opacity: 1;
      color: #100e17;
      font-weight: bold;
    }
    .bar-bg {
      height: 90%;
      display: flex;
      flex-direction: column-reverse;
    }
    .bar-1 {
      height: 60%;
      background-color: #2955ae;
    }
    .bar-2 {
      height: 75%;
      background-color: #1d4587;
    }
    .bar-3 {
      height: 50%;
      background-color: #1d873f;
    }
    .bar-4 {
      height: 45%;
      background-color: #5e2e84;
    }
    .bar-5 {
      height: 95%;
      background-color: #d14242;
    }
    .bar-6 {
      height: 60%;
      background-color: #1d7286;
    }

    .image {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 1280px;
    }

    .data {
      font-size: var(--tds-font-size-7xl);
      margin-bottom: var(--tds-spacing-1);
      margin-top: var(--tds-spacing-0);
      font-family: "Neutraface";
    }
    .data-description {
      font-size: var(--tds-font-size-md);
      margin: var(--tds-spacing-0);
    }
    .data-item {
      align-items: flex-start;
      flex-direction: row-reverse;
      padding-left: var(--tds-spacing-6);
      padding-right: var(--tds-spacing-6);
    }
    .data-item-grid {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      max-width: 1280px;
      list-style: none;
      padding-left: var(--tds-spacing-0);
    }

    .logo-item {
      align-items: flex-start;
      flex-direction: row-reverse;
      padding-left: var(--tds-spacing-6);
      padding-right: var(--tds-spacing-6);
    }
    .logo-item-grid {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      max-width: 1280px;
      list-style: none;
      padding-left: var(--tds-spacing-0);
    }
    .logo-image {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 180px;
    }
    .syllabus-image {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 1280px;
    }
  </style>
  <th-header></th-header>
  <div class="theme--work">
    <tm-page-navigation-a>
      <tm-page-navigation-item
        active
        href="#overview"
        title="Overview"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#products"
        title="Products"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#skills"
        title="Skill Up"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#mytrailhead"
        title="myTrailhead"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#faq"
        title="FAQ"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#contacttracer"
        title="Contact Tracer"
      ></tm-page-navigation-item>
    </tm-page-navigation-a>

    <tm-hero-a
      background="light"
      img-src="/images/work-hero.png"
      title="Learn the skills you need to get back to work"
      subtitle="Wether you're a Trailblazer or run an orginization or community, we have the products and training you need."
      id="overview"
    >
    </tm-hero-a>

    <tm-section-a background="light" title="Lets Get You Started">
      <tm-card-grid-d>
        <tm-grid-item
          description="Ready to learn all the skills you need to successfully use Health Cloud, Tableau and more!"
          img-src="/images/workcom.png"
          title="Skill up on Work.com"
          href="#skills"
          cta-title="Begin"
        ></tm-grid-item>
        <tm-grid-item
          description="Learn how myTrailhead can be quickly setup to train your orgization on best practices for Covid-19."
          img-src="/images/mytrailhead.png"
          title="Explore myTrailhead"
          href="#mytrailhead"
          cta-title="Explore"
        ></tm-grid-item>
      </tm-card-grid-d>
    </tm-section-a>

    <tm-section-a
      title="Work.com is a bundle of Salesforce Products to Speed Your Path Forward"
      description="Work.com provides you with essential solutions designed to help businesses reopen the workplace as quickly as possible, while helping to keep employees, customers, partners, and communities safe and informed during the COVID-19 crisis and beyond."
      background="white"
      cta-target="_blank"
      id="products"
    >
      <tm-card-grid-c img-aspect="40%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Monitor return-to-work readiness, make data-driven decisions, and take action."
          img-src="/images/product-command.png"
          pretitle="Coming Soon"
          title="Workplace Command Center"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Manually track health-related interactions to safely and securely minimize the spread of COVID-19."
          img-src="/images/product-tracing.png"
          pretitle="Coming Soon"
          title="Contact Tracing"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Allocate health, public sector, or private sector resources and services with more speed and efficacy."
          img-src="/images/product-emergency.png"
          pretitle="Commerce Reference Architecture"
          title="Emergency Response Management"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Securely survey and assess employee health to determine suitability for returning to work."
          img-src="/images/product-employee.png"
          pretitle="Sales Reference Architecture"
          title="Employee Wellness Assessment"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Coordinate facilities and employee shift scheduling."
          img-src="/images/product-data.png"
          pretitle="Shift Management and Planning"
          title="Data Integration for Faster App Dev"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Skill up your workforce to meet new business demands with myTrailhead."
          img-src="/images/product-workforce.png"
          pretitle="Sales Reference Architecture"
          title="Workforce Reskilling"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Optimize emergency responsiveness with streamlined volunteer and grants management."
          img-src="/images/product-volunteer.png"
          pretitle="Sales Reference Architecture"
          title="Volunteer and Grants Management"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Stay connected to employees and customers and make data-driven decisions with Salesforce Care."
          img-src="/images/product-rapid.png"
          pretitle="Sales Reference Architecture"
          title="Rapid Crisis Response"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a background="light" cta-target="_blank" id="skills">
      <tm-feature-grid-a>
        <tm-grid-item
          description="Learn how to set up your home office, be productive, and stay motivated while working from home."
          img-src="/images/covid-trail.png"
          title="Lets Start by Taking Care of You"
          cta-primary-href="https://trailhead.salesforce.com/en/content/learn/trails/succeed-from-home-during-covid19"
          cta-primary-title="Begin Trail"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a title="Learn the Work.com Essentials" background="light">
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
      title="Online Events to Help You Learn Togather"
      description="Trailhead live and events around the world to provide more insight on Work.com offerings."
      cta-title="View All Events"
      cta-href="/events"
      background="light"
    >
      <tm-events-a>
        <tm-event-item
          date="Thursday, January 23, 2020"
          cta-href="/"
          cta-title="Register"
          pretitle="Webinar"
          time="09:35 AM EST"
          title="Keep Systems in Sync with Change Data Capture"
        ></tm-event-item>
        <tm-event-item
          date="Thursday, January 30, 2020"
          cta-href="/"
          cta-title="Register"
          pretitle="In Person"
          time="11:30 AM EST"
          title="How to Automate Visual Workflows with Points-and-Clicks"
          location="Park City, UT"
        ></tm-event-item>
        <tm-event-item
          date="Thursday, February 4, 2020"
          cta-href="/"
          cta-title="Register"
          pretitle="Webinar"
          time="09:35 AM EST"
          title="Get Ready for the Salesforce Mobile App"
        ></tm-event-item>
        <tm-event-item
          date="Thursday, November 1, 2020"
          cta-href="/"
          cta-title="Register"
          pretitle="In Person"
          time="09:35 AM EST"
          title="#Journey2Salesforce"
          location="San Francisco, CA"
        ></tm-event-item>
      </tm-events-a>
    </tm-section-a>

    <!-- <tm-section-a
      title="50% Off All Certifications"
      background="light"
      description="We want to help you become a certified and prepared to help orginizations."
      cta-title="Learn More About Health Cloud"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
    >
      <div><img class="syllabus-image" src="/images/covid-cert.svg" /></div>
    </tm-section-a> -->

    <tm-section-a
      title="myTrailhead for Health Orginizations"
      description="We have created a special edition of myTrailhead to help enable companies, orgizations, and communities to deploy faster."
      cta-title="View All Events"
      cta-href="/events"
      background="white"
      id="mytrailhead"
    >
      <tm-feature-grid-a>
        <tm-grid-item
          description="Reports give you access to your Salesforce data. You can examine your Salesforce data in almost infinite combinations, display it in easy-to-understand formats, and share the resulting insights with others. Before building, reading, and sharing reports, review these reporting basics."
          img-src="/images/starter-report-1.png"
          title="Customizable for Your Orgization"
        ></tm-grid-item>
        <tm-grid-item
          description="Dashboards help you visually understand changing business conditions so you can make decisions based on the real-time data you have gathered with reports. Use dashboards to help users identify trends, sort out quantities, and measure the impact of their activities. Before building, reading, and sharing dashboards, review these dashboard basics."
          img-src="/images/starter-report-2.png"
          title="Ready to Go Content Kits"
        ></tm-grid-item>
        <tm-grid-item
          description="Dashboards help you visually understand changing business conditions so you can make decisions based on the real-time data you have gathered with reports. Use dashboards to help users identify trends, sort out quantities, and measure the impact of their activities. Before building, reading, and sharing dashboards, review these dashboard basics."
          img-src="/images/starter-report-2.png"
          title="Trail Tracker Intergration"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a title="myTrailhead Features" background="white">
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
      background="white"
      title="Companies Ramping Up With myTrailhead"
    >
      <ul class="logo-item-grid">
        <li>
          <div class="logo-item">
            <img class="logo-image" src="/images/logo-1.png" />
          </div>
        </li>
        <li>
          <div class="logo-item">
            <img class="logo-image" src="/images/logo-2.png" />
          </div>
        </li>
        <li>
          <div class="logo-item">
            <img class="logo-image" src="/images/logo-3.png" />
          </div>
        </li>
        <li>
          <div class="logo-item">
            <img class="logo-image" src="/images/logo-4.png" />
          </div>
        </li>
        <li>
          <div class="logo-item">
            <img class="logo-image" src="/images/logo-5.png" />
          </div>
        </li>
        <li>
          <div class="logo-item">
            <img class="logo-image" src="/images/logo-6.png" />
          </div>
        </li>
      </ul>
    </tm-section-a>

    <tm-section-a title="myTrailhead Overview" background="light" id="faq">
      <div><img class="syllabus-image" src="/images/content-tabs.svg" /></div>
    </tm-section-a>

    <tm-section-a
      title="Customer Stories"
      description="Detailed & visual overviews of how it works on Salesforce"
      background="light"
      cta-target="_blank"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Continue Reading"
          description="Call off the bagpipes: announcing the “death of the store” is so last decade. While store closures still make headlines, what we’re witnessing today is something more Darwinian: the evolution of brick and mortar’s purpose."
          img-src="/images/card-c-blog-1.png"
          pretitle="Blog by Ann Marie"
          pretitle-href="/users/annmarie"
          pretitle-href-text="Ann Marie"
          title="8 Retailers Reimagining the Role of the Store: NYC Edition"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Continue Reading"
          description="When you’re in the business of selling an ultra-luxury product, customers typically make an effort to seek you out, not the other way around. You’re not appealing to the masses, so the conventional rules of marketing don’t apply. "
          img-src="/images/card-c-blog-2.png"
          pretitle="Blog by"
          pretitle-href="/users/jessicabergman"
          pretitle-href-text="Jessica Bergman"
          title="What Luxury Brands Can Learn From Lamborghini About Customer Engagement"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Continue Reading"
          description="Privacy, trust, and safety. It’s a hot button trio for tech companies — and for good reason. Every day, our data is spread across networks, devices, apps, services, and, of course, the cloud."
          img-src="/images/card-c-blog-3.png"
          pretitle="Blog by"
          pretitle-href="/users/mike"
          pretitle-href-text="Mike Rivo"
          title="Blazing Trails Podcast: Leadership, Technology, and Data With Uber CEO Dara Khosrowshahi"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a background="light" id="faq">
      <div><img class="syllabus-image" src="/images/quote.svg" /></div>
    </tm-section-a>

    <tm-section-a title="FAQ" background="light" id="faq">
      <div><img class="syllabus-image" src="/images/faq.svg" /></div>
    </tm-section-a>

    <tm-section-a id="contacttracer">
      <tm-feature-grid-a>
        <tm-grid-item
          description="Learn the skills you need to effectively test, track, and help halt the spread of Covid-19."
          img-src="/images/tracer-hero-1.png"
          title="Become a Contact Tracer"
          cta-primary-href="/"
          cta-primary-title="Learn More"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="/"
      cta-label="Get Started"
      img-src="/images/trailblazers.png"
      subtitle="Ready to kickstart your new career? Let’s do it! Dive in and discover how we’ve helped 1M+ learners like you take their career to the next level."
      title="Skill Up today for free"
    ></tm-end-cap-a>

    <tm-footnote>
      <h3>Sources</h3>
      <p>
        IDC White Paper sponsored by Salesforce, “The Salesforce Economy
        Forecast: 3.3 Million New Jobs, $859 Billion New Business Revenues to Be
        Created from 2016 to 2022,” October 2017
      </p>
      <p>
        Burning Glass Report, “Salesforce Skills are a Platform to Better Jobs”,
        February
      </p>
    </tm-footnote>
  </div>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;

export const RoleMinimal = () => html`
  <style>
    #root {
      padding: 0;
    }
    tds-content-brick {
      margin: auto;
      max-width: 800px;
    }
  </style>
  <th-header></th-header>
  <tm-page class="theme--careers">
    <tm-hero-a
      id="overview"
      background="light"
      img-src="/images/tracer-hero-1.png"
      img-align="bottom"
      title="Become a Contact Tracer"
      subtitle="Learn the skills you need to effectively test, track, and help halt the spread of Covid-19"
      cta-label="Get Started"
      cta-href="https://trailhead.salesforce.com/users/strailhead/trailmixes/contact-tracer"
    ></tm-hero-a>

    <tm-section-a background="light">
      <tm-stats-a>
        <tm-stat-item
          title="$15-$25"
          description="average hourly pay (US data) *"
        ></tm-stat-item>
        <tm-stat-item
          title="200K"
          description="estimated tracers needed to safely reopen (US data) *"
        ></tm-stat-item>
        <tm-stat-item
          title="40+"
          description="US states plan to expand their workforce *"
        ></tm-stat-item>
      </tm-stats-a>
    </tm-section-a>
    <tm-section-a title="Sound Like You?" background="white">
      <tm-text-item-grid-a icon-type="left">
        <tm-grid-item
          icon-symbol="search"
          title="You have a detective mentality that digs deeper"
          description="Much of a tracers job is to work backwards. Using your investigation skills to use you will put togather a contact path."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="light_bulb"
          title="Creativity and problem-solving come easy"
          description="Using all the tools we provide, you have to work through complex user and technical scenarios to create the best plan forward."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="trail"
          title="Guiding and helping people is your heart"
          description="You love working and helping people. These are tough times and a tracer can bring encouragement and hope to communities."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a title="Skills You Need Learn" background="white" id="skills">
      <tm-skills-grid-a>
        <tm-skills-card-a
          title="General skills to develop"
          description="These are the most common general skills listed in job postings for Contract Tracer roles."
        >
          <tm-skill-item
            href="#"
            title="Communication (written/verbal)"
            value="46"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Stakeholder Engagement"
            value="32"
          ></tm-skill-item>
          <tm-skill-item href="#" title="Research" value="38"></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Project Management"
            value="43"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Customer Service"
            value="24"
          ></tm-skill-item>
        </tm-skills-card-a>
        <tm-skills-card-a
          title="Technical and specialized skills to master"
          description="You'll need these frequently requested skills to really excel. Good news is will teach you them for free!"
          theme="warm"
        >
          <tm-skill-item
            href="#"
            title="Customer Relationship Management"
            value="80"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Medical Ethics"
            value="65"
          ></tm-skill-item>
          <tm-skill-item href="#" title="Privacy" value="75"></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Salesforce Health Cloud"
            value="43"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Virology & Epdiemiology"
            value="42"
          ></tm-skill-item>
        </tm-skills-card-a>
      </tm-skills-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Learn the Skills You Need in Our 1 Week Course"
      description="We have created a trailmix designed to teach you everything you need to know. Here is an overview of what you will learn."
      background="light"
      cta-title="Get Started"
      cta-href="https://trailhead.salesforce.com/users/strailhead/trailmixes/contact-tracer"
    >
      <tds-content-brick
        .summary=${{
          color: "#4b2048",
          description:
            "Step by step learnings and instructions to skill up on becoming a contact tracer.",
          estimatedTime: 30,
          image: "/images/badge-trail-1.png",
          path:
            "https://trailhead.salesforce.com/users/strailhead/trailmixes/contact-tracer",
          points: 300,
          pretitle: "Trailmix",
          title: "Become a Contact Tracer",
          type: "trailmix"
        }}
      ></tds-content-brick>
    </tm-section-a>

    <tm-section-a title="Benefits of Trailhead" background="light" id="program">
      <tm-text-item-grid-a icon-type="left">
        <tm-grid-item
          icon-symbol="desktop"
          title="100% online"
          description="Start instantly and learn at your own schedule."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="like"
          title="Free"
          description="We will teach you everything free of charge."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="food_and_drink"
          title="Learn at Your Pace"
          description="Follow our path based what works for your schedule"
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="emoji"
          title="Made for Beginners"
          description="This course is designed for those with zero experience."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a
      title="A lot of Jobs Need to be Quickly Filled"
      background="white"
      cta-title="Find a Job Near Me"
      cta-href="https://www.indeed.com/q-Contact-Tracers-jobs.html"
      cta-target="_blank"
      id="jobs"
    >
      <tm-jobs-a>
        <tm-job-item
          company="Insight Global"
          img-src="/images/covid-job-8.jpeg"
          location="Remote"
          position="Contact Tracers"
          salary="$22 - $23 an hour"
          time="Posted 2 hours ago"
          type="Contract"
        ></tm-job-item>
        <tm-job-item
          company="University of Texas at El Paso"
          img-src="/images/covid-job-6.jpeg"
          location="Remote"
          position="Contact Tracing Epidemiology Lead"
          salary="$37,440 a year"
          time="Posted 1 day ago"
          type="Full-time"
        ></tm-job-item>
        <tm-job-item
          company="State of Nebraska"
          img-src="/images/covid-job-4.jpeg"
          location="Nebraska"
          position="Disease Investigator"
          salary="$21.18 an hour"
          time="Posted 3 days ago"
          type="Full-time"
        ></tm-job-item>
        <tm-job-item
          company="BizTek People, Inc"
          img-src="/images/covid-job-5.jpeg"
          location="Remote"
          position="Contact Tracers"
          salary="$18–$21 an hour"
          time="Posted 1 day ago"
          type="Full-time, Part-time"
        ></tm-job-item>
      </tm-jobs-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
      cta-label="Get Started"
      img-src="/images/trailblazers.png"
      subtitle="Ready to kickstart your new career? Let’s do it! Dive in and discover how we’ve helped 1M+ learners like you take their career to the next level."
      title="Skill Up today for free"
    ></tm-end-cap-a>

    <tm-footnote>
      <h3>Sources</h3>
      <p>
        * The New York Times,
        <a
          href="https://www.nytimes.com/2020/05/18/health/coronavirus-contact-tracing-jobs.html"
          >So You Want to Be a Contact Tracer?</a
        >, May
        <br />
        * Wired,
        <a
          href="https://www.wired.com/story/i-enrolled-in-a-coronavirus-contact-tracing-academy/"
          >I Enrolled in a Coronavirus Contact Tracing Academy</a
        >, May
        <br />
        * NPR,
        <a
          href="https://www.npr.org/sections/health-shots/2020/04/28/846736937/we-asked-all-50-states-about-their-contact-tracing-capacity-heres-what-we-learne"
          >States Nearly Doubled Plans For Contact Tracers Since NPR Surveyed
          Them 10 Days Ago</a
        >, May
      </p>
    </tm-footnote>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;

export const RoleFull = () => html`
  <style>
    #root {
      padding: 0;
    }
    .progress-item-grid {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      max-width: 1280px;
      list-style: none;
      padding-left: var(--tds-spacing-0);
    }
    tds-content-brick {
      margin: auto;
      max-width: 800px;
    }
    .syllabus-image {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 1280px;
    }
  </style>
  <th-header></th-header>
  <tm-page class="theme--careers">
    <tm-page-navigation-a>
      <tm-page-navigation-item
        active
        href="#overview"
        title="Overview"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#skills"
        title="Skills"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#program"
        title="Program"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#jobs"
        title="Jobs"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="#faq"
        title="FAQ"
      ></tm-page-navigation-item>
    </tm-page-navigation-a>

    <tm-hero-a
      id="overview"
      background="light"
      img-src="/images/tracer-hero-1.png"
      img-align="bottom"
      title="Become a Contact Tracer"
      subtitle="Learn the skills you need to effectively test, track, and help halt the spread of Covid-19"
      cta-label="Sign Up for Free"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
    ></tm-hero-a>

    <tm-section-a background="light">
      <tm-stats-a>
        <tm-stat-item
          title="$15-$35"
          description="average hourly pay (US data)"
        ></tm-stat-item>
        <tm-stat-item
          title="200K"
          description="estimated tracers needed to safely reopen (US data)"
        ></tm-stat-item>
        <tm-stat-item
          title="45 States"
          description="are actively looking to hire"
        ></tm-stat-item>
        <tm-stat-item
          title="75%"
          description="can work from home"
        ></tm-stat-item>
      </tm-stats-a>
    </tm-section-a>

    <tm-section-a title="Sound Like You?" background="white">
      <tm-text-item-grid-a icon-type="left">
        <tm-grid-item
          icon-symbol="search"
          title="You have a detective mentality that digs deeper"
          description="Much of a tracers job is to work backwards. Using your investigation skills to use you will put togather a contact path."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="light_bulb"
          title="Creativity and problem-solving come easy"
          description="Using all the tools we provide, you have to work through complex user and technical scenarios to create the best plan forward."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="trail"
          title="Guiding and helping people is your heart"
          description="You love working and helping people. These are tough times and a tracer can bring encouragement and hope to communities."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Skills You Need Learn"
      background="white"
      id="skills"
      cta-title="Start Skilling Up"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
    >
      <tm-skills-grid-a>
        <tm-skills-card-a
          title="General skills to develop"
          description="These are the most common general skills listed in job postings for Contract Tracer roles."
        >
          <tm-skill-item
            href="#"
            title="Communication (written/verbal)"
            value="46"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Stakeholder Engagement"
            value="32"
          ></tm-skill-item>
          <tm-skill-item href="#" title="Research" value="38"></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Project Management"
            value="43"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Customer Service"
            value="24"
          ></tm-skill-item>
        </tm-skills-card-a>
        <tm-skills-card-a
          title="Technical and specialized skills to master"
          description="You'll need these frequently requested skills to really excel. Good news is will teach you them for free!"
          theme="warm"
        >
          <tm-skill-item
            href="#"
            title="Data Management"
            value="80"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Medical Ethics"
            value="65"
          ></tm-skill-item>
          <tm-skill-item href="#" title="Privacy" value="75"></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Salesforce Health Cloud"
            value="43"
          ></tm-skill-item>
          <tm-skill-item
            href="#"
            title="Virology & Epdiemiology"
            value="42"
          ></tm-skill-item>
        </tm-skills-card-a>
      </tm-skills-grid-a>
    </tm-section-a>

    <tm-section-a title="Program Overview" background="light" id="program">
      <tm-text-item-grid-a icon-type="left">
        <tm-grid-item
          icon-symbol="identity"
          title="Shareable Certificate"
          description="Earn a Certificate upon completion"
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="desktop"
          title="100% online"
          description="Start instantly and learn at your own schedule."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="like"
          title="Free"
          description="We will teach you everything free of charge."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="food_and_drink"
          title="Learn at Your Pace"
          description="Set deadlines in accordance to your schedule."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="emoji"
          title="Made for Beginners"
          description="This course is designed for those with zero experience."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="weeklyview"
          title="Complete In 1 Week"
          description="There is a total of about 18 hours of course work."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="world"
          title="Multiple languages"
          description="Content is available in 8 languages."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="multi_select_checkbox"
          title="Self assessments"
          description="Take interative quizes to help test your knowledge"
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Overview of 1 Week Course"
      description="We have created a trailmix designed to teach you everything you need to know. Here is an overview of what you will learn."
      background="light"
      cta-title="Get Started"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
    >
      <tds-content-brick
        .summary=${{
          color: "#4b2048",
          description:
            "Step by step learnings and instructions to skill up on becoming a contact tracer.",
          estimatedTime: 30,
          image: "/images/badge-trail-1.png",
          path: "/",
          points: 300,
          pretitle: "Trailmix",
          title: "Become a Contact Tracer",
          type: "trailmix"
        }}
      ></tds-content-brick>
    </tm-section-a>

    <tm-section-a
      title="Master the Salesforce Health Cloud"
      background="light"
      description="By the end of this course you will be proficient in the Salesforce Health Cloud, used by over 1,000 health providers and the tracking standard in over 23 states."
      cta-title="Learn More About Health Cloud"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
    >
      <div><img class="syllabus-image" src="/images/covid-cert.svg" /></div>
    </tm-section-a>

    <tm-section-a>
      <tm-feature-grid-a>
        <tm-grid-item
          title="Instruction Currated by Emily Gurley, PhD, MPH"
          description="Dr. Gurley has worked in public health research in Bangladesh since 2003, and she spent 12 years at the icddr,b (International Center for Diarrheal Diseases Research, Bangladesh) where she led the Surveillance and Outbreak Investigation Unit, and served as Director of the Program on Emerging Infections. She worked closely with the US CDC and the Government of Bangladesh to establish national surveillance for meningo-encephalitis, respiratory infections, acute gastroenteritis, acute hepatitis, and hospital acquired infections, with a focus on developing junior scientists."
          img-src="/images/dr.png"
          cta-primary-href=""
          cta-primary-title="Read Bio"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a
      title="The Job Market is Ready"
      background="white"
      cta-title="Checkout More Jobs"
      cta-href="/posts"
      cta-target="_blank"
      id="jobs"
    >
      <tm-jobs-a>
        <tm-job-item
          company="DC Government"
          cta-href="/"
          cta-title="Learn More"
          featured="Featured"
          img-src="/images/covid-job-1.png"
          location="Washington D.C"
          position="Contact Tracer"
          salary="$18–$21 an hour"
          time="Posted 2 hours ago"
          type="Contractor"
        ></tm-job-item>
        <tm-job-item
          company="Tidewater Inc."
          cta-href="/"
          cta-title="Learn More"
          img-src="/images/covid-job-2.png"
          location="Columbia, MD"
          position="Contact Tracer Investigator"
          salary="$20 an hour"
          time="Posted 4 hours ago"
          type="Part-time"
        ></tm-job-item>
        <tm-job-item
          company="The Midtown Group"
          cta-href="/"
          cta-title="Learn More"
          img-src="/images/job-3.png"
          location="Silver Spring, MD"
          position="Covid-19 Contact Tracer (Spanish Speaking)"
          salary="$25 an hour"
          time="Posted 8 hours ago"
          type="Full-time"
        ></tm-job-item>
        <tm-job-item
          company="DTG"
          cta-href="/"
          cta-title="Learn More"
          img-src="/images/covid-job-3.png"
          location="Silver Spring, MD"
          position="Contact Tracer (Epidemiology)"
          salary="$18–$21 an hour"
          time="Posted 2 hours ago"
          type="Contractor"
        ></tm-job-item>
      </tm-jobs-a>

      <div>
        <img
          class="syllabus-image"
          style="margin-top: 32px;"
          src="/images/avg-salary-2.svg"
        />
      </div>
    </tm-section-a>

    <tm-section-a
      title="Once Completed, Discover More Career Paths"
      description="After completing this course you will be skilled up and ready to unlock more career opportunities"
      background="light"
    >
      <div><img class="syllabus-image" src="/images/paths.svg" /></div>
    </tm-section-a>

    <tm-section-a title="Trailhead Overview" background="light" id="program">
      <div><img class="syllabus-image" src="/images/content-tabs.svg" /></div>
    </tm-section-a>

    <tm-section-a title="FAQ" background="light">
      <tm-faq-a>
        <tm-faq-item
          title="Why become a contact tracer on Trailhead?"
          description="Trailhead can not only teach the essential skills needed to become a contact tracer, but is exlusivley in the position to teach you all the skills needed to use the Salesforce platform, used by over 100k companies around the world."
        ></tm-faq-item>
        <tm-faq-item
          title="Why become a contact tracer on Trailhead?"
          description="Trailhead can not only teach the essential skills needed to become a contact tracer, but is exlusivley in the position to teach you all the skills needed to use the Salesforce platform, used by over 100k companies around the world."
        ></tm-faq-item>
        <tm-faq-item
          title="Why become a contact tracer on Trailhead?"
          description="Trailhead can not only teach the essential skills needed to become a contact tracer, but is exlusivley in the position to teach you all the skills needed to use the Salesforce platform, used by over 100k companies around the world."
        ></tm-faq-item>
      </tm-faq-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="https://trailhead.salesforce.com/auth/tbidsignup"
      cta-label="Get Started"
      img-src="/images/trailblazers.png"
      subtitle="Ready to kickstart your new career? Let’s do it! Dive in and discover how we’ve helped 1M+ learners like you take their career to the next level."
      title="Skill Up today for free"
    ></tm-end-cap-a>

    <tm-footnote>
      <h3>Sources</h3>
      <p>
        IDC White Paper sponsored by Salesforce, “The Salesforce Economy
        Forecast: 3.3 Million New Jobs, $859 Billion New Business Revenues to Be
        Created from 2016 to 2022,” October 2017
      </p>
      <p>
        Burning Glass Report, “Salesforce Skills are a Platform to Better Jobs”,
        February
      </p>
    </tm-footnote>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
