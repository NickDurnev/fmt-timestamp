
// This function takes a string input representing a date and time and rounds it up to the next minute.
const roundTime = (input: string): Date => {
  // create a new Date object based on the input string.
  const date: Date = new Date(input);
  
  // cet the minutes, hours, and seconds from the Date object.
  const minutes: number = date.getMinutes();
  const hours: number = date.getHours();
  const seconds: number = date.getSeconds();
  
  // if the seconds value is 0, the time is already rounded to the nearest minute, so return the original date.
  if (!seconds) {
    return date;
  }
  
  // calculate the rounded minutes and hours values.
  const roundedMinutes: number = minutes + 1 === 60 ? 0 : minutes + 1;
  const roundedHours: number = minutes + 1 === 60 ? hours + 1 : hours;
  
  // set the new rounded minutes, hours, and seconds values on the Date object.
  date.setMinutes(roundedMinutes);
  date.setHours(roundedHours);
  date.setSeconds(0);
  
  // return the updated Date object.
  return date;
};

export default roundTime;