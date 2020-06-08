import { LabelsDict } from "./types";
import { label } from "./helpers";

export const labels: LabelsDict = {
  en: {
    zero: "0 Points",
    one: "+1 Point",
    many: "+%{n} Points"
  },
  de: {
    zero: "0 Punkte",
    one: "+1 Punkt",
    many: "+%{n} Punkte"
  },
  es: {
    zero: "0 puntos",
    one: "+1 punto",
    many: "+%{n} puntos"
  },
  fr: {
    zero: "0 point",
    one: "+ 1 point",
    many: "+ %{n} points"
  },
  ja: {
    zero: "0 ポイント",
    one: "+1 ポイント",
    many: "+%{n} ポイント"
  },
  pt: {
    zero: "0 pontos",
    one: "+1 ponto",
    many: "+%{n} pontos"
  }
};

export function pointLabel(lang: string, points: number | undefined) {
  if (points !== undefined) {
    if (points === 0) {
      return label(lang, labels, "zero", [points]);
    } else if (points === 1) {
      return label(lang, labels, "one", [points]);
    } else {
      return label(lang, labels, "many", [points]);
    }
  }
}
