/* Template declaration */

function createItemTemplate(item) {
    const itemElement = document.importNode(document.getElementById("item-template").content, true);
    itemElement.querySelector('.item-img').src = item.src;
    itemElement.querySelector('.item-name').textContent = item.name;
    itemElement.querySelector('.item-container').dataset.itemId = item.id;

    return itemElement;
}

export function createItem(array) {
    array.map(object => {
        document.querySelector('.item-display-lists').append(createItemTemplate(object));
    });
};

export function clearItemDisplay(){
    document.querySelectorAll('.item-container').forEach(node => node.remove());
}