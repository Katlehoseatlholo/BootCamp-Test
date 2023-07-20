// This function counts the number of registration numbers in a given string separated by commas
function countRegNumber(givenString)
{
  // The split() method splits a string into an array of substrings based on a specified separator and returns the new array
  // In this case, it splits the given string into an array of substrings using the comma as a separator and returns the length of the array
  return givenString.split(',').length;
}

// This line of code calls the countRegNumber function with a string argument and logs the result to the console
console.log(countRegNumber( "CA 182736,CY 523519,CJ 812328"));
