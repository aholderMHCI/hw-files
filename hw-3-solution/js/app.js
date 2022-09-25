
// Resources
// I found the following github example useful in thinking through this problem:
// https://github.com/interactive-structures/teach-pui/blob/main/in-lab-examples/puinote-lab04/select-example/app.js
// Refresher on js conditionals:
// https://www.w3schools.com/js/js_if_else.asp
// This youtube video was a similar problem and was helpful:
// https://www.youtube.com/watch?v=YeFzkC2awTM
// useful doc for innerText:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// helpful for Option in js:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
// And lastly, rubber ducky debugging with my wife, Erin

let allGlazing = [ 
    {
        text: 'keep original - $2.49/each',
        price: 0
    },
    {
        text: 'sugar milk - $2.49/each',
        price: 0
    },
    {
        text: 'vanilla milk - $2.99/each',
        price: .5
    },
    {
        text: 'doubleChocolate $3.99/each',
        price: 1.5
    }
]

let allSizing = [ 
    {
        text: '1',
        quantity: 1
    },
    {
        text: '3',
        quantity: 3
    },
    {
        text: '6 (pay for 5, get 6th free)',
        quantity: 5
    },
    {
        text: '12 (cheaper by the dozen!)',
        quantity: 10
    }
]

let select = document.getElementById("glazing");

for(index in allGlazing) {
    select.options[select.options.length] = new Option(allGlazing[index].text, allGlazing[index].price);
}

let packSize = document.getElementById("pack-size");

for(index in allSizing) {
    packSize.options[packSize.options.length] = new Option(allSizing[index].text, allSizing[index].quantity);
}

let basePrice = 2.49;

let priceChange = 2.49;

let totalPrice = 2.49;

let quantityChange = 1;

let glazePriceOption = document.getElementById("total-price");

function glazingChange(element) {
    priceChange = Number(element.value) + Number(basePrice);
    totalPrice = (priceChange * quantityChange).toFixed(2);
    glazePriceOption.innerHTML = "$" + totalPrice;
}

function sizingChange(element) {
    quantityChange = Number(element.value);
    totalPrice = (priceChange * quantityChange).toFixed(2);
    glazePriceOption.innerHTML = "$" + totalPrice;
}





