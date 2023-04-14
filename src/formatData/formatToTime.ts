import { roundTime } from "./index";
import funcType from "./funcType";

// This function formats a given input string to a time (e.g. 3:26 PM) using the specified locale and timeZone.
const formatToTime: funcType = (input, locale, timeZone) => {
  try {
    const roundedDate = roundTime(input); // round the input date to the nearest minute using the roundTime helper function.
    // specify the options to use when formatting the time string.
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      timeZone: timeZone,
    };

    // format the rounded date as a time string using the Intl.DateTimeFormat API and the specified locale.
    const timeString: string = new Intl.DateTimeFormat(
      locale, // the locale to use when formatting the date.
      timeOptions // the options to use when formatting the time string.
    ).format(roundedDate);

    // return the formatted time
    return timeString;
  } catch (error) {
    return null;
  }
};

export default formatToTime;