// This is an array of day names
const myArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// This function checks whether a given name is a day name by using the includes() method of the day name array
function isDayName(name)
{
  return myArray.includes(name);
}

