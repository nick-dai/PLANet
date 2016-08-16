$(document).ready(function() {
    setStoreItems(document.title);
    setUsingItems();
});
// Global variables:
//   curItems     - currently selected items that will be used later.
//   storePageId  - selected store page.
//   itemsRecords - purchase records for different items that will be stored using LocalStorage.
//                  0 = not bought, 1 = bought, default records will be an array with all 0s.
var curItems = [], storePageId, itemsPageId = 0, itemsRecords = [];
// Using items from localStorage.
var usingItems = [];
// Load my items' records from LocalStorage. If not, set all values to 0 (not bought).
function setPurchaseRecord(id, data) {
    var rds = localStorage.getItem(id);
    var array = [];
    if (rds === null) {
        if (id == "ticketsRecords") {
            for (var i=0; i<data.length; i++) {
                array[i] = 0;
            }
        } else if (id == "charsRecords") {
            var char = parseInt(localStorage.getItem("char"), 10);
            if (char < 2) {
                for (var j=0; j<data.length; j++) {
                    array[j] = 0;
                }
                array[char] = 1;
            } else {
                array[0] = 0;
                array[1] = 0;
                array[2] = 1;
                for (var k=3; k<data.length; k++) {
                    array[k] = 0;
                }
            }
        } else {
            array[0] = 1;
            for (var m=1; m<data.length; m++) {
                array[m] = 0;
            }
        }
        localStorage.setItem(id, JSON.stringify(array));
        return array;
    }
    return JSON.parse(rds);
}
// Load my items' records from LocalStorage. If not, set all values to 0 (not bought).
function setUsingItems() {
    var items = localStorage.getItem("usingItems");
    if (items === null) {
        usingItems = [0, 0, 0, 0];
        localStorage.setItem("usingItems", JSON.stringify(usingItems));
    } else usingItems = JSON.parse(items);
}
// Set global item variables based on the title of store's documents.
function setStoreItems(txt) {
    switch(txt) {
        case "pots":
            curItems = iPots;
            storePageId = 0;
            break;
        case "plants":
            curItems = iPlants;
            storePageId = 1;
            break;
        case "tickets":
            curItems = iTickets;
            storePageId = 2;
            break;
        case "characters":
            curItems = iChars;
            storePageId = 3;
            break;
    }
    itemsRecords[0] = setPurchaseRecord("potsRecords", iPots);
    itemsRecords[1] = setPurchaseRecord("plantsRecords", iPlants);
    itemsRecords[2] = setPurchaseRecord("ticketsRecords", iTickets);
    itemsRecords[3] = setPurchaseRecord("charsRecords", iChars);
    var owl = "",
        char = parseInt(localStorage.getItem("char"), 10);
    if (storePageId == 3) {
        if (char < 2) owl += "<img onmousedown='purchase(" + char + ")' src='" + curItems[char].image + "' class='items'>";
        else {
            for (var i=2; i<curItems.length; i++) {
                owl += "<img onmousedown='purchase(" + i + ")' src='" + curItems[i].image + "' class='items'>";
            }
        }
    } else {
        for (var k=0; k<curItems.length; k++) {
            owl += "<img onmousedown='purchase(" + k + ")' src='" + curItems[k].image + "' class='items'>";
        }
    }
    $("#cupsale").html(owl);
}
function updateCoins(money, inStore) {
    var coins = parseInt(localStorage.getItem("coins"), 10);
    if (inStore) {
        if ((coins+money) < 0) return false;
        else {
            coins += money;
            localStorage.setItem("coins", coins);
            return true;
        }
    } else {
        if ((coins+money) < 0) {
            localStorage.setItem("coins", "0");
        } else {
            coins += money;
            localStorage.setItem("coins", coins);
        }
    }
}