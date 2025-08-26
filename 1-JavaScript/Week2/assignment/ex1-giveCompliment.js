export function giveCompliment(name) {
  const compliments = [
    'smart',
    'talented',
    'creative',
    'kind',
    'great',
    'inspiring',
    'impressive',
    'awesome',
    'brave',
    'unique',
  ];

  let index = Math.floor(Math.random() * 10);
  let selectedCompliment = compliments[index];

  return `You are ${selectedCompliment}, ${name}!`;
}

function main() {
  // TODO substitute your own name for "HackYourFuture"
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
