const { urlify } = require('../URLify');

describe('URLify', () => {
	it('should check with non-empty strings', () => {
		expect(urlify('Mila Kunis')).toBe('Mila%20Kunis');
		expect(urlify('Megan Fox')).toBe('Megan%20Fox');
		expect(urlify('Sir Cristopher lee')).toBe('Sir%20Cristopher%20lee');
		expect(urlify('what the fudge ? ')).toBe('what%20the%20fudge%20?%20');
	})
})
