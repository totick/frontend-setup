export function f() {
  return 'Hello Math.js';
}

/**
 *
 * @param {Array} numbers
 * @returns The sum of the numbers or NaN if the array contains any value !number.
 */
export function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    // Check if the value is a number
    // if (typeof number !== 'number') return NaN;
    const convertedNumber = +number;
    if (Number.isNaN(convertedNumber)) return;
    sum += +number;
  }
  return sum;
}
