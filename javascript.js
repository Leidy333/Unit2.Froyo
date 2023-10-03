// get user input for froyo flavors

const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors. No spaces!"
);

// turn user input into froyo array
const froyoFlavors = userInputString.split(",");

// creates froyo object
const froyoCount = {};

function findFroyoCount() {
  for (let i = 0; i < froyoFlavors.length; i++) {
    // added variable to reduce writing code. Added trim to remove whitespaces in case of User Error
    flavor = froyoFlavors[i].trim();
    // if flavor is not a key froyoCount then value is 1 and remains that way until changed
    if (!froyoCount[flavor]) {
      froyoCount[flavor] = 1;
    } else {
      // if flavor is in froyoCount, then add 1 to the amount in the the value of for flavor
      froyoCount[flavor]++;
    }
  }
  return froyoCount;
}

findFroyoCount();
console.table(froyoCount);
