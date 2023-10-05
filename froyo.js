//start by making prompt for order
const order = prompt("Please add your order with commas between each flavor. Thank YOU!!");

// Turn order into array named flavorOrdered
const flavorOrdered = order.split(",");

// create object from array
const flavors = {};
// use forEach loop to fill object
    flavorOrdered.forEach((val) => (flavors[val] = (flavors[val] || 0)+1));

console.table(flavors)