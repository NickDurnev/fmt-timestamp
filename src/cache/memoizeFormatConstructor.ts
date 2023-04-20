type funcType = {
  (
    locale?: string,
    options?: {
      year?: string;
      month?: string;
      day?: string;
      hour?: string;
      minute?: string;
      numeric?: string;
      timeZone?: string;
    },
    formatTimeName?: string
  ): any;
};

type cachedFuncType = funcType & { cache: Map<string, any> };

type HigherOrderFunction = (func: any) => cachedFuncType;

const memoizeFormatConstructor: HigherOrderFunction = (Constructor) => {
  const { name } = Constructor;
  const cache = new Map();
  const cached: cachedFuncType = (locale, options, formatTimeName) => {
    const cachedName = `${name} ${formatTimeName ?? ''} ${locale} ${options.timeZone ?? ""}`;
    return cache.has(cachedName)
      ? cache.get(cachedName).value
      : cache
          .set(cachedName, {
            locale,
            options,
            value: new Constructor(locale, options),
          })
          .get(cachedName).value;
  };
  cached.cache = cache;
  return cached;
};

export const MemoizedRelativeTimeFormat = memoizeFormatConstructor(
  Intl.RelativeTimeFormat
);

export const MemoizedDateTimeFormat = memoizeFormatConstructor(Intl.DateTimeFormat);

// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const date: Date = new Date("2024-02-01T22:32:20.427Z");

// const memo1 = MemoizedRelativeTimeFormat("en", { numeric: "auto" });
// const memo2 = MemoizedRelativeTimeFormat("en", { numeric: "auto" });
// const memo3 = MemoizedRelativeTimeFormat("uk", { numeric: "auto" });

// const memo4 = MemoizedDateTimeFormat("uk", {
//   hour: "numeric",
//   minute: "numeric",
//   timeZone: timezone,
// });

// const memo5 = MemoizedDateTimeFormat("uk", {
//   hour: "numeric",
//   minute: "numeric",
//   timeZone: "Europe/Berlin",
// });
// console.log(memo1.format(-1, "second")); // Output: 1 second ago
// console.log(memo2.format(-2, "second")); // Output: 1 second ago
// console.log(memo3.format(-2, "second")); // Output: 1 second ago
// console.log(memo4.format(date)); // Output: 1 second ago
// console.log(memo5.format(date)); // Output: 1 second ago

console.log(MemoizedRelativeTimeFormat.cache);
console.log(MemoizedDateTimeFormat.cache);
