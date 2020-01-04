var gameTime = 60000;
var currentDisplayScore = 0;
var currentScore = 0;
var numberOfLevels = 4;
var currentLevel = 1;
var numberOfBubblesToLose = 3;
var currentMissedBubbles = 0;
var minutes = 0;
var seconds = 0;
var timeInterval;
var timeBetweenBubbles = 1000;
var timeToBubbleToBeClickableMobile = 2000;
var timeToBubbleToDisappear = 500;
var timeToScoreToDisappear = 200;
var timeToSplashToDisappear = 500;
var bubbleInterval;
var levelInterval;
var classNameMobile = "outBubble x";
var classNameDesktop = "bubbleDesktop x";
var minClassNumber = 1;
var maxClassNumber = 23;
var minMultiplyFloat = 1.1;
var maxMultiplyFloat = 1.2;
var numberOfDigitAfterComa = 2;
var isMobile = false; //initiate as false
var cio = false;

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

window.onresize = function() {
   if(!isMobile)
        {
        if ((window.outerHeight - window.innerHeight) > 100) {
      cio = true;
      $("#cioHidden").val("1");
        }
        else{
        cio = false;
         $("#cioHidden").val("0");
        }
     }   
 }

var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

document.documentElement.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);

//$("#imgGasStation").dblclick(function(){
//return false;
//});

$(document).ready(function () {

    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
        isMobile = true;

    //(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|symbian|treo|up.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|e-|e/|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(-|2|g)|yas-|your|zeto|zte-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
    //if ($.browser.mobile) {
    //    alert('You are using a mobile device!');
    //}
    //else {
    //    alert('You are not using a mobile device!');
    //}
    //if ($(window).width() < 1280) {
    //    alert('Less than 1280');
    //}
    //else {
    //    alert('More than 1280');
    //}
    ConvertFromMillySecondsToMinutesAndSeconds();
    timeInterval = setInterval(StartTimer, 1000);
    InitializeLevel();
    if (isMobile) {
        bubbleInterval = setInterval(CreateDivMobile, timeBetweenBubbles);
    } else {
        bubbleInterval = setInterval(CreateDiv, timeBetweenBubbles);
    }
    //bubbleInterval = setInterval(CreateDiv, timeBetweenBubbles);
    //setTimeout(function () {
    //    clearInterval(bubbleInterval);
    //    timeBetweenBubbles = 500;
    //    bubbleInterval = setInterval(CreateDiv, timeBetweenBubbles);
    //}, 10000)
    //CreateDiv();
});

function ConvertFromMillySecondsToMinutesAndSeconds() {
    seconds = (gameTime / 1000) % 60;
    minutes = parseInt(((gameTime / 1000) / 60) % 60);
}

function StartTimer() {
    $("#lblSecondsTimer").text(TimeFormat(seconds));
    $("#lblminutesTimer").text(TimeFormat(minutes));
    if (minutes > 0 || seconds > 0) {
        if (minutes > 0) {
            if (seconds == 0) {
                seconds = 59;
                minutes--;
            }
        } else {
            seconds--;
        }
        if (seconds == 55) {
            AddSurpriseToGame();
        }
        gameTime = gameTime - 1000;
    } else {
        if (seconds == 0) {
            //alert("Game Over");
            //clearInterval(timeInterval);
            //clearInterval(bubbleInterval);
            //clearInterval(InitializeLevel);
            EndGame();
            return;
        }
    }
}

function AddSurpriseToGame() {
    $(".existSurprise").addClass("surprise");
    $(".existSurprise").on("touchstart click", function (e) {
        SurpriseEvent(this);
    });
}

function SurpriseEvent(surprise) {
    $(surprise).addClass("cotllions");
    $(surprise).addClass("paused");


    $(surprise).animate({opacity: 0}, 2000);
    //document.getElementsByClassName("bubble")[0].classNameMobile = "splash";

    $("#wonSurpriseHidden").val("1");
    //document.getElementsByClassName("bubble")[0].classNameMobile = "splash";
    setTimeout(function () {
        $(surprise).hide(0, function () {
            $(surprise).remove();
        });
    }, 3000);
}

function TimeFormat(time) {
    return ('0' + time).slice(-2);
}

function CreateDivMobile() {
    var randomClass = classNameMobile + GetRandomInt();
    var $outBubbleDiv = $("<div>", {"class": randomClass});
    var $div = $("<div>", {"class": "bubble"});
    setTimeout(function () {
        $outBubbleDiv.on("touchstart click", function (e) {
            e.preventDefault();
            if ($(this).hasClass("clicked") || $(this).children().hasClass("splash")) {
                return false;
            }
            $(this).addClass("clicked");
            BubleEventMobile(this);
        });

        // var lastTouchEnd = 0;
        $outBubbleDiv.addEventListener('touchend', function (event) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        $outBubbleDiv.addEventListener('touchmove', function (event) {
            event.preventDefault();
        }, false);



    }, timeToBubbleToBeClickableMobile);
    $outBubbleDiv
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                    function (e) {
                        currentMissedBubbles++;
                        ChangetoSplashMobile(this);
                        if (currentMissedBubbles == numberOfBubblesToLose) {
                            EndGame();
                        }
                    });
    $outBubbleDiv.append($div);
    $("#bubbles").append($outBubbleDiv);
}

function CreateDiv() {
    var randomClass = classNameDesktop + GetRandomInt();
    //var randomClass = classNameMobile + 1;
    //var $outBubbleDiv = $("<div>", { "class": randomClass });
    var $div = $("<div>", {"class": randomClass});
    //$div.click(function () {
    //    BubleEvent(this);
    //});
    $div.on("click", function (e) {
        //var pos = $(this).offset();
        //var $label = $("<label>").text('+10');
        //var top = pos.top;
        //var left = pos.left;

        //$label.css({
        //    position: 'absolute',
        //    top: top,
        //    left: left
        //});
        //$("body").append($label);
        //$label.hide(timeToScoreToDisappear, function () {
        //    $label.remove();
        //});
        //event.stopPropagation();
        //alert(offset.left + ", " + offset.top);
        if ($(this).hasClass("clicked") || $(this).hasClass("splash")) {
            return false;
        }
        $(this).addClass("clicked");
        BubleEvent(this);
    });
    //$outBubbleDiv.on("click touchstart", function (e) {
    //    var pos = $(this).find(".bubble").offset();
    //    var $label = $("<label>").text('+10');
    //    var top = pos.top ;
    //    var left = pos.left ;

    //    $label.css({
    //        position: 'absolute',
    //        top: top,
    //        left: left
    //    });
    //    $("body").append($label);
    //    //event.stopPropagation();
    //    //alert(offset.left + ", " + offset.top);
    //    if ($(this).hasClass("clicked")) {
    //        return false;
    //    }
    //    $(this).addClass("clicked");
    //    BubleEvent(this);
    //});
    $div
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                    function (e) {
                        currentMissedBubbles++;
                        //alert(currentMissedBubbles);
                        ChangetoSplash(this);
                        //RemoveBubble(this);
                        if (currentMissedBubbles == numberOfBubblesToLose) {
                            EndGame();
                        }
                        //$(this).off(e);
                    });
    //$("#bubbles").append($div);
    //$outBubbleDiv.append($div);
    $("#bubbles").append($div);
}

function CreateLabel(top, left, text) {
    //var $label = $("<label>").text(text);
    var $label = $("<label>", {"class": "score fontScore", "text": "+" + text});
    $label.css({
        position: 'absolute',
        top: top,
        left: left,
        opacity: 1.0,
        visibility: "visible"
    })
            .animate({opacity: 0}, timeToScoreToDisappear);
    $("body").append($label);
//    document.documentElement.on('touchend', function (event) {
//        var now = (new Date()).getTime();
//        if (now - lastTouchEnd <= 300) {
//            event.preventDefault();
//        }
//        lastTouchEnd = now;
//    }, false);
//
//    document.documentElement.on('touchmove', function (event) {
//        event.preventDefault();
//    }, false);
    $label.hide(0, function () {
        $label.remove();
    });
    //     $label.remove();
}

function InitializeLevel() {
    var levelTime = gameTime / numberOfLevels;
    levelInterval = setInterval(UpdateLevels, levelTime);
}

function UpdateLevels() {
    if (bubbleInterval != null) {
        clearInterval(bubbleInterval);
    }
    currentLevel++;
    if (currentLevel <= numberOfLevels) {
        if (currentLevel == 2) {
            timeBetweenBubbles = 750;
        } else if (currentLevel == 3) {
            timeBetweenBubbles = 500;
        } else if (currentLevel == 4) {
            timeBetweenBubbles = 250;
        }

    }
    //timeBetweenBubbles = timeBetweenBubbles / currentLevel;
    if (isMobile) {
        bubbleInterval = setInterval(CreateDivMobile, timeBetweenBubbles);
    } else {
        bubbleInterval = setInterval(CreateDiv, timeBetweenBubbles);
    }
    //bubbleInterval = setInterval(CreateDiv, timeBetweenBubbles);
}


function GetRandomInt() {
    return Math.floor(Math.random() * (maxClassNumber - minClassNumber + 1)) + minClassNumber;
}

function GetRandomFloat() {
//    var test = Number(Math.random() * (maxMultiplyFloat - minMultiplyFloat) + minMultiplyFloat).toFixed(numberOfDigitAfterComa);
//    console.log("test = " + test);
//    return test;
    return Number(Math.random() * (maxMultiplyFloat - minMultiplyFloat) + minMultiplyFloat).toFixed(numberOfDigitAfterComa);
}

function RoundNumber(floatNumber) {
    return Math.round(Math.round(floatNumber) / 5) * 5;
}

//function BubleEventMobile(bubble) {
//    var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
//           matches = $(bubble).css('-transform').match(matrixRegex),
//           scale = matches[1];

//    var score = 0;
//    if (currentLevel == 1) {
//        if (scale >= 0 && scale <= 0.6) {
//            score = 45;
//            //h1.innerHTML = "&nbsp;" + score;
//        } else if (scale > 0.6 && scale <= 0.9) {
//            score = 30;
//            //h1.innerHTML = "&nbsp;10";
//        } else if (scale > 0.9 && scale <= 1.2) {
//            score = 15;
//            //h1.innerHTML = "&nbsp;5";
//        }
//    } else if (currentLevel == 2) {
//        if (scale >= 0 && scale <= 0.6) {
//            score = 50;
//            //h1.innerHTML = "&nbsp;" + score;
//        } else if (scale > 0.6 && scale <= 0.9) {
//            score = 35;
//            //h1.innerHTML = "&nbsp;10";
//        } else if (scale > 0.9 && scale <= 1.2) {
//            score = 20;
//            //h1.innerHTML = "&nbsp;5";
//        }
//    } else if (currentLevel == 3) {
//        if (scale >= 0 && scale <= 0.6) {
//            score = 60;
//            //h1.innerHTML = "&nbsp;" + score;
//        } else if (scale > 0.6 && scale <= 0.9) {
//            score = 45;
//            //h1.innerHTML = "&nbsp;10";
//        } else if (scale > 0.9 && scale <= 1.2) {
//            score = 30;
//            //h1.innerHTML = "&nbsp;5";
//        }
//    } else if (currentLevel == 4) {
//        if (scale >= 0 && scale <= 0.6) {
//            score = 75;
//            //h1.innerHTML = "&nbsp;" + score;
//        } else if (scale > 0.6 && scale <= 0.9) {
//            score = 60;
//            //h1.innerHTML = "&nbsp;10";
//        } else if (scale > 0.9 && scale <= 1.2) {
//            score = 45;
//            //h1.innerHTML = "&nbsp;5";
//        }
//    }
//    //var h1 = document.createElement("h1");
//    //$(bubble).append(h1);
//    //h1.style.color = "white";
//    //h1.innerHTML = "&nbsp;" + score;
//    UpdateScore(bubble, score);
//    //RemoveBubble(bubble);
//}

function GetScore(scale) {
    var score = 0;
    if (currentLevel == 1) {
        if (scale >= 0 && scale <= 0.6) {
            score = 45;
            //h1.innerHTML = "&nbsp;" + score;
        } else if (scale > 0.6 && scale <= 0.9) {
            score = 30;
            //h1.innerHTML = "&nbsp;10";
        } else if (scale > 0.9 && scale <= 1.2) {
            score = 15;
            //h1.innerHTML = "&nbsp;5";
        }
    } else if (currentLevel == 2) {
        if (scale >= 0 && scale <= 0.6) {
            score = 50;
            //h1.innerHTML = "&nbsp;" + score;
        } else if (scale > 0.6 && scale <= 0.9) {
            score = 35;
            //h1.innerHTML = "&nbsp;10";
        } else if (scale > 0.9 && scale <= 1.2) {
            score = 20;
            //h1.innerHTML = "&nbsp;5";
        }
    } else if (currentLevel == 3) {
        if (scale >= 0 && scale <= 0.6) {
            score = 60;
            //h1.innerHTML = "&nbsp;" + score;
        } else if (scale > 0.6 && scale <= 0.9) {
            score = 45;
            //h1.innerHTML = "&nbsp;10";
        } else if (scale > 0.9 && scale <= 1.2) {
            score = 30;
            //h1.innerHTML = "&nbsp;5";
        }
    } else if (currentLevel == 4) {
        if (scale >= 0 && scale <= 0.6) {
            score = 75;
            //h1.innerHTML = "&nbsp;" + score;
        } else if (scale > 0.6 && scale <= 0.9) {
            score = 60;
            //h1.innerHTML = "&nbsp;10";
        } else if (scale > 0.9 && scale <= 1.2) {
            score = 45;
            //h1.innerHTML = "&nbsp;5";
        }
    }
    return score;
}

function BubleEventMobile(bubble) {
    //$(bubble).click(false);
    //$(bubble).attr("disabled", "disabled");
    var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = $(bubble).css('-transform').match(matrixRegex),
            scale = matches[1];
    var score = GetScore(scale);

    //var h1 = document.createElement("h1");
    //$(bubble).append(h1);
    //h1.style.color = "white";
    //h1.innerHTML = "&nbsp;" + score;
    UpdateScoreMobile(bubble, score);
    //RemoveBubble(bubble);
}

function BubleEvent(bubble) {
    //$(bubble).click(false);
    //$(bubble).attr("disabled", "disabled");
    var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = $(bubble).css('-transform').match(matrixRegex),
            scale = matches[1];
    var score = GetScore(scale);

    //var h1 = document.createElement("h1");
    //$(bubble).append(h1);
    //h1.style.color = "white";
    //h1.innerHTML = "&nbsp;" + score;
    UpdateScore(bubble, score);
    //RemoveBubble(bubble);
}

function UpdateScore(bubble, score) {
    //var h1 = document.createElement("h1");
    //$(bubble).append(h1);
    //h1.style.color = "white";
    //h1.innerHTML = "&nbsp;" + score;
    var pos = $(bubble).offset();
    var top = pos.top;
    var left = pos.left;
    CreateLabel(top, left, score)
    //$(bubble).addClass("splash");
//     console.log("score =" + score);
    var randomFloat = GetRandomFloat();
//    console.log("Random =" + randomFloat);
    var randScore = score * randomFloat;
//    console.log("randScore = " + randScore);
    currentScore = Number((currentScore + randScore).toFixed(numberOfDigitAfterComa));
//    console.log("currentScore = " + currentScore);
    currentDisplayScore = currentDisplayScore + score;
//    $("#score").text(currentDisplayScore);
    $("#score").text(currentScore + " " + currentDisplayScore);
    RemoveBubble(bubble);
}

function UpdateScoreMobile(bubble, score) {
    //var h1 = document.createElement("h1");
    //$(bubble).append(h1);
    //h1.style.color = "white";
    //h1.innerHTML = "&nbsp;" + score;
    var pos = $(bubble).find(".bubble").offset();
    var top = pos.top;
    var left = pos.left;
    CreateLabel(top, left, score)
    //     console.log("score =" + score);
    var randomFloat = GetRandomFloat();
//    console.log("Random =" + randomFloat);
    var randScore = score * randomFloat;
//    console.log("randScore = " + randScore);
    currentScore = Number((currentScore + randScore).toFixed(numberOfDigitAfterComa));
//    console.log("currentScore = " + currentScore);
    currentDisplayScore = currentDisplayScore + score;
//    $("#score").text(currentDisplayScore);
    $("#score").text(currentScore + " " + currentDisplayScore);
    RemoveBubble(bubble);
}


function ChangetoSplash(bubble) {
    $(bubble).addClass("splash");
    $(bubble).animate({opacity: 0}, timeToSplashToDisappear);
    //document.getElementsByClassName("bubble")[0].classNameMobile = "splash";
    setTimeout(function () {
        RemoveBubble(bubble);
    }, timeToSplashToDisappear + 100);
}

function ChangetoSplashMobile(bubble) {
    $(bubble).children().addClass("splash");
    $(bubble).children().animate({opacity: 0}, timeToSplashToDisappear);
    //document.getElementsByClassName("bubble")[0].classNameMobile = "splash";
    setTimeout(function () {
        RemoveBubble(bubble);
    }, timeToSplashToDisappear + 100);
}

function RemoveBubbleMobile(bubble) {
    //$(bubble).clearQueue().finish();
    //$(bubble).css("animation-play-state", "paused");
    //$(bubble).addClass("splash");
    $(bubble).children().hide(timeToBubbleToDisappear, function () {
        $(bubble).remove();
    });
    //$(bubble).addClass("splash");
}

function RemoveBubble(bubble) {
    //$(bubble).clearQueue().finish();
    //$(bubble).css("animation-play-state", "paused");
    //$(bubble).addClass("splash");
    $(bubble).hide(0, function () {
        $(bubble).remove();
    });
    //$(bubble).addClass("splash");
}

function SaveScore() {
//    $.ajax({
//        type: "POST",
//        data : {"score" : score},
//        url: 'game.php',
//        success: function (data) {
////            alert(data);
//        }
//    });
// window.location.href ='game.php';
    $("#gameForm").submit();
}

function EndGame() {
    var finalScore = currentDisplayScore;
    var roundedScore = RoundNumber(currentScore);
//    alert(roundedScore);
//    alert("")
    clearInterval(timeInterval);
    clearInterval(bubbleInterval);
    clearInterval(InitializeLevel);
    clearInterval(levelInterval);
//        setTimeout(function () {
//    if ($("#wonSurpriseHidden").val() != null && $("#wonSurpriseHidden").val() == 1 && $("#surpriseTypeHidden").val() != null) {
//        var surpriseName = "";
//        if ($("#surpriseTypeHidden").val() == 1) {
//            surpriseName = "a car wash";
//        } else {
//            if ($("#surpriseTypeHidden").val() == 2) {
//                surpriseName = "a Bonjour purchase";
//            } else {
//                if ($("#surpriseTypeHidden").val() == 3) {
//                    surpriseName = "an oil change";
//                }
//            }
//        }
//        alert("Game over! Your score is: " + finalScore + "\n" + "You are our lucky winner today! You have won " + surpriseName + " voucher. You will be contacted by our team soon to redeem your gift!");
//    } else {
//        alert("Game over! Your score is: " + finalScore);
//    }
    $(".bubbleDesktop").remove();
    $(".bubble").remove();
    $("#scoreHidden").val(roundedScore);
    alert('final score ' + roundedScore)
    // SaveScore();
    //  }, 2000)
    return;
}
