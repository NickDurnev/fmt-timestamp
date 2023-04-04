// This function prevent from RangeError, if  we got it - we will return current browser's locale.
const isValidLocale = (locale: string): string => {
  try {
    const _ = new Intl.Locale(locale);
    return locale;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }
};

export default isValidLocale;

