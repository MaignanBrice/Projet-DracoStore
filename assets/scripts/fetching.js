/* Fetching JSONs module */

async function fetchWeaponStock() {
    // Fetching weapons.json
    try {
        const response = await fetch("/assets/datas/weapons.json");
        return await response.json();
    } catch (exception) {
        console.error("Impossible to fetch stock.json");
    }
};

async function fetchArmorStock() {
    // Fetching armors.json
    try {
        const response = await fetch("/assets/datas/armors.json");
        return await response.json();
    } catch (exception) {
        console.error("Impossible to fetch stock.json");
    }
};

async function fetchConsStock() {
    // Fetching consommables.json
    try {
        const response = await fetch("/assets/datas/consommables.json");
        return await response.json();
    } catch (exception) {
        console.error("Impossible to fetch stock.json");
    }
};

// Storing datas in LocalStorage 

fetchArmorStock().then(datas => {
    localStorage.setItem('armorstock', JSON.stringify(datas));
});
fetchWeaponStock().then(datas => {
    localStorage.setItem('weaponstock', JSON.stringify(datas));
});
fetchConsStock().then(datas => {
    localStorage.setItem('consstock', JSON.stringify(datas));
});



