const MS_PER_SECOND = 1000;
const S_PER_MINUTE = 60;
const S_PER_HOUR = S_PER_MINUTE * 60;
const S_PER_DAY = S_PER_HOUR * 24;
const S_PER_WEEK = S_PER_DAY * 7;
const S_PER_YEAR = S_PER_DAY * 365;
const S_PER_MONTH = S_PER_YEAR / 12;

const UNITS = [
  S_PER_YEAR,
  S_PER_MONTH,
  S_PER_WEEK,
  S_PER_DAY,
  S_PER_HOUR,
  S_PER_MINUTE,
];

const UNIT_NAMES: Array<RelativeTimeFormatUnit> = [
  "year",
  "month",
  "week",
  "day",
  "hour",
  "minute",
];

type RelativeTimeFormatUnit =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";

/**
 * Converts date to a tuple [relativeOffset, unit] like [-50,"second"], suitable
 * to be passed as arguments to @see Intl.RelativeTimeFormat
 *
 * If offset is negative, date is in the past
 *
 * @param date Date
 * @returns [relativeValue, unit]
 */
export default function toRelativeUnit(
  date: Date
): [number, RelativeTimeFormatUnit] {
  const relativeSeconds = Math.floor(
    (date.getTime() - Date.now()) / MS_PER_SECOND
  );

  for (const [i, unit] of UNITS.entries()) {
    const value = (relativeSeconds / unit) >> 0;
    if (value) return [value, UNIT_NAMES[i]];
  }

  return [relativeSeconds, "second"];
}
