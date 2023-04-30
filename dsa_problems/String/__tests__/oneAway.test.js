const { oneAway } = require('../oneAway');

describe('One Away', () => {
	it('should test with array of strings', () => {
		expect(oneAway(['pale', 'ple'])).toBe(true)
		expect(oneAway(['lol', 'pale'])).toBe(false)
		expect(oneAway(['pale', 'bale'])).toBe(true)
		expect(oneAway(['pale', 'bae'])).toBe(false)
		expect(oneAway(['catnip', 'catinip'])).toBe(true)
	})
})
