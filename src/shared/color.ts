export function hexToRGB(h: string) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length == 4) {
    r = +("0x" + h[1] + h[1]);
    g = +("0x" + h[2] + h[2]);
    b = +("0x" + h[3] + h[3]);
  } else if (h.length == 7) {
    r = +("0x" + h[1] + h[2]);
    g = +("0x" + h[3] + h[4]);
    b = +("0x" + h[5] + h[6]);
  }
  return [r, g, b];
}

export function RGBToHSL(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;
  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +s.toFixed(1);
  l = +l.toFixed(1);
  return [h, s, l];
}

export function rgb(r: number, g: number, b: number) {
  return `rgb(${r},${g},${b})`;
}

export function hsl(h: number, s: number, l: number) {
  return `hsl(${h},${s * 100}%,${l * 100}%)`;
}

export function lightenHex(hex: string, by: number) {
  let [r, g, b] = hexToRGB(hex);
  let [h, s, l] = RGBToHSL(r, g, b);
  return hsl(h, s, l + by);
}
