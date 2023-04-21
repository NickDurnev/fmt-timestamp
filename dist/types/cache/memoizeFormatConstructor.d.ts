type funcType = {
    (locale?: string, options?: {
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        numeric?: string;
        timeZone?: string;
    }, formatTimeName?: string): any;
};
type cachedFuncType = funcType & {
    cache: Map<string, any>;
};
type HigherOrderFunction = (func: any) => cachedFuncType;
export declare const memoizeFormatConstructor: HigherOrderFunction;
export declare const MemoizedRelativeTimeFormat: cachedFuncType;
export declare const MemoizedDateTimeFormat: cachedFuncType;
export {};
//# sourceMappingURL=memoizeFormatConstructor.d.ts.map