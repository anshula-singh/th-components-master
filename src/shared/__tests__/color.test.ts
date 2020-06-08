import { hexToRGB, RGBToHSL } from "../color";

test("hextToRGB", () => {
  expect(hexToRGB("#000")).toEqual([0, 0, 0]);
  expect(hexToRGB("#000000")).toEqual([0, 0, 0]);
  expect(hexToRGB("#FF0000")).toEqual([255, 0, 0]);
  expect(hexToRGB("#bada55")).toEqual([186, 218, 85]);
});

test("RGBToHSL", () => {
  expect(RGBToHSL(0, 0, 0)).toEqual([0, 0, 0]);
  expect(RGBToHSL(255, 0, 0)).toEqual([0, 1, 0.5]);
  expect(RGBToHSL(186, 218, 85)).toEqual([74, 0.6, 0.6]);
});
