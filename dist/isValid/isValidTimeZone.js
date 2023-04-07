// This function check if passed timeZone is valid, if not return current browser's timeZone.
export const isValidTimeZone = (timeZone) => {
    try {
        Intl.DateTimeFormat(undefined, { timeZone: timeZone }).resolvedOptions();
        console.log(timeZone);
        return timeZone;
    }
    catch (e) {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
};
