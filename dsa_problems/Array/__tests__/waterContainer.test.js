const { maxArea } = require('../waterContainer');

describe('Water Container', () => {
	it('should handle positive integer array', () => {
		expect(maxArea([0,0])).toEqual(0);
		expect(maxArea([1,2,3,6,4,7])).toEqual(12);
		expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
		expect(maxArea([3,4])).toEqual(3);
	})
})
