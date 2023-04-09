import {isValidLocale} from '../isValid'
import funcType from "./funcType";

// This function formats a given input string to a relative form of data (e.g. 2 days ago) using the specified locale.
const formatRelativeTime: funcType = (input, locale) => {
  try {
      const validLocale = isValidLocale(locale); // check if passed locale is valid
  const date: Date = new Date(input); // convert the input string to a Date object
  const diff = date.getTime() - new Date().getTime();  // calculate the time difference between the input date and the current date
  const rtf = new Intl.RelativeTimeFormat(validLocale, { numeric: "auto" });   // create a new Intl.RelativeTimeFormat object with the valid locale and auto numeric style
  
  const seconds = Math.round(Math.abs(diff) / 1000); // calculate the number of seconds in the time difference
  // if the time difference is less than 60 seconds, return the relative time string for seconds
  if (seconds < 60) {
    return rtf.format(Math.sign(diff) * seconds, "second");
  }

  const minutes = Math.round(seconds / 60);   // calculate the number of minutes in the time difference
  // if the time difference is less than 60 minutes, return the relative time string for minutes
  if (minutes < 60) {
    return rtf.format(Math.sign(diff) * minutes, "minute");
  }

  // calculate the number of hours in the time difference
  const hours = Math.round(minutes / 60);
  // if the time difference is less than 24 hours, return the relative time string for hours
  if (hours < 24) {
    return rtf.format(Math.sign(diff) * hours, "hour");
  }

  // calculate the number of days in the time difference
  const days = Math.round(hours / 24);
  // if the time difference is less than 7 days, return the relative time string for days
  if (days < 7) {
    return rtf.format(Math.sign(diff) * days, "day");
  }

  // calculate the number of weeks in the time difference
  const weeks = Math.round(days / 7);
  // if the time difference is less than 4 weeks, return the relative time string for weeks
  if (weeks < 4) {
    return rtf.format(Math.sign(diff) * weeks, "week");
  }

  // calculate the number of months in the time difference
  const months = Math.round(weeks / 4);
  // if the time difference is less than 12 months, return the relative time string for months
  if (months < 12) {
    return rtf.format(Math.sign(diff) * months, "months");
  }

  // calculate the number of years in the time difference
  const years = Math.round(months / 12);
  // return the relative time string for years
  return rtf.format(Math.sign(diff) * years, "years");

  } catch (error) {
    return null
  }
};

export default formatRelativeTime;


