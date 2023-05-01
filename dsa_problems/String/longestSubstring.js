function longestSubstring(str) {
	let substring;
	let ptr = 0;
	let result = "";
	let hash = new Set();
	while (ptr < str.length) {
		substring = "";
		while(!hash.has(str[ptr]) || ptr < str.length) {
			substring += str[ptr];
			hash.add(str[ptr]);
			ptr++;
		}
		hash = new Set();
		result = (substring.length) > result.length ? substring : result;
	}
	return result;
}

module.exports = {
	longestSubstring: longestSubstring,
}
