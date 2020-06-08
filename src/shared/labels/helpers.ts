import { LabelsDict } from "./types";

const DEFAULT_LANGUAGE = "en";

export function label(
  lang: string,
  dict: LabelsDict,
  labelKey: string,
  values: (string | number)[] = []
): string {
  let [langBase] = lang.split("-");
  let labels = {
    ...dict[DEFAULT_LANGUAGE],
    ...dict[langBase],
    ...dict[lang]
  };
  let str = labels[labelKey];
  if (str === undefined) return labelKey;
  for (let val of values) {
    str = str.replace("%{n}", val.toString());
  }
  return str;
}
