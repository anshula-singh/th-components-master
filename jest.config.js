module.exports = {
  preset: "@lwc/jest-preset",
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^(tds|th|tm|ui)/(.+)$": "<rootDir>/src/elements/$1/$2/$2"
  },
  setupFilesAfterEnv: ["./jest/setup.ts"],
  testEnvironment: "jest-environment-jsdom-sixteen",
  transformIgnorePatterns: ["node_modules/(?!lit-html)"],
  testPathIgnorePatterns: ["/node_modules/", "\\.trailheadui"]
};
