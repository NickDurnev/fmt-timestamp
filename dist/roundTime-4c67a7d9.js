const i = (o, t, e) => {
  try {
    const n = c(o), s = {
      hour: "numeric",
      minute: "numeric",
      timeZone: e
    };
    return new Intl.DateTimeFormat(
      t,
      // the locale to use when formatting the date.
      s
      // the options to use when formatting the time string.
    ).format(n);
  } catch {
    return null;
  }
}, c = (o) => {
  const t = new Date(o), e = t.getMinutes(), n = t.getHours();
  if (!t.getSeconds())
    return t;
  const r = e + 1 === 60 ? 0 : e + 1, u = e + 1 === 60 ? n + 1 : n;
  return t.setMinutes(r), t.setHours(u), t.setSeconds(0), t;
};
export {
  i as f,
  c as r
};
