const testCase1 = ['dog', 'God'];
function stringPermutation([str1, str2]) {
	if (str1.length !== str2.length) {
		return false;
	}

	const strHist = {}
	for (let char of str1) {
		if (strHist[char] !== undefined) {
			strHist[char] += 1;
		} else {
			strHist[char] = 1;
		}
	}

	for (let char of str2) {
		if (strHist[char] === undefined) {
			return false;
		}
		strHist[char] -= 1;
	}

	for (let keys in strHist) {
		if (strHist[keys] !== 0) {
			return false
		}
		return true;
	}
}

module.exports = {
	stringPermutation: stringPermutation,
}
