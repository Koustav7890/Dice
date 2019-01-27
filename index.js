var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomImage1;
var randomImageSource2 = "images/" + randomImage2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins! ⛳"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins! ⛳";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Oh! It's a tie 🙃";
}

var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomImageSource1);
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomImageSource2);