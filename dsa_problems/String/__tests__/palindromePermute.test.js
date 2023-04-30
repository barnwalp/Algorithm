const { permutePalindrome } = require('../palindromePermute');

describe('Palindrome permutation', () => {
	it('should check with non-empty strings', () => {
		expect(permutePalindrome('Tact Coa')).toBe(true);
		expect(permutePalindrome('stt arsa')).toBe(true);
		expect(permutePalindrome('pique pi')).toBe(false);
		expect(permutePalindrome('lol lol lol ll')).toBe(true);
		expect(permutePalindrome(' ')).toBe(true);
		expect(permutePalindrome('a')).toBe(true);
		expect(permutePalindrome('as')).toBe(false);
	})
})
