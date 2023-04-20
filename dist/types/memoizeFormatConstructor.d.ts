type funcType = {
    (locale: string, options: {
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        numeric?: string;
        timeZone?: string;
    }): any;
};
type cachedFuncType = funcType & {
    cache: Map<string, any>;
};
type HigherOrderFunction = (func: any) => cachedFuncType;
declare const memoizeFormatConstructor: HigherOrderFunction;
export default memoizeFormatConstructor;
//# sourceMappingURL=memoizeFormatConstructor.d.ts.map