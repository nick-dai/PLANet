// Set global attributes of SweetAlert 2.
swal.setDefaults({
    showCancelButton: true,
    confirmButtonColor: "#69A75C",
    confirmButtonText: "確定",
    cancelButtonText: "取消",
    allowOutsideClick: true
});

function showInputDialog(text, value, sucCallback) {
    swal({
        title: "修改" + text,
        text: "請輸入" + text + "：",
        html: "<input id='input-field' value='" + value + "'>"
    }, sucCallback);
}
function showDateDialog(text, value, sucCallback) {
    swal({
        title: "修改" + text,
        text: "請選擇" + text + "：",
        html: "<input type='date' id='input-field' value='" + value + "'>"
    }, sucCallback);
}
function showDropdownDialog(array, text, value, sucCallback) {
    var myList = "";
    var boughtChars = JSON.parse(localStorage.getItem("charsRecords"));
    if (text == "角色") {
        for (var i=2; i<array.length; i++) {
            if (boughtChars[i] == 1) {
                if (i == value) myList += "<option value='" + i + "' selected>" + array[i].name + "</option>";
                else myList += "<option value='" + i + "'>" + array[i].name + "</option>";
            }
        }
    } else {
        for (var k=0; k<array.length; k++) {
            if (k == value) myList += "<option value='" + k + "' selected>" + array[k] + "</option>";
            else myList += "<option value='" + k + "'>" + array[k] + "</option>";
        }
    }
    swal({
        title: "修改" + text,
        text: "請選擇" + text + "：",
        html: "<select id='my-select' class='browser-default'>" + myList + "</select>"
    }, sucCallback);
}
function showConfirmDialog(title, text) {
    swal({
        title: title,
        text: text,
        type: "input"
    }, function(inputValue) {
        if (inputValue !== false) target.html("<div class='valign center'>" + inputValue + "</div>");
    });
}
function showErrorDialog(text) {
    swal({
        title: "錯誤",
        text: text,
        type: "error",
        showCancelButton: false
    });
}