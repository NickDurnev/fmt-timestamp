import { expect, describe, it } from "vitest";
import { formatToTime } from '../formatData';

describe("formatToTime", () => {
  it("positive tests", () => {
    expect(
      formatToTime("2023-03-29T12:25:07.427Z", "en", "America/Los_Angeles")
    ).toBe("5:25 AM");
    expect(
      formatToTime("2023-03-29T20:25:07.427Z", "en", "America/Los_Angeles")
    ).toBe("1:25 PM");
    expect(
      formatToTime("2023-03-29T12:25:07.427Z", "uk-UA", "Europe/Kiev")
    ).toBe("15:25");
    expect(
      formatToTime("2023-03-29T12:25:07.427Z", "de-DE", "Europe/Berlin")
    ).toBe("14:25");
    it("error tests", () => {
      try {
        formatToTime("2023-01-31T22", "en", "America/Los_Angeles");
        formatToTime("2023-22-03", "en", "Europe/Berlin");
        formatToTime("123-02-32", "en", "Europe/Berlin");
      } catch (error) {
        expect(error).toBeInstanceOf(RangeError);
      }
    });
  });
});
