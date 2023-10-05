// Build your website according to this user story:

// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they 
// observe a table listing how many of each flavor they have ordered. 
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.


// prompt asking to enter a list of comma-seperated froyo flavors
//write a function 
//turn input string into an array
//initiate an empty object flavors
//loop through array, count each flavor, saving the flavor name as key and count as a value
//produce an html table, populate it with data from the object


// Prompt the user for a list of flavors separated by commas.
const userInputString = prompt(
    "Please enter flavors you want to order separated by commas.",
    "For example: vanilla, kiwi, lemon"
  );

// console.log(userInputString);

function buildOrderObj(flavorString){

    let flavorArray = flavorString.split(",");

    for(let i = 0; i < flavorArray.length; i++){
    //removing the spaces before and after strings
        flavorArray[i] = flavorArray[i].trim();
    }

    let flavors = {};
    // console.log(flavorArray);
   

    for(let i = 0; i < flavorArray.length; i++){

       
    //checking if the value exists
        if(flavors[flavorArray[i]]){
            flavors[flavorArray[i]] += 1;
        } else {
            flavors[flavorArray[i]] = 1;
        }
    }
    console.log(flavors);
    return flavors;

};

let flavorObj = buildOrderObj(userInputString);

function displayFroyos(orderObj){
    //turn keys into an array with Object.keys()
    //turn values into an array with Object.values()

    let flavorArray = Object.keys(orderObj);
    // console.log(flavorArray);

    let quantityArray = Object.values(orderObj);
    // console.log(quantityArray);

    let froyoTable = document.getElementById("froyo-table");


    let froyoPicNames = ["banana", "blueberry", "cherry", "chocolate", "coffee", "cookies", "kiwi", "lemon", "mango", "pistachio", "raspberry", "strawberry", "vanilla", "velvet"];
    let froyoPicName = "";

    for(let i = 0; i < flavorArray.length; i++){
        let tr = document.createElement("tr");
        froyoTable.appendChild(tr);
        

        if(froyoPicNames.indexOf(flavorArray[i].toLowerCase()) != -1){
            froyoPicName = flavorArray[i].toLowerCase();
        } else {
            froyoPicName= "mystery";
        }

        let froyoTableDataString = `<td class='flavors'> ${flavorArray[i]}</td><td class='quantity'> ${quantityArray[i]} </td><td class='picture'><img style='padding:1px; width:170px; height:170px' src='./images/froyos/${froyoPicName}.png'></td>`
        tr.innerHTML = froyoTableDataString;
        // tr.innerHTML = "<td class='flavors'>" + flavorArray[i] + "</td><td class='quantity'>" + quantityArray[i] + "</td><td  class='picture'><img style='padding:1px; width:170px; height:170px' src='./images/froyos/lemon.png'></td>"; 
    }
};

displayFroyos(flavorObj);


  