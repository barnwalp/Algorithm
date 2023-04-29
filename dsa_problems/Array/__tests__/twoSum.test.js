const { twoSum } = require('../twoSum');

describe('Two Sum', () => {
	console.log(twoSum([1,2,7,9,2], 11));
	it('should handle empty arrays', () => {
		expect(twoSum([], 1)).toBe(null);
	});
	it('should check positive integers', () => {
		expect(twoSum([1,2,7,9,6], 11).sort()).toEqual([1,3].sort());
		expect(twoSum([1,3,7,9,2], 25)).toBe(null);
		expect(twoSum([5], 5)).toBe(null);
		expect(twoSum([1, 6], 7).sort()).toEqual([0, 1].sort());
	})
});
