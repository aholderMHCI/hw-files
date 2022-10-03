
let allGlazing = [{
    text: 'keep original',
    price: 0
},
{
    text: 'sugar milk',
    price: 0
},
{
    text: 'vanilla milk',
    price: .5
},
{
    text: 'double chocolate',
    price: 1.5
}
]

let allSizing = [{
    text: '1',
    quantity: 1
},
{
    text: '3',
    quantity: 3
},
{
    text: '6',
    quantity: 5
},
{
    text: '12',
    quantity: 10
}
]

let select = document.getElementById("glazing");

for (index in allGlazing) {
select.options[select.options.length] = new Option(allGlazing[index].text, allGlazing[index].price);
}

let packSize = document.getElementById("pack-size");

for (index in allSizing) {
packSize.options[packSize.options.length] = new Option(allSizing[index].text, allSizing[index].quantity);
}

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const chosenRoll = params.get('roll')

let cost = rolls[`${chosenRoll}`].basePrice;

let priceChange = cost;

let totalPrice;

let quantityChange = 1;

let priceOption = document.getElementById("total-price");

priceOption.innerHTML = "$" + cost;



function glazingChange(element) {
    priceChange = Number(element.value) + Number(cost);
    totalPrice = (priceChange * quantityChange).toFixed(2);
    priceOption.innerHTML = "$" + totalPrice;
}

function sizingChange(element) {
    quantityChange = Number(element.value);
    totalPrice = (priceChange * quantityChange).toFixed(2);
    priceOption.innerHTML = "$" + totalPrice;
}


const headerElement = document.querySelector('#roll-header-text');

if (chosenRoll === 'Doublechocolate') {
    headerElement.innerText = 'Double chocolate cinnamon roll';
} else {
    headerElement.innerText = chosenRoll + ' cinnamon roll';
}

const rollImage = document.getElementById('#roll-img');

let imgUrl = rolls[`${chosenRoll}`].imageFile;

rollImage.src = './assets/' + imgUrl; 

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const cart = [];
let myRoll;

function addToCart(myRoll) {
    myRoll = new Roll();
    myRoll.type = chosenRoll;
    // I was confused by how to access the contents of the dropdown because whatever I was doing kept providing 
    // the 'price' from the allGlazing array. This answer from stack overflow helped.
    // https://stackoverflow.com/questions/3301688/how-do-you-get-the-currently-selected-option-in-a-select-via-javascript
    myRoll.glazing = select.options[select.selectedIndex].text;
    myRoll.size = packSize.options[packSize.selectedIndex].text;
    myRoll.basePrice = cost;
    cart.push(myRoll);
    console.log(cart);
}

// there may be an issue with base price here, check back on hw 4 to make sure it's right
let roll1 = new Roll("Original", "sugar milk", 1, 2.49)
let roll2 = new Roll("Walnut", "vanilla milk", 12, 39.90)
let roll3 = new Roll("Raisin", "sugar milk", 3, 8.97)
let roll4 = new Roll("Apple", "keep original", 3, 10.47)

cart.push(roll1, roll2, roll3, roll4);
console.log(cart);



