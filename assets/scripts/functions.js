import * as main from "./main.js"
 

export function createOrderEntry(object, quantity){
    let item = {
        id: object.id,
        name: object.name,
        unitPrice: object.unitPrice,
        stockQty: object.stockQty,
        orderQty: quantity
    }
    return item;
}





