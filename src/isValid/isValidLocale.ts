// This function check if passed locale is valid, if not return current browser's locale.
const isValidLocale = (locale: string): string => {
  try {
    const _ = new Intl.Locale(locale);
    return locale;
  } catch {
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }
};

export default isValidLocale;

console.log(isValidLocale("en")); // true
console.log(isValidLocale("en-US")); // true
console.log(isValidLocale("en_US")); // false
console.log(isValidLocale("invalid-locale")); // true
console.log(isValidLocale("q")); // false


