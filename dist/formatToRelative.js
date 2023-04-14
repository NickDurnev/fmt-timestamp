const h = (f, m) => {
  try {
    const t = new Date(f).getTime() - (/* @__PURE__ */ new Date()).getTime(), e = new Intl.RelativeTimeFormat(m, { numeric: "auto" }), n = Math.abs(t) / 1e3 >> 0;
    if (n < 60)
      return e.format(Math.sign(t) * n, "second");
    const r = n / 60 >> 0;
    if (r < 60)
      return e.format(Math.sign(t) * r, "minute");
    const a = r / 60 >> 0;
    if (a < 24)
      return e.format(Math.sign(t) * a, "hour");
    const s = a / 24 >> 0;
    if (s < 7)
      return e.format(Math.sign(t) * s, "day");
    const o = s / 7 >> 0;
    if (o < 4)
      return e.format(Math.sign(t) * o, "week");
    const i = o / 4 >> 0;
    if (i < 12)
      return e.format(Math.sign(t) * i, "months");
    const u = i / 12 >> 0;
    return e.format(Math.sign(t) * u, "years");
  } catch {
    return null;
  }
};
export {
  h as default
};
