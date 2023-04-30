const testCase1 = ['pale', 'ple'];
const testCase2 = ['lol', 'pale'];
const testCase3 = ['pale', 'bale'];
const testCase4 = ['pale', 'bae'];
const testCase5 = ['catnip', 'catinip']

function isOneEditAway([first, second]) {
	if (first.length === second.length) {
		return checkWithReplacement(first, second);
	} else if (Math.abs(first.length - second.length) === 1) {
		return checkWithInsertion(first, second);
	} else {
		return false;
	}
}

function checkWithReplacement(first, second) {
	let noOfDiff = 0;
	let lp = 0;
	let rp = 0;

	while (lp < first.length) {
		if (first[lp] !== second[rp]) {
			noOfDiff++;
		}
		lp++;
		rp++;
	}
	return (noOfDiff > 1) ? false : true;
}

function checkWithInsertion(first, second) {
	let lp = 0;
	let rp = 0;
	let noOfDiff = 0;
	let temp='';

	if (first.length < second.length) {
		temp = first;
		first = second;
		second = temp;
	}
	while (lp < first.length) {
		if (first[lp] === second[rp]) {
			lp++;
			rp++;
		} else {
			noOfDiff++;
			lp++;
		}
	}
	return (noOfDiff > 1) ? false : true;
}

module.exports = {
	oneAway: isOneEditAway,
}
