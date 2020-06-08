import { html } from "lit-html";

export default {
  title: "tm/tm-jobs-a",
  parameters: {
    modules: ["/modules/tm-jobs-a.js"]
  }
};

export const Base = () => html`
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
      cta-target="_blank"
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
`;
