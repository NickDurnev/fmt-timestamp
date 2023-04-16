
import { expect, describe, it, vi } from "vitest";
import { localeChecking } from '../attrsChecking/localeChecking';

describe("localeChecking", () => {
    const mockFn = vi.fn().mockImplementation(() => Intl.DateTimeFormat().resolvedOptions().locale);
    const brwoserLocale = mockFn();
    it('isValid locale tests', () => {
        expect(localeChecking('en')).toBe('en');
        expect(localeChecking('uk-UA')).toBe('uk-UA');
        expect(localeChecking('ja-JP')).toBe('ja-JP');
    });
     it('notError tests', () => {
        expect(localeChecking('invalid-locale')).toBe('invalid-locale');
        expect(localeChecking('qqqqqqqq-qqqq')).toBe('qqqqqqqq-qqqq');
    });
    it('RangeError tests', () => {
        expect(localeChecking('111')).toBe(brwoserLocale);
        expect(localeChecking('abcabqwewqe')).toBe(brwoserLocale);
        expect(localeChecking('random123')).toBe(brwoserLocale);
    })
})