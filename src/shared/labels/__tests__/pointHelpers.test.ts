import { pointLabel } from "../pointHelpers";

describe("pointLabel", () => {
  describe("en", () => {
    let lang = "en";

    it("returns correct values", () => {
      expect(pointLabel(lang, 0)).toEqual("0 Points");
      expect(pointLabel(lang, 1)).toEqual("+1 Point");
      expect(pointLabel(lang, 10)).toEqual("+10 Points");
    });
  });

  describe("es-MX", () => {
    let lang = "es-MX";

    it("returns correct values", () => {
      expect(pointLabel(lang, 0)).toEqual("0 puntos");
      expect(pointLabel(lang, 1)).toEqual("+1 punto");
      expect(pointLabel(lang, 10)).toEqual("+10 puntos");
    });
  });

  describe("fj", () => {
    let lang = "fj";

    it("returns correct values", () => {
      expect(pointLabel(lang, 0)).toEqual("0 Points");
      expect(pointLabel(lang, 1)).toEqual("+1 Point");
      expect(pointLabel(lang, 10)).toEqual("+10 Points");
    });
  });
});
