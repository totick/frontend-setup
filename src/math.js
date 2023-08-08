export function f() {
  return 'Hello Math.js';
}

export function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
