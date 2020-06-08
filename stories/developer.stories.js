import { html } from "lit-html";

export default {
  title: "tm/pages/Developer",
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

  <tm-page class="theme--developer">
    <tm-hero-a
      background="dark"
      img-src="/images/hero-a-developer.png"
      img-align="bottom"
      subtitle="You love cracking the code on tricky problems and think the best answer is the simplest and most elegant."
      title="Code on the most powerful platform!"
      cta-href="/"
      cta-label="Get Started"
    ></tm-hero-a>

    <tm-section-a title="Latest Developer News" background="light">
      <tm-card-grid-b>
        <tm-grid-item
          cta-href="/"
          description="Outside of my Salesforce career, I’ve spent many years performing improvisational theater, and what I’ve learned over time."
          img-src="/images/card-b-content-1.png"
          title="5 Principles of Improv Theater for Architets"
          pretitle="Blog by Marc Baizman"
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
          pretitle="Blog by Sharon Klardie"
          cta-href="/"
          cta-title="Read More"
        ></tm-grid-item>
      </tm-card-grid-b>
    </tm-section-a>

    <tm-section-a>
      <tm-promo-a
        title="Get Signed Up for Dreamforce Sessions"
        description="Sessions are filling up fast! This is basically an ad."
        img-src="/images/promo.png"
        cta-href="/"
        cta-title="Sign Up"
        shadow-color-start="#01186A"
        shadow-color-end="#0004A5"
      ></tm-promo-a>
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
          cta-title="Details"
          pretitle="Webinar"
          time="09:35 AM EST"
          title="Keep Systems in Sync with Change Data Capture"
        ></tm-event-item>
        <tm-event-item
          date="Thursday, January 30, 2020"
          cta-href="/"
          cta-title="Details"
          location="Park City, UT"
          pretitle="In Person"
          time="11:30 AM EST"
          title="How to Automate Visual Workflows with Points-and-Clicks"
        ></tm-event-item>
        <tm-event-item
          date="Thursday, February 4, 2020"
          cta-href="/"
          cta-title="Details"
          pretitle="Webinar"
          time="09:35 AM EST"
          title="Get Ready for the Salesforce Mobile App"
        ></tm-event-item>
        <tm-event-item
          date="Thursday, November 1, 2020"
          cta-href="/"
          cta-title="Details"
          location="San Francisco, CA"
          pretitle="In Person"
          time="09:35 AM EST"
          title="#Journey2Salesforce"
        ></tm-event-item>
      </tm-events-a>
    </tm-section-a>

    <tm-section-a
      background="dark"
      cta-target="_blank"
      description="Tap into an incredible source of inspiration to be your best. Dive into these stories of Trailblazers from all walks of life."
      title="Meet Developer Trailblazers"
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

    <tm-section-a
      title="Latest Post From the Developer Blog"
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
          title="8 Retailers Reimagining the Role of the Store: NYC Edition"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Continue Reading"
          description="When you’re in the business of selling an ultra-luxury product, customers typically make an effort to seek you out, not the other way around. You’re not appealing to the masses, so the conventional rules of marketing don’t apply. "
          img-src="/images/card-c-blog-2.png"
          pretitle="Blog by Jessica Bergman"
          title="What Luxury Brands Can Learn From Lamborghini About Customer Engagement"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Continue Reading"
          description="Privacy, trust, and safety. It’s a hot button trio for tech companies — and for good reason. Every day, our data is spread across networks, devices, apps, services, and, of course, the cloud."
          img-src="/images/card-c-blog-3.png"
          pretitle="Blog by Mike Rivo"
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
          title="The path to Developer Certification"
          cta-href="/"
          cta-title="Start Path to Certification"
        ></tm-grid-item>
        <tm-grid-item
          description="Figuring out if this is the correct career path for you? Let's start with the big picture."
          img-src="/images/card-d-content-2.png"
          pretitle="Getting Started"
          title="What is a Developer?"
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
      subtitle="This is for an Developer who is new to the Salesforce Platform and wants to learn about the breadth of it."
      title="Begin the Developer Journey Trailmix"
    ></tm-end-cap-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
