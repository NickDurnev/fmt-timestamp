const roundTime = (input: string): Date => {
  const date: Date = new Date(input);
  const minutes: number = date.getMinutes();
  const hours: number = date.getHours();
  const seconds: number = date.getSeconds();
  if (!seconds) {
    return date;
  }
  const roundedMinutes: number = minutes + 1 === 60 ? 0 : minutes + 1;
  const roundedHours: number = minutes + 1 === 60 ? hours + 1 : hours;
  date.setMinutes(roundedMinutes);
  date.setHours(roundedHours);
  date.setSeconds(0);
  return date;
};

export default roundTime;
