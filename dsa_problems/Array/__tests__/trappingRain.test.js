const { trapRain } = require('../trappingRain');

describe('Trapping Rain', () => {
	it('should check positive integers', () => {
		expect(trapRain([4,3,3,9,3,0,9,2,8,3])).toEqual(23);
		expect(trapRain([2,3,2,1])).toEqual(0);
		expect(trapRain([1,2])).toEqual(0);
		expect(trapRain([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
		expect(trapRain([3,2,1,2,4])).toEqual(4);
		expect(trapRain([2,1,2])).toEqual(1);
		expect(trapRain([3,2,1,2,4,2,1,3,6])).toEqual(10);
		expect(trapRain([1,0,1,3,2,1,2])).toEqual(2);
		expect(trapRain([4,2,0,3,2,5])).toEqual(9);
		expect(trapRain([9,6,8,8,5,6,3])).toEqual(3);
	})
});
