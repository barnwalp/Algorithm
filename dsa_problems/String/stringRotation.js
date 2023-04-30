// is s2 a substring of s1
function isSubstring([s1, s2]) {
	let p1 = 0;
	let p2 = 0;
	while (p1 < s1.length) {
		let check = true;
		while (p2 < s2.length) {
			if (s1[p1] !== s2[p2]) {
				check = false;
				p1++;
				p2++;
				break;
			}
			p1++;
			p2++;
		}
		if (check) return true;
	}
	return false;
}

// is s2 a rotation of s1
function stringRotation([s1, s2]) {
	if (s1.length !== s2.length) return false;
	let doubleS1 = s1 + s1;
	return doubleS1.includes(s2)
}

module.exports = {
	stringRotation: stringRotation,
}
