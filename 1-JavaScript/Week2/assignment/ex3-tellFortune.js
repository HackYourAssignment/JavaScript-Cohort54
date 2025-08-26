function selectRandomly(arrayMain) {
  const randomIndex = Math.floor(Math.random() * arrayMain.length);
  const randomArrayParametr = arrayMain[randomIndex];
  return randomArrayParametr;
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const numKid = selectRandomly(numKids);
  const partnerName = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const jobTitle = selectRandomly(jobTitles);

  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main(){
    const jobTitles = ["Artist", "Space pirate", "Psyho", "Software Developer", "Captain of pirates"];
    const locations = ["City", "Island", "Het dorp", "Matrix", "Another Planet"];
    const partnerNames = ["Alice", "Bob", "Alex", "Rob", "Jeniffer"];
const numKids = ["one", "two", "three", "four", "five"];

  console.log(tellFortune(jobTitles, locations, partnerNames, numKids));
  console.log(tellFortune(jobTitles, locations, partnerNames, numKids));
  console.log(tellFortune(jobTitles, locations, partnerNames, numKids));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
