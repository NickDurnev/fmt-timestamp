import { isValidLocale, isValidTimeZone } from "../isValid";
import funcType from "./funcType";

// This function formats a given input string to a short form of data (e.g. 31 Jan 22) using the specified locale.
const formatToShort: funcType = (input, locale, timeZone) => {
  try {
    const validLocale = isValidLocale(locale); // check if passed locale is valid
    const validTimeZone = isValidTimeZone(timeZone); // check if passed timeZone is valid
    const date = new Date(input); // get the current date
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short", // use abbreviated month names (e.g. Jan, Feb)
      year:
        date.getFullYear() === new Date().getFullYear() ? undefined : "2-digit", // include year only if it does not match current year
      // use last 2 digits of the year (e.g. 22, 15)
      timeZone: validTimeZone,
    };
    const formatter = new Intl.DateTimeFormat(validLocale, options);
    // return the formatted short form.
    return formatter.format(date);
  } catch (error) {
    return null;
  }
};

export default formatToShort;
