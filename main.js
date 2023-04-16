import {
  formatRelativeTime,
  formatToShort,
  formatToTime,
} from "https://unpkg.com/@nick_durnev/fmt-timestamp@1.0.1/dist/index.js";

console.log(formatRelativeTime("2023-03-29T12:25:07.427Z"));
console.log(
  formatToShort("2023-01-31T22:32:20.427Z", "en", "America/Los_Angeles")
);
console.log(formatToTime("2023-03-29T12:25:07.427Z", "de-DE", "Europe/Berlin"));
