// Initialize owl-carousel.
$(document).ready(function() {
    $("#cupsale").owlCarousel({
        itemsCustom: [[0,1]],
        pagination: false,
        singleItem: true,
        afterAction: function(el) {
            //remove class active
            this.$owlItems.removeClass('active');
            //add class active
            //owl internal $ object containing items
            this.$owlItems.eq(this.currentItem).addClass('active');
            updateDescriptions(this.currentItem, this.owl.owlItems.length, curItems);
            displayCircle(this.currentItem);
        }
    });
    document.getElementById("changing-circle").style.display = "none";
});
// Get the current items' description and change texts to be displayed.
function updateDescriptions(id, length, items) {
    var txt = "";
    if (length != items.length) txt = "<div id='name' class='animated flipInX'>" + items[(id+2)].name + "</div><div id='price' class='animated bounceIn'><img src='img/store/coin.png' width='10%' height='auto'> " + items[(id+2)].price + "</div><div class='animated fadeIn intro'>" + items[(id+2)].description + "</div>";
    else txt = "<div id='name' class='animated flipInX'>" + items[id].name + "</div><div id='price' class='animated bounceIn'><img src='img/store/coin.png' width='10%' height='auto'> " + items[id].price + "</div><div class='animated fadeIn intro'>" + items[id].description + "</div>";
    document.getElementById("items-txt").innerHTML = txt;
}
// Display the enlarging circle once the item on the screen is changed.
var lastItemId;
function displayCircle(id) {
    if (lastItemId != id) {
        document.getElementById("changing-circle").style.display = "inline";
        $("#changing-circle").toggleClass("animation-enlarge");
        setTimeout(function() {
            document.getElementById("changing-circle").style.display = "none";
            $("#changing-circle").toggleClass("animation-enlarge");
        }, 500);
    }
    lastItemId = id;
}