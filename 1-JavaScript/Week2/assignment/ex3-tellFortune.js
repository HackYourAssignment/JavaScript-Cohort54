function selectRandomly(arrayMain) {
  const randomIndex = Math.floor(Math.random() * arrayMain.length);
  const randomArrayParametr = arrayMain[randomIndex];
  return randomArrayParametr;
}

export function tellFortune(jobTitles, locations, partnerNames, numKids) {
  const jobTitle = selectRandomly(jobTitles);
  const location = selectRandomly(locations);
  const partnerName = selectRandomly(partnerNames);
  const numKid = selectRandomly(numKids);
  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`
} 

function main(){
    const jobTitles = ["Artist", "Space pirate", "Psyho", "Software Developer", "Captain of pirates"];
    const locations = ["City", "Island", "Het dorp", "Matrix", "Another Planet"];
    const partnerNames = ["Alice", "Bob", "Alex", "Rob", "Jeniffer"];
    const numKids = [5, 4, 6, 2, 9];

  console.log(tellFortune(jobTitles, locations, partnerNames, numKids));
  console.log(tellFortune(jobTitles, locations, partnerNames, numKids));
  console.log(tellFortune(jobTitles, locations, partnerNames, numKids));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
