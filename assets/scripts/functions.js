import * as main from "./main.js"


// Return a new object to push in order array.

export function createOrderEntry(object, quantity) {
    if (object.stockQty >= parseInt(quantity)) {
        let item = {
            id: object.id,
            name: object.name,
            unitPrice: object.unitPrice,
            stockQty: object.stockQty,
            orderQty: quantity
        };
        return item;
    };
};

// Get an object by his ID

export function getObjectById(array, id) {
    let object;
    parseInt(id)
    array.map(item => {
        if (parseInt(item.id) !== id) return null;
        object = item;
    });
    return object;
};






