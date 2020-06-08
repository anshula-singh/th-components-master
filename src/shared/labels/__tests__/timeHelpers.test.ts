import { hoursMinutesLabel, hoursMinutesLeftLabel } from "../timeHelpers";

describe("hoursMinutesLabel", () => {
  let subject = hoursMinutesLabel;

  describe("en", () => {
    let lang = "en";

    it("returns correct values", () => {
      expect(subject(lang, 0)).toEqual("");
      expect(subject(lang, 1)).toEqual("~1 min");
      expect(subject(lang, 10)).toEqual("~10 mins");
      expect(subject(lang, 60)).toEqual("~1 hr");
      expect(subject(lang, 61)).toEqual("~1 hr 1 min");
      expect(subject(lang, 62)).toEqual("~1 hr 2 mins");
      expect(subject(lang, 120)).toEqual("~2 hrs");
      expect(subject(lang, 121)).toEqual("~2 hrs 1 min");
      expect(subject(lang, 122)).toEqual("~2 hrs 2 mins");
    });
  });

  describe("es-MX", () => {
    let lang = "es-MX";

    it("falls back to es", () => {
      expect(subject(lang, 0)).toEqual("");
      expect(subject(lang, 1)).toEqual("~1 minuto");
      expect(subject(lang, 10)).toEqual("~10 minutos");
      expect(subject(lang, 60)).toEqual("~1 hora");
      expect(subject(lang, 61)).toEqual("~1 hora 1 minuto");
      expect(subject(lang, 62)).toEqual("~1 hora 2 minutos");
      expect(subject(lang, 120)).toEqual("~2 horas");
      expect(subject(lang, 121)).toEqual("~2 horas 1 minuto");
      expect(subject(lang, 122)).toEqual("~2 horas 2 minutos");
    });
  });

  describe("fj", () => {
    let lang = "fj";

    it("falls back to en", () => {
      expect(subject(lang, 1)).toEqual("~1 min");
    });
  });
});

describe("hoursMinutesLeftLabel", () => {
  let subject = hoursMinutesLeftLabel;

  describe("en", () => {
    let lang = "en";

    it("returns correct values", () => {
      expect(subject(lang, 0)).toEqual("");
      expect(subject(lang, 1)).toEqual("~1 min left");
      expect(subject(lang, 10)).toEqual("~10 mins left");
      expect(subject(lang, 60)).toEqual("~1 hr left");
      expect(subject(lang, 61)).toEqual("~1 hr 1 min left");
      expect(subject(lang, 62)).toEqual("~1 hr 2 mins left");
      expect(subject(lang, 120)).toEqual("~2 hrs left");
      expect(subject(lang, 121)).toEqual("~2 hrs 1 min left");
      expect(subject(lang, 122)).toEqual("~2 hrs 2 mins left");
    });
  });

  describe("es-MX", () => {
    let lang = "es-MX";

    it("falls back to es", () => {
      expect(subject(lang, 0)).toEqual("");
      expect(subject(lang, 1)).toEqual("~1 minuto restante");
      expect(subject(lang, 10)).toEqual("~10 minutos restantes");
      expect(subject(lang, 60)).toEqual("~1 hora restante");
      expect(subject(lang, 61)).toEqual("~1 hora 1 minuto restantes");
      expect(subject(lang, 62)).toEqual("~1 hora 2 minutos restantes");
      expect(subject(lang, 120)).toEqual("~2 horas restantes");
      expect(subject(lang, 121)).toEqual("~2 horas 1 minuto restantes");
      expect(subject(lang, 122)).toEqual("~2 horas 2 minutos restantes");
    });
  });

  describe("fj", () => {
    let lang = "fj";

    it("falls back to en", () => {
      expect(subject(lang, 1)).toEqual("~1 min left");
    });
  });
});
