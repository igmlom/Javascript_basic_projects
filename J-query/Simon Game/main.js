
var title = $("#level-title");
var colors = ["green", "red", "yellow", "blue"];
var userPattern = []
var gamePattern = []
var level = 0;
var start = false;

$(document).keydown(function () {
    if (!start) {
        start = true;
        nextSequence();
    }
})


function nextSequence() {
    level++;
    userPattern = [];
    title.text("Level " + level);
    var rdm = Math.floor(Math.random() * 4);
    gamePattern.push(colors[rdm]);

    setTimeout(() => {
        soundAnimation(colors[rdm]);
    }, 500);
}


$(".btn").click(function () {
    var userColor = $(this).attr("id");
    userPattern.push(userColor);
    soundAnimation(userColor);

    check(userPattern.length - 1);
})

function check(i) {
    if (userPattern[i] === gamePattern[i]) {
        if (userPattern.length === gamePattern.length) {
            nextSequence();
        }
    } else {

        gameOver();
    }

}



var soundAnimation = function (color) {
    var voice = new Audio("sounds/" + color + ".mp3");
    voice.play();
    $('#' + color).addClass('pressed');
    setTimeout(() => {
        $('#' + color).removeClass('pressed');
    }, 100);
}



function gameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    new Audio("sounds/wrong.mp3").play();
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    level = 0;
    gamePattern = [];
    start = false;
    
}




















