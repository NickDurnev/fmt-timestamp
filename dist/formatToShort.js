import { i as m } from "./isValidLocale-d87d3605.js";
import { i as l } from "./isValidTimeZone-434ac3c1.js";
const f = (o, r, a) => {
  try {
    const t = m(r), i = l(a), e = new Date(o), n = {
      day: "numeric",
      month: "short",
      // use abbreviated month names (e.g. Jan, Feb)
      year: e.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? void 0 : "2-digit",
      // include year only if it does not match current year
      // use last 2 digits of the year (e.g. 22, 15)
      timeZone: i
    };
    return new Intl.DateTimeFormat(t, n).format(e);
  } catch {
    return null;
  }
};
export {
  f as default
};
