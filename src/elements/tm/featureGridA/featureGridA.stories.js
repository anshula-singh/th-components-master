import { html } from "lit-html";

export default {
  title: "tm/tm-feature-grid-a",
  parameters: {
    chromatic: {
      viewports: [400, 500, 800, 1199]
    },
    modules: ["/modules/tm-feature-grid-a.js"]
  }
};

export const Base = () => html`
  <div style="max-width: 960px">
    <tm-feature-grid-a>
      <tm-grid-item
        cta-primary-href="/trust"
        cta-primary-title="Check Out Trust"
        description="Salesforce is committed to achieving and maintaining the trust of our customers. Integral to this mission is providing a robust compliance program that carefully considers data protection matters across our suite of services, including data submitted by customers to our services ('Customer Data')"
        img-src="/images/card-a.png"
        title="Trust & Compliance"
      ></tm-grid-item>
      <tm-grid-item
        cta-primary-href="/appexchange"
        cta-primary-title="Go To AppExchange"
        cta-primary-target="_blank"
        cta-secondary-href="/trailhead"
        cta-secondary-title="Start a Trail on Trailhead"
        cta-secondary-target="_blank"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque erat enim, eget tempor dolor gravida quis. Donec varius justo ultricies felis rhoncus convallis. "
        img-src="/images/card-a.png"
        title="App Exchange"
      ></tm-grid-item>
      <tm-grid-item
        cta-primary-href="/"
        cta-primary-title="Primary"
        cta-secondary-href="/"
        cta-secondary-title="Secondary"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque erat enim, eget tempor dolor gravida quis. Donec varius justo ultricies felis rhoncus convallis. "
        img-src="/images/card-a.png"
        title="Feature C"
      ></tm-grid-item>
    </tm-feature-grid-a>
  </div>
`;
