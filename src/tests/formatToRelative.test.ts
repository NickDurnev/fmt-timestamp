import { expect, describe, it, vi } from "vitest";
import { formatRelativeTime } from '../formatData';

describe("formatRelativeTime", () => {
  vi.useFakeTimers().setSystemTime(new Date("2023-04-04T18:24:20.427Z"));
  it("positive tests", () => {
    expect(formatRelativeTime("2023-04-04T18:24:10.427Z", "en-GB")).toBe(
      "10 seconds ago"
    );
    expect(formatRelativeTime("2023-04-04T18:19:20.427Z", "en-GB")).toBe(
      "5 minutes ago"
    );
    expect(formatRelativeTime("2023-04-04T00:24:20.427Z", "en-GB")).toBe(
      "18 hours ago"
    );
    expect(formatRelativeTime("2023-04-02T18:24:20.427Z", "en-GB")).toBe(
      "2 days ago"
    );
    expect(formatRelativeTime("2023-03-10T18:24:20.427Z", "en-GB")).toBe(
      "3 weeks ago"
    );
    expect(formatRelativeTime("2022-05-03T16:24:20.427Z", "es-ES")).toBe(
      "hace 11 meses"
    );
    expect(formatRelativeTime("2023-04-04T14:24:20.427Z", "uk-UA")).toBe(
      "4 години тому"
    );
    expect(formatRelativeTime("2022-04-04T16:24:20.427Z", "en")).toBe(
      "last year"
    );
    expect(formatRelativeTime("2000-04-04T16:24:20.427Z", "en")).toBe(
      "23 years ago"
    );
    expect(formatRelativeTime("1905-01-31T22:32:20.427Z", "en")).toBe(
      "118 years ago"
    );
    expect(formatRelativeTime("2023-06-03T16:24:20.427Z", "uk")).toBe(
      "через 2 місяці"
    );
    expect(formatRelativeTime("2026-06-03T20:15:20.427Z", "en")).toBe(
      "in 3 years"
    );
  });
  it("error tests", () => {
    try {
      formatRelativeTime("2023-01-31T22", "invalid-locale");
      formatRelativeTime("2023-22-03", "en");
      formatRelativeTime("1905-02-03T16:24:20.427Z", "en");
    } catch (error) {
      expect(error).toBeInstanceOf(RangeError);
    }
  });
});
