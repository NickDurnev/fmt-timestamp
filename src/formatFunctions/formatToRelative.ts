const formatRelativeTime = (input: string, locale: string): string => {
  const now = new Date();
  const date: Date = new Date(input);
  const diff = date.getTime() - now.getTime();
  const seconds = Math.round(Math.abs(diff) / 1000);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (seconds < 60) {
    return rtf.format(Math.sign(diff) * seconds, "second");
  }

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) {
    return rtf.format(Math.sign(diff) * minutes, "minute");
  }

  const hours = Math.round(minutes / 60);
  if (hours < 24) {
    return rtf.format(Math.sign(diff) * hours, "hour");
  }

  const days = Math.round(hours / 24);
  if (days < 7) {
    return rtf.format(Math.sign(diff) * days, "day");
  }

  const weeks = Math.round(days / 7);
  if (weeks < 4) {
    return rtf.format(Math.sign(diff) * weeks, "week");
  }

  const months = Math.round(weeks / 4);
  if (months < 12) {
    return rtf.format(Math.sign(diff) * months, "months");
  }

  const years = Math.round(months / 12);
  return rtf.format(Math.sign(diff) * years, "years");
}

console.log(formatRelativeTime("2023-03-31T14:32:20.427Z", "en-GB"));
