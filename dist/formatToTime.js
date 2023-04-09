import { i as c } from "./isValidLocale-d87d3605.js";
import { i as u } from "./isValidTimeZone-434ac3c1.js";
const T = (o, e, t) => {
  try {
    const n = m(o), r = c(e), s = {
      hour: "numeric",
      minute: "numeric",
      timeZone: u(t)
    };
    return new Intl.DateTimeFormat(
      r,
      // the locale to use when formatting the date.
      s
      // the options to use when formatting the time string.
    ).format(n);
  } catch {
    return null;
  }
}, m = (o) => {
  const e = new Date(o), t = e.getMinutes(), n = e.getHours();
  if (!e.getSeconds())
    return e;
  const i = t + 1 === 60 ? 0 : t + 1, s = t + 1 === 60 ? n + 1 : n;
  return e.setMinutes(i), e.setHours(s), e.setSeconds(0), e;
};
export {
  T as default
};
