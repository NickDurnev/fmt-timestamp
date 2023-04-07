// This function prevent from RangeError, if  we got it - we will return current browser's locale.
export const isValidLocale = (locale) => {
    try {
        const _ = new Intl.Locale(locale);
        return locale;
    }
    catch {
        return Intl.DateTimeFormat().resolvedOptions().locale;
    }
};
