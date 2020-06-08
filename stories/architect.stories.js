import { html } from "lit-html";

import { Base as ContentStory } from "../src/elements/tm/content/content.stories";

export default {
  title: "tm/pages/Architect",
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

  <tm-page class="theme--architect">
    <tm-page-navigation-a>
      <tm-page-navigation-item
        active
        href="/"
        title="Salesforce Architect"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Design"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Deliver"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Govern"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Roadmap"
      ></tm-page-navigation-item>
    </tm-page-navigation-a>

    <tm-hero-a
      background="white"
      img-src="/images/hero-a-architect.png"
      img-align="bottom"
      subtitle="You’re both a big picture thinker and an in-depth problem solver."
      title="Hello
  Architect Magicians"
    ></tm-hero-a>

    <tm-section-a
      background="light"
      description="Build apps faster, integrate easier, make apps smarter"
      title="Dive Into the Architect Process"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img-src="/images/card-a-process-1.svg"
          title="Design"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img-src="/images/card-a-process-2.svg"
          title="Deliver"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img-src="/images/card-a-process-3.svg"
          title="Grow"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          img-src="/images/card-a-process-4.svg"
          title="Roadmap"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a title="Explore the Latest for Architects" background="light">
      <tm-card-grid-b>
        <tm-grid-item
          cta-href="/"
          description="Outside of my Salesforce career, I’ve spent many years performing improvisational theater, and what I’ve learned over time."
          img-src="/images/card-b-content-1.png"
          title="5 Principles of Improv Theater for Architets"
          pretitle="Blog by"
          pretitle-href="/user/marcbaizman"
          pretitle-href-text="Marc Baizman"
          cta-href="/"
          cta-title="Read More"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          description="Enable the synchronous flow of data between mobile and web applications, Salesforce, and other data platforms."
          img-src="/images/card-b-content-6.png"
          title="Combining Mobile, Web, Salesforce, and Back Office Data"
          pretitle="Reference Architecture"
          cta-href="/"
          cta-title="Take a Look"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          img-src="/images/card-b-content-3.png"
          title="Add Sound Effects to Your Salesforce Org"
          pretitle="Project"
          cta-href="/"
          cta-title="Build"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          img-src="/images/card-b-content-4.png"
          title="Lightning Experience Rollout Specialist"
          pretitle="Superbadge"
          cta-href="/"
          cta-title="Start Challenge!"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          description="Lightning Flow makes it possible to build seamless experiences for your customers and employees with as little code as possible. By applying the power of low-code, drag-and-drop functionality to customer engagement, you can automate the complex logic of your business process in Salesforce."
          img-src="/images/card-b-content-5.png"
          title="10 Game-Changing Flow Solutions"
          pretitle="Blog by"
          pretitle-href="/user/sharon"
          pretitle-href-text="Sharon Klardie"
          cta-href="/"
          cta-title="Read More"
        ></tm-grid-item>
      </tm-card-grid-b>
    </tm-section-a>

    <tm-section-a
      title="Events Around the Corner!"
      description="We have schedule the best in person and online meetings to help learn
and grow as an Architect"
      cta-title="View All Events"
      cta-href="/events"
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

    <tm-section-a
      background="dark"
      cta-target="_blank"
      description="Tap into an incredible source of inspiration to be your best. Dive into these stories of Trailblazers from all walks of life."
      title="Meet Architect Trailblazers"
    >
      <tm-trailblazers-a>
        <tm-trailblazer-item
          cta-href="/"
          cta-title="My Story"
          img-src="/images/trailblazer-1.png"
          location="Mexico City, Mexico"
          name="Luis Roberto Acosta Corona"
          profile-href="https://trailblazer.me/luis"
          profile-title="trailblazer.me/luis"
          rank="Ranger"
          role="Solutions Architect, Salesforce"
          since="Trailblazer Since 2018"
        ></tm-trailblazer-item>
        <tm-trailblazer-item
          cta-href="/"
          cta-title="My Story"
          img-src="/images/trailblazer-2.png"
          location="Austin, TX, United States"
          name="Charly Prinsloo"
          profile-href="https://trailblazer.me/charly"
          profile-title="trailblazer.me/charly"
          rank="Ranger"
          role="Salesforce Practice Lead, Sense Corp"
          since="Trailblazer Since 2016"
        ></tm-trailblazer-item>
        <tm-trailblazer-item
          cta-href="/"
          cta-title="My Story"
          img-src="/images/trailblazer-3.png"
          location="Sacremento, California"
          name="Peter Ingemann"
          profile-href="https://trailblazer.me/peteringemann"
          profile-title="trailblazer.me/peteringemann"
          rank="Ranger"
          role="Architect, US Bank"
          since="Trailblazer Since 2018"
        ></tm-trailblazer-item>
      </tm-trailblazers-a>
    </tm-section-a>

    <tm-section-a>
      <tm-promo-a
        title="Get Signed Up for Dreamforce Sessions"
        description="Sessions are filling up fast! This is basically an ad."
        img-src="/images/promo.png"
        cta-href="/"
        cta-title="Register"
        shadow-color-start="#78C8EB"
        shadow-color-end="#F0AFAA"
      ></tm-promo-a>
    </tm-section-a>

    <tm-section-a
      title="Latest Post From the Architect Blog"
      cta-title="View All Posts"
      cta-href="/posts"
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

    <tm-section-a background="light" title="Just Getting Started?">
      <tm-card-grid-d>
        <tm-grid-item
          description="Learn more about the three tiers of certification that recognize specialized knowledge and skills of the Salesforce platform."
          img-src="/images/card-d-content-1.png"
          pretitle="Certification"
          title="The path to Salesforce Technical Architect"
          cta-href="/"
          cta-title="Start Path to Certification"
        ></tm-grid-item>
        <tm-grid-item
          description="Figuring out if this is the correct career path for you? Let's start with the big picture."
          img-src="/images/card-d-content-2.png"
          pretitle="Getting Started"
          title="What is an Architect?"
          cta-href="/"
          cta-title="Learn About Career Path"
        ></tm-grid-item>
      </tm-card-grid-d>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="/"
      cta-label="Get Started"
      img-src="/images/endcap-2.png"
      subtitle="This is for an Architect who is new to the Salesforce Platform and wants to learn about the breadth of it."
      title="Begin the Architect Journey Trailmix"
    ></tm-end-cap-a>
  </tm-page>

  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;

export const Secondary = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-header></th-header>

  <tm-page class="theme--architect">
    <tm-page-navigation-a>
      <tm-page-navigation-item
        href="/"
        title="Salesforce Architect"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        active
        href="/"
        title="Design"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Deliver"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Govern"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Roadmap"
      ></tm-page-navigation-item>
    </tm-page-navigation-a>

    <tm-hero-b
      background="dark"
      img-src="/images/hero-b-process-1.svg"
      subtitle="Create amazing experiences built on the Salesforce Platform"
      title="Design"
    ></tm-hero-b>

    <tm-section-a
      title="Diagrams"
      description="Visually understand how your favorite objects work"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="Sales Objects"
          description="Accounts, contacts, opportunities, leads, campaigns, and other related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Task and Event Objects"
          description="Tasks and events and their related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Support Objects"
          description="Cases and solutions and their related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Salesforce Knowledge Objects"
          description="Accounts, contacts, opportunities, leads, campaigns, and other related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Document, Note, and Attachment Objects"
          description="Documents, notes, and attachments and their related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="User, Sharing, and Permission Objects"
          description="Users, profiles, and roles"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Profile and Permission Objects"
          description="Users, profiles, permission sets, and related permission objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Record Type Objects"
          description="Record types and business processes and their related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Product and Schedule Objects"
          description="Opportunities, products, and schedules"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Sharing and Team Selling Objects"
          description="Account teams, opportunity teams, and sharing objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Customizable Forecasting Objects"
          description="Forecasts and related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Forecasts Objects"
          description="Objects for Collaborative Forecasts."
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Territory Management 2.0 Objects"
          description="Territories and related objects associated with Territory Management 2.0"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Territory Management"
          description="Territories and related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Process Objects"
          description="Approval processes and related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Content Objects"
          description="Content and libraries and their related objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Chatter Feed Objects"
          description="Objects related to feeds"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          title="Consent Management Objects"
          description="Consent, authorization form, and communication subscription objects"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Reference Architectures"
      description="Detailed & visual overviews of how it works on Salesforce"
      background="light"
      cta-target="_blank"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Shift compute-intensive tasks to Heroku, which handles these tasks effortlessly and responds much faster."
          img-src="/images/card-b-reference-1.png"
          pretitle="Heroku Reference Architecture"
          title="Offload Heavy Compute from Salesforce"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Create personalized customer experiences with Salesforce data and open-source programming languages."
          img-src="/images/card-b-reference-2.png"
          pretitle="Sales Reference Architecture"
          title="Scalable Web Apps with Salesforce Data"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Develop apps faster with powerful data integration tools and managed services, security, and infrastructure."
          img-src="/images/card-b-reference-3.png"
          pretitle="Commerce Reference Architecture"
          title="Building Modern Web Apps on Heroku"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Enable the synchronous flow of data between mobile and web applications, Salesforce, and other data platforms."
          img-src="/images/card-b-reference-4.png"
          pretitle="Sales Reference Architecture"
          title="Combining Mobile, Web, Salesforce, and Back Office Data"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Employ Mulesoft and Salesforce Connect to unlock enterprise data and connect business processes."
          img-src="/images/card-b-reference-5.png"
          pretitle="Heroku Reference Architecture"
          title="Data Integration for Faster App Dev"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Explore"
          description="Shift compute-intensive tasks to Heroku, which handles these tasks effortlessly and responds much faster."
          img-src="/images/card-b-reference-6.png"
          pretitle="Sales Reference Architecture"
          title="Offload Heavy Compute from Salesforce -"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a title="Patterns & Case Studies" cta-target="_blank">
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Read More"
          description="In the accelerated world of business growth, what started as a whisper is now a scream for a disruptive approach to Enterprise "
          img-src="/images/card-b-case-1.png"
          pretitle="Case Study"
          title="Building Modern Architectures Through Fabrics"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Read More"
          description="Create personalized customer experiences with Salesforce data and open-source programming languages."
          img-src="/images/card-b-case-2.png"
          pretitle="Pattern"
          title="Scalable Web Apps with Salesforce Data"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Read More"
          description="Develop apps faster with powerful data integration tools and managed services, security, and infrastructure."
          img-src="/images/card-b-case-3.png"
          pretitle="Case Study"
          title="Building Modern Web Apps on Heroku"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a
      background="light"
      description="Learn how to build with the best products"
      title="Products"
      cta-title="View All Products"
      cta-href="/posts"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Give your sales teams the power to close deals like never before with Sales Cloud, the world’s #1 CRM solution."
          img-src="/images/product-icon-sales.png"
          title="Sales"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Enhance your customer support — from call-center software to self-service portals — with Service Cloud."
          img-src="/images/product-icon-service.png"
          title="Service"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Deliver personalized customer journeys powered by the intelligent marketing platform."
          img-src="/images/product-icon-marketing.png"
          title="Marketing"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Build better customer experiences and crush conversion rates with Commerce Cloud, the world’s leading ecommerce platform."
          img-src="/images/product-icon-commerce.png"
          title="Commerce"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Build custom apps connected to Salesforce, and get your apps to market faster, with Heroku cloud services and developer experience."
          img-src="/images/product-icon-community.png"
          title="Community"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Extend your sales and service capabilities with the world’s #1 CRM platform."
          img-src="/images/product-icon-platform.png"
          title="Platform and Ecosystem"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Connect any app, data, or device, whether in the cloud or on-premises, in one place."
          img-src="/images/product-icon-industries.png"
          title="Industries"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Make more intelligent, data-driven decisions that guide your business forward with Einstein Analytics."
          img-src="/images/product-icon-collaboration.png"
          title="Collaboration"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a>
      <tm-feature-grid-a>
        <tm-grid-item
          cta-primary-href="/trust"
          cta-primary-title="Check Out Trust"
          description="Salesforce is committed to achieving and maintaining the trust of our customers. Integral to this mission is providing a robust compliance program that carefully considers data protection matters across our suite of services, including data submitted by customers to our services ('Customer Data')"
          img-src="/images/feature-grid-a-content-1.png"
          title="Trust & Compliance"
        ></tm-grid-item>
        <tm-grid-item
          cta-primary-href="/appexchange"
          cta-primary-title="Go To AppExchange"
          cta-secondary-href="/trailhead"
          cta-secondary-title="Start a Trail on Trailhead"
          description="It’s simple, actually. AppExchange is the leading enterprise cloud marketplace. It's where you’ll find over 5,000 solutions to help extend Salesforce into any department or industry. More than 80,000 customer reviews. Over 1,000 consultants to bring deep expertise to drive business transformations. And with 6.5 million installs already, you’ll be in good company."
          img-src="/images/feature-grid-a-content-2.png"
          title="AppExchange"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      background="light"
      cta-href="/"
      cta-label="Get Started"
      img-src="/images/endcap-2.png"
      subtitle="This is for an Architect who is new to the Salesforce Platform and wants to learn about the breadth of it."
      title="Begin the Architect Journey Trailmix"
    ></tm-end-cap-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;

export const Content = () => html`
  <style>
    #root {
      padding: 0;
    }
    .container {
      max-width: 1400px;
      box-sizing: border-box;
      padding: 0 1rem;
      margin: 0 auto;
    }
  </style>
  <th-header></th-header>

  <tm-page class="theme--architect">
    <tm-page-navigation-a>
      <tm-page-navigation-item
        href="/"
        title="Salesforce Architect"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Design"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Deliver"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Govern"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Roadmap"
      ></tm-page-navigation-item>
    </tm-page-navigation-a>

    <div class="container">
      <tm-page-header-a
        pretitle="Reference Architecture"
        title="Content Lifecycle Management and Modeling"
      >
        <tm-cta title="Download" variant="brand"></tm-cta>
      </tm-page-header-a>
      ${ContentStory()}
    </div>

    <tm-section-a background="light" title="Related Content">
      <tm-card-grid-d>
        <tm-grid-item
          description="Learn more about the three tiers of certification that recognize specialized knowledge and skills of the Salesforce platform."
          img-src="/images/card-d-content-1.png"
          pretitle="Certification"
          title="The path to Salesforce Technical Architect"
          cta-href="/"
          cta-title="Start Path to Certification"
        ></tm-grid-item>
        <tm-grid-item
          description="Figuring out if this is the correct career path for you? Let's start with the big picture."
          img-src="/images/card-d-content-2.png"
          pretitle="Getting Started"
          title="What is an Architect?"
          cta-href="/"
          cta-title="Learn About Career Path"
        ></tm-grid-item>
      </tm-card-grid-d>
    </tm-section-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
