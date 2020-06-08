import { label } from "../helpers";
import { LabelsDict } from "../types";

const dict: LabelsDict = {
  en: {
    foo: "foon",
    points: "%{n} points",
    attempts: "%{n} attempts"
  },
  es: {
    foo: "fol",
    fooNoRegion: "fooNoRegionValue",
    faa: "faa"
  },
  "es-MX": {
    foo: "foll",
    points: "%{n} puntos"
  }
};

describe("label", () => {
  describe("default language", () => {
    let lang = "en";

    describe("known keys", () => {
      it("finds key and returns the value", () => {
        expect(label(lang, dict, "foo")).toEqual("foon");
      });

      it("finds key and substitutes values", () => {
        expect(label(lang, dict, "points", [300])).toEqual("300 points");
      });

      it("finds key and substitutes values, and ignores overloading", () => {
        expect(label(lang, dict, "points", [300, 100])).toEqual("300 points");
      });

      it("finds key and does not substitue missing values", () => {
        expect(label(lang, dict, "points")).toEqual("%{n} points");
      });
    });

    describe("fallbacks", () => {
      it("fails to find key and returns the label", () => {
        expect(label(lang, dict, "nf")).toEqual("nf");
      });
    });
  });

  describe("language with region", () => {
    let lang = "es-MX";

    describe("known keys", () => {
      it("finds key and returns the value", () => {
        expect(label(lang, dict, "foo")).toEqual("foll");
      });

      it("finds key and substitutes values", () => {
        expect(label(lang, dict, "points", [300])).toEqual("300 puntos");
      });
    });

    describe("fallbacks", () => {
      it("fails to find key and falls back to language", () => {
        expect(label(lang, dict, "fooNoRegion")).toEqual("fooNoRegionValue");
      });

      it("fails to find key and falls back to english", () => {
        expect(label(lang, dict, "attempts", [3])).toEqual("3 attempts");
      });

      it("fails to find key and returns the label", () => {
        expect(label(lang, dict, "nf")).toEqual("nf");
      });
    });
  });

  describe("language not found", () => {
    let lang = "de";

    describe("fallbacks", () => {
      it("fails to find key and falls back to english", () => {
        expect(label(lang, dict, "faa")).toEqual("faa");
      });

      it("fails to find key and falls back to english", () => {
        expect(label(lang, dict, "attempts", [3])).toEqual("3 attempts");
      });

      it("fails to find key and returns the label", () => {
        expect(label(lang, dict, "nf")).toEqual("nf");
      });
    });
  });
});
