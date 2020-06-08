const connect = require("connect");
const cors = require("cors");
const superstatic = require("superstatic");

const ipRestrict = require("./ip");

module.exports = () => {
  const app = connect();

  let corsConfig = null;
  if (process.env.RESTRICT_CORS === "true") {
    corsConfig = {
      origin: [/salesforce\.com$/, /trailblazer\.me$/]
    };
  }

  app.use(cors(corsConfig));

  if (process.env.RESTRICT_IPS === "true") {
    app.use(ipRestrict.middleware);
  }

  app.use(
    superstatic({
      config: {
        cleanUrls: true,
        public: ".dist",
        headers: [
          {
            source: "**/*",
            headers: [
              {
                key: "Cache-Control",
                value: "max-age=180, public"
              },
              {
                key: "Surrogate-Key",
                value: "th-components"
              }
            ]
          },
          {
            source: "**/*.chunk.{css,js}",
            headers: [
              {
                key: "Cache-Control",
                value: "max-age=31536000, public"
              },
              {
                key: "Surrogate-Key",
                value: "th-components"
              }
            ]
          }
        ]
      }
    })
  );

  if (process.env.STORYBOOK === "true") {
    app.use(
      superstatic({
        config: {
          cleanUrls: true,
          public: ".storybook-static"
        }
      })
    );
  }

  return app;
};
