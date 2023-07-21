///////////////////////////////////////////////////////////////////////////////////////////////
// This function takes an array of car objects as its input and returns the state
// with the highest number of blue cars. The car objects are assumed to have a
// 'color' property and a 'reg_number' property.

export default function mostBlueCars(cars) {
    // Create an object to store the count of blue cars for each state
    var blueCarCount = {};
  
    // Loop through the array of car objects
    for (var i = 0; i < cars.length; i++) {
      // Check if the current car is blue
      if (cars[i].color === 'blue') {
        // Get the state code from the car's registration number (first two characters)
        const state = cars[i].reg_number.substring(0, 2);
        // Increment the count of blue cars for this state
        blueCarCount[state] = (blueCarCount[state] || 0) + 1;
      }
    }
  
    // Find the state with the highest count of blue cars
    var maxBlueCount = 0;
    var maxBlueState = '';
    for (var state in blueCarCount) {
      if (blueCarCount[state] > maxBlueCount) {
        maxBlueCount = blueCarCount[state];
        maxBlueState = state;
      }
    }
  console.log(blueCarCount);
    console.log(maxBlueState);
    // Return the state with the highest count of blue cars
    return maxBlueState;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  