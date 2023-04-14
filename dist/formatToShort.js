const l = (r, e, o) => {
  try {
    const t = new Date(r), a = {
      day: "numeric",
      month: "short",
      // use abbreviated month names (e.g. Jan, Feb)
      year: t.getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? void 0 : "2-digit",
      // include year only if it does not match current year
      // use last 2 digits of the year (e.g. 22, 15)
      timeZone: o
    };
    return new Intl.DateTimeFormat(e, a).format(t);
  } catch {
    return null;
  }
};
export {
  l as default
};
