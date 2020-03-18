// alert("Hey")
gamePattern = [];
level = 0;
gStart = true ;

buttonColours = ["red", "blue" , "green", "yellow"]

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

$(document).keypress(playGame)



// console.log(buttonColours)