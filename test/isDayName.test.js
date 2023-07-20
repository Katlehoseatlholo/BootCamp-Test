import assert from 'assert';
import isDayName from '../isDayName.js';

describe('isDayName', () => {
  it('should return true for valid day names', () => {
    // Valid day names from the array
    const validDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Test each valid day name
    validDayNames.forEach((day) => {
      assert.strictEqual(isDayName(day), true, `${day} should be a valid day name`);
    });
  });

  it('should return false for invalid day names', () => {
    // Invalid day names that are not in the array
    const invalidDayNames = ["Mon", "Tues", "Wednes", "Thurs", "Frid", "Sat", "Sun", "January"];

    // Test each invalid day name
    invalidDayNames.forEach((day) => {
      assert.strictEqual(isDayName(day), false, `${day} should not be a valid day name`);
    });
  });

  it('should handle case sensitivity correctly', () => {
    // Valid day name in different cases
    const validDayName = "monday";

    // Test lowercase and uppercase versions
    assert.strictEqual(isDayName(validDayName), false, "Function should be case-sensitive");
    assert.strictEqual(isDayName(validDayName.toUpperCase()), false, "Function should be case-sensitive");
    assert.strictEqual(isDayName(validDayName.charAt(0).toUpperCase() + validDayName.slice(1)), false, "Function should be case-sensitive");
  });
});
