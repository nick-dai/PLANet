// Remember the last tab and the last pressed button.
// Show the certain iframe after its button is pressed.
var curStoreBtn = "store-pots-btn";
function switchStoreTab(btnId, pageId) {
	// Change the display of selected buttons.
	document.getElementById(curStoreBtn).style.backgroundColor = "transparent";
	document.getElementById(btnId).style.backgroundColor = "#DB5461";
	switch(pageId) {
		case 0:
			$("#store_list").attr("src", "store_pots.html");
			break;
		case 1:
			$("#store_list").attr("src", "store_plants.html");
			break;
		case 2:
			$("#store_list").attr("src", "store_items.html");
			break;
		case 3:
			$("#store_list").attr("src", "store_characters.html");
			break;
	}
	curStoreBtn = btnId;
}
// Purchase an item with a given id,
// And then save the purchase records to LocalStorage respectively.
function purchase(id) {
	swal({
		title: "是否購買「" + curItems[id].name + "」?",
		type: "info",
		showCancelButton: true,
		cancelButtonText: "不爽買",
		confirmButtonColor: "#55dd9b",
		confirmButtonText: "買",
		closeOnConfirm: false 
	}, function() {
		if (itemsRecords[storePageId][id] == "0") {
			if (updateCoins(curItems[id].price, true)) {
				itemsRecords[storePageId][id] = 1;
				switch(storePageId) {
					case 0:
						localStorage.setItem("potsRecords", JSON.stringify(itemsRecords[storePageId]));
						break;
					case 1:
						localStorage.setItem("plantsRecords", JSON.stringify(itemsRecords[storePageId]));
						break;
					case 2:
						localStorage.setItem("ticketsRecords", JSON.stringify(itemsRecords[storePageId]));
						break;
					case 3:
						localStorage.setItem("charsRecords", JSON.stringify(itemsRecords[storePageId]));
						break;
				}
				swal("購買成功", "道具已放入道具欄", "success");
			} else swal("購買失敗", "金幣不足，請多多照顧植物來獲得金幣吧！", "error");
		} else {
			swal("你已經買過這個囉", "", "warning");
		}
	});
}