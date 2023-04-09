import { i as f } from "./isValidLocale-d87d3605.js";
const l = (h, m) => {
  try {
    const u = f(m), t = new Date(h).getTime() - (/* @__PURE__ */ new Date()).getTime(), n = new Intl.RelativeTimeFormat(u, { numeric: "auto" }), r = Math.round(Math.abs(t) / 1e3);
    if (r < 60)
      return n.format(Math.sign(t) * r, "second");
    const a = Math.round(r / 60);
    if (a < 60)
      return n.format(Math.sign(t) * a, "minute");
    const e = Math.round(a / 60);
    if (e < 24)
      return n.format(Math.sign(t) * e, "hour");
    const o = Math.round(e / 24);
    if (o < 7)
      return n.format(Math.sign(t) * o, "day");
    const s = Math.round(o / 7);
    if (s < 4)
      return n.format(Math.sign(t) * s, "week");
    const i = Math.round(s / 4);
    if (i < 12)
      return n.format(Math.sign(t) * i, "months");
    const c = Math.round(i / 12);
    return n.format(Math.sign(t) * c, "years");
  } catch {
    return null;
  }
};
export {
  l as default
};
