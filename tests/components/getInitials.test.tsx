import { describe, it, expect } from 'vitest';
import { getInitials } from '@/constants/navbar';

describe('getInitials', () => {
  it('returns initials for full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('returns single initial', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('returns U for null', () => {
    expect(getInitials(null)).toBe('U');
  });

  it('returns U for undefined', () => {
    expect(getInitials(undefined)).toBe('U');
  });

  it('returns U for empty string', () => {
    expect(getInitials('')).toBe('U');
  });
});
