import { expect, describe, it } from "vitest";
import roundTime from "../formatData/roundTime";

describe("roundTime", () => {
  it("positive tests", () => {
    expect(
      roundTime("2023-01-31T22:32:20.427Z")
    ).toEqual(new Date("2023-01-31T22:33:00.427Z"));
    expect(
      roundTime("2023-01-31T22:59:30.427Z")
    ).toEqual(new Date("2023-01-31T23:00:00.427Z"));
       expect(
      roundTime("2023-01-31T22:59:00.427Z")
    ).toEqual(new Date("2023-01-31T22:59:00.427Z"));
  });
  it("negative tests", () => {
        expect(roundTime("2023-0")).toEqual(new Date(NaN));;
        expect(roundTime("qqq")).toEqual(new Date(NaN));;
        expect(roundTime("qqq")).toEqual(new Date(NaN));;
  });
});
