import assert from 'assert';
import sameWeekday from '../sameWeekday.js';
describe('sameWeekday', () => {
  it('should return true for two dates with the same weekday', () => {
    const date1 = '2023-07-20'; // A Wednesday
    const date2 = '2023-07-27'; // Also a Wednesday

    // Call the function and check the result
    assert.strictEqual(sameWeekday(date1, date2), true, "Both dates should have the same weekday");
  });

  it('should return false for two dates with different weekdays', () => {
    const date1 = '2023-07-20'; // A Wednesday
    const date2 = '2023-07-21'; // A Thursday

    // Call the function and check the result
    assert.strictEqual(sameWeekday(date1, date2), false, "The dates should have different weekdays");
  });

  it('should handle invalid date inputs', () => {
    const date1 = '2023-07-20'; // A Wednesday
    const date2 = 'invalid-date';

    // Call the function and check the result
    assert.strictEqual(sameWeekday(date1, date2), false, "Invalid date inputs should return false");
  });
});
