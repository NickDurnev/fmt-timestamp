const roundTime = (input) => {
    const date = new Date(input);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    if (!seconds) {
        return date;
    }
    const roundedMinutes = minutes + 1 === 60 ? 0 : minutes + 1;
    const roundedHours = minutes + 1 === 60 ? hours + 1 : hours;
    date.setMinutes(roundedMinutes);
    date.setHours(roundedHours);
    date.setSeconds(0);
    return date;
};
export default roundTime;
