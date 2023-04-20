import {MemoizedRelativeTimeFormat} from '../cache/memoizeFormatConstructor';
import funcType from "./funcType";

// This function formats a given input string to a relative form of data (e.g. 2 days ago) using the specified locale.
const formatRelativeTime: funcType = (input, locale) => {
  try {
    const date: Date = new Date(input); // convert the input string to a Date object
    const diff = date.getTime() - new Date().getTime(); // calculate the time difference between the input date and the current date
    const sign = Math.sign(diff);
    const abs = Math.abs(diff);
    const msInMonth = 1000 * 60 * 60 * 24 * 30;
    const msInYear = 1000 * 60 * 60 * 24 * 365;

    const rtf = MemoizedRelativeTimeFormat(locale, { numeric: "auto" }); // create a new Intl.RelativeTimeFormat object with the valid locale and auto numeric style

    const seconds = abs / 1000;
    // if the time difference is less than 60 seconds, return the relative time string for seconds
    if (seconds < 60) {
      return rtf.format(sign * seconds, "second");
    }

    const minutes = (seconds / 60) >> 0; // calculate the number of minutes in the time difference
    // if the time difference is less than 60 minutes, return the relative time string for minutes
    if (minutes < 60) {
      return rtf.format(sign * minutes, "minute");
    }

    // calculate the number of hours in the time difference
    const hours = (minutes / 60) >> 0;
    // if the time difference is less than 24 hours, return the relative time string for hours
    if (hours < 24) {
      return rtf.format(sign * hours, "hour");
    }

    // calculate the number of days in the time difference
    const days = (hours / 24) >> 0;
    // if the time difference is less than 7 days, return the relative time string for days
    if (days < 7) {
      return rtf.format(sign * days, "day");
    }

    // calculate the number of weeks in the time difference
    const weeks = (days / 7) >> 0;
    // if the time difference is less than 4 weeks, return the relative time string for weeks
    if (weeks < 4) {
      return rtf.format(sign * weeks, "week");
    }

    // calculate the number of months in the time difference
    const months = Math.round(abs / msInMonth);

    // if the time difference is less than 12 months, return the relative time string for months
    if (months < 12) {
      return rtf.format(sign * months, "months");
    }

    // calculate the number of years in the time difference
    const years = (abs / msInYear) >> 0; // calculate the number of years in the time difference
    // return the relative time string for years
    return rtf.format(sign * years, "years");
  } catch (error) {
    return null;
  }
};

export default formatRelativeTime;
