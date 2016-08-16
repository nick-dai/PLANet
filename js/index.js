// Remember the last opened page and display the new switched page.
var curPage = "home";
function displayPage(target) {
    document.getElementById(curPage).style.display = "none";
    animate(target);
    document.getElementById(target).style.display = "inline";
    curPage = target;
}
// Animate every page after switched.
function animate(page) {
    switch(page) {
        case "home":
            break;
        case "info":
            $(".header-circle-1").animateCss("zoomIn");
            $(".header-circle-2").animateCss("zoomIn");
            $(".header-circle-3").animateCss("zoomIn");
            $(".bottom-circle-1").animateCss("zoomIn");
            $(".bottom-circle-2").animateCss("zoomIn");
            break;
        case "store":
            break;
        case "items":
            updateItemsList();
            break;
        case "diary":
            break;
        case "messages":
            break;
        case "settings":
            var columns = $("#settings").children(),
                index = 0;
            setInterval(function() {
                $(columns).eq(index).animateCss("slideInRight");
                index++;
                if (index == columns.length) clearInterval();
            }, 50);
            break;
    }
}
// Animate.css function
$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        $(this).addClass("animated " + animationName).one(animationEnd, function() {
            $(this).removeClass("animated " + animationName);
        });
    }
});
// On-off button toggle.
function switchOption(button) {
    if (button.hasClass("theme-accent-2")) {
        button.removeClass("theme-accent-2")
              .addClass("button-off")
              .html("<div class='valign-wrapper left full-height'><div class='valign'><span class='left'>關閉</span></div></div>");
    } else {
        button.removeClass("button-off")
              .addClass("theme-accent-2")
              .html("<div class='valign-wrapper left full-height'><div class='valign'><span class='left'>開啟</span></div></div>");
    }
}
// Animate home's circle change.
function setArc(h, l, t, c) {
    var lArc = Math.floor(90 - 90*l/65534), mlArc = -lArc,
        hArc = Math.floor(-90 + 90*h/100), mhArc = -hArc,
        cArc = Math.floor(-90 + 90*c/100), mcArc = -cArc,
        tArc = Math.floor(90 - 90*t/50), mtArc = -tArc;
    $("#temperature").css("transform", "skewX(" + tArc + "deg)");
    $("#temperature-inner").css("transform", "skewX(" + mtArc + "deg)");
    $("#coins").css("transform", "skewY(" + cArc + "deg)");
    $("#coins-inner").css("transform", "skewY(" + mcArc + "deg)");
    $("#humidity").css("transform", "skewY(" + hArc + "deg)");
    $("#humidity-inner").css("transform", "skewY(" + mhArc + "deg)");
    $("#luminous").css("transform", "skewX(" + lArc + "deg)");
    $("#luminous-inner").css("transform", "skewX(" + mlArc + "deg)");
}

var diaryList = [];
var soilInfo = ["－有蟲卵：<br>　可能成因：放在不通風或陰暗潮濕的地方<br>　驅逐蟲卵（先移走植物）：<br>　1. 用水淹的方式，可以再加入稀後的酒精或樟腦油加強效果<br>　2. 將土壤置於烈日下曝曬<br>　3.將土壤加水攪拌後，裝入微波爐的專用器皿，加熱10分鐘後取出置於外處放涼，可有效地消滅蟲卵<br><br>", "－有發霉：<br>　可能成因：土壤長期保持潮濕又放在陰暗的地方<br>　解決方法：將盆栽移至光照處或通風好的地方<br>可能成因：培養土不乾淨<br>　解決方法：更換培養土", ""];
var leavesInfo = ["葉子有點黃，要隨時注意陽光濕度溫度喔！", "葉子變白...把握與他相處的時光吧..."];
var hStatus = ["尚可", "健康", "瀕死"];
var sStatus = ["有蟲卵", "有發霉", "表層變白"];
var lStatus = ["枯黃", "變白"];
function checkboxToString(target, array) {
    // target should be a jQuery object.
    var str = "";
    target.each(function(index, element) {
        str += "<a onclick='swal({html:\"" + array[$(element).val()] + "\"});'>" + $(element).next().text() + "</a>";
        if (index != (target.length-1)) str += "、";
    });
    if (str === "") str = "正常";
    return str;
}
var solution = "";
function saveDiary() {
    var health = [], soil = [], leaves = [];
    solution = "";
    $("input[name='healthStatus']").each(function(index, element) {
        if ($(element).is(":checked")) {
            health.push(hStatus[index]);
        }
    });
    $("input[name='soilStatus']").each(function(index, element) {
        if ($(element).is(":checked")) {
            soil.push(sStatus[index]);
            solution += soilInfo[index];
        }
    });
    $("input[name='leavesStatus']").each(function(index, element) {
        if ($(element).is(":checked")) {
            leaves.push(lStatus[index]);
            solution += leavesInfo[index];
        }
    });
    diaryList.push({
        "time": moment().format("LLL"),
        "healthStatus": health,
        "soilStatus": soil,
        "leavesStatus": leaves,
        "statusDesc": $("#statusDesc").val()
    });
    updateCohesion("已新增一筆記錄", 1);
    updateCoins(2, false);
}
function showDiary() {
    var str = "", health = "", soil = "", leaves = "";
    for (var i=0; i<diaryList.length; i++) {
        for (var k=0; k<diaryList[i].healthStatus.length; k++) {
            health += diaryList[i].healthStatus[k];
            if (k != (diaryList[i].healthStatus.length-1)) health += "、";
        }
        for (var m=0; m<diaryList[i].soilStatus.length; m++) {
            soil += diaryList[i].soilStatus[m];
            if (m != (diaryList[i].soilStatus.length-1)) soil += "、";
        }
        for (var n=0; n<diaryList[i].leavesStatus.length; n++) {
            leaves += diaryList[i].leavesStatus[n];
            if (n != (diaryList[i].leavesStatus.length-1)) leaves += "、";
        }
        str += "<div class='row frame-style'><div class='col s12'><div class='row'><div class='col s4'>時間</div><div class='col s8'>" + diaryList[i].time + "</div></div><div class='row'><div class='col s4'>健康狀態</div><div class='col s8'>" + health + "</div></div><div class='row'><div class='col s4'>土壤狀態</div><div class='col s8'>" + soil + "</div></div><div class='row'><div class='col s4'>葉片狀態</div><div class='col s8'>" + leaves + "</div></div><div class='col s4'>狀態描述</div><div class='col s8'>" + diaryList[i].statusDesc + "</div></div></div>";
    }
    $("#diary-list").html(str);
    if (solution !== "") swal({
        html: solution
    });
}
function showAddDiary() {
    document.getElementById("add-diary").style.display = "inline";
}
function displayAddDiary() {
    $("input[name='healthStatus']").attr("checked", false);
    $("input[name='soilStatus']").attr("checked", false);
    $("input[name='leavesStatus']").attr("checked", false);
    $("#statusDesc").val("");
    $("#addDiary").openModal();
}
function loading(element) {

}