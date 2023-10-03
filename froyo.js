// Prompt User for a list of froyo flavors seperated by commas

const userInputString = prompt("Please enter a list of Froyo Flavors seperated by commas.");

const flavorsArray = userInputString.split(",");

//convert flavorsArray into an Object

const flavObj = flavorsArray.reduce((accumulator, value, index) => {
    return {...accumulator, [index]: value};
}, {});

console.table(flavObj);

const count = {};

for (let ele of flavorsArray) {
    if (count[ele]) {
        count[ele] += 1;
    } else {
    count [ele] = 1;
}
}
console.table(count);

