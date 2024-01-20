// Sus testing

const convertXtoYbitarray = require("./main.js");

const doNotLogPassedTests = true;
let totalTests = 0;
let numberPassed = 0;

testArray('Test 1', [0, 260, 260, 0], convertXtoYbitarray(8, 12, [0, 1, 4, 16, 64]));
testArray('Test 2', [0, 1, 4, 16, 64, 0], convertXtoYbitarray(12, 8, [0, 260, 260, 0]));
testArray('Test 3', [0, 1, 4, 16, 64], convertXtoYbitarray(12, 8, [0, 260, 260, 0], 5));

function compareArr(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

function testArray(testdescription, expected, actual) {
	totalTests++;
	if (compareArr(expected, actual)) {
		if (!doNotLogPassedTests) {
			console.log(testdescription);
			console.log('Passed');
			console.log();
		}
		numberPassed++;
	} else {
		console.log(testdescription);
		console.log(`Expected:`);
		console.log(expected);
		console.log(`Actual:`);
		console.log(actual);
		console.log();
	}
}

console.log(`${numberPassed}/${totalTests} tests passed`)