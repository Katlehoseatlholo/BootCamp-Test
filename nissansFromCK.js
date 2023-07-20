/////////////////////////////////////////////////////////////////////////////
// Defines a function named `nissansFromCK` that takes an array of car objects as its input parameter
function nissansFromCK(data) {
    // Initializes a variable `total` to 0, which will be used to count the number of Nissan cars in the dataset
    var total = 0;
    // Loops through each car object in the input array using a for loop
    for (var a = 0; a < data.length; a++) {
      // Checks if the make of the car is "Nissan" and if its registration number includes the string "CK"
      if (data[a].make === 'Nissan' && data[a].reg_number.includes("CK")) {
        // If both conditions are true, increments the `total` variable by 1
        total++;
      }
    }
    // Returns the final value of `total`, which represents the number of Nissan cars in the dataset with a registration number containing "CK"
    return total;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  