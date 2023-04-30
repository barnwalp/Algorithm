const { compareString } = require('../compareString');


describe('Compare String after backspace', () => {
	it('should compare the non-empty strings', () => {
		expect(compareString('ab##', 'c#d#')).toBe(true);
		expect(compareString('ab#c', 'ad#c')).toBe(true);
		expect(compareString('m###', 'y#')).toBe(true);
		expect(compareString('##pp', '##pp')).toBe(true);
		expect(compareString('#', '#######')).toBe(true);
		expect(compareString('a##x###', 'b##')).toBe(true);
		expect(compareString('pqr#', 'pqpr#')).toBe(false);
		expect(compareString('bxj##tw', 'bxo#j##tw')).toBe(true);
		expect(compareString('a#c', 'b')).toBe(false);
	});
	it('should compare the empty strings', () => {
		expect(compareString('', '')).toBe(true);
	})
})
