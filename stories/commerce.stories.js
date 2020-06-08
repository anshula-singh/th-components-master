import { html } from "lit-html";

export default {
  title: "tm/pages/Commerce",
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

  <tm-page class="theme--commerce">
    <tm-hero-a
      background="dark"
      img-src="/images/hero-a-commerce.png"
      img-align="bottom"
      subtitle="Connect to shoppers anytime, anywhere with our commerce platform"
      title="Build Amazing Experiences with Salesforce Commerce"
      cta-href="/"
      cta-label="Get Started"
    ></tm-hero-a>

    <tm-section-a
      background="light"
      description="Set up, create, and customize a sample app using APIs. We give you the tools to build and embed commerce experiences across every customer touchpoint."
      title="Build Apps with APIs"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Set up, create, and customize a sample app"
          img-src="/images/trailmixes.png"
          title="Getting Started"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          description="Follow guided learning paths on fundamental concepts at the Salesforce Trailhead site"
          img-src="/images/modules.png"
          title="Learn"
          cta-href="/"
          cta-title="Begin Trail"
        ></tm-grid-item>
        <tm-grid-item
          description="Review our API usage and documentation"
          img-src="/images/docs.png"
          title="API Reference"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
        <tm-grid-item
          description="Customize your apps using developer tools, SDKs, and our sample apps"
          img-src="/images/projects.png"
          title="Tools & Sample Apps"
          cta-href="/"
          cta-title="Explore"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a>
      <tm-feature-grid-a>
        <tm-grid-item
          cta-primary-href="/trust"
          cta-primary-title="Get Started"
          description="Build state-of-the-art shopping experiences that provide a mobile-optimized user interface and an efficient, modern site architecture."
          img-src="/images/feature-grid-a-commerce-1.png"
          title="Build with our Reference Storefront"
        ></tm-grid-item>
        <tm-grid-item
          cta-primary-href="/appexchange"
          cta-primary-title="Explore Solution Kits"
          cta-secondary-href="/trailhead"
          cta-secondary-title="Try Mulesoft Accelerator"
          description="Try out our prebuilt solutions for common use cases using templates, commerce-driven APIs, and third-party integrations."
          img-src="/images/feature-grid-a-commerce-2.png"
          title="Solve Complex Use Cases"
        ></tm-grid-item>
        <tm-grid-item
          cta-primary-href="/appexchange"
          cta-primary-title="View Forums"
          cta-secondary-href="/trailhead"
          cta-secondary-title="Checkout Our Blog"
          description="Connect with the online community to learn, engage, ask questions, and get answers."
          img-src="/images/feature-grid-a-commerce-3.png"
          title="Connect with the Community
"
        ></tm-grid-item>
      </tm-feature-grid-a>
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
