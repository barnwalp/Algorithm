function urlify(text) {
	let url = text;
	let index = url.length-1;
	while (index > 0) {
		while (url[index] !== ' ' && index > 0) {
			index -= 1;
		}
		if (url[index] === ' ') {
			url = url.slice(0,index) + "%20" + url.slice(index+1);
		}
		index -= 1;
	}
	return url
}

module.exports = {
	urlify: urlify,
}
