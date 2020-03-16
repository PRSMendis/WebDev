$(document).ready(playGame())

function playGame() {
// alert("yo")


  function pressedKey() {
    selector = event.target.id
    $("#" + selector).addClass("pressed") ;
    setTimeout(function () {
      $("#" + selector).removeClass("pressed")
    }, 100)

    // console.log(event.target.id)
  }


$(".btn").on("click", pressedKey) ;


} ;
