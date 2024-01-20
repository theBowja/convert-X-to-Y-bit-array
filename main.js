/**
 * Converts an array of X-bit unsigned integers to an array of Y-bit unsigned integers.
 * 
 * @param {integer} Xbit - Number of bits each integer in the input array has
 * @param {integer} Ybit - Number of bits each integer in the output array should have
 * @param {integer[]} inputArray - Array of X-bit unsigned integers to convert
 * @param {integer} [maxOutputLength] - Optional param to limit length of output array
 * 
 * @return {integer[]} array of Y-bit unsigned integers
 */
function convertXtoYbitarray(Xbit, Ybit, inputArray, maxOutputLength=undefined) {
	const output = [];
	if (maxOutputLength < 1) return output;

	let currentIndex = 0;
	let bufferBitLength = 0;
	let bufferNumber = 0;

	while(currentIndex < inputArray.length || bufferBitLength !== 0) {
		let currentBitLength = 0;
		let currentNumber = 0;

		// add the buffer bits to the current bits until it reaches the desired bit length
		while (currentBitLength < Ybit) {

			// read in a new number into buffer bits
			if (bufferBitLength === 0) {
				if (currentIndex < inputArray.length) {
					bufferNumber = inputArray[currentIndex];
					bufferBitLength = Xbit;
					currentIndex++;

				} else { // out of numbers to read...
					bufferNumber = 0;
					bufferBitLength = Ybit - currentBitLength;
				}
			}

			// get the bits from the buffer that we'll add to the current bits
			const addBitLength = Math.min(Ybit - currentBitLength, bufferBitLength);
			const addNumber = bufferNumber >>> (bufferBitLength - addBitLength);

			// remove the extracted bits from the buffer bits
			bufferBitLength = bufferBitLength - addBitLength;
			bufferNumber = bufferNumber ^ (addNumber << bufferBitLength);

			// add the bits to the current bits
			currentNumber = (currentNumber << addBitLength) + addNumber;
			currentBitLength = currentBitLength + addBitLength;

		}

		output.push(currentNumber);
		if (maxOutputLength && output.length >= maxOutputLength) return output;
	}

	return output;
}

module.exports = convertXtoYbitarray;