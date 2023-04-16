import { expect, describe, it } from "vitest";
import { formatToShort } from '../formatData';

describe("formatToShort", () => {
  it("positive tests", () => {
    expect(
      formatToShort("2023-01-31T22:32:20.427Z", "en-GB", "Europe/Kiev", 2023)
    ).toBe("1 Feb");
    expect(
      formatToShort("2023-01-31T22:32:20.427Z", "en", "America/Los_Angeles", 2023)
    ).toBe("Jan 31");
    expect(
      formatToShort("2022-04-10T22:32:20.427Z", "en-GB", "Europe/Kiev", 2023)
    ).toBe("11 Apr 22");
  });
  it("error tests", () => {
    try {
      formatToShort("2023-01-31T22", "en", "America/Los_Angeles", 2020);
      formatToShort("2023-22-03", "en", "Europe/Berlin", 2019);
      formatToShort("123-02-32", "en", "Europe/Berlin", 2018);
    } catch (error) {
      expect(error).toBeInstanceOf(RangeError);
    }
  });
});
