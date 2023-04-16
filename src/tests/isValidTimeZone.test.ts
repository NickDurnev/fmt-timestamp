
import { expect, describe, it, vi } from "vitest";
import { timeZoneChecking } from '../attrsChecking/timeZoneChecking';

describe("timeZoneChecking", () => {
    const mockFn = vi.fn().mockImplementation(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
    const brwoserTimeZone = mockFn();
    it('isValid timeZones tests', () => {
        expect(timeZoneChecking('America/New_York')).toBe('America/New_York');
        expect(timeZoneChecking('Europe/Kyiv')).toBe('Europe/Kyiv');
        expect(timeZoneChecking('Europe/Berlin')).toBe('Europe/Berlin');
    });
    it('Error tests', () => {
        expect(timeZoneChecking('Invalid/Timezone')).toBe(brwoserTimeZone);
        expect(timeZoneChecking('abcabqwewqe')).toBe(brwoserTimeZone);
        expect(timeZoneChecking('random123')).toBe(brwoserTimeZone);
    })
})