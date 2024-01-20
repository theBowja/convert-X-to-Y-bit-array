# convert X to Y bit array
Converts an array of X-bit unsigned integers to an array of Y-bit unsigned integers

Limitations: Javascript bitwise operations work within 32 bits.

## Usage

```js
const convertXtoYbitarray = require("convert-x-to-y-bit-array");
```

```js
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
convertXtoYbitarray(Xbit, Ybit, inputArray[, maxOutputLength])
```

## Example

```js
const convertXtoYbitarray = require("convert-x-to-y-bit-array");

// Converts an array of 8-bit integers to an array of 12-bit integers
let result = convertXtoYbitarray(8, 12, [0, 1, 4, 16, 64]);

console.log(result); 
// [ 0, 260, 260, 0 ]
```

## Visual explanation

`[0, 1, 4, 16, 64]` represented as an array of 8-bit unsigned integers is:

```
00000000 00000001 00000100 00010000 01000000
```

When converting to an array of 12-bit unsigned integers, simply group the bits into groups of 12 (filling in the end with 0s):

```
000000000000 000100000100 000100000100 000000000000
```

Which is equivalent to `[0, 260, 260, 0]`

## Why?

There are crazy people out there using 12-bit integers.

## Contributing

Create an issue or PR.