const { longestSubstring } = require('../longestSubstring');

describe('Longest substring without repeating characters', () => {
	it ('should handle non-empty strings', () => {
		expect(longestSubstring("bbbb")).toBe("b");
		expect(longestSubstring("pwwkew")).toBe("wke");
	})
})
