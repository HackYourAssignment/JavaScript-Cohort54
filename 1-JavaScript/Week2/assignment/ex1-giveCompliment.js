/* -----------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

This function gives a random compliment to the name passed as an argument.
-----------------------------------------------------------------------------*/
export function giveCompliment(name) {
  // Array of 10 compliments
  const compliments = [
    'awesome',
    'fantastic',
    'amazing',
    'incredible',
    'wonderful',
    'brilliant',
    'outstanding',
    'excellent',
    'marvelous',
    'great',
  ];

  // Pick a random compliment
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];

  // Return the final string
  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'Majd';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
