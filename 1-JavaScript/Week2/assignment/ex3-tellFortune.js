function selectRandomly(arrayName) {
  const index = Math.floor(Math.random() * 5);
  return arrayName[index];
}

export function tellFortune(array_1, array_2, array_3, array_4) {
  const arraysList = [array_1, array_2, array_3, array_4];
  let selectedItems = [];
  for (const i of arraysList) {
    console.log(i);
    selectedItems.push(selectRandomly(i));
    console.log(selectedItems);
  }

  return `You will be a ${selectedItems[3]} in ${selectedItems[2]}, married to ${selectedItems[1]} with ${selectedItems[0]} kids.`;
}

function main() {
  const numKids = [0, 1, 2, 3, 4];

  const partnerNames = ['Sven', 'Fleur', 'Jeroen', 'Marieke', 'Daan'];

  const locations = [
    'Amsterdam',
    'Rotterdam',
    'Budapest',
    'Utrecht',
    'Eindhoven',
  ];

  const jobTitles = [
    'Software Engineer',
    'Teacher',
    'Designer',
    'Doctor',
    'Chef',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
