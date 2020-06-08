import { html } from "lit-html";

export default {
  title: "tm/pages/Learn More",
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
  <div class="theme--admin">
    <tm-hero-a
      background="white"
      img-src="/images/learn-more-hero.png"
      img-align="bottom"
      title="LEARN MOAR"
      subtitle="Discover what’s new for Admins and Developers in the Summer '20 Release."
    ></tm-hero-a>

    <tm-section-a
      title="Pick Your Trailmix (Or Do Both)"
      description="Follow the Admin or Developer Release trailmix (or both) to watch and read about the Summer ’20 Release. Complete the trailmix(es) to get a community badge and unlock a $10 donation to FIRST® (up to $10,000USD by July 31, 2020)."
      background="light"
    >
      <tm-card-grid-a img-aspect="40%" img-type="full">
        <tm-grid-item
          img-src="/images/learn-more-badge-1.png"
          title="For Admins"
          cta-href="https://trailhead.salesforce.com/en/trailmixes"
          cta-title="Get Started"
        ></tm-grid-item>
        <tm-grid-item
          img-src="/images/learn-more-badge-2.png"
          title="For Devs"
          cta-href="https://trailhead.salesforce.com/en/trailmixes"
          cta-title="Get Started"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a background="light">
      <tm-promo-a
        title="Learn & Give Back"
        description="Complete the trailmix(es) to get a community badge and unlock a $10 donation to FIRST® (up to $10,000USD by July 31, 2020)."
        img-src="https://www.firstinspires.org/sites/default/files/uploads/hero_headers/Header-image-fallback-gradient-high-res.jpg"
        cta-href="https://www.firstinspires.org/"
        cta-title="Learn More"
        cta-target="_blank"
        shadow-color-start="#3d7d3d"
        shadow-color-end="#9e7d1f"
      ></tm-promo-a>
    </tm-section-a>

    <tm-section-a title="Trailmix Release Archive" background="light">
      <tm-card-grid-a img-type="left">
        <tm-grid-item
          cta-href="https://trailhead.salesforce.com/en/trailmixes"
          cta-title="Get Started"
          cta-target="_blank"
          img-src="/images/learn-more-badge-3.png"
          title="Learn MOAR Winter '20 for Admins"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="https://trailhead.salesforce.com/en/trailmixes"
          cta-title="Get Started"
          cta-target="_blank"
          img-src="/images/learn-more-badge-4.png"
          title="Learn MOAR Winter '20 for Devs"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="https://trailhead.salesforce.com/en/trailmixes"
          cta-title="Get Started"
          cta-target="_blank"
          img-src="/images/learn-more-badge-5.png"
          title="Learn MOAR Summer '19 for Admins"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="https://trailhead.salesforce.com/en/trailmixes"
          cta-title="Get Started"
          cta-target="_blank"
          img-src="/images/learn-more-badge-6.png"
          title="Learn MOAR Summer '19 for Devs"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="https://ctt.ac/YO1U1"
      cta-label="Tweet"
      cta-target="_blank"
      img-src="/images/admin-goat.png"
      subtitle="Share what you love about the Summer '20 Release with hashtag #LearnMOAR."
      title="#LearnMOAR and Share"
    ></tm-end-cap-a>
  </div>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
