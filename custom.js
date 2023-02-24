var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}















































// OPTION 2 using a function and foreach 
// function rollDice() {
//     var diceImagesPlayer1 = document.querySelectorAll(".player1 img");
//     var diceImagesPlayer2 = document.querySelectorAll(".player2 img");
//     var randomIndexPlayer1 = Math.floor(Math.random() * diceImagesPlayer1.length);
//     var randomIndexPlayer2 = Math.floor(Math.random() * diceImagesPlayer2.length);
  
//     diceImagesPlayer1.forEach((image, index) => {
//       if (index === randomIndexPlayer1) {
//         image.style.display = 'block';
//       } else {
//         image.style.display = 'none';
//       }
//     });
  
//     diceImagesPlayer2.forEach((image, index) => {
//       if (index === randomIndexPlayer2) {
//         image.style.display = 'block';
//       } else {
//         image.style.display = 'none';
//       }
//     });
  
//     if (randomIndexPlayer1 > randomIndexPlayer2) {
//       document.querySelector("h1").innerHTML = "Player 1 Wins!";
//     } else if (randomIndexPlayer2 > randomIndexPlayer1) {
//       document.querySelector("h1").innerHTML = "Player 2 Wins!";
//     } else {
//       document.querySelector("h1").innerHTML = "Draw!";
//     }
//   }
  
//   rollDice();


  
