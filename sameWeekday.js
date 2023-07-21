export default function sameWeekday(date1, date2) {
    console.log("The first date is: " + date1 + " and the second date is : " + date2); // Print a message to the console showing the input dates
    var first = new Date(date1); // Create a Date object for the first date input
    var second = new Date(date2); // Create a Date object for the second date input
    console.log("We want to see if day " + first.getDay() + " is equal to day " + second.getDay()); // Print a message to the console indicating which days we are comparing
    return (first.getDay() == second.getDay()); // Return true if the days of the two dates are equal, false otherwise
  }
  