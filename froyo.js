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

function buildFlavorObj(flavorString){

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

buildFlavorObj(userInputString);

function displayFlavors(flavorObj){
    //turn keys into an array with Object.keys()
    //turn values into an array with Object.values()

    let flavorArray = Object.keys(flavorObj);
    // console.log(flavorArray);

    let quantityArray = Object.values(flavorObj);
    // console.log(quantityArray);

    let froyoTable = document.getElementById("froyo-table");

    for(let i = 0; i < flavorArray.length; i++){
        let tr = document.createElement("tr");
        
        froyoTable.appendChild(tr);
        // let td = `<td class="flavors">${flavorArray[i]}</td>`
        // let flavor = document.createTextNode(`<td class="flavors">${flavorArray[i]}</td>`);
        tr.innerHTML = "<td class='flavors'>" + flavorArray[i] + "</td><td class='quantity'>" + quantityArray[i] + "</td><td  class='picture'><img style='padding:1px; width:170px; height:170px' src='./images/froyos/lemon.png'></td>"; 
        // let flavor = document.createTextNode(`<td class="flavors">${flavorArray[i]}</td>`);
        // tr.innerHTML = "<td class='quantity'>" + quantityArray[i] + "</td>"; 
        // tr.innerHTML = "<td class='picture'><img src='images/froyos/jevar._lemon_frozen_yogurt_photo_d6b112e2-2418-498e-a908-82980f0ee3e2'></td>"; 
    }

    // for(let i = 0; i < quantityArray.length; i++){
    //     let tr2 = document.createElement("tr");
        
    //     froyoTable.appendChild(tr2);
    //     // let td = `<td class="flavors">${flavorArray[i]}</td>`
        
    // }


};

displayFlavors({strawberry: 1, banana: 2, vanilla: 3})


  