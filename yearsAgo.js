function yearsAgo(year)
{
  // Get the current year
  var currentyear=new Date().getFullYear();
  
  // Print out the year we're looking back to
  console.log("Lets look back to year : "+year);
  
  // Print out the calculation we're about to perform
  console.log("Now we are trying to see the difference from "+currentyear+ "-"+year);
  
  // Calculate the difference in years
  var ans=currentyear - year;
  
  // Print out the result of the calculation
  console.log("The answer is = "+ans);
  
  // Return the result
  return ans;
}
