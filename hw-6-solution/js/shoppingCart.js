const glazeOptions = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": .5,
    "Double Chocolate": 1.50
}

const sizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}

function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.roll');

    const rollList = document.querySelector("#roll-list");
    rollList.append(roll.element);

    updateElement(roll);

    const btnDelete = roll.element.querySelector('.delete-text');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });
    const price = roll.element.querySelector('.price');
    console.log(roll.glazing);
    const sum = ((roll.basePrice + glazeOptions[roll.glazing]) * sizeOptions[roll.size]).toFixed(2);
    price.innerText = "$" + sum;
    return sum;
}

function updateElement(roll) {
    const rollImageElement = roll.element.querySelector('.roll-thumb');
    const rollTitle = roll.element.querySelector('.roll-title');
    const rollBody1 = roll.element.querySelector('.roll-body1');
    const rollBody2 = roll.element.querySelector('.roll-body2');

    rollImageElement.src = "./assets/" + (roll.type).toLowerCase() + "-cinnamon-roll.jpeg";
    rollTitle.innerText = roll.type + " Cinnamon Roll";
    rollBody1.innerText = "Glazing: " + roll.glazing;
    rollBody2.innerText = "Pack size: " + roll.size;
}
let cartSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {

    const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);

    cartSet.add(roll);

    return roll;
}

let localCart = localStorage.getItem('cart');
if (localCart) cartSet = new Set(Array.from(JSON.parse(localCart)));
// addNewRoll("Original", "Sugar Milk", 1, 2.49)
// addNewRoll("Walnut", "Vanilla Milk", 12, 3.49)
// addNewRoll("Raisin", "Sugar Milk", 3, 2.99)
// addNewRoll("Apple", "Keep Original", 3, 3.49)


for (const roll of cartSet) {
    createElement(roll);
}

let sumTotal = document.querySelector("#total");

let rowTotal = document.querySelectorAll(".price");
let rowNumber = rowTotal.length;

let sum = 0;

function addition() {
    for (let i = 0; i < rowNumber; i++) {
        let sums = rowTotal[i].innerHTML;
        sum += Number(sums.replace(/[^0-9.-]+/g, ""));
    }
    sumTotal.innerHTML = "$" + sum.toFixed(2);
}

function deleteRoll(roll) {
    let newTotal = (Number(sumTotal.innerHTML.replace(/[^0-9.-]+/g, ""))) - (((roll.basePrice + glazeOptions[roll.glazing]) * sizeOptions[roll.size]).toFixed(2));
    roll.element.remove();
    cartSet.delete(roll);
    localStorage.setItem('cart', JSON.stringify(Array.from(cartSet)));
    sumTotal.innerHTML = "$" + newTotal.toFixed(2);
}