function isValidLanguage(language) {
    try {
        const locales = Intl.getCanonicalLocales(language);
        return locales.length > 0 && locales[0].split('-')[0] === language;
    }
    catch {
        return false;
    }
}
console.log(isValidLanguage('en')); // true
console.log(isValidLanguage('uk')); // true
console.log(isValidLanguage('uuuuuu')); // true
console.log(isValidLanguage('en-US')); // false
console.log(isValidLanguage('invalid-language')); // false
