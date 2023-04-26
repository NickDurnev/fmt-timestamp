import { Mode, Cache } from ".";
import toRelativeUnit from "./toRelativeUnit";

export type DateFormatterFunc = (date: Date) => string;

const THIS_YEAR = new Date().getFullYear();

const formatters = new Cache<DateFormatterFunc>();

/**
 * Returns date formatter instances.
 *
 * Efficiently caches returned formatters using WeakRef @see Cache
 *
 * @param mode Mode
 * @param locale string | undefined
 * @param timeZone string | undefined
 * @returns DateFormatterFunc
 */
export function localizedFormatter(
  mode: Mode,
  locale?: string,
  timeZone?: string
): DateFormatterFunc {
  const key = [mode, locale, timeZone].toString();
  let formatter = formatters.get(key);
  if (formatter) {
    console.debug("cache hit", key);
    return formatter;
  }
  console.debug("cache miss", key);
  switch (mode) {
    case Mode.Date:
      const thisYearOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        timeZone,
      };
      const thisYearFormatter = new Intl.DateTimeFormat(
        locale,
        thisYearOptions
      );
      const otherYearFormatter = new Intl.DateTimeFormat(locale, {
        ...thisYearOptions,
        year: "2-digit",
      });
      formatter = (d) =>
        d.getFullYear() === THIS_YEAR
          ? thisYearFormatter.format(d)
          : otherYearFormatter.format(d);
      break;

    case Mode.Time:
      const timeFormatter = new Intl.DateTimeFormat(locale, {
        timeStyle: "short",
        timeZone,
      });
      formatter = timeFormatter.format;
      break;

    default: // Mode.Relative
      const relativeFormatter = new Intl.RelativeTimeFormat(locale, {
        style: "short",
        numeric: "auto",
      });
      formatter = (d) => relativeFormatter.format(...toRelativeUnit(d));
  }
  formatters.set(key, formatter);
  return formatter;
}
