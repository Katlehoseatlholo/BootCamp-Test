const assert = require('assert');

// Import the function to be tested
const mostBlueCars = require('../mostBlueCars.js'); 

describe('mostBlueCars', () => {
  it('should return the state with the highest count of blue cars', () => {
    const cars = [
      { reg_number: 'CA123', color: 'blue' },
      { reg_number: 'NY456', color: 'blue' },
      { reg_number: 'FL789', color: 'red' },
      { reg_number: 'TX012', color: 'blue' },
      { reg_number: 'CA678', color: 'orange' },
      { reg_number: 'CA890', color: 'blue' },
      { reg_number: 'NY111', color: 'blue' },
      { reg_number: 'TX222', color: 'blue' },
    ];

    // Call the function and check the result
    assert.strictEqual(mostBlueCars(cars), 'CA', "The state with the most blue cars should be 'CA'");
  });

  it('should return an empty string if no blue cars are found', () => {
    const cars = [
      { reg_number: 'CA123', color: 'red' },
      { reg_number: 'NY456', color: 'green' },
      { reg_number: 'FL789', color: 'yellow' },
    ];

    // Call the function and check the result
    assert.strictEqual(mostBlueCars(cars), '', "The function should return an empty string");
  });

  it('should handle an empty input array', () => {
    const cars = [];

    // Call the function and check the result
    assert.strictEqual(mostBlueCars(cars), '', "The function should return an empty string");
  });
});
