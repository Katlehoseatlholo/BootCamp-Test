const assert = require('assert');

// Import the function to be tested
const fewestOrangeCars = require('../fewestOrangeCars.js'); 

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

    // Call the function and check the result
    assert.strictEqual(fewestOrangeCars(cars), 'TX', "The state code with the fewest orange cars should be 'TX'");
  });

  it('should return an empty string if no orange cars are found', () => {
    const cars = [
      { reg_number: 'CA123', color: 'blue' },
      { reg_number: 'NY456', color: 'green' },
      { reg_number: 'FL789', color: 'red' },
    ];

    // Call the function and check the result
    assert.strictEqual(fewestOrangeCars(cars), '', "The function should return an empty string");
  });

  it('should handle an empty input array', () => {
    const cars = [];

    // Call the function and check the result
    assert.strictEqual(fewestOrangeCars(cars), '', "The function should return an empty string");
  });
});
