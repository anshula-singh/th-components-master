export const ASSETS_URL =
  process.env.CROSS_ORIGIN_ASSETS === "true"
    ? String(process.env.IMPORT_META_URL).replace(/\/modules.*/, "")
    : "/ui";
