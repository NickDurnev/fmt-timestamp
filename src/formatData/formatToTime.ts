import roundTime from "./roundTime";
import isValidLocale from "../isValid/isValidLocale";
import isValidTimeZone from "../isValid/isValidTimeZone";

// This function formats a given input string to a time (e.g. 3:26 PM) using the specified locale and timeZone.
const formatToTime = (
  input: string,
  locale: string,
  timeZone: string
): string => {
  const roundedDate = roundTime(input); // round the input date to the nearest minute using the roundTime helper function.
  const validLocale = isValidLocale(locale); // check if passed locale is valid
  const validTimeZone = isValidTimeZone(timeZone); // check if passed timeZone is valid
  // specify the options to use when formatting the time string.
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZone: validTimeZone,
  };

  // format the rounded date as a time string using the Intl.DateTimeFormat API and the specified locale.
  const timeString: string = new Intl.DateTimeFormat(
    validLocale, // the locale to use when formatting the date.
    timeOptions // the options to use when formatting the time string.
  ).format(roundedDate);

  // return the formatted time
  return timeString;
};

export default formatToTime;

