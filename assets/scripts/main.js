import * as functions from "./functions.js"
import * as localstorage from "./localstorage.js";
import * as display from "./display.js";

/* Variable Assignement after Fetching JSONs */

let weaponsStock = JSON.parse(localStorage.getItem('weaponstock'));
let armorsStock = JSON.parse(localStorage.getItem('armorstock'));
let consStock = JSON.parse(localStorage.getItem('consstock'))

const TAX = 13;
let order = []; // Order array


/* Listeners */

/* ------------------Displaying */

display.createItem(weaponsStock);

document.querySelector('#nav-weapon').addEventListener('click', event => {
    if (document.querySelectorAll('.item-container').length > 0) display.clearItemDisplay();
    document.querySelector('.item-display-lists').dataset.itemArray = 'weaponsStock';

    display.createItem(weaponsStock);
});
document.querySelector('#nav-armor').addEventListener('click', event => {
    if (document.querySelectorAll('.item-container').length > 0) display.clearItemDisplay();
    document.querySelector('.item-display-lists').dataset.itemArray = 'armorsStock';

    display.createItem(armorsStock);
});
document.querySelector('#nav-cons').addEventListener('click', event => {
    if (document.querySelectorAll('.item-container').length > 0) display.clearItemDisplay();
    document.querySelector('.item-display-lists').dataset.itemArray = 'consStock';

    display.createItem(consStock);
});

document.querySelector('.item-display-lists').addEventListener('click', event => {
    if (!event.target.classList.contains('item-img')) return;

    let id = parseInt(event.target.dataset.itemImgId);

    functions.createOrderEntry(functions.getObjectByIdArray(functions.getArrayByName(event.target.closest('.item-display-lists').dataset.itemArray), id));
});

document.querySelector('.item-display-lists').addEventListener('click', event => {
    if (!event.target.classList.contains('item-plusbtn') && !event.target.classList.contains('item-minusbtn')) return;
    if (event.target.classList.contains('item-plusbtn')) {
        functions.addQuantity(event.target.closest('li').querySelector('.item-qty-span'));
    }
    if (event.target.classList.contains('item-minusbtn')) functions.removeQuantity(event.target.closest('li').querySelector('.item-qty-span'));
})

document.querySelector('.item-order-lists').addEventListener('click', event => {
    if(!event.target.classList.contains('order-item-trash')) return;
    event.target.closest('li').remove();
    functions.removeItemFromOrder(event.target.closest('li').dataset.itemOrderId);
    functions.updateItemQty();
    functions.updatePrice(TAX);
})


/* Exports */

export { order, weaponsStock, armorsStock, consStock, TAX };