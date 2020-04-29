randomNumber1 = Math.floor((Math.random() * 6) + 1) ;

randomNumber2 = Math.floor((Math.random() * 6) + 1) ;


document.querySelectorAll("img")[0].setAttribute("src", "Images/dice" + randomNumber1 +".png") ;
document.querySelectorAll("img")[1].setAttribute("src", "Images/dice" + randomNumber2 +".png") ;

if (randomNumber1 > randomNumber2) {
document.getElementsByClassName("header")[0].innerText = "Player One Wins!"
} else if (randomNumber1 < randomNumber2) {
document.getElementsByClassName("header")[0].innerText = "Player Two Wins!"
} else if (randomNumber1 === randomNumber1) {
document.getElementsByClassName("header")[0].innerText = "Draw!"
} 
