const longestCommonChars = require("./commonchars.js");

describe('longestCommonChars', () => {
  it('should return an empty string when one of the strings is empty', () => {
    expect(longestCommonSubsequence('', 'test')).toBe('');
    expect(longestCommonSubsequence('test', '')).toBe('');
  });

  it('should return the entire string when the two strings are identical', () => {
    expect(longestCommonSubsequence('test', 'test')).toBe('test');
  });

  it('should return the longest common chars', () => {
    expect(longestCommonSubsequence('ABCDGH', 'AEDFHR')).toBe('ADH');
    expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toBe('GTAB');
    expect(longestCommonSubsequence('ABCD', 'ACDF')).toBe('ACD');
  });
});
