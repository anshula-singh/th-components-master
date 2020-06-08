import { html } from "lit-html";

export default {
  title: "tm/pages/Be An Innovator",
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
  <tm-page class="theme--admin">
    <tm-hero-a
      background="light"
      img-src="/images/admin-hero.png"
      img-align="bottom"
      title="Be an Innovator"
      subtitle="Use Dynamic Forms and Actions to build flexible, contextual experiences your users will love."
      cta-label="Watch Videos"
      cta-href="#videos"
    ></tm-hero-a>

    <tm-section-a>
      <tm-feature-grid-a>
        <tm-grid-item
          description="Get ready to deliver innovation with low code by re-imagining your Lightning pages. We'll go step-by-step to build a smart, dynamic record page. Learn from Salesforce experts, get resources, and earn Trailhead badges."
          img-src="/images/bai-feature.png"
          title="Build and Learn!"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a background="white" title="What You Need To Do Each Week">
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Watch the Be An Innovator with Dynamic Pages videos, released at 10 a.m. PT, to learn each critical step in the process and follow along."
          img-src="/images/bai-youtube.png"
          title="Learn"
          cta-href="/"
          cta-title="Watch Videos"
        ></tm-grid-item>
        <tm-grid-item
          description="Each video will let you know what to share on Twitter (with #BeAnInnovator and #Sweepstakes) so you can enter for a chance to win 1 of 18 prize packs consisting of a plush blanket and ceramic tumbler. See Official Rules below."
          img-src="/images/bai-twitter.png"
          title="Share"
          cta-href="/"
          cta-title="Tweet Progress"
        ></tm-grid-item>
        <tm-grid-item
          description="Complete the Be An Innovator with Dynamic Pages trailmix between May 20 and June 30, 2020 to earn a special community badge. Every Be an Innovator with Dynamic Pages trailmix completed by June 30, 2020 unlocks a $10 donation to the UN Foundation (up to $10,000 USD)"
          img-src="/images/bai-trailhead.png"
          title="Complete"
          cta-href="/"
          cta-title="Complete Trailmix"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a title="Watch Videos" background="light" id="videos">
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          img-src="/images/admin-step-1.png"
          pretitle="Video #1 • May 8"
          title="Identify Business Requirements"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          img-src="/images/admin-step-2.png"
          pretitle="Video #2 • May 11"
          title="Design Your Page"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          img-src="/images/admin-step-3.png"
          pretitle="Video #3 • May 13"
          title="Customize by Page Value"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          img-src="/images/admin-step-4-locked.png"
          pretitle="Video #4 • Available on May 15"
          title="Coming Soon: Customize for Device"
        ></tm-grid-item>
        <tm-grid-item
          img-src="/images/admin-step-5-locked.png"
          pretitle="Video #5 • Available on May 18"
          title="Coming Soon: Customize for User"
        ></tm-grid-item>
        <tm-grid-item
          img-src="/images/admin-step-6-locked.png"
          pretitle="Video #6 • Available on May 20"
          title="Coming Soon: Activate and Implement"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a background="white">
      <tm-promo-a
        title="Learn & Give Back"
        description="Every completed Be an Innovator with Dynamic Pages trailmix unlocks a $10 USD donation to the COVID-19 Solidarity Response Fund, powered by the UN Foundation. (up to $10,000 USD by June 30,2020)"
        img-src="/images/bai-2.png"
        cta-href="https://unfoundation.org/"
        cta-title="Learn More"
        cta-target="_blank"
        shadow-color-start="#3d7d3d"
        shadow-color-end="#9e7d1f"
      ></tm-promo-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="https://admin.salesforce.com/"
      cta-label="Lets Go!"
      cta-target="_blank"
      img-src="/images/admin-goat.png"
      subtitle="Checkout admin.salesforce for resources, podcast, blog and even more goodies to help your admin career!"
      title="Everything For You"
    ></tm-end-cap-a>

    <tm-footnote>
      <p>
        No purchase necessary. Void where prohibited. Sweepstakes runs from May
        8, 2020 10:00 a.m. PT to May 22, 2020 9:59 a.m. PT. Open to legal
        residents of the U.S. (incl. D.C.), Canada (excl. Quebec), France,
        Germany, India, Ireland, Japan, Netherlands, New Zealand, Spain, and
        United Kingdom. Must be 18+ (20+ in Japan). Restrictions apply.
      </p>
      <p>
        See official rules: <a href="#">English</a>, <a href="#">Français</a>,
        Deutsch, <a href="#">Español</a>, <a href="#">日本語</a>,
        <a href="#">हिन्दीद</a>, <a href="#">Lietuvių</a>,
        <a href="#">Magyar</a>, <a href="#">Українська</a>
      </p>
    </tm-footnote>
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
      max-width: 1280px;
      box-sizing: border-box;
      padding: 0 1rem;
      margin: 0 auto;
    }
  </style>
  <th-header></th-header>

  <tm-page class="theme--admin">
    <div class="container">
      <tm-page-header-a
        pretitle="Video #1 • Published April 30, 2020"
        title="Identify the Problem"
      >
        <tm-cta title="All Videos" variant="brand" href="google"></tm-cta>
      </tm-page-header-a>

      <tm-youtube video-id="_z7S1dFG-q4"></tm-youtube>
      <tm-section-spacer></tm-section-spacer>

      <tm-content>
        <!-- INTRO -->
        <p>
          Video 1 (of 6) is all about identifying your business requirements.
          Before building any sort of solution in Salesforce, it’s imperative to
          take time to understand what the problem is you’re trying to solve
          for. Before we start a new project, we always create a requirements
          doc and gather information from our stakeholders.
        </p>
        <h2>Key Learnings from this episode</h2>
        <ul>
          <li>Talk to your users to understand their needs</li>
          <li>Identify your stakeholders</li>
          <li>Define the requirements</li>
        </ul>
        <h2>Key Resources</h2>
        <ul>
          <li>
            <a href="https://www.w3schools.com/html/" target="_blank"
              >Sample Requirements Doc</a
            >
          </li>
          <li>
            <a href="https://www.w3schools.com/html/" target="_blank">
              Trailhead Module</a
            >
          </li>
        </ul>
      </tm-content>
    </div>

    <tm-section-spacer></tm-section-spacer>

    <tm-section-a background="light" title="What You Need To Do Each Week">
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Watch the videos, released at 10 am PT, to learn each critical step in the process and follow along."
          img-src="/images/bai-youtube.png"
          title="Step 1: Watch Video"
          cta-href="/"
          cta-title="Watch"
        ></tm-grid-item>
        <tm-grid-item
          description="Watch every video to the end to learn what to share on Twitter so you can be entered for a chance to win 1 of 18 prize packs consisting of blanket and tumbler. See official rules below."
          img-src="/images/bai-twitter.png"
          title="Step 2: Tweet It!"
          cta-href="/"
          cta-title="Tweet"
        ></tm-grid-item>
        <tm-grid-item
          description="Complete the Be an Innovator with Dynamic Pages trailmix between May 11 and May 31, 2020 to earn the Be an Innovator with Dynamic Pages community badge."
          img-src="/images/bai-trailhead.png"
          title="Step 3: Complete the Trailmix"
          cta-href="/"
          cta-title="Complete Trailmix"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      img-src="/images/admin-goat.png"
      background="dark"
      cta-href="https://admin.salesforce.com/"
      cta-label="Lets Go!"
      cta-target="_blank"
      cta-href="/images/bai-legal.pdf"
      subtitle="Checkout admin.salesforce for resources, podcast, blog and even more goodies to help your admin career!"
      title="Everything For You"
    ></tm-end-cap-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;

export const HomePost = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-header></th-header>
  <tm-page class="theme--admin">
    <tm-hero-a
      background="light"
      img-src="/images/admin-hero.png"
      img-align="bottom"
      title="Be an Innovator"
      subtitle="Use Dynamic Forms and Actions to build flexible, contextual experiences your users will love."
      cta-label="Watch Videos"
      cta-href="#videos"
    ></tm-hero-a>

    <tm-section-a>
      <tm-feature-grid-a>
        <tm-grid-item
          description="Get ready to deliver innovation with low code by re-imagining your Lightning pages. We'll go step-by-step to build a smart, dynamic record page. Learn from Salesforce experts, get resources, and follow along."
          img-src="/images/admin-feature-1.png"
          title="Watch and Build"
          cta-primary-href="#videos"
          cta-primary-title="Watch Videos"
        ></tm-grid-item>
        <tm-grid-item
          description="Complete the Be An Innovator with Dynamic Pages trailmix  by June 30, 2020 to earn a special community badge. Every Be An Innovator with Dynamic Pages trailmix completed by June 30, 2020 unlocks a $10 donation to the UN Foundation (up to $10,000 USD)."
          img-src="/images/admin-feature-2.png"
          title="Complete and Earn"
          cta-primary-href="https://trailhead.salesforce.com/users/strailhead/trailmixes/be-an-innovator-with-dynamic-pages"
          cta-primary-title="Complete the Trailmix"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a title="Watch Videos" background="light" id="videos">
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          description="Begin learning the basics with Flow by identifying the problem you are trying to solve with help from Mark and Lynda."
          img-src="/images/admin-step-1.png"
          pretitle="Video #1 • April 22, 2020"
          title="Identify the Problem"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          description="Begin learning the basics with Flow by identifying the problem you are trying to solve with help from Mark and Lynda."
          img-src="/images/admin-step-2.png"
          pretitle="Video #2 • April 21, 2020"
          title="Define Your Process"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          description="Begin learning the basics with Flow by identifying the problem you are trying to solve with help from Mark and Lynda."
          img-src="/images/admin-step-3.png"
          pretitle="Video #3 • April 22, 2020"
          title="Learn Flow Builder"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/iframe.html?id=tm-pages-be-an-innovator--content"
          cta-title="Watch"
          description="Begin learning the basics with Flow by identifying the problem you are trying to solve with help from Mark and Lynda."
          img-src="/images/admin-step-4.png"
          pretitle="Video #4 • April 24, 2020"
          title="Create Flow Elements"
        ></tm-grid-item>
        <tm-grid-item
          description="Begin learning the basics with Flow by identifying the problem you are trying to solve with help from Mark and Lynda."
          img-src="/images/admin-step-3.png"
          pretitle="Video #5 • April 25, 2020"
          title="Review Your Flow"
        ></tm-grid-item>
        <tm-grid-item
          description="Begin learning the basics with Flow by identifying the problem you are trying to solve with help from Mark and Lynda."
          img-src="/images/admin-step-3.png"
          pretitle="Video #6 • April 26, 2020"
          title="Activate and Implement"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a background="white">
      <tm-promo-a
        title="UN Foundation"
        description="Every trailmix completed by June 30, 2020 unlocks a $10 donation to the United Nations Foundation (up to $5,000)."
        img-src="/images/bai-2.png"
        cta-href="https://unfoundation.org/"
        cta-title="Learn More"
        cta-target="_blank"
        shadow-color-start="#3d7d3d"
        shadow-color-end="#9e7d1f"
      ></tm-promo-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="https://admin.salesforce.com/"
      cta-label="Lets Go!"
      cta-target="_blank"
      img-src="/images/admin-goat.png"
      subtitle="Checkout admin.salesforce for resources, podcast, blog and even more goodies to help your admin career!"
      title="Everything For You"
    ></tm-end-cap-a>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
