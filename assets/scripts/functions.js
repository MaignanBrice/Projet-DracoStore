import * as main from "./main.js"


export function createOrderEntry(object, quantity) {
    if (object.stockQty >= quantity) {
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


export function getObjectById(array, id){
    parseInt(id);
    array.map(item => {
        if(parseInt(item.id) !== id) return;
        return item;
    });
};




