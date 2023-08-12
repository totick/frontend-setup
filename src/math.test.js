// The function "test" and function "it" are synonyms.

import { test, it, expect } from 'vitest';
import { sum } from './math';

test('Should sum all the numbers in given array', () => {
  //Arrange
  const numbers = [3, 4, 9];
  const expectedResult = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  //Act
  const result = sum(numbers);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should convert string numbers and give the correct sum', () => {
  //Arrange
  const inputs = ['5', 2];
  const expectedResult = inputs.reduce((acc, cur) => {
    return acc + +cur;
  }, 0);

  //Act
  const result = sum(inputs);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return 0 if an empty array is passed', () => {
  //Arrange
  const inputs = [];
  const expectedResult = 0;

  //Act
  const result = sum(inputs);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should throw an error if no argument is passed into the function', () => {
  //Act
  const resultFn = () => {
    sum();
  };

  //Assert
  expect(resultFn).toThrowError(TypeError);
});

it('should throw an error if multiple arguments are passed into the function', () => {
  //Arrange
  const num1 = 1;
  const num2 = 2;

  //Act
  const resultFn = () => {
    sum(num1, num2);
  };

  //Assert
  expect(resultFn).toThrowError(TypeError);
});
