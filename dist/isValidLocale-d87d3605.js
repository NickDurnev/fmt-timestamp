const n = (t) => {
  try {
    const e = new Intl.Locale(t);
    return t;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }
};
export {
  n as i
};
