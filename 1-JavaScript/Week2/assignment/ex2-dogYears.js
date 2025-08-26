/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignment/tree/main/1-JavaScript/Week3#exercise-2-dog-years

This function calculates a dog's age in dog years based on the input human years.
------------------------------------------------------------------------------*/
export function calculateDogAge(humanYears) {
  // Step 1: Multiply the human years by 7 to get dog years
  const dogYears = humanYears * 7;

  // Step 2: Return the final string
  return `Your doggie is ${dogYears} years old in dog years!`;
}

function main() {
  // Test the function with three different ages
  console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
  console.log(calculateDogAge(2)); // -> "Your doggie is 14 years old in dog years!"
  console.log(calculateDogAge(3)); // -> "Your doggie is 21 years old in dog years!"
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
