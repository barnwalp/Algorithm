const { rotateMatrix } = require('../rotateMatrix');

describe('Rotate Matrix', () => {
	it('should handle N x N matrix', () => {
		expect(rotateMatrix([
			[1,2,3],
			[4,5,6],
			[7,8,9],
		])).toEqual([
			[7,4,1],
			[8,5,2],
			[9,6,3],
		]);
		expect(rotateMatrix([
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9,10,11,12],
			[13,14,15,16],
		])).toEqual([
			[13,9,5,1],
			[14,10,6,2],
			[15,11,7,3],
			[16,12,8,4],
		]);
		expect(rotateMatrix([
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
			[11,12,13,14,15],
			[16,17,18,19,20],
			[21,22,23,24,25],
		])).toEqual([
			[21,16,11,6,1],
			[22,17,12,7,2],
			[23,18,13,8,3],
			[24,19,14,9,4],
			[25,20,15,10,5],
		])
	})
})
