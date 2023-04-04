
import { expect, describe, it, vi } from "vitest";
import isValidTimeZone from "../isValid/isValidTimeZone";

describe("isValidTimeZone", () => {
    const mockFn = vi.fn().mockImplementation(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
    const brwoserTimeZone = mockFn();
    it('isValid timeZones tests', () => {
        expect(isValidTimeZone('America/New_York')).toBe('America/New_York');
        expect(isValidTimeZone('Europe/Kyiv')).toBe('Europe/Kyiv');
        expect(isValidTimeZone('Europe/Berlin')).toBe('Europe/Berlin');
    });
    it('Error tests', () => {
        expect(isValidTimeZone('Invalid/Timezone')).toBe(brwoserTimeZone);
        expect(isValidTimeZone('abcabqwewqe')).toBe(brwoserTimeZone);
        expect(isValidTimeZone('random123')).toBe(brwoserTimeZone);
    })
})