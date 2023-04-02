const isValidLocale = (locale: string): boolean => {
  try {
    const _ = new Intl.Locale(locale);
    return true;
  } catch {
    return false;
  }
};

console.log(isValidLocale("en")); // true
console.log(isValidLocale("en-US")); // true
console.log(isValidLocale("en_US")); // false
console.log(isValidLocale("invalid-locale")); // true
console.log(isValidLocale("q")); // false
