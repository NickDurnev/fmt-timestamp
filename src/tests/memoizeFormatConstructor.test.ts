import { expect, describe, it, vi } from "vitest";
import {
  memoizeFormatConstructor,
  MemoizedRelativeTimeFormat,
  MemoizedDateTimeFormat,
} from "../cache/memoizeFormatConstructor";

describe("memoizeFormatConstructor", () => {
  it("should return a function with a cache property", () => {
    const func = () => {};
    const memoizedFunc = memoizeFormatConstructor(func);
    expect(typeof memoizedFunc).toBe("function");
    expect(memoizedFunc.cache instanceof Map).toBe(true);
  });

  it("should return the same output when given the same input multiple times", () => {
    const Constructor = vi.fn(() => ({}));
    const memoizedFunc = memoizeFormatConstructor(Constructor);

    const outputOne = memoizedFunc("en", { year: "numeric" }, "time-name");
    const outputTwo = memoizedFunc("en", { year: "numeric" }, "time-name");
    const outputThree = memoizedFunc("en", { year: "numeric" }, "time-name");

    expect(Constructor.mock.calls.length).toBe(1);
    expect(outputOne).toBe(outputTwo);
    expect(outputOne).toBe(outputThree);
  });

  it("should create a new cached value when given different input", () => {
    const Constructor = vi.fn(() => ({}));
    const memoizedFunc = memoizeFormatConstructor(Constructor);

    const outputOne = memoizedFunc("en", { year: "numeric" }, "time-name");
    const outputTwo = memoizedFunc(
      "fr",
      { year: "2-digit" },
      "another-time-name"
    );

    expect(Constructor.mock.calls.length).toBe(2);
    expect(outputOne).not.toBe(outputTwo);
  });
});

describe("MemoizedRelativeTimeFormat", () => {
  it("should return a value from cache when given the same input multiple times", () => {
    const outputOne = MemoizedRelativeTimeFormat("en", { numeric: "always" });
    const outputTwo = MemoizedRelativeTimeFormat("en", { numeric: "always" });

    expect(outputOne).toBe(outputTwo);
  });
});

describe("MemoizedDateTimeFormat", () => {
  it("should return a value from cache when given the same input multiple times", () => {
    const outputOne = MemoizedDateTimeFormat("en", { year: "numeric" });
    const outputTwo = MemoizedDateTimeFormat("en", { year: "numeric" });

    expect(outputOne).toBe(outputTwo);
  });
});
