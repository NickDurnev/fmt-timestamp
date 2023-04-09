const o = (e) => {
  try {
    return Intl.DateTimeFormat(void 0, { timeZone: e }).resolvedOptions(), console.log(e), e;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
};
export {
  o as i
};
