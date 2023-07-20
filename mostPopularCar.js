function mostPopularCar(data) {
    // Create an empty object to store the counts of each car make
    const counts = {};
    // Initialize variables to keep track of the most popular make and its count
    let maxCount = 0;
    let mostPopularMake = '';
  
    // Loop through each car object in the input data array
    for (const car of data) {
      // Get the car make from the current car object
      const make = car.make;
      // Increase the count of the current make in the counts object
      counts[make] = (counts[make] || 0) + 1;
      // If the count of the current make is greater than the current max count,
      // update the max count and most popular make
      if (counts[make] > maxCount) {
        maxCount = counts[make];
        mostPopularMake = make;
      }
    }
  
    // Return the most popular make, or 'No cars found' if the input array is empty
    return mostPopularMake || 'No cars found';
  }
  ////////////////////////////////////////////////////////////////