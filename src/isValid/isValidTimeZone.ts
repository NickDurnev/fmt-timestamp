
// This function check if passed timeZone is valid, if not return current browser's timeZone.
const isValidTimeZone = (timeZone: string): string => {
  try {
    Intl.DateTimeFormat(undefined, {timeZone: timeZone}).resolvedOptions();
    return timeZone;
  } catch (e) {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}

export default isValidTimeZone;
