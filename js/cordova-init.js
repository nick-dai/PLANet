// Cordova APIs need "deviceready" listener to ensure they're loaded.
// So, all of the actions requiring Cordova APIs should be filled here.
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Popup an alert when users click on exit.
    $("#exit").on("click", function() {
        swal({
            title: "結束",
            text: "您確定要結束本程式嗎?",
            type: "warning",
            showCancelButton: true
        }, function(isConfirm) {
            if (isConfirm) navigator.app.exitApp();
        });
    });
    $("#google").on("click", function() {
        loginGoogle();
    });
    $("#facebook").on("click", function() {
        loginFacebook();
    });
}

// Login your Google account and get the calendar data.
var myGoogleAccount,
    myCalendar = [];
function loginGoogle() {
    $.oauth2({
        auth_url: "https://accounts.google.com/o/oauth2/v2/auth",
        response_type: "code",
        token_url: "https://www.googleapis.com/oauth2/v4/token",
        client_id: gClientId,
        client_secret: gClientSecret,
        redirect_uri: gRedirectUri,
        other_params: {
            scope: "https://www.googleapis.com/auth/calendar.readonly"
        }
    }, function(token, response) {
        callGoogleApi(token);
    }, function(error) {
        $("#test").html("Error: " + error);
    });
}
function callGoogleApi() {
    var url = "https://www.googleapis.com/calendar/v3/calendars/primary/events?" + $.param({
        access_token: token,
        singleEvents: true, // "orderBy" requires this to work.
        orderBy: "startTime",
        timeMax: moment().add(7, "d").format(), // Upper bound (exclusive) for an event's start time to filter by.
        timeMin: moment().format() // Lower bound (inclusive) for an event's end time to filter by.
    });
    $.get(url, function(data) {
        myGoogleAccount = data.summary;
        for (var i=0; i<data.items.length; i++) {
            myCalendar[i] = {
                title: data.items[i].summary,
                start: data.items[i].start.dateTime,
                end: data.items[i].end.dateTime,
                location: data.items[i].location,
                description: data.items[i].description
            };
        }
    });
}

// Login your Facebook account and get the calendar data.
function loginFacebook() {
    $.oauth2({
        auth_url: 'https://www.facebook.com/dialog/oauth',
        response_type: 'token',
        client_id: fbClientId,
        redirect_uri: fbRedirectUri,
        other_params: {
            scope: 'user_events',
            display: 'popup'
        }
    }, function(token, response) {
        callFbApi(token);
    }, function(error) {
        $("#test").html("Error: " + error);
    });
}
var activities = [{
        start: "別一直宅在家，可以去參加 ",
        end: "多出門晃晃~"
    }, {
        start: "主人！別忘記要參加 ",
        end: "活動喔！"
    }, {
        start: "主人你的行事曆要滿出來惹！",
        end: "記得要出席嘿！"
    }];
function callFbApi(token) {
    var url = "https://graph.facebook.com/v2.5/me/events/attending?" + $.param({
        access_token: token
    });
    $.get(url, function(response) {
        var now = moment(), i = 0, str, rand;
        while(i < response.data.length) {
            if (now.diff(moment(response.data[i].end_time), "days") < 0) {
                rand = Math.floor(Math.random() * 100 % activities.length);
                str = activities[rand].start + moment(response.data[i].start_time).format("M/D") + "~" + moment(response.data[i].end_time).format("M/D") + "的「" + response.data[i].name + "」" + activities[rand].end;
            }
            chatStr.push(str);
            chatStr.push(str);
            chatStr.push(str);
            chatStr.push(str);
            chatStr.push(str);
            displayChat();
            i++;
        }
        localStorage.setItem("facebookToken", token);
    });
}