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

    createElement() {
        const template = document.querySelector('#roll-template');
        const clone = template.content.cloneNode(true);

        this.element = clone.querySelector('.roll');

        const btnDelete = this.element.querySelector('.delete-text');
        btnDelete.addEventListener('click', () => {
            deleteRoll(this);
        });
    }

    updateElement() {
        const rollImageElement = this.element.querySelector('.roll-thumb');
        const rollTitle = this.element.querySelector('.roll-title');
        const rollBody1 = this.element.querySelector('.roll-body1');
        const rollBody2 = this.element.querySelector('.roll-body2');
        const price = this.element.querySelector('.price');

        rollImageElement.src = "./assets/" + this.type + "-cinnamon-roll.jpeg";
        rollTitle.innerText = this.type + " Cinnamon Roll";
        rollBody1.innerText = "Glazing: " + this.glazing;
        rollBody2.innerText = "Pack size: " + this.size;
        const sum = ((this.basePrice + glazeOptions[this.glazing]) * sizeOptions[this.size]).toFixed(2);
        price.innerText = "$" + sum;
        return sum;
    }

}

const cartSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {

    const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);

    cartSet.add(roll);

    return roll;
}

addNewRoll("Original", "Sugar Milk", 1, 2.49)
addNewRoll("Walnut", "Vanilla Milk", 12, 3.49)
addNewRoll("Raisin", "Sugar Milk", 3, 2.99)
addNewRoll("Apple", "Keep Original", 3, 3.49)

const rollList = document.querySelector("#roll-list");

for (const roll of cartSet) {
    console.log(roll);
    roll.createElement();
    roll.updateElement();
    rollList.prepend(roll.element);
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
    sumTotal.innerHTML = "$" + newTotal.toFixed(2);
}