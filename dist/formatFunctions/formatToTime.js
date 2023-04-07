import roundTime from "./roundTime";
const formatToTime = (input, locale) => {
    const roundedDate = roundTime(input);
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
    };
    const timeString = new Intl.DateTimeFormat(locale, timeOptions).format(roundedDate);
    console.log(timeString);
    return timeString;
};
formatToTime("2023-03-29T12:25:07.427Z", "en");
