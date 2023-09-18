import * as main from "./main.js"
import { order } from "./main.js"

/* Template declaration */

/* Item in catalog */

function createItemTemplate(item) {
    const itemElement = document.importNode(document.getElementById("item-template").content, true);
    itemElement.querySelector('.item-img').src = item.src;
    itemElement.querySelector('.item-img').dataset.itemImgId = item.id;

    itemElement.querySelector('.item-name').textContent = item.name;
    itemElement.querySelector('.item-container').dataset.itemId = item.id;

    itemElement.querySelector('.item-qty-span').dataset.qtyId = item.id;

    return itemElement;
}

export function createItem(array) {
    array.map(object => {
        document.querySelector('.item-display-lists').append(createItemTemplate(object));
    });
};

export function clearItemDisplay() {
    document.querySelectorAll('.item-container').forEach(node => node.remove());
}

/* Item in order */

function createItemOrderTemplate(item) {
    const itemElement = document.importNode(document.querySelector('#item-order-template').content, true);
    itemElement.querySelector('.order-item-name').textContent = item.name;
    itemElement.querySelector('.order-item-img').src = item.img;
    itemElement.querySelector('.order-item-container').dataset.itemOrderId = item.id;
    itemElement.querySelector('.order-item-qty-span').textContent = item.orderQty;
    itemElement.querySelector('.order-item-price').textContent = (item.unitPrice * item.orderQty);
    itemElement.querySelector('.order-item-qty-span').dataset.orderQtyId = item.id;
    itemElement.querySelector('.order-item-qty-span').id = item.id;

    return itemElement;
}

export function createItemOrder(object) {
    document.querySelector('.item-order-lists').append(createItemOrderTemplate(object));
};


export function clearItemOrderDisplay() {
    document.querySelectorAll('.order-item-container').forEach(node => node.remove());
}


