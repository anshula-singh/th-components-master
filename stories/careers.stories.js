import { html } from "lit-html";

export default {
  title: "tm/pages/Careers",
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
  </style>
  <th-header></th-header>
  <div class="theme--careers">
    <tm-hero-a
      background="light"
      img-src="/images/trailblazer-group.png"
      title="Discovery Your Ideal Salesforce Career"
      subtitle="Use Dynamic Forms and Actions to build flexible, contextual experiences your users will love."
      cta-label="What Career is Right for Me?"
      cta-href="#careers"
    ></tm-hero-a>

    <tm-section-a background="light">
      <ul class="data-item-grid">
        <li>
          <div class="data-item">
            <h3 class="data">#1</h3>
            <p class="data-description">Tech skill paying $200k a year</p>
          </div>
        </li>
        <li>
          <div class="data-item">
            <h3 class="data">300k</h3>
            <p class="data-description">New jobs this year</p>
          </div>
        </li>
        <li>
          <div class="data-item">
            <h3 class="data">1.3x</h3>
            <p class="data-description">Faster job growth</p>
          </div>
        </li>
        <li>
          <div class="data-item">
            <h3 class="data">2 in 10</h3>
            <p class="data-description">Top jobs are Salesforce-specific</p>
          </div>
        </li>
      </ul>
    </tm-section-a>

    <tm-section-a
      title="3.3M jobs will be created in the Salesforce ecosystem by 2022"
      background="light"
    >
      <div><img class="image" src="/images/map.svg" /></div>
    </tm-section-a>

    <tm-section-a
      title="Average pay for jobs with Salesforce skills is $70K+ a year"
      background="white"
    >
      <div class="card">
        <div class="bar-graph-container">
          <div class="bar-container">
            <div class="bar-title">Salesforce Administrator</div>
            <div class="bar-bg">
              <div class="bar bar-1">
                <span class="percent">$95K</span>
              </div>
            </div>
          </div>
          <div class="bar-container">
            <div class="bar-title">Salesforce Developer</div>
            <div class="bar-bg">
              <div class="bar bar-2">
                <span class="percent">$125K</span>
              </div>
            </div>
          </div>
          <div class="bar-container">
            <div class="bar-title">Sales Manager</div>
            <div class="bar-bg">
              <div class="bar bar-3">
                <span class="percent">$90K</span>
              </div>
            </div>
          </div>
          <div class="bar-container">
            <div class="bar-title">Marketing Manager</div>
            <div class="bar-bg">
              <div class="bar bar-4">
                <span class="percent">$85K</span>
              </div>
            </div>
          </div>
          <div class="bar-container">
            <div class="bar-title">Salesforce Architect</div>
            <div class="bar-bg">
              <div class="bar bar-5">
                <span class="percent">$150K</span>
              </div>
            </div>
          </div>
          <div class="bar-container">
            <div class="bar-title">Business Analyst</div>
            <div class="bar-bg">
              <div class="bar bar-6">
                <span class="percent">$108K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </tm-section-a>

    <tm-section-a
      background="white"
      title="Top companies hire Salesforce roles"
      cta-title="Companies Hiring in My Area"
      cta-href="/posts"
      cta-target="_blank"
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

    <tm-section-a
      background="light"
      title="Which career path is right for you?"
      id="careers"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Do you enjoy helping users get the most out of technology?"
          img-src="/images/admin-avatar.png"
          title="Salesforce Administrator"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Do you dream in code? Do inefficiencies keep you up at night?"
          img-src="/images/developer-avatar.png"
          title="Salesforce Developer"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you a people person who loves helping customers succeed?"
          img-src="/images/sales-avatar.png"
          title="Sales Manager"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you half artist, half scientist with an aptitude for technology?"
          img-src="/images/marketing-avatar.png"
          title="Marketing Manager"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you both a problem solver and big picture thinker?"
          img-src="/images/architect-avatar.png"
          title="Salesforce Architect"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you a data nut and a critical thinker?"
          img-src="/images/business-avatar.png"
          title="Business Analyst"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Do you enjoy helping users get the most out of technology?"
          img-src="/images/salesforce-avatar.png"
          title="Salesforce Consultant"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Do you dream in code? Do inefficiencies keep you up at night?"
          img-src="/images/service-avatar.png"
          title="Service Manager"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a>
      <tm-feature-grid-a>
        <tm-grid-item
          description="Level up your career with a proven record of your ability to get the job done. Highlight your Salesforce-verified credentials and resume-worthy skills. Share your profile with employers and stand out from the pack."
          img-src="/images/me.png"
          title="Reinvent your resume with Trailhead"
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

export const Role = () => html`
  <style>
    #root {
      padding: 0;
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

    .progress-item-grid {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      max-width: 1280px;
      list-style: none;
      padding-left: var(--tds-spacing-0);
    }

    section {
        display: grid;
        flex-direction: column;
        padding-left: var(--tds-spacing-3);
        padding-right: var(--tds-spacing-3);

      }

      .card-progress {
        background-color: var(--tds-color-white);
        border-radius: var(--tds-radius-lg);
        box-shadow: var(--tds-shadow-sm);
        padding: var(--tds-spacing-12);
      }


    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
    }

    .title {
      margin-top: 0;
      margin-bottom: 0;
      font-size: var(--tds-font-size-xl);
      font-weight: normal;
    }

    .description {
      line-height: 1.5;
      margin-top: var(--tds-spacing-3);
      margin-bottom: var(--tds-spacing-6);
    }

    progress {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 20px;
    }

    progress::-webkit-progress-bar {
      background-color: var(--tds-color-sand);
      border-radius: 100px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) inset;
    }

    .cold progress::-webkit-progress-value  {
    border-radius: 100px;
    background: linear-gradient(90deg, rgba(22,99,195,1) 0%, rgba(15,194,226,1) 100%);
    }

    .hot progress::-webkit-progress-value  {
    border-radius: 100px;
    background: linear-gradient(90deg, rgba(195,46,22,1) 0%, rgba(226,140,15,1) 100%);
    }

    .progress {
      width: 100%;
    }
    .progress-title {
      color: var(--tds-color-meteorite);
      margin-top: var(--tds-spacing-5);
      margin-bottom: var(--tds-spacing-2);
      text-decoration: underline;

    }
    .progress-title:hover {
      cursor: pointer;
    }

    .progress-bar {
      height: 20px;
    }

    ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: var(--tds-spacing-6);
  justify-content: center;
  margin: 0;
  max-width: 1280px;
  padding: 0;
}

.card {
  overflow: hidden;
  background-color: var(--tds-color-white);
    border-radius: var(--tds-radius-lg);
    box-shadow: var(--tds-shadow-xs);
    height: 100%;
    transition: all 250ms ease-in-out;
    display: flex; 
    flex-direction: column;
}

.card:hover {
  box-shadow: var(--tds-shadow-md);
}

.image {
  align-self: flex-start;
    margin: var(--tds-spacing-6) var(--tds-spacing-6) 0 var(--tds-spacing-6);
    max-height: 75px;
    border-radius: 1rem;
}

.featured-job-card {
  border: 2px solid #19a269;
}

.featured-job {
  background-color: #19a269;
  padding: .25rem;
  color: white;
  font-weight: bold;
  text-align: center;
}

.content-job {
  padding: var(--tds-spacing-6);
  display: flex;
    flex: 1;
    flex-direction: column;
}

.content-job-inner {
  flex: 1;
}

.name {
  color: var(--tds-color-black);
  font-size: var(--tds-font-size-xl);
  font-weight: bold;
}
.role {
  color: var(--tds-color-black);
  font-size: var(--tds-font-size-lg);
  margin-top: var(--tds-spacing-1);
  padding-bottom: var(--tds-spacing-2);
}
.item {
  color: var(--tds-color-meteorite);
  display: flex;
  font-size: var(--tds-font-size-smd);
  margin: var(--tds-spacing-2) 0;
}

.item span,
.item a {
  margin-left: var(--tds-spacing-2);
}

.link {
  color: var(--tds-color-meteorite);
}
.cta {
  margin-top: var(--tds-spacing-4);
}


  </style>
  <th-header></th-header>
  <div class="theme--careers">
    <tm-hero-a
      background="light"
      img-src="/images/admin-person-hero.png"
      img-align="bottom"
      title="Salesforce Administrator Careers"
      subtitle="You put the 'I' in impact. You bring innovation to life, bridging the gap between business requirements and technology."
      cta-label="Start My Journey!"
      cta-href="#quests"
    ></tm-hero-a>
    
    <tm-section-a background="light" >
      <ul class="data-item-grid">
        <li>
          <div class="data-item">
            <h3 class="data">$95,000</h3>
            <p class="data-description">average salary (US data)</p>
          </div>
        </li>
        <li>
          <div class="data-item">
            <h3 class="data">4,670</h3>
            <p class="data-description">jobs last 12 months (US data)</p>
          </div>
        </li>
        <li>
          <div class="data-item">
            <h3 class="data">37%</h3>
            <p class="data-description">annual growth rate</p>
          </div>
        </li>
        <li>
          <div class="data-item">
            <h3 class="data">39%</h3>
            <p class="data-description">of jobs posted are entry-level roles</p>
          </div>
        </li>
      </ul>
      </tm-section-a>

      <tm-section-a title="Sound like you?" background="white">
        <tm-text-item-grid-a icon-type="left">
          <tm-grid-item
            icon-symbol="light_bulb"
            title="If there’s a problem, you’ll solve it"
            description="For your company, this means automating complex business processes, creating reports and dashboards, and training users on Salesforce."
          ></tm-grid-item>
          <tm-grid-item
            icon-symbol="custom_apps"
            title="You troubleshoot in your sleep"
            description="For your team, it means helping them stay efficient and on top of things while keeping an eye on their successes and customer relationships."
          ></tm-grid-item>
          <tm-grid-item
            icon-symbol="all"
            title="Organization is your superpower"
            description="For your company, this means automating complex business processes, creating reports and dashboards, and training users on Salesforce."
          ></tm-grid-item>
        </tm-text-item-grid-a>
      </tm-section-a>

      <tm-section-a title="Here is what you need to learn" background="white" >
        <div class="progress-item-grid">

      <section>
      <div class="card-progress">
      <div class="content">
        <h3 class="title">General skills to develop</h3>
        <p class="description">These are the most common general skills listed in job postings for Salesforce Admin roles. </p>
      </div>
      <div class="progress, cold">
      <p class="progress-title" data-value="80">Communication (written/verbal)</p>
        <progress max="100" value="46">
            <div class="progress-bar">
            </div>
        </progress>
      <p class="progress-title" data-value="80">Stakeholder Engagement</p>
        <progress max="100" value="32">
            <div class="progress-bar">
            </div>
        </progress>
      <p class="progress-title" data-value="80">Business Analysis</p>
        <progress max="100" value="38">
            <div class="progress-bar">
            </div>
        </progress>
        <p class="progress-title" data-value="80">Project Management</p>
        <progress max="100" value="43">
            <div class="progress-bar">
            </div>
        </progress>
        <p class="progress-title" data-value="80">End User Enablement</p>
        <progress max="100" value="24">
            <div class="progress-bar">
            </div>
        </progress>
      </div>
      </div>
      </section>

      <section>
        <div class="card-progress">
      <div class="content">
        <h3 class="title">Technical and specialized skills to master</h3>
        <p class="description">You’ll need these frequently requested skills to really excel. Good news is will teach you them for free!
        </p>
      </div>
      <div class="progress, hot">
      <p class="progress-title" data-value="80">Salesforce Platform</p>
        <progress max="100" value="80">
            <div class="progress-bar">
            </div>
        </progress>
      <p class="progress-title" data-value="80">Business Process</p>
        <progress max="100" value="65">
            <div class="progress-bar">
            </div>
        </progress>
      <p class="progress-title" data-value="80">Data Management</p>
        <progress max="100" value="75">
            <div class="progress-bar">
            </div>
        </progress>
        <p class="progress-title" data-value="80">Process Automation</p>
        <progress max="100" value="43">
            <div class="progress-bar">
            </div>
        </progress>
        <p class="progress-title" data-value="80">Formulas & Validations</p>
        <progress max="100" value="42">
            <div class="progress-bar">
            </div>
        </progress>
      </div>
      </div>
      </div>
      </section>

      </tm-section-a>



    <tm-section-a
      title="Just beginning? Start here."
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
      title="Learn more about the life of an Administrator"
      background="white"
    >
    <tm-youtube video-id="XULofJlkwtE"></tm-youtube>

    </tm-section-a>

    <tm-section-a
      title="The job market is ready for you"
      background="white"
      cta-title="Checkout More Jobs"
      cta-href="/posts"
      cta-target="_blank"
    >
    <div>
  <ul>
      <li class="card card-base featured-job-card">
        <div class="featured-job"><span>Featured</span></div>
        <div><img class="image" src="/images/job-1.jpeg"></div>
        <div class="content-job">
        <div class="content-job-inner">
          <div class="name">Salesforce Administrator</div>
          <div class="role">Mason Frank International</div>
          <div class="item">
            <tds-icon symbol="location"></tds-icon>
            <span>Silver Spring, MD</span>
          </div>
          <div class="item">
            <tds-icon symbol="clock"></tds-icon>
            <span>Posted 2 days ago</span>
          </div>
          <div class="item">
            <tds-icon symbol="case"></tds-icon>
            <span>Full Time</span>
          </div>
          <div class="item">
            <tds-icon symbol="moneybag"></tds-icon>
            <a class="link" >$85k - $95k</a>
          </div>
          </div>

          <tds-button-link
            href={item.ctaHref}
            if:true={item.ctaHref}
            class="cta"
          >
            Learn More
          </tds-button-link>
        </div>
      </li>
      <li class="card card-base">
        <div><img class="image" src="/images/job-2.png"></div>
        <div class="content-job">
        <div class="content-job-inner">

          <div class="name">Salesforce Administrator</div>
          <div class="role">Pearson</div>
          <div class="item">
            <tds-icon symbol="location"></tds-icon>
            <span>Columbia, MD</span>
          </div>
          <div class="item">
            <tds-icon symbol="clock"></tds-icon>
            <span>Posted 23 days ago</span>
          </div>
          <div class="item">
            <tds-icon symbol="case"></tds-icon>
            <span>Full Time</span>
          </div>
          <div class="item">
            <tds-icon symbol="moneybag"></tds-icon>
            <a class="link" >$55k - $85k</a>
          </div>
          </div>
          <tds-button-link
            href={item.ctaHref}
            if:true={item.ctaHref}
            class="cta"
          >
            Learn More
          </tds-button-link>
        </div>
      </li>
      <li class="card card-base">
        <div><img class="image" src="/images/job-3.png"></div>
        <div class="content-job">
        <div class="content-job-inner">

          <div class="name">Salesforce Administrator</div>
          <div class="role">Rober Half</div>
          <div class="item">
            <tds-icon symbol="location"></tds-icon>
            <span>Washington, D.C., DC</span>
          </div>
          <div class="item">
            <tds-icon symbol="clock"></tds-icon>
            <span>Posted 24 days ago</span>
          </div>
          <div class="item">
            <tds-icon symbol="case"></tds-icon>
            <span>Full Time</span>
          </div>
          <div class="item">
            <tds-icon symbol="moneybag"></tds-icon>
            <a class="link" >$95k - $105k</a>
          </div>
          </div>
          <tds-button-link
            href={item.ctaHref}
            if:true={item.ctaHref}
            class="cta"
          >
            Learn More
          </tds-button-link>
        </div>

      </li>
      <li class="card card-base">
        <div><img class="image" src="/images/job-4.png"></div>
        <div class="content-job">
        <div class="content-job-inner">

          <div class="name">Salesforce Administrator</div>
          <div class="role">Amazon</div>
          <div class="item">
            <tds-icon symbol="location"></tds-icon>
            <span>Washington, D.C., DC</span>
          </div>
          <div class="item">
            <tds-icon symbol="clock"></tds-icon>
            <span>Posted 28 days ago</span>
          </div>
          <div class="item">
            <tds-icon symbol="case"></tds-icon>
            <span>Full Time</span>
          </div>
          <div class="item">
            <tds-icon symbol="moneybag"></tds-icon>
            <a class="link" >$85k - $95k</a>
          </div>
          </div>
          <tds-button-link
            href={item.ctaHref}
            if:true={item.ctaHref}
            class="cta"
          >
            Learn More
          </tds-button-link>
        </div>

      </li>
  </ul>
  </div>
  </tm-section-a>

    <tm-section-a
      background="dark"
      cta-target="_blank"
      description="Tap into an incredible source of inspiration to be your best. Dive into these stories of Trailblazers from all walks of life."
      title="Meet Administrator Trailblazers"
    >
      <tm-trailblazers-a>
        <tm-trailblazer-item
          cta-href="/"
          cta-title="My Story"
          img-src="/images/trailblazer-admin-1.png"
          location="Mexico City, Mexico"
          name="Luis Roberto Acosta Corona"
          profile-href="https://trailblazer.me/luis"
          profile-title="trailblazer.me/luis"
          rank="Ranger"
          role="Administrator, Nike"
          since="Trailblazer Since 2018"
        ></tm-trailblazer-item>
        <tm-trailblazer-item
          cta-href="/"
          cta-title="My Story"
          img-src="/images/trailblazer-admin-2.png"
          location="Austin, TX, United States"
          name="Charly Prinsloo"
          profile-href="https://trailblazer.me/charly"
          profile-title="trailblazer.me/charly"
          rank="Ranger"
          role="Administrator, Sense Corp"
          since="Trailblazer Since 2016"
        ></tm-trailblazer-item>
        <tm-trailblazer-item
          cta-href="/"
          cta-title="My Story"
          img-src="/images/trailblazer-admin-3.png"
          location="Sacremento, California"
          name="Peter Ingemann"
          profile-href="https://trailblazer.me/peteringemann"
          profile-title="trailblazer.me/peteringemann"
          rank="Ranger"
          role="Administrator, US Bank"
          since="Trailblazer Since 2018"
        ></tm-trailblazer-item>
      </tm-trailblazers-a>
    </tm-section-a>

    <tm-section-a title="So what exactly is Trailhead?" background="light">
      <tm-feature-grid-a>
        <tm-grid-item
          description="Chances are, your next job will require Salesforce skills. Learn them for free today! Prove your skills and earn globally-recognized credentials that lead to top jobs."
          img-src="/images/starter-trailhead-1.png"
          title="Learn in-demand skills"
        ></tm-grid-item>
        <tm-grid-item
          description="You can begin you journey by completing bite sized learnings and build up to earning globally-recognized credentials that lead to top jobs. Everything you earned is showcased on your Trailblazer profile (aka your resume)"
          img-src="/images/starter-trailhead-2.png"
          title="Earn resume-worthy credentials"
        ></tm-grid-item>
        <tm-grid-item
          description="Join our Trailblazer Community for mentorship along the way and help finding jobs. We are all here to help each other find success. Whether you have a technical question or are looking for an internship people are here to help."
          img-src="/images/starter-trailhead-3.png"
          title="Connect to opportunities"
        ></tm-grid-item>
      </tm-feature-grid-a>
    </tm-section-a>

    <tm-section-a
      background="light"
      title="Explore other career paths"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          description="Do you dream in code? Do inefficiencies keep you up at night?"
          img-src="/images/developer-avatar.png"
          title="Salesforce Developer"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you a people person who loves helping customers succeed?"
          img-src="/images/sales-avatar.png"
          title="Sales Manager"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you half artist, half scientist with an aptitude for technology?"
          img-src="/images/marketing-avatar.png"
          title="Marketing Manager"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
        <tm-grid-item
          description="Are you both a problem solver and big picture thinker?"
          img-src="/images/architect-avatar.png"
          title="Salesforce Architect"
          cta-href="/"
          cta-title="Learn More"
        ></tm-grid-item>
      </tm-card-grid-a>
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
            IDC White Paper sponsored by Salesforce, “The Salesforce Economy Forecast: 3.3 Million New Jobs, $859 Billion New Business Revenues to Be Created from 2016 to 2022,” October 2017
            </p>
            <p>
            Burning Glass Report, “Salesforce Skills are a Platform to Better Jobs”, February
            </p>
          </tm-footnote>
        </div>
        <th-footer-links></th-footer-links>
        <th-footer-global></th-footer-global>
      </template>
    </div>
  </div>
`;
