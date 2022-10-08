
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





