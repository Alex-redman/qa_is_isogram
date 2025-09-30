'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for a single-letter word`, () => {
    expect(isIsogram('a')).toBe(true);
  });

  it(`should return true for a word with all unique letters`, () => {
    expect(isIsogram('abcdef')).toBe(true);
  });

  it(`should return false for a word with repeated letters`, () => {
    expect(isIsogram('abcdeaf')).toBe(false);
  });

  it(`should return false regardless of case (case-insensitive check)`, () => {
    expect(isIsogram('AbcDeaF')).toBe(false);
  });

  it(`should return true for a long word with no repeating letters`, () => {
    expect(isIsogram('abcdefg')).toBe(true);
  });

  it(`should return false when spaces are included and letters repeat`, () => {
    expect(isIsogram('abc deaf')).toBe(false);
  });

  it(`should handle words with mixed case correctly`, () => {
    expect(isIsogram('aBcDeF')).toBe(true);
  });

  it(`should handle non-letter characters without breaking`, () => {
    expect(isIsogram('ab-cdef?1/!')).toBe(true);
  });
});
