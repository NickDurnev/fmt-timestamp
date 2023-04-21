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

export const memoizeFormatConstructor: HigherOrderFunction = (Constructor) => {
  const { name } = Constructor;
  const cache = new Map();
  const cached: cachedFuncType = (locale, options, formatTimeName) => {
    const cachedName = `${name} ${formatTimeName ?? ''} ${locale ?? ''} ${options?.timeZone ?? ''}`;
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

//For checking cache - use MemoizedRelativeTimeFormat.cache or MemoizedDateTimeFormat.cache
