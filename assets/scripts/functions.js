import { createItemOrder } from './display.js';
import { order, weaponsStock, armorsStock, consStock, TAX } from './main.js'


// Return a new object to push in order array.

export function createOrderEntry(object) {
    if (order.includes(object)) {
        order.splice(order.indexOf(object), 1);
        document.querySelectorAll(`.order-item-qty-span`).forEach(node => {
            if (parseInt(node.id) === object.id) node.closest('li').remove();
        })
    }
    order.push(object);
    createItemOrder(object);
    updateItemQty();
    updatePrice(TAX);
};


// Get an object by his ID

export function getObjectByIdArray(array, id) {
    let object;
    parseInt(id)
    array.map(item => {
        if (parseInt(item.id) !== id) return null;
        object = item;
    });
    return object;
};

export function getArrayByName(string) {
    if (string === 'weaponsStock') return weaponsStock;
    if (string === 'armorsStock') return armorsStock;
    if (string === 'consStock') return consStock;
}


// Increase Decrease quantities

export function addQuantity(node) {
    let object = getObjectByIdArray(getArrayByName(node.closest('ul').dataset.itemArray), parseInt(node.dataset.qtyId));

    if (object.stockQty > parseInt(node.textContent)) {
        if (node.textContent >= 0) node.textContent++;
        object.orderQty = parseInt(node.textContent);
    }
}

export function removeQuantity(node) {
    let object = getObjectByIdArray(getArrayByName(node.closest('ul').dataset.itemArray), parseInt(node.dataset.qtyId));
    if (node.textContent > 1) node.textContent--;
    object.orderQty = parseInt(node.textContent);
}

export function removeItemFromOrder(id) {
    id = parseInt(id);
    order.forEach((item, index) => {
        if (item.id === id) order.splice(index, 1);
    });
};

/* Update Counters */

export function updateItemQty() {
    let counter = 0;
    order.map(item => counter += item.orderQty);
    document.querySelector('#item-qty-recap').innerText = counter;
}

export function updatePrice(tax){
    let priceEVAT = 0;
    tax = (tax / 100)
    order.map(item => priceEVAT += (item.orderQty * item.unitPrice));
    document.querySelector('#item-evat-price').innerText = priceEVAT;
    document.querySelector('#item-vat').innerText = (priceEVAT * tax).toFixed(2);
    document.querySelector('#item-total-price').innerText = priceEVAT * (tax + 1);
}


export { order };