import { expect, describe, it, vi } from "vitest";
import { isValidLocale } from '../isValid';
describe("isValidLocale", () => {
    const mockFn = vi.fn().mockImplementation(() => Intl.DateTimeFormat().resolvedOptions().locale);
    const brwoserLocale = mockFn();
    it('isValid locale tests', () => {
        expect(isValidLocale('en')).toBe('en');
        expect(isValidLocale('uk-UA')).toBe('uk-UA');
        expect(isValidLocale('ja-JP')).toBe('ja-JP');
    });
    it('notError tests', () => {
        expect(isValidLocale('invalid-locale')).toBe('invalid-locale');
        expect(isValidLocale('qqqqqqqq-qqqq')).toBe('qqqqqqqq-qqqq');
    });
    it('RangeError tests', () => {
        expect(isValidLocale('111')).toBe(brwoserLocale);
        expect(isValidLocale('abcabqwewqe')).toBe(brwoserLocale);
        expect(isValidLocale('random123')).toBe(brwoserLocale);
    });
});
