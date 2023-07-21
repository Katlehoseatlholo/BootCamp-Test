import assert from 'assert';
import fewestOrangeCars from '../fewestOrangeCars.js';

describe('fewestOrangeCars', () => {
  it('should return the state code with the fewest orange cars', () => {
    const cars = [
      { reg_number: 'CA123', color: 'orange' },
      { reg_number: 'NY456', color: 'blue' },
      { reg_number: 'CA789', color: 'orange' },
      { reg_number: 'FL012', color: 'orange' },
      { reg_number: 'TX345', color: 'blue' },
      { reg_number: 'CA678', color: 'orange' },
    ];
    const expectedResult = 'FL';

    // Call the function and check the result
    assert.strictEqual(fewestOrangeCars(cars), expectedResult);
  });

  it('should return an empty string if no orange cars are found', () => {
    const cars = [
      { reg_number: 'CA123', color: 'blue' },
      { reg_number: 'NY456', color: 'green' },
      { reg_number: 'FL789', color: 'red' },
    ];
    const expectedResult = '';

    // Call the function and check the result
    assert.strictEqual(fewestOrangeCars(cars), expectedResult);
  });

  it('should handle an empty input array', () => {
    const cars = [];
    const expectedResult = '';

    // Call the function and check the result
    assert.strictEqual(fewestOrangeCars(cars), expectedResult);
  });
});
