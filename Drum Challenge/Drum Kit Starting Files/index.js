// alert("Hey")

// document.querySelector("button").addEventListener("click", handleClick) ;
var num_of_drum = document.querySelectorAll(".drum").length;

for (var i = 0; i < num_of_drum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      console.log(this.innerHTML);

      break;


    default:


}





// this.style.color = "white" ;


}
