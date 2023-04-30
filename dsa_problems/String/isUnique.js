function isUnique(text) {
	const charSet = new Set();
	for (let char of text) {
		if (charSet.has(char)) {
			return false;
		}
		charSet.add(char);	
	}
	return true;
}

module.exports = {
	isUnique,
}
