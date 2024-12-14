// Generate a random number between 1 and 6 for the first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

// Construct the file path for the first dice image
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

// Set the source attribute of the first dice image
document.querySelector(".img1").setAttribute("src", randomImageSource);

// Generate a random number between 1 and 6 for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// Construct the file path for the second dice image
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

// Set the source attribute of the second dice image
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Select the heading element
var heading = document.querySelector("h1");

// Update the heading based on the dice roll results
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
} else {
    heading.innerHTML = "Draw!";
}