// The function "test" and function "it" are synonyms.

import { test, expect } from 'vitest';
import { sum } from './math';

test('Should sum all the numbers in given array', () => {
  const result = sum([3, 4, 8]);
  expect(result).toBe(15);
});
