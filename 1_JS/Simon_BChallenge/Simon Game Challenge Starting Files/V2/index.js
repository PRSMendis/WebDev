// alert("Hey")
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var gStart = true ;

var buttonColours = ["red", "blue" , "green", "yellow"] 



function playSound(name) {
    var audio = new Audio("../sounds/" + name + ".mp3");
    audio.play();
  }

function nextSequence () {
    
    randomNumber = Math.floor(Math.random() * 4) ;
    // console.log(randomNumber)
    // console.log(buttonColours[randomNumber]);
    // gamePattern.append(buttonColours[randomNumber])
    gamePattern.push(buttonColours[randomNumber])
    // console.log(gamePattern)
    selector = buttonColours[randomNumber]
    $("#" + selector).addClass("pressed") ;
    setTimeout(function () {
      $("#" + selector).removeClass("pressed")
    }, 100)
    playSound(selector)

};

function pressedKey() {
    selector = event.target.id
    $("#" + selector).addClass("pressed") ;
    setTimeout(function () {
      $("#" + selector).removeClass("pressed")
    }, 100)

    // console.log(selector)
    switch (selector) {
      case "green":
        var gsound = new Audio('../sounds/green.mp3');
        gsound.play();
        break;
      case "red":
        var rsound = new Audio('../sounds/red.mp3');
        rsound.play();
        break;
      case "yellow":
        var ysound = new Audio('../sounds/yellow.mp3');
        ysound.play();
        break;
      case "blue":
        var bsound = new Audio('../sounds/blue.mp3');
        bsound.play();
        break;
      default:
    }
}

function playGame () {

    if (gStart == true) {
        gStart =  false ;
        nextSequence() 

        $(".btn").on("click", pressedKey)
        $("#level-title").text("level " + level)
    }
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // if (true){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
        }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);

        startOver();
        }   
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

$(document).keypress(function() {
    if (gStart == true) {
      $("#level-title").text("Level " + level);
      nextSequence();
      gStart = true;
    }
});


$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
});


// console.log(buttonColours)