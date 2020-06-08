import { html } from "lit-html";

import { Base as ContentStory } from "../src/elements/tm/content/content.stories";

export default {
  title: "tm/pages/Trailblazer Connect Employer",
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

  <tm-hero-a
    background="white"
    img-src="/images/trailblazer-group.png"
    img-align="bottom"
    subtitle="Assess, Hire and Connect with Top Talents in the Salesforce Ecosystem"
    title="Trailblazer Connect for Employers"
  ></tm-hero-a>

  <tm-page class="theme--work">
    <tm-page-navigation-a>
      <tm-page-navigation-item
        href="/"
        title="Assess Talent"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Hire Faster"
      ></tm-page-navigation-item>
      <tm-page-navigation-item
        href="/"
        title="Best Practices"
      ></tm-page-navigation-item>
    </tm-page-navigation-a>

    <tm-section-a
      background="light"
      description="Learn how Trailhead can help you assess a candidate’s Salesforce experience."
      title="Assess Talent"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Watch Now"
          description="Learn how to navigate and understand a Trailhead profile in this short video."
          img-src="/images/quest-4.png"
          title="Trailblazer Profiles"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Read More"
          description="Understand how to unpack a candidates hands-on Salesforce experience via Trailhead."
          img-src="/images/quest-4.png"
          title="Skills Assesment Guide"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Superbadges, super sets, certifications?! Learn about Salesforce credentials and what they mean."
          img-src="/images/quest-4.png"
          title="Credentials, Explained!"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a
      title="Hire Faster"
      description="Take advantge of these resources designed to help you hire the right talent, fast."
      background="light"
    >
      <tm-card-grid-c img-aspect="60%">
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Download"
          description="Download our interview guide with sample projects, questions, and assessments."
          img-src="/images/quest-4.png"
          title="Interviewing Candidates"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Learn More"
          description="Empower your organization with customized tools and connect with talent."
          img-src="/images/quest-4.png"
          title="Trailhead for Partners"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/posts/1"
          cta-title="Post a Job"
          description="Looking for talent now? Post your jobs in our community job postings group."
          img-src="/images/quest-4.png"
          title="Salesforce Jobs Community"
        ></tm-grid-item>
      </tm-card-grid-c>
    </tm-section-a>

    <tm-section-a>
      <tm-promo-a
        title="Talent Alliance"
        description="Explore the benefits of hiring new talent."
        img-src="/images/promo.png"
        cta-href="/"
        cta-title="Coming Soon"
        shadow-color-start="#78C8EB"
        shadow-color-end="#F0AFAA"
      ></tm-promo-a>
    </tm-section-a>

    <tm-section-a
      title="Best Practices"
      description="Take your recruiting to the next level with these resources from across the Salesforce ecosystem."
      background="white"
    >
      <tm-card-grid-b>
        <tm-grid-item
          cta-href="/"
          description="Learn about how to land great talent with recruiting best practices, diversity hiring strategies, and building a recruiting action plan."
          img-src="/images/card-b-content-1.png"
          title="Recruiting Talent"
          cta-title="Get Started"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          description="Boost your employee engagement by learning the business value of culture, onboarding and productivity practices."
          img-src="/images/card-b-content-6.png"
          title="Employee Engagement"
          cta-href="/"
          cta-title="Get Started"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          img-src="/images/card-b-content-3.png"
          title="Talent Development"
          description="Get aligned on company goals, encourage coaching and feedback, create a career development plan, and encourage mentoring."
          cta-title="Get Started"
        ></tm-grid-item>
        <tm-grid-item
          cta-href="/"
          img-src="/images/card-b-content-4.png"
          title="10 Tips for Remote Interviewing & Hiring"
          description="Keep these things in mind to ensure a smooth candidate and hiring manager experience"
          cta-title="Read"
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
