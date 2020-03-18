$(document).ready(playGame())

function playGame() {
// alert("yo")


  function pressedKey() {
    selector = event.target.id
    $("#" + selector).addClass("pressed") ;
    setTimeout(function () {
      $("#" + selector).removeClass("pressed")
    }, 100)

    switch (selector) {
      case "0":
        var gsound = new Audio('sounds/green.mp3');
        gsound.play();
        break;
      case "1":
        var rsound = new Audio('sounds/red.mp3');
        rsound.play();
        break;
      case "2":
        var ysound = new Audio('sounds/yellow.mp3');
        ysound.play();
        break;
      case "3":
        var bsound = new Audio('sounds/blue.mp3');
        bsound.play();
        break;
      default:
    }
  }

  function pressedKey2() {
    selector = event.target.id
    $("#" + selector).addClass("pressed") ;
    setTimeout(function () {
      $("#" + selector).removeClass("pressed")
    }, 100)

    switch (selector) {
      case "0":
        var gsound = new Audio('sounds/green.mp3');
        gsound.play();
        console.log(selector)
        break;
      case "1":
        var rsound = new Audio('sounds/red.mp3');
        rsound.play();
        break;
      case "2":
        var ysound = new Audio('sounds/yellow.mp3');
        ysound.play();
        break;
      case "3":
        var bsound = new Audio('sounds/blue.mp3');
        bsound.play();
        break;
      default:
    }
    // console.log(selector)
    return selector
  }

  function nextSimon(n) {
    selector = n
    setTimeout(function () {
      $("#" + selector).addClass("pressed") , 500
    })
    setTimeout(function () {
      $("#" + selector).removeClass("pressed")
    }, 500)
    console.log(selector)

    switch (selector) {
      case "0":
        var gsound = new Audio('sounds/green.mp3');
        gsound.play();
        console.log(selector)
        break;
      case "1":
        var rsound = new Audio('sounds/red.mp3');
        rsound.play();
        break;
      case "2":
        var ysound = new Audio('sounds/yellow.mp3');
        ysound.play();
        break;
      case "3":
        var bsound = new Audio('sounds/blue.mp3');
        bsound.play();
        break;
      default:
    }
  }

function listen (A, i) {
nextSimon(A[i]);

};

function compareSimon(A,i) {
console.log(event)
}

function play(A,i) {
  $(".btn").on("click", compareSimon)

}

function play2 (A, i) {
  var j = 0 ;
  var B = [];
  var num = 0;
  while (j <= i) {

    num = $(".btn").on("click", pressedKey2)
    B.push(num)

  }
  // while loops continues if A == B
  if (A == B) {
    return True
  }



}
// function play () {
//
// };

// ************Play the sequence to replicate*********************

// Create an empty array
A = [] ;
var i = 0 ;
// Check if the game is still going


while (i < 2) {
// append the array with a new value from 0 - 3
  new_num = Math.floor(Math.random() * 4)
  A.push(new_num)
  // console.log(A, i)
  listen(A,i)
  i++ ;
  play(A, i)

  // nextSimon(new_num)





}


// $(".btn").on("click", pressedKey2) ;


} ;
