const { isUnique } = require('../isUnique');

describe('Is Unique', () => {
	it('should have only unique characters', () => {
		expect(isUnique('computer Science')).toBe(false);
		expect(isUnique('programming')).toBe(false);
		expect(isUnique('234234%@')).toBe(false);
		expect(isUnique('@#@#$%&')).toBe(false);
		expect(isUnique('computer')).toBe(true);
		expect(isUnique('@#$%^&')).toBe(true);
	})
})
