// Characters list:
//   [0]: Baby
//   [1]: Growing
//   [2]: Adult
//   [3] or above: Other characters
var messages = [{
        baby: {
            normal: [
                "巴噗巴噗！主人好，你來看我了嗎？",
                "嚕嚕嚕，啦啦啦，今天過得不錯。",
                "哇！喜翻今天的天氣~"
            ],
            lumin: {
                upper: [
                    "嗚嗚嗚太陽好大…曬得不太舒服…",
                    "嗚嗚...燙燙...",
                    "啊！燙燙！主人幫我呼呼..."
                ],
                lower: [
                    "今天怎麼暗暗的，有點可怕。",
                    "好黑...主人我怕怕...",
                    "好暗...光不夠..."
                ]
            },
            humid: {
                upper: [
                    "哇哇哇！太多水了！不想喝了！",
                    "水喝太飽了...",
                    "水水...不要！"
                ],
                lower: [
                    "嗚嗚嗚哇我口渴了，水水呢？",
                    "水水...主人我要水水...",
                    "好乾...水...要水水..."
                ]
            },
            temp: {
                upper: [
                    "好熱！好熱！嗚嗚嗚…不舒服…",
                    "好熱...好難過..."
                ],
                lower: [
                    "…好冷，嘶嘶嘶…嗚…",
                    "好冷...主人求抱抱..."
                ]
            }
        },
        growing: {
            normal: [
                "主人好，今天還開心嗎？你開心的話，我也就開心。",
                "最近一直在想長大要做什麼…希望是做自己喜歡的事情。"
            ],
            lumin: {
                upper: [
                    "那個…我覺得陽光有點強，可能會曬傷…今天就不出門了。",
                    "主人！太陽公公他打我！超級痛R！！"
                ],
                lower: [
                    "現在好暗，讓人心情不太好。沒有光，暗反應也沒有意義了。",
                    "最近跟太陽相處的不太好，他都離我遠去了..."
                ]
            },
            humid: {
                upper: [
                    "夠了，水太多了，你澆再多，我也不會長那麼快。",
                    "我覺得水好多...能不能不要這麼潮濕？"
                ],
                lower: [
                    "我還在成長期，水量注意一下，不然我長不高。",
                    "水真的好少，別人都有那麼多水，為什麼我就沒有..."
                ]
            },
            temp: {
                upper: [
                    "好熱！我感受到我的葉綠體在騷動了！快阻止他們！",
                    "今天好熱，讓我狂流汗！幫我開個冷氣好嗎？"
                ],
                lower: [
                    "好冷，好懶，我好想冬眠，聽說現在睡就再也起不來了。",
                    "呼~今天真冷，幫我帶個手套好嗎？"
                ]
            }
        },
        adult: [{
            normal: [
                "YEE~今天天氣真好，該出門晃晃了~",
                "我覺得你可以多來照顧我一點...來多看看人家嘛！",
                "I feel good today! Play with me!"
            ],
            lumin: {
                upper: [
                    "太陽這麼大就應該要躲進屋內啊，不然要幹嘛？",
                    "我無法忍受那來自太陽強烈的視線...",
                    "你知道嗎？我快被烤焦了唷 >.^！",
                    "真的好熱！幫我移動一下好嗎？"
                ],
                lower: [
                    "面向太陽，陰影就在你背後...",
                    "這裡遮陽的效果好像太好，讓我都照不到太陽了..."
                ]
            },
            humid: {
                upper: [
                    "濕氣跟你的體重一樣重...肥宅減減肥好嗎？",
                    "濕氣真高，幫我弄乾燥一點好嗎？"
                ],
                lower: [
                    "口乾舌燥，覺得該來喝點水了",
                    "好乾...幫我弄點水好嗎？"
                ]
            },
            temp: {
                upper: [
                    "I feel so HOT!",
                    "好熱！找個有冷氣的地方進去吹一下吧！"
                ],
                lower: [
                    "Super COOL~~",
                    "這麼冷的環境，也讓我很心寒..."
                ]
            }
        }, {
            normal: [
                "誒誒達令，人家最近想買新盆栽，買嘛…",
                "我們親暱度好高唷，你一定超喜歡我對不對！"
            ],
            lumin: {
                upper: [
                    "紫外線那麼強我會曬傷，你注意點好嗎?你對我的愛也不過如此。",
                    "太陽這麼大，是不會幫我買一瓶防曬乳來擦喔？"
                ],
                lower: [
                    "太暗了，我不能行光合作用，你知道你這樣很不尊重我。",
                    "好暗！這樣會讓我自拍起來很難看你知道嗎？"
                ]
            },
            humid: {
                upper: [
                    "你真的覺得你給我那麼多水我喜歡嗎？你都不在乎我在想什麼。",
                    "你都不會覺得你水給太多了嗎？"
                ],
                lower: [
                    "現在就這樣，反正你不想澆水，我們就分手呀！",
                    "你都不在乎我！看到我這麼乾還不澆水！"
                ]
            },
            temp: {
                upper: [
                    "唉唷！很煩誒！天氣那麼熱很討厭！你解決一下好嗎？",
                    "溫度這麼高，幫我裝一台冷氣啦！"
                ],
                lower: [
                    "我都抖成這樣你沒發現嘛？別人的男友都會怎樣怎樣…你都怎樣…",
                    "這麼冷你還不把你身上的外套給我穿！你根本都不在乎我的感受！"
                ]
            }
        }, {
            normal: [
                "今天的風兒有點喧囂。",
                "想起那天夕陽下的奔跑，是我逝去的青春。",
                "我達達的馬蹄是美麗的錯誤，我不是歸人，我是馬。"
            ],
            lumin: {
                upper: [
                    "再見了，我的愛人，在太陽神炙熱的愛憐下，我將被召回天上。"
                ],
                lower: [
                    "生命必須有裂縫，陽光才能照進來。生命必須躺得夠低，才明白世間的美。"
                ]
            },
            humid: {
                upper: [
                    "川水搖漾，碗碗是我的眼中淚，讓我沉溺在無盡的冷冽中，逐漸腐爛。"
                ],
                lower: [
                    "我缺的不是水，而是心痛的感覺",
                    "等待讓我飢渴，讓我心癢難耐，千萬隻螞蟻在心頭上攢動，想要喝水，好想要喝水喔！"
                ]
            },
            temp: {
                upper: [
                    "人帥真好，注定火烤。"
                ],
                lower: [
                    "冷冷的夜裡，讓我畏寒的不是這逐漸下降的氣溫，是你那遙遠的心。"
                ]
            }
        }],
        tips: [{
            question: "主人，你還記得我的種植適合溫度是22~25度之間嗎?",
            answer: false,
            correct: "好高興喔！主人你還記得我的適合種植溫度是 20~30度！",
            wrong: "好難過...主人你根本不在乎我...",
            used: false
        }, {
            question: "主人，你知道如果環境溫度太低，我會長得更好嗎？",
            answer: false,
            correct: "環境溫度太低我的成長會變慢，主人都有在幫我做功課呢^^",
            wrong: "有腦子的都知道這怎麼可能嘛，北七",
            used: false
        }]
    }];
var plantInfo = [{
        name: "番茄",
        description: "原產於地中海、非洲，為獨尾草科多年生草本、多肉植物，據考證的野生蘆薈品種300多種，主要分布於非洲等地。這種植物頗受大眾喜愛，主要因其易於栽種，為花葉兼備的觀賞植物。",
        tempUpper: "30",
        tempLower: "20",
        humidUpper: "80",
        humidLower: "60",
        luminUpper: "8000",
        luminLower: "5000",
        luminLength: "0.8",
        life: ["7", "30", "90"], // in days
        tips: [
            "小心！如果溫度太高，可能會讓我結的果實變小喔...",
            "如果溫度太低的話，會讓我的成長變慢喔！"
        ]
    }];

var yest_records;

// Currently used variables.
var curUser = {
        // id: "",
        // userId: "",
        // coins: 0
    };
function setCurUser(id, uId, coins) {
    curUser = {
        id: id,
        userId: uId,
        coins: coins
    };
}
var curPlant;
function setCurPlant(plant) {
    curPlant = plant;
}
var curStatus = {
        // humid: 0,
        // temp: 0,
        // lumin: 0
    }, tempClose;
function setCurStatus(h, t, l, c) {
    curStatus = {
        humid: h,
        temp: t,
        lumin: l,
        close: c
    };
    tempClose = c;
}

var userId = "69RlHrFEbG", // User's info
    myPlants = [], myItems = [], myRecords = []; // User's data

// An array for plants' names.
var pNames = [];
for(var i=0; i<plantInfo.length; i++) {
    pNames[i] = plantInfo[i].name;
}

// Initialize Parse with provided keys.
Parse.initialize(parseKey1, parseKey2);
// Functions here are all deferred objects in order to get tasks done in order.
function retrySync(errorMsg, retryFunc) {
    swal({
        title: '錯誤',
        text: "同步伺服器失敗。原因：" + errorMsg,
        type: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: '重試'
    }).then(function(isConfirm) {
        if (isConfirm) retryFunc();
    });
}
function syncPlant() {
    return updateParse("myPlants", curPlant.id, [{
        column: "userId",
        value: curUser.userId
    }, {
        column: "name",
        value: curPlant.name
    }, {
        column: "date",
        value: curPlant.date
    }, {
        column: "plantNumber",
        value: curPlant.plantNumber
    }, {
        column: "cohesion",
        value: curPlant.cohesion
    }, {
        column: "character",
        value: curPlant.character
    }], function() {
        console.log("[" + moment().format("YYYY/MM/DD HH:MM:SS") + "] Plant: Sync successfully.");
    }, function(error) {
        retrySync(error.message, syncPlant);
    });
}
function syncUser() {
    return updateParse("myUsers", curUser.id, [{
        column: "userId",
        value: curUser.userId
    }, {
        column: "coins",
        value: parseInt(curUser.coins, 10)
    }], function() {
        console.log("[" + moment().format("YYYY/MM/DD HH:MM:SS") + "] User: Sync successfully.");
    }, function(error) {
        retrySync(error.message, syncUser);
    });
}
function addPlant() {
    return addParse("myPlants", [{
        column: "userId",
        value: curUser.userId
    }, {
        column: "name",
        value: curPlant.name
    }, {
        column: "date",
        value: curPlant.date
    }, {
        column: "plantNumber",
        value: curPlant.plantNumber
    }, {
        column: "cohesion",
        value: curPlant.cohesion
    }, {
        column: "character",
        value: curPlant.character
    }], function(object) {
        localStorage.setItem("plantId", object.id);
        curPlant.id = object.id;
        console.log("[" + moment().format("YYYY/MM/DD HH:MM:SS") + "] Plant: Sync successfully.");
    }, function(error) {
        retrySync(error.message, syncPlant);
    });
}
function getUser() {
    return queryParse("myUsers", [{
        column: "index",
        value: userId
    }], function(results) {
        setCurUser(results[0].id, userId, results[0].get("coins"));
        localStorage.setItem("coins", results[0].get("coins"));
    }, parseError);
}
function getPlants() {
    return queryParse("myPlants", [{
        column: "objectId",
        value: localStorage.getItem("plantId")
    }], function(results) {
        myPlants.length = 0; // Clear previous data to avoid duplicate entries.
        if (results.length !== 0) {
            for (var i=0; i<results.length; i++) {
                myPlants[i] = {
                    "id": results[i].id,
                    "name": results[i].get("name"),
                    "date": results[i].get("date"),
                    "plantNumber": results[i].get("plantNumber"),
                    "cohesion": parseInt(results[i].get("cohesion"), 10),
                    "character": results[i].get("character")
                };
            }
            setCurPlant(myPlants[0]);
            localStorage.setItem("char", curPlant.character);
        }
    }, parseError);
}
// PARSE COMMANDS:
//   Parse query function with a deferred object returned.
function updateParse(className, id, params, sucCallback, errCallback) {
    var deferred = $.Deferred(),
        object = Parse.Object.extend(className),
        dbObject = new object();
    dbObject.id = id;
    for (var i=0; i<params.length; i++) { // Filter matched columns (Multiple conditions are allowed.)
        dbObject.set(params[i].column, params[i].value);
    }
    dbObject.save(null, {
        success: function(parseObject) {
            sucCallback();
        },
        error: function(parseObject, error) {
            errCallback(error);
        }
    });
}
function addParse(className, params, sucCallback, errCallback) {
    var deferred = $.Deferred(),
        object = Parse.Object.extend(className),
        dbObject = new object();
    for (var i=0; i<params.length; i++) { // Filter matched columns (Multiple conditions are allowed.)
        dbObject.set(params[i].column, params[i].value);
    }
    dbObject.save(null, {
        success: function(parseObject) {
            sucCallback(parseObject);
        },
        error: function(parseObject, error) {
            errCallback(error);
        }
    });
}
function queryParse(className, params, sucCallback, errCallback) {
    var deferred = $.Deferred(),
        object = Parse.Object.extend(className), // Create an object of the target class.
        dbObject = new Parse.Query(object); // New a query object of the target class.
    for (var i=0; i<params.length; i++) { // Filter matched columns (Multiple conditions are allowed.)
        dbObject.equalTo(params[i].column, params[i].value);
    }
    dbObject.find({ // Start finding the target class.
        success: function(results) {
            sucCallback(results);
            deferred.resolve();
        },
        error: function(error) {
            errCallback(error);
            deferred.reject();
        }
    });
    return deferred.promise();
}
function parseError(error) {
    showErrorDialog("代碼：" + error.code + "<br>原因：" + error.message);
}
// Load data from ThingSpeak
var yest_records;
// Get Thingspeak data by using its APIs.
function writeTsFeed(params) {
    var url = "https://api.thingspeak.com/update?api_key=" + tsWriteKey + "&" + $.param(params);
        // field1: "", // curHumid
        // field2: "", // curTemp
        // field3: "" // curLumin
    $.getJson(url, function(data) {
    });
}
function readTsFeeds(params, sucCallback) {
    var deferred = $.Deferred(),
        url = "https://api.thingspeak.com/channels/" + tsChannelId + "/feeds.json?api_key=" + tsReadKey + "&" + $.param(params);
    $.getJSON(url, function(data) {
        sucCallback(data);
        deferred.resolve();
    }).fail(readTsError("status"));
    return deferred.promise();
}
function readTsLastFeed(sucCallback) {
    var deferred = $.Deferred(),
        url = "https://api.thingspeak.com/channels/" + tsChannelId + "/feeds/last.json?api_key=" + tsReadKey;
    $.getJSON(url, function(data) {
        sucCallback(data);
        deferred.resolve();
    }).fail(readTsError("the last status"));
    return deferred.promise();
}
function readTsError(errorStr) {
    console.log("[Status] Getting " + errorStr + "failed.");
}
// Get yesterday records from ThingSpeak.
function getTsYestRecs() {
    return readTsFeeds({
        start: moment().subtract(1, "days").format("YYYY-MM-DD") + "%2000:00:00",
        end: moment().format("YYYY-MM-DD") + "%2000:00:00"
    }, function(data) {
        yest_records = data;
    });
}
function getCurrentStatus() {
    return readTsLastFeed(function(data) {
        var h = Math.floor((parseInt(data.field1, 10)+1)/1024*100);
        setCurStatus(h, Math.floor(parseInt(data.field3, 10)), Math.floor(parseInt(data.field2, 10)), Math.floor(parseInt(data.field4, 10)));
    });
}
// Periodically get current state of my plant from server.
// body's init function (Objects here are loaded _after_ all of HTML are loaded.)
function initialize() {
    // Home
    getProfiles().pipe(function() {
        if (localStorage.getItem("plantId") !== null) {
            updateScreen();
            displayPage("home");
        } else {
            listType();
            displayPage("add");
        }
    });
}
function getProfiles() {
    // Get users plant info.
    var deferred = $.Deferred();
    getUser().pipe(getPlants).pipe(function() {
        deferred.resolve();
    });
    return deferred.promise();
}
function updateScreen() {
    // Home
    checkChar();
    checkChat();
    displayChat();
    displayTip();
    displayChar();
    // Info
    displayInfo();
    displayPlant();
    // Store
    syncCoins();
    update();
}
function update() { // Sync data from Parse and Thingspeak in a certain interval.
    getCurrentStatus().pipe(function() {
        // Update the cohesion value.
        updateYesterday();
        displayStatus();
        checkChat();
        setTimeout(update, 10000);
    });
}
var first = false;
// Global functions: operations about adjusting values.
function updateYesterday() { // Check yesterday records and adjust the cohesion value.
    // Check Localstorage if there are existing date data for checking yesterday records.
    var yesterday = localStorage.getItem("yesterday"),
        now = moment().format("YYYY/MM/DD");
    if (yesterday != now && first === false) {
        // Get yesterday records and check them.
        getTsYestRecs().pipe(function() {
            var avg_yest_humid = 0, humid_count = 0,
                avg_yest_lumin = 0, lumin_hours = 0,
                avg_yest_temp = 0, temp_count = 0;
            for (var i=0; i<yest_records.feeds.length; i++) {
                var feed = yest_records.feeds[i],
                    hour = moment(feed.created_at).format("H");
                // Check if records are not in the evening or at night.
                if (hour > 8 && hour < 16) {
                    // Sunlight: lumin >= 4000.
                    if (feed.field2 >= 4000) lumin_hours += 1;
                    // Humidity and temperature between 8 and 16 are calculated in average.
                    avg_yest_humid += feed.field1; // humid
                    humid_count += 1;
                    avg_yest_temp += feed.field3; // temp
                    temp_count += 1;
                }
            }
            // Get average values by sum of values from 8 to 16 dividing their counts.
            avg_yest_humid /= humid_count;
            avg_yest_temp /= temp_count;
            avg_yest_lumin /= lumin_hours;
            var cohesChange = 0;
            if (avg_yest_humid < plantInfo[curPlant.plantNumber].humidLower || avg_yest_humid > plantInfo[curPlant.plantNumber].humidUpper) {
                cohesChange -= 1;
            }
            if (avg_yest_temp < plantInfo[curPlant.plantNumber].tempLower || avg_yest_temp > plantInfo[curPlant.plantNumber].tempUpper) {
                cohesChange -= 1;
            }
            if (avg_yest_lumin < plantInfo[curPlant.plantNumber].luminLength) {
                cohesChange -= 1;
            }
            updateCohesion("已統計昨天記錄", cohesChange);
            localStorage.setItem("yesterday", moment().format("YYYY/MM/DD"));
            if (curPlant.cohesion > 50) {
                var c = parseInt(localStorage.getItem("coins"), 10) + 87;
                localStorage.setItem("coins", c);
                updateCoins(87, false);
            }
        });
    }
}
// Home page
var chatStr = [];
function checkChat() { // Check current status values and determine which messages to display.
    var isNormal = true, msg = "", charMsgs,
        pId = curPlant.plantNumber, pCharId = curPlant.character;
    chatStr.length = 0;
    // Filter initial messages by a certain character.
    if (pCharId == "0") charMsgs = messages[pId].baby;
    else if (pCharId == "1") charMsgs = messages[pId].growing;
    else charMsgs = messages[pId].adult[pCharId-2];
    // Cehck temperature, humidity, and luminous.
    // Any greater or lower values will lead to isNormal = false.
    if (curStatus.temp > plantInfo[pId].tempUpper) {
        var tUpperMsgs = charMsgs.temp.upper;
        chatStr.push(tUpperMsgs[Math.floor(Math.random() * 100 % tUpperMsgs.length)]);
        isNormal = false;
    } else if (curStatus.temp < plantInfo[pId].tempLower) {
        var tLowerMsgs = charMsgs.temp.lower;
        chatStr.push(tLowerMsgs[Math.floor(Math.random() * 100 % tLowerMsgs.length)]);
        isNormal = false;
    }
    if (curStatus.humid > plantInfo[pId].humidUpper) {
        var hUpperMsgs = charMsgs.humid.upper;
        chatStr.push(hUpperMsgs[Math.floor(Math.random() * 100 % hUpperMsgs.length)]);
        isNormal = false;
    } else if (curStatus.humid < plantInfo[pId].humidLower) {
        var hLowerMsgs = charMsgs.humid.lower;
        chatStr.push(hLowerMsgs[Math.floor(Math.random() * 100 % hLowerMsgs.length)]);
        isNormal = false;
    }
    if (curStatus.lumin > plantInfo[pId].luminUpper) {
        var lUpperMsgs = charMsgs.lumin.upper;
        chatStr.push(lUpperMsgs[Math.floor(Math.random() * 100 % lUpperMsgs.length)]);
        isNormal = false;
    } else if (curStatus.lumin < plantInfo[pId].luminLower) {
        var lLowerMsgs = charMsgs.lumin.lower;
        chatStr.push(lLowerMsgs[Math.floor(Math.random() * 100 % lLowerMsgs.length)]);
        isNormal = false;
    }
    if (isNormal) {
        var nMsgs = charMsgs.normal;
        chatStr.push(nMsgs[Math.floor(Math.random() * 100 % nMsgs.length)]);
    }
    addQuestions();
}
var removed_chat_count = 0;
function addQuestions() {
    var pId = curPlant.plantNumber;
    for (var i=0; i<messages[pId].tips.length; i++) {
        if (!messages[pId].tips[i].used) {
            var q = "<div>"+messages[pId].tips[i].question+"</div>  ";
            if (messages[pId].tips[i].answer) {
                q += "<a href=\"javascript:answerCorrect(\'" + messages[pId].tips[i].correct + "\', " + chatStr.length + ", " + i + ");\" class=\"answer_true\"> O </a>  <a href=\"javascript:answerWrong(\'" + messages[pId].tips[i].wrong + "\', " + chatStr.length + ", " + i + ");\" class=\"answer_false\"> X </a>";
            } else {
                q += "<a href=\"javascript:answerWrong(\'" + messages[pId].tips[i].wrong + "\', " + chatStr.length + ", " + i + ");\" class=\"answer_true\"> O </a>  <a href=\"javascript:answerCorrect(\'" + messages[pId].tips[i].correct + "\', " + chatStr.length + ", " + i + ");\" class=\"answer_false\"> X </a>";
            }
            chatStr.push(q);
        }
    }
}
function answerCorrect(msg, id, i) {
    $("#msg1").html(msg);
    updateCohesion("回答正確", 1);
    var status = JSON.parse(localStorage.getItem("cohesion"));
    status[1] += 1;
    localStorage.setItem("cohesion", JSON.stringify(status));
    chatStr.splice((id-removed_chat_count), 1);
    removed_chat_count++;
    messages[curPlant.plantNumber].tips[i].used = true;
}
function answerWrong(msg, id, i) {
    $("#msg1").html(msg);
    updateCohesion("回答錯誤", -1);
    var status = JSON.parse(localStorage.getItem("cohesion"));
    status[1] -= 1;
    localStorage.setItem("cohesion", JSON.stringify(status));
    chatStr.splice((id-removed_chat_count), 1);
    messages[curPlant.plantNumber].tips[i].used = true;
}
function displayChar() {
    $("#home-char").html(iChars[curPlant.character].name);
}
function displayChat() { // Randomly display chat string in a certain interval.
    $("#msg1").html(chatStr[Math.floor(Math.random() * 100 % chatStr.length)]);
    setTimeout(displayChat, 5000);
}
function displayTip() { // Randomly display tip string in a certain interval.
    var plant_tips = plantInfo[curPlant.plantNumber].tips;
    $("#text").html(plant_tips[Math.floor(Math.random() * 100 % plant_tips.length)]);
    setTimeout(displayTip, 3000);
}
function displayStatus() { // Display status (circle and values).
    $("#temp_value").html(curStatus.temp);
    $("#cohes_value").html(curPlant.cohesion);
    $("#humid_value").html(curStatus.humid);
    $("#lumin_value").html(curStatus.lumin);
    setArc(curStatus.humid, curStatus.lumin, curStatus.temp, curPlant.cohesion);
}
function updateCohesion(eventStr, value) { // Check the cohesion value and calculate it.
    // Calculate the current cohesion value.
    var change;
    if (value > 0) {
        if ((curPlant.cohesion+value) > 100) {
            value = 100 - curPlant.cohesion;
            curPlant.cohesion = 100;
        } else {
            curPlant.cohesion += value;
        }
        change = "+" + value;
    } else if (value < 0) {
        if ((curPlant.cohesion+value) < 0) {
            value = -curPlant.cohesion;
            curPlant.cohesion = 0;
        } else {
            curPlant.cohesion += value;
        }
        change = value;
    } else {
        change = "不變";
    }
    // Sync local data to Parse.
    syncPlant();
    // Display the toast message and update the page.
    eventStr += "，目前親暱度為 " + curPlant.cohesion + " (" + change + ")。";
    Materialize.toast(eventStr, 4000);
    $(".cohesion").html(curPlant.cohesion);
}
// Info page
function displayInfo() { // Display Info page.
    var str = "";
    str += "<div class='info-header'><div class='header-circle-1 left'><a class='waves-effect waves-light frame-style circle card-style valign-wrapper' onclick='showInputDialog(\"名稱\",\"" + curPlant.name + "\",modifyName);'><div class='valign center'>" + curPlant.name + "</div></a></div><div class='header-circle-2 left'><a class='waves-effect waves-light frame-style circle card-style valign-wrapper' onclick='showDateDialog(\"種植日期\",\"" + curPlant.date + "\",modifyDate);'><div class='valign center'>" + curPlant.date + "</div></a></div><div class='header-circle-3 left'><a class='waves-effect waves-light frame-style circle card-style valign-wrapper' onclick='showDropdownDialog(pNames,\"品種\"," + curPlant.plantNumber + ",modifyType);'><div class='valign center'>" + plantInfo[curPlant.plantNumber].name + "</div></a></div></div><div class='info-plant'><div class='image my-plant'></div><div class='image my-pot'></div></div><div class='info-bottom'><div class='bottom-circle-1 left'><div class='circle theme-accent-1 card-style valign-wrapper'><div class='valign center'>" + curPlant.cohesion + "</div></div></div>";
    var char = curPlant.character;
    if (char >= 2) str += "<div class='bottom-circle-2 left'><a class='waves-effect waves-light frame-style circle card-style valign-wrapper' onclick='showDropdownDialog(iChars,\"角色\"," + curPlant.character + ",modifyChar);'><div class='valign center'>" + iChars[curPlant.character].name + "</div></a></div></div>";
    else str += "<div class='bottom-circle-2 left' style='color:black;'><div class='circle theme-accent-1 card-style valign-wrapper'><div class='valign center'>" + iChars[curPlant.character].name + "</div></div></div></div>";
    $("#info").html(str);
}
function updateInfoChar() {
    if (curPlant.character >= 2) $(".bottom-circle-2").html("<a class='waves-effect waves-light frame-style circle card-style valign-wrapper' onclick='showDropdownDialog(iChars,\"角色\"," + curPlant.character + ",modifyChar);'><div class='valign center'>" + iChars[curPlant.character].name + "</div></a></div>");
    else $(".bottom-circle-2").html("<div class='circle theme-accent-1 card-style valign-wrapper'><div class='valign center'>" + iChars[curPlant.character].name + "</div></div></div>");
}
function modifyName() { // Modify the current plant's name and sync it to Parse.
    curPlant.name = $("#input-field").val();
    syncPlant();
    displayInfo();
}
function modifyDate() { // Modify the current plant's date and sync it to Parse.
    var char = curPlant.character;
    if (curPlant.date != $("#input-field").val()) {
        curPlant.date = $("#input-field").val();
        checkChar().pipe(function() {
            if (char == curPlant.character) {
                syncPlant();
                displayInfo();
            }
        });
    }
}
function modifyType() { // Modify the current plant's type and sync it to Parse.
    curPlant.plantNumber = $("#my-select").find("option:selected").val();
    syncPlant();
    displayInfo();
}
function modifyChar() { // Modify the current plant's character and sync it to Parse.
    curPlant.character = $("#my-select").find("option:selected").val();
    localStorage.setItem("char", curPlant.character);
    syncPlant();
    updateInfoChar();
    checkChat();
}
function checkChar() { // Determine which character to be selected.
    var deferred = $.Deferred();
    var origin_char = curPlant.character;
    var pDate = moment(curPlant.date),
        now = moment(),
        len = now.diff(pDate, 'days');
    if (len >= 0 && len <= plantInfo[curPlant.plantNumber].life[0]) curPlant.character = "0";
    else if (len > plantInfo[curPlant.plantNumber].life[0] && len <= plantInfo[curPlant.plantNumber].life[1]) curPlant.character = "1";
    else if (len > plantInfo[curPlant.plantNumber].life[1] && curPlant.character < 2) curPlant.character = "2";
    if (curPlant.character != origin_char) {
        syncPlant();
        updateInfoChar();
        setCharBtn();
    }
    deferred.resolve();
    return deferred.promise();
}
// Store page
function displayCoins() { // Display coins.
    $(".coins").html(localStorage.getItem("coins"));
}
function syncCoins() { // If the coins value in LocalStorage is changed. sync it to Parse.
    var c = localStorage.getItem("coins");
    if (curUser.coins != c) {
        curUser.coins = c;
        syncUser();
    }
    displayCoins();
    setTimeout(syncCoins, 1000);
}

function clearLocalData() {
    localStorage.clear();
}
function addClick() {
    setCurPlant({
        name: $("#first_name").val(),
        date: $("#plant_date").val(),
        plantNumber: parseInt($("#plantType").find("option:selected").val(), 10),
        cohesion: 60,
        character: "0"
    });
    addPlant();
    updateScreen();
    displayPage("home");
}
function listType() {
    var str = "<option value='-1' disabled selected>請選擇</option>";
    for (var i=0; i<plantInfo.length; i++) {
        str += "<option value='" + i + "'>" + plantInfo[i].name + "</option>";
    }
    $("#plantType").html(str);
}
var lastClose;
function checkClose() {
    var status = JSON.parse(localStorage.getItem("cohesion")),
        today = moment().format("YYYY/MM/DD");
    if (status !== null) {
        if (status[0] == today && status[1] <= 3)
            if (Math.abs(curStatus.close - lastClose) > 500) {
                updateCohesion("主人你來看我了~~", 1);
                updateCoins(87, false);
                status[1] += 1;
                localStorage.setItem("cohesion", JSON.stringify(status));
            }
    } else localStorage.setItem("cohesion", JSON.stringify([today, 0]));
}
function setCharBtn() {
    var char = parseInt(localStorage.getItem("char"), 10);
    if (char < 2) {
        $("#store-chars-btn").css("background-color", "#aeaeae").removeAttr('onclick');
        $("#items-chars-btn").css("background-color", "#aeaeae").removeAttr('onclick');
    } else {
        $("#store-chars-btn").css("background-color", "transparent").attr('onclick', 'switchStoreTab(this.id, 3);');
        $("#items-chars-btn").css("background-color", "transparent").attr('onclick', 'switchItemsTab(this.id, 3);');
    }
}