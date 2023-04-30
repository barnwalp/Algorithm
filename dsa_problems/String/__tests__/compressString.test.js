const { compressString } = require('../compressString');

describe('Compress String', () => {
	it('should test with non-empty string', () => {
		expect(compressString('lais ribeiro')).toEqual('lais ribeiro');
		expect(compressString('paakkjddwjkk')).toEqual('paakkjddwjkk');
		expect(compressString('aabccccccaaaa')).toEqual('a2b1c6a4');
	})
})
