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
export declare const MemoizedRelativeTimeFormat: cachedFuncType;
export declare const MemoizedDateTimeFormat: cachedFuncType;
export {};
//# sourceMappingURL=memoizeFormatConstructor.d.ts.map