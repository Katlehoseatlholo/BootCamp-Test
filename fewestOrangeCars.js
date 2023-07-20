///////////////////////////////////////////////////////////////////////////////////////////////////
function fewestOrangeCars(cars) {
  // Create an object to store the count of orange cars for each state
  var orangeCarCount = {};

  // Loop through the array of car objects
  for (var i = 0; i < cars.length; i++) {
    // Check if the current car is orange
    if (cars[i].color === 'orange') {
      // Get the state code from the car's registration number (first two characters)
      const state = cars[i].reg_number.substring(0, 2);
      // Increment the count of orange cars for this state
      orangeCarCount[state] = (orangeCarCount[state] || 0) + 1;
    }
  }

  // Find the state with the fewest count of orange cars
  var minOrangeCount = Infinity;
  var minOrangeState = '';
  for (var state in orangeCarCount) {
    if (orangeCarCount[state] < minOrangeCount) {
      minOrangeCount = orangeCarCount[state];
      minOrangeState = state;
    }
  }
  // Return the state with the fewest count of orange cars
  return minOrangeState;
}
////////////////////////////////////////////////////////////////////////////////
