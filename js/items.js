// Change texts and buttons to be displayed in Items.
var curItemsBtn = "items-pots-btn";
function switchItemsTab(btnId, id) {
	document.getElementById(curItemsBtn).style.backgroundColor = "transparent";
	document.getElementById(btnId).style.backgroundColor ="#DB5461";
	curItemsBtn = btnId;
	itemsPageId = id;
	updateItemsList();
}
// Change items you have to be displayed in Items.
function listItems(records, items) {
	var len = records.length;
    // Change what will be displayed.
	var list = '<div class="box" align="center" style="color:#FFF;padding-top:40px;font-size: 20px;">無道具</div>';
	if (len != 0) {
		list = "";
		for (var i=0; i<len; i++) {
			if (records[i] == 1) {
				if (usingItems[itemsPageId] == i) list += '<div class="box frame-style red lighten-3"><div class="topic">' + items[i].name + '</div><img class="itemimage" src="' + items[i].image + '"><div class="intro">' + items[i].description + '</div></div>';
				else list += '<a onclick="useItem(\'' + items[i].name + '\', ' + i + ');"><div class="box frame-style"><div class="topic">' + items[i].name + '</div><img class="itemimage" src="' + items[i].image + '"><div class="intro">' + items[i].description + '</div></div></a>';
			}
		}
	}
	if (list == "") list = '<div class="box" align="center" style="color:#FFF;padding-top:40px;font-size: 20px;">無道具</div>';
	document.getElementById("items-list").innerHTML = list;
}
function updateItemsList() {
	switch(itemsPageId) {
		case 0:
			var potRecs = JSON.parse(localStorage.getItem("potsRecords"));
			if (potRecs === null) listItems([], iPots);
			else listItems(potRecs, iPots);
			break;
		case 1:
			var plantsRecs = JSON.parse(localStorage.getItem("plantsRecords"));
			if (plantsRecs === null) listItems([], iPlants);
			else listItems(plantsRecs, iPlants);
			break;
		case 2:
			var ticsRecs = JSON.parse(localStorage.getItem("ticketsRecords"));
			if (ticsRecs === null) listItems([], iTickets);
			else listItems(ticsRecs, iTickets);
			break;
		case 3:
			var charsRecs = JSON.parse(localStorage.getItem("charsRecords"));
			if (charsRecs === null) listItems([], iChars);
			else listItems(charsRecs, iChars);
			break;
	}
}
function useItem(name, index) {
	swal({
        title: "使用道具",
        text: "是否要使用「" + name + "」？",
    }, function() {
        usingItems[itemsPageId] = index;
        localStorage.setItem("usingItems", JSON.stringify(usingItems));
        displayPlant();
        updateItemsList();
    });
}
function displayPlant() {
	$(".my-plant").css("background-image", "url('" + iPlants[JSON.parse(localStorage.getItem("usingItems"))[1]].image + "')");
	$(".my-pot").css("background-image", "url('" + iPots[JSON.parse(localStorage.getItem("usingItems"))[0]].image + "')");
}