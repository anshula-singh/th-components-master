import { html } from "lit-html";

export default {
  title: "tm/pages/Certification Days",
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
  <tm-page class="theme--salesforce">
    <tm-hero-a
      background="white"
      img-src="/images/cert-hero.png"
      img-align="center"
      title="Salesforce Certification Days"
      subtitle="Complimentary 1 day virtual sessions designed to help you prepare for your Salesforce certification exam"
      cta-label="Register"
      cta-href="#certifications"
    ></tm-hero-a>

    <tm-section-a title="How it Works" description="" background="light">
      <tm-text-item-grid-a icon-type="left">
        <tm-grid-item
          icon-symbol="date_time"
          title="Step 1: Choose Your Exam"
          description="Get started by finding the Certification exam you are working towards in the timezone that works best for you. We have also included helpful links to exam prerp."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="multi_select_checkbox"
          title="Step 2: Get Ready"
          description="Before joining the class be sure to prepare snacks and grab a drink. Log in 15-10 minutes early and make sure everything is working."
        ></tm-grid-item>
        <tm-grid-item
          icon-symbol="note"
          title="Step 3: Join and Learn!"
          description="Watch as expert certified instructors who share their expertise, tips, and best practices for acing your Salesforce certification exam."
        ></tm-grid-item>
      </tm-text-item-grid-a>
    </tm-section-a>

    <tm-section-a background="light">
      <tm-promo-a
        title="Special Spring Bonus! "
        description="For the month of May, all webinar attendees will receive a coupon code for a $100 USD discount off ANY $200 exam! This is the largest discount ever offered - be sure to register before spots fill up!"
        img-src="/images/promo.png"
        cta-href="#certifications"
        cta-title="Select My Exam"
        shadow-color-start="#00a1e2"
        shadow-color-end="#b1e5ff"
      ></tm-promo-a>
    </tm-section-a>

    <tm-section-a
      background="white"
      title="What Exam Are You Prepping For?"
      description="Select the exam to find the available session times"
      id="certifications"
    >
      <tm-card-grid-a img-aspect="60%" img-type="left">
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6hb&oid=00DF0000000gZsu&lastMod=1571903578000"
          title="Administrator Certification"
          description=""
          cta-href="#administrator-certification"
          cta-title="View"
        ></tm-grid-item>
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6hg&oid=00DF0000000gZsu&lastMod=1571903674000"
          title="Advanced Administrator Certification"
          description=""
          cta-href="#advanced-administrator-certification"
          cta-title="View"
        ></tm-grid-item>
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6ne&oid=00DF0000000gZsu&lastMod=1571909121000"
          title="Marketing Cloud Email Marketers Certification"
          description=""
          cta-href="#marketing-cloud-certification"
          cta-title="View"
        ></tm-grid-item>
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6rg&oid=00DF0000000gZsu&lastMod=1571914579000"
          title="Platform App Builder Certification"
          description=""
          cta-href="#platform-app-certification"
          cta-title="View"
        ></tm-grid-item>
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6rl&oid=00DF0000000gZsu&lastMod=1571914738000"
          title="Platform Developer Certification"
          description=""
          cta-href="#platform-developer-certification"
          cta-title="View"
        ></tm-grid-item>
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6sA&oid=00DF0000000gZsu&lastMod=1571915344000"
          title="Service Cloud Consultant Certification"
          description=""
          cta-href="#service-cloud-certification"
          cta-title="View"
        ></tm-grid-item>
        <tm-grid-item
          img-src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6s0&oid=00DF0000000gZsu&lastMod=1571915093000"
          title="Sales Cloud Consultant Certification"
          description=""
          cta-href="#sales-cloud-certification"
          cta-title="View"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      background="light"
      title="Learn With Trailmixes"
      description="Can't wait to get started? Here are some great Trailhead Trailmixes and Trails to get you ready!"
    >
      <tm-card-grid-d>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Administrator Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Advanced Administrator Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Marketing Cloud Email Specialist Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Platform App Builder Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Platform Developer I Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Sales Cloud Consultant Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
        <tm-grid-item
          pretitle="Trailmix"
          title="Prepare for Your Salesforce Service Cloud Consultant Credential"
          cta-href="/"
          cta-title="Start"
        ></tm-grid-item>
      </tm-card-grid-d>
    </tm-section-a>

    <tm-section-a
      title="Administrator Certification"
      description="Certified Administrators are Salesforce pros who are always looking for ways to help their companies get even more out of the Salesforce Platform through additional features and capabilities."
      id="administrator-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="May 4, 2020"
          description="9:00 AM - 2:00 PM British Summer Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 11, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 13, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 19, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 21, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 26, 2020"
          description="10:00 AM - 2:00 PM Brasilia Time. Instruções em português."
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 27, 2020"
          description="11:00 AM - 3:00 PM Central Daylight Time. Instrucciones en español"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 28, 2020"
          description="10:00 AM - 2:00 PM Brasilia Time. Instruções em português."
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 29, 2020"
          description="11:00 AM - 3:00 PM Central Daylight Time. Instrucciones en español"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Advanced Administrator Certification"
      description="Certified Advanced Administrators are seasoned Salesforce Administrators who can harness the power of advanced features and functionality to solve a variety of business problems."
      id="advanced-administrator-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="May 18, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 20, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Marketing Cloud Email Marketers Certification"
      description="Certified Marketing Cloud Email Specialists have proven knowledge, skills, and experience in email marketing best practices. They're experts in things like message design, subscriber and data management, inbox delivery, and external integrations."
      id="marketing-cloud-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="April 29, 2020"
          description="9:00 AM - 2:00 PM British Summer Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="April 30, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 12, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 14, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Platform App Builder Certification"
      description="Certified Platform App Builders have the skills and knowledge to design, build, and implement custom applications using the declarative customization capabilities of the Salesforce Platform."
      id="platform-app-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="April 30, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 12, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 14, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 20, 2020"
          description="9:00 AM - 2:00 PM British Summer Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Platform Developer Certification"
      description="Certified Platform Developer I (PDI) developers understand how to develop and deploy custom business logic and custom interfaces using the programmatic capabilities of the Lightning Platform."
      id="platform-developer-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="April 29, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 5, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 11, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 13, 2020"
          description="9:00 AM - 2:00 PM British Summer Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 26, 2020"
          description="11:00 AM - 3:00 PM Central Daylight Time. Instrucciones en español"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 28, 2020"
          description="11:00 AM - 3:00 PM Central Daylight Time. Instrucciones en español"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Service Cloud Consultants Certification"
      description="Certified Service Cloud Consultants are experts at designing and implementing Service Cloud solutions that are sustainable and scalable, meet customer business requirements, and contribute to long-term customer success."
      id="service-cloud-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="May 13, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 19, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 21, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 29, 2020"
          description="10:00 AM - 2:00 PM Brasilia Time. Instruções em português."
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-section-a
      title="Sales Cloud Consultant Certification"
      description="Certified Sales Cloud Consultants are trained to design and implement Sales Cloud solutions that are sustainable, scalable, and contribute to long-term customer success."
      id="sales-cloud-certification"
    >
      <tm-card-grid-a>
        <tm-grid-item
          title="May 12, 2020"
          description="9:00 AM - 2:00 PM Eastern Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 12, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 18, 2020"
          description="9:00 AM - 2:00 PM Pacific Daylight Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 20, 2020"
          description="9:00 AM - 2:00 PM British Summer Time"
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
        <tm-grid-item
          title="May 27, 2020"
          description="10:00 AM - 2:00 PM Brasilia Time. Instruções em português."
          cta-href="/"
          cta-title="Register"
        ></tm-grid-item>
      </tm-card-grid-a>
    </tm-section-a>

    <tm-end-cap-a
      background="dark"
      cta-href="https://trailhead.salesforce.com/credentials/administratoroverview"
      cta-label="Lets Go!"
      cta-target="_blank"
      img-src="https://trailhead.salesforce.com/assets/navigation/certifications-a72d70a002018ed30aa68b8606964967928ba20fc8d9e7ed9295a3f1a0b6f70c.png"
      subtitle="Looking to learn more about certifications? Checkout our landing pages for more information"
      title="Learn More about Certifications"
    ></tm-end-cap-a>

    <tm-footnote>
      <h3>Note!</h3>
      <p>
        Sessions are not recorded and will not include a practice org, practice
        test, ebook, or any other additional materials. Sessions and the content
        presented may not be recorded or used for promotion.
      </p>
      <p>
        <a href="https://salesforce.quip.com/QmWXABObJDDI"
          >Check out our Certification Days FAQ</a
        >
      </p>
    </tm-footnote>
  </tm-page>
  <th-footer-links></th-footer-links>
  <th-footer-global></th-footer-global>
`;
