const assert = require('assert');

// Import the function to be tested
const countRegNumber = require('../countRegNumber.js'); 

describe('countRegNumber', () => {
  it('should return the correct count of registration numbers for a given string', () => {
    const inputString = 'CA 182736,CY 523519,CJ 812328';
    const expectedResult = 3;

    // Call the function and check the result
    assert.strictEqual(countRegNumber(inputString), expectedResult, `Expected ${expectedResult}, but got ${countRegNumber(inputString)}`);
  });

  it('should return 1 for a single registration number in the input string', () => {
    const inputString = 'CA 182736';
    const expectedResult = 1;

    // Call the function and check the result
    assert.strictEqual(countRegNumber(inputString), expectedResult, `Expected ${expectedResult}, but got ${countRegNumber(inputString)}`);
  });

  it('should return 0 for an empty input string', () => {
    const inputString = '';
    const expectedResult = 0;

    // Call the function and check the result
    assert.strictEqual(countRegNumber(inputString), expectedResult, `Expected ${expectedResult}, but got ${countRegNumber(inputString)}`);
  });

  it('should return 1 for a single comma in the input string', () => {
    const inputString = ',';
    const expectedResult = 1;

    // Call the function and check the result
    assert.strictEqual(countRegNumber(inputString), expectedResult, `Expected ${expectedResult}, but got ${countRegNumber(inputString)}`);
  });
});
