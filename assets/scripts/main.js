/* Variable Assignement after Fetching JSONs */
import * as fetching from "./fetching.js";


let weaponsStock = JSON.parse(localStorage.getItem('weaponstock'));
let armorsStock = JSON.parse(localStorage.getItem('armorstock'));
let consStock = JSON.parse(localStorage.getItem('consstock'))


/* Displaying */
import * as display from "./display.js";


/* Listeners */

document.querySelector('#nav-weapon').addEventListener('click', event => {
    if(document.querySelectorAll('.item-container').length > 0) display.clearItemDisplay(); 
    display.createItem(weaponsStock);
});
document.querySelector('#nav-armor').addEventListener('click', event => {
    if(document.querySelectorAll('.item-container').length > 0) display.clearItemDisplay(); 
    display.createItem(armorsStock);
});
document.querySelector('#nav-cons').addEventListener('click', event => {
    if(document.querySelectorAll('.item-container').length > 0) display.clearItemDisplay(); 
    display.createItem(consStock);
});