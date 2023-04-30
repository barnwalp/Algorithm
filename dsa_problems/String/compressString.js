function compressString(str) {
	let compressed = '';
	let ptr = 0;
	while (ptr < str.length) {
		let count = 1;
		while(str[ptr] === str[ptr+1]) {
			count++;
			ptr++;
		}
		compressed += str[ptr] + String(count);
		ptr++;
	}
	
	return (compressed.length < str.length) ? compressed : str;
}

module.exports = {
	compressString: compressString,
}
