import { html } from "lit-html";

export default {
  title: "tm/pages/Quests",
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

export const Landing = () => html`
  <style>
    #root {
      padding: 0;
    }
  </style>
  <th-header></th-header>
  <tm-page class="theme--admin">
    <tm-hero-a
      background="light"
      img-src="/images/quest-hero.png"
      img-align="bottom"
      title="Trailhead Quests"
      subtitle="Learn new skills. Win fun prizes."
      cta-label="Explore Quests"
      cta-href="#quests"
    ></tm-hero-a>

    <tm-section-a
      title="Join the Learning Adventure"
      description="Trailhead, the free online learning platform from Salesforce, is the fun way to learn in-demand skills. Quests are an extra fun way to dive in, dig deeper into specific areas, and win prizes."
      background="white"
    >
      <tm-text-item-grid-a icon-type="left">
        <tm-grid-item
          icon-symbol="trail"
          title="Step 1: Choose a Quest"
          description="From beginners to experts, there's a quest for everyone. Scroll down to explore them all.
"
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="check"
          title="Step 2: Complete the Challenge"
          description="Each quest is different, so be sure to follow the rules."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="like"
          title="Step 3: Be Entered to Win"
          description="Once completed, you'll automatically be entered to win (see each quest for prize details)."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Kickstart Your Learning With
Monthly quests"
      description="Complete any of the three quests below for a chance to win a prize."
      background="white"
      cta-target="_blank"
      id="quests"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Every badge you earn is an entry to win a $100 USD Gift Card (1 of 25)."
          img-src="/images/quest-1.png"
          pretitle="April 1 - April 30, 2020"
          title="April Learn & Earn Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Unlock the Ranger rank to enter to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-2.png"
          pretitle="April 1 - April 30, 2020"
          title="April Road to Ranger Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Earn any superbadge for an automati entry to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-3.png"
          pretitle="April 1 - April 30, 2020"
          title="April Be Super Quest"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a
      title="Quests To Get Started or Skill Up"
      description="From beginners to experts, there's a quest for everyone."
      background="white"
      cta-target="_blank"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="New to Trailhead? Howdy! Sign up and complete the Trailhead Basics module to scare a special community badge."
          img-src="/images/quest-1-basics.png"
          pretitle="April 1 - April 30, 2020"
          title="Beginner's Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Complete this traimix to unlock a community badge and donate $10 USD."
          img-src="/images/quest-4.png"
          pretitle="April 1 - April 30, 2020"
          title="Lean Moar Spring '20 for Developers"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Complete this trailmix to unlock a community badge and donate $10 USD."
          img-src="/images/quest-4.png"
          pretitle="April 1 - April 30, 2020"
          title="Learn Moar Spring '20 for Admins"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a background="white">
      <tm-promo-a
        title="Share your adventure"
        description="Post your whoohoos, celebrate your fellow Trailblazers, and follow updates via #TrailheadQuests."
        img-src="/images/promo.png"
        cta-href="https://twitter.com/intent/tweet?text=I%27m%20challenging%20myself%20to...%20%23TrailheadQuests"
        cta-title="Tweet Your Heart Out"
        cta-target="_blank"
        shadow-color-start="#3d7d3d"
        shadow-color-end="#9e7d1f"
      ></tm-promo-a>
    </tm-section-a>

    <tm-section-a
      title="Past Quests"
      description="These quests are now over. See details below on when winners are notified."
      background="light"
      cta-target="_blank"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="See Results"
          description="Every badge you earn is an entry to win $100 USD gift card."
          img-src="/images/quest-4.png"
          pretitle="February 1 - February 30, 2020"
          title="February Learn & Earn Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="See Results"
          description="Unlock the Ranger rank to enter to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-4.png"
          pretitle="April 1 - April 30, 2020"
          title="February Road to Ranger Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="See Results"
          description="Earn any superbadge for an automati entry to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-4.png"
          pretitle="April 1 - April 30, 2020"
          title="February Be Super Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="See Results"
          description="Earn any superbadge for an automati entry to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-4.png"
          pretitle="April 1 - April 30, 2020"
          title="Dreamforce '19 Developer Keynote"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="See Results"
          description="Earn any superbadge for an automati entry to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-4.png"
          pretitle="April 1 - April 30, 2020"
          title="Dreamforce '19 Admin Keynote"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-end-cap-a
      img-src="/images/admin-goat.png"
      background="dark"
      cta-href="https://admin.salesforce.com/"
      cta-label="Lets Go!"
      cta-target="_blank"
      cta-href="/images/bai-legal.pdf"
      subtitle="Checkout our special Trailmix for beginners becoming Admins!"
      title="Beginners Start Here"
    ></tm-end-cap-a>

    <tm-footnote>
      <h3>Official Sweepstake Rules</h3>
      <p>
        NO PURCHASE NECESSARY. VOID WHERE PROHIBITED. Sweepstakes open to legal
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

export const Details = () => html`
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
        pretitle="April 1 - April 30, 2020"
        title="Beginner's Quest"
      >
        <tm-cta title="All Quests" variant="brand" href="google"></tm-cta>
      </tm-page-header-a>

      <tm-content>
        <img src="/images/quest-1-basics.png" />
        <h2>Instructions</h2>
        <p>
          To complete this quest, you need to do the following:
        </p>
        <ul>
          <li>
            Sign up for
            <a href="https://www.trailhead.com" target="_blank">Trailhead</a>
          </li>
          <li>
            Complete the
            <a href="https://www.trailhead.com" target="_blank"
              >Trailhead Basics</a
            >
            between April 1 - April 30, 2020
          </li>
          <li>
            Thats it! You will autmatically earn our special community badge!
          </li>
        </ul>
        <h2>Get MOAR Out of Your Learning</h2>
        <p>
          Trailhead Quests are designed to motivate you to explore new skills,
          earn badges, rank up, and achieve your goals. Make every day a
          learning day and you could even win some fun prizes along the way.
        </p>
        <p>
          Learning with Trailhead is an ethos, a philosophy, a way of
          Salesforce-life. And it’s from the total embracement of Trailhead that
          a whole learning movement has sparked within the #SalesforceOhana.
        </p>
      </tm-content>
    </div>

    <tm-section-spacer></tm-section-spacer>

    <tm-section-a
      title="Other Quests You May Like"
      description="Complete any of the three quests below for a chance to win a prize."
      background="light"
      cta-target="_blank"
      id="quests"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Every badge you earn is an entry to win a $100 USD Gift Card (1 of 25)."
          img-src="/images/quest-1.png"
          pretitle="April 1 - April 30, 2020"
          title="April Learn & Earn Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Unlock the Ranger rank to enter to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-2.png"
          pretitle="April 1 - April 30, 2020"
          title="April Road to Ranger Quest"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Earn any superbadge for an automati entry to win a Salesforce Certification voucher (1 of 25)."
          img-src="/images/quest-3.png"
          pretitle="April 1 - April 30, 2020"
          title="April Be Super Quest"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-end-cap-a
      img-src="/images/admin-goat.png"
      background="dark"
      cta-href="https://admin.salesforce.com/"
      cta-label="Lets Go!"
      cta-target="_blank"
      cta-href="/images/bai-legal.pdf"
      subtitle="Checkout our special Trailmix for beginners becoming Admins!"
      title="Beginners Start Here"
    ></tm-end-cap-a>

    <tm-footnote>
      <h3>Official Sweepstake Rules</h3>
      <p>
        NO PURCHASE NECESSARY. VOID WHERE PROHIBITED. Sweepstakes open to legal
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

    <th-footer-links></th-footer-links>
    <th-footer-global></th-footer-global>
  </tm-page>
`;
