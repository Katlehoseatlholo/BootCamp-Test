const assert = require('assert');

// Import the function to be tested
const yearsAgo = require('../yearsAgo.js'); 
describe('yearsAgo', () => {
  it('should return the correct difference in years', () => {
    const currentYear = new Date().getFullYear();
    const testYear = currentYear - 10; // Let's assume we're looking back 10 years from the current year

    // Call the function and check the result
    assert.strictEqual(yearsAgo(testYear), 10, `The difference in years should be 10`);
  });

  it('should return 0 if the input year is the current year', () => {
    const currentYear = new Date().getFullYear();

    // Call the function with the current year and check the result
    assert.strictEqual(yearsAgo(currentYear), 0, `The difference in years should be 0 for the current year`);
  });

  it('should handle negative input years', () => {
    const currentYear = new Date().getFullYear();
    const testYear = currentYear + 5; // Assume we're looking back 5 years into the future

    // Call the function with a future year and check the result (should be negative)
    assert.strictEqual(yearsAgo(testYear), -5, `The difference in years should be negative for a future year`);
  });
});
