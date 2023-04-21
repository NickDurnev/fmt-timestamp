import {MemoizedDateTimeFormat} from '../cache/memoizeFormatConstructor'

// This function check if passed timeZone is valid, if not return current browser's timeZone.
export const timeZoneChecking = (timeZone: string): string => {
  try {
    MemoizedDateTimeFormat(undefined, { timeZone: timeZone }, 'timeZoneChecking').resolvedOptions();
    return timeZone;
  } catch (e) {
    return MemoizedDateTimeFormat(undefined, {},'defaultTimeZone').resolvedOptions().timeZone;
  }
}
