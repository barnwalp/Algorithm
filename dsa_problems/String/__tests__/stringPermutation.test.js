const { stringPermutation } = require('../stringPermutation');

describe('String Permutation', () => {
	it('should check with non-empty strings', () => {
		expect(stringPermutation(['dog', 'God'])).toBe(false);
		expect(stringPermutation(['name', 'mane'])).toBe(true);
		expect(stringPermutation(['pull', 'pace'])).toBe(false);
		expect(stringPermutation(['tom marvollo riddle', 'i am lord voldemort'])).toBe(true);
	})
})
