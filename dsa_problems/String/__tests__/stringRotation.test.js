const { stringRotation } = require('../stringRotation');

describe('String Rotation', () => {
	it('should check string rotation with non-emptry strings', () => {
		expect(stringRotation(['waterbottle', 'erbottlewat'])).toBe(true);
		expect(stringRotation(['picking', 'in'])).toBe(false);
		expect(stringRotation(['assuming', 'sum'])).toBe(false);
	})
	it('should check string rotation with emptry strings', () => {
		expect(stringRotation(['', ''])).toBe(true);
		expect(stringRotation(['', 'test'])).toBe(false);
		expect(stringRotation(['test', ''])).toBe(false);
	})
})
