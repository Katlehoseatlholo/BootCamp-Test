import assert from 'assert';
import nissansFromCK from '../nissansFromCK.js';

describe('nissansFromCK', () => {
  it('should return the correct count of Nissan cars with "CK" in their registration number', () => {
    const data = [
      { make: 'Nissan', reg_number: 'CK123' },
      { make: 'Toyota', reg_number: 'CK456' },
      { make: 'Nissan', reg_number: 'CK789' },
      { make: 'Honda', reg_number: 'MK101' },
      { make: 'Nissan', reg_number: 'XXCK22' },
      { make: 'Ford', reg_number: 'CK33' },
      { make: 'Nissan', reg_number: 'CK44' },
    ];

    // Call the function and check the result
    assert.strictEqual(nissansFromCK(data), 3, "The count of Nissan cars with 'CK' in their registration number should be 3");
  });

  it('should return 0 if no Nissan cars have "CK" in their registration number', () => {
    const data = [
      { make: 'Toyota', reg_number: 'XX001' },
      { make: 'Honda', reg_number: 'CK456' },
      { make: 'Ford', reg_number: 'MK101' },
    ];

    // Call the function and check the result
    assert.strictEqual(nissansFromCK(data), 0, "The count of Nissan cars with 'CK' in their registration number should be 0");
  });

  it('should handle an empty input array', () => {
    const data = [];

    // Call the function and check the result
    assert.strictEqual(nissansFromCK(data), 0, "The count of Nissan cars with 'CK' in their registration number should be 0");
  });
});
