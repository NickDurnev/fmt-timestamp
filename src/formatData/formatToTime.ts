import {MemoizedDateTimeFormat} from '../cache/memoizeFormatConstructor';
import funcType from "./funcType";

// This function formats a given input string to a time (e.g. 3:26 PM) using the specified locale and timeZone.
const formatToTime: funcType = (input, locale, timeZone) => {
  try {
    const date: Date = new Date(input); // convert the input string to a Date object
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      timeZone: timeZone,
    };

    // format the rounded date as a time string using the Intl.DateTimeFormat API and the specified locale.
    const timeString: string = MemoizedDateTimeFormat(
      locale, // the locale to use when formatting the date.
      options, // the options to use when formatting the time string.
      'ToTime' // function marker for caching.
    ).format(date);

    // return the formatted time
    return timeString;
  } catch (error) {
    return null;
  }
};

export default formatToTime;
