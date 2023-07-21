import assert from 'assert';
import countRegNumber from '../countRegNumber.js';

describe('countRegNumber', () => {
  it('should return the correct count of registration numbers for a given string', () => {
    const inputString = 'CA 182736,CY 523519,CJ 812328';
    const expectedResult = 3;

    // Call the function and check the result
    assert.strictEqual(countRegNumber(inputString), expectedResult);
  });

  it('should return 1 for a single registration number in the input string', () => {
    const inputString = 'CA 182736';
    const expectedResult = 1;

    // Call the function and check the result
    assert.strictEqual(countRegNumber(inputString), expectedResult);
  });
});
