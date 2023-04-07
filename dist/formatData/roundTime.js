// This function takes a string input representing a date and time and rounds it up to the next minute.
export const roundTime = (input) => {
    // create a new Date object based on the input string.
    const date = new Date(input);
    // cet the minutes, hours, and seconds from the Date object.
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // if the seconds value is 0, the time is already rounded to the nearest minute, so return the original date.
    if (!seconds) {
        return date;
    }
    // calculate the rounded minutes and hours values.
    const roundedMinutes = minutes + 1 === 60 ? 0 : minutes + 1;
    const roundedHours = minutes + 1 === 60 ? hours + 1 : hours;
    // set the new rounded minutes, hours, and seconds values on the Date object.
    date.setMinutes(roundedMinutes);
    date.setHours(roundedHours);
    date.setSeconds(0);
    // return the updated Date object.
    return date;
};
