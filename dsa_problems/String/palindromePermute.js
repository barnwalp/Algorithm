function permutePalindrome(text) {
	text = text.toLowerCase();
	let textHist = {};
	let length = 0;
	for (let char of text) {
		if (char !== ' ') {
			if (textHist[char] !== undefined){
				textHist[char] += 1;
				length ++;
			} else {
				textHist[char] = 1;
				length ++;
			}
		}
	}
	let noOfOddChar = 0	
	for (let item in textHist) {
		if (textHist[item] %2 !== 0) {
			noOfOddChar += 1
		}
	}

	if (length % 2 === 0 ) {
		if (noOfOddChar === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		if (noOfOddChar === 1) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = {
	permutePalindrome: permutePalindrome,
}
