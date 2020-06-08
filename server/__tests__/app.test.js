const fs = require("fs");
const request = require("supertest");

const createApp = require("../app");

describe("matches", () => {
  let { env } = process;
  beforeEach(() => {
    Object.assign(process.env, env);
  });

  describe("Access-Control-Allow-Origin", () => {
    describe("process.env.RESTRICT_CORS=true", () => {
      beforeEach(() => {
        process.env.RESTRICT_CORS = "true";
      });
      it("https://www.google.com", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "https://www.google.com")
          .expect(res => {
            let key = "access-control-allow-origin";
            if (res.headers[key])
              throw new Error(`Header ${key} should not be set`);
          })
          .end(done);
      });
      it("http://localhost:3000", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "http://localhost:3000")
          .expect(res => {
            let key = "access-control-allow-origin";
            if (res.headers[key])
              throw new Error(`Header ${key} should not be set`);
          })
          .end(done);
      });
      it("https://www.salesforce.com", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "https://www.salesforce.com")
          .expect(200)
          .expect("Access-Control-Allow-Origin", "https://www.salesforce.com")
          .end(done);
      });
      it("https://www.trailblazer.me", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "https://www.trailblazer.me")
          .expect(200)
          .expect("Access-Control-Allow-Origin", "https://www.trailblazer.me")
          .end(done);
      });
    });

    describe("process.env.RESTRICT_CORS=false", () => {
      beforeEach(() => {
        process.env.RESTRICT_CORS = "false";
      });
      it("http://localhost:3000", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "http://localhost:3000")
          .expect(200)
          .expect("Access-Control-Allow-Origin", "*")
          .end(done);
      });
      it("https://www.google.com", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "https://www.google.com")
          .expect(200)
          .end(done);
      });
      it("https://www.salesforce.com", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("origin", "https://www.salesforce.com")
          .expect(200)
          .end(done);
      });
    });
  });
  describe("Cache-Control", () => {
    it("top level assets (3 minutes)", done => {
      request(createApp())
        .get("/modules/tds-button.js")
        .expect(200)
        .expect("Cache-Control", /max-age=180, public/)
        .expect("Surrogate-Key", "th-components")
        .end(done);
    });
    it("chunked assets (1 year)", done => {
      let chunk = fs
        .readdirSync("./.dist/modules")
        .find(f => /\.chunk\./.test(f));
      request(createApp())
        .get(`/modules/${chunk}`)
        .expect(200)
        .expect("Cache-Control", /max-age=31536000, public/)
        .expect("Surrogate-Key", "th-components")
        .end(done);
    });
  });
  describe("IP Restrictions", () => {
    describe("process.env.RESTRICT_IPS=true", () => {
      beforeEach(() => {
        process.env.RESTRICT_IPS = "true";
      });
      it("allow", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("X-Forwarded-For", "127.0.0.1")
          .expect(200)
          .end(done);
      });
      it("deny", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("X-Forwarded-For", "108.12.226.51")
          .expect(403)
          .end(done);
      });
    });
    describe("process.env.RESTRICT_IPS=false", () => {
      beforeEach(() => {
        process.env.RESTRICT_IPS = "false";
      });
      it("allow", done => {
        request(createApp())
          .get("/modules/tds-button.js")
          .set("X-Forwarded-For", "108.12.226.51")
          .expect(200)
          .end(done);
      });
    });
  });
  describe("Storybook", () => {
    it("process.env.STORYBOOK=true", done => {
      process.env.STORYBOOK = "true";
      request(createApp())
        .get("/sb_dll/storybook_ui_dll.js")
        .expect(200)
        .end(done);
    });
    it("process.env.STORYBOOK=false", done => {
      process.env.STORYBOOK = "false";
      request(createApp())
        .get("/sb_dll/storybook_ui_dll.js")
        .expect(404)
        .end(done);
    });
  });
});
