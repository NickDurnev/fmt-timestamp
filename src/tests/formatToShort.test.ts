import { expect, describe, it } from "vitest";
import { formatToShort } from '../formatData';

describe("formatToShort", () => {
  it("positive tests", () => {
    expect(
      formatToShort("2023-01-31T22:32:20.427Z", "en-GB", "Europe/Kiev")
    ).toBe("1 Feb");
    expect(
      formatToShort("2023-01-31T22:32:20.427Z", "en", "America/Los_Angeles")
    ).toBe("Jan 31");
    expect(formatToShort("2022-03-23T22:32:20.427Z", "111", "qqq")).toBe(
      "Mar 24, 22"
    );
    expect(
      formatToShort("2022-04-10T22:32:20.427Z", "en-GB", "Europe/Kiev")
    ).toBe("11 Apr 22");
  });
  it("error tests", () => {
    try {
      formatToShort("2023-01-31T22", "en", "America/Los_Angeles");
      formatToShort("2023-22-03", "en", "Europe/Berlin");
      formatToShort("123-02-32", "en", "Europe/Berlin");
    } catch (error) {
      expect(error).toBeInstanceOf(RangeError);
    }
  });
});
