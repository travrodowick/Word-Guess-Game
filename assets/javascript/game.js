var letters  = ['a', 'b', 'c', 'd'];

var wins = 0;

var losses = 0;

var guessTotal = 9;

var userGuess = [];

var letterToGuess = null;



//computer randomly picks a number to be chosen

var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log (letterToGuess)

//game restart
function restGame (){
  letterToGuess = letters[Math.floor(Math.random() *letters.length)];
  guessTotal = 9;
  userGuess = [];
}

//total number of guesses player has -- 9
function updateGuessTotal (){
  document.querySelector("#guess-total") = guessTotal
}


//
function updateGuessList () {
  document.querySelector("guess-list ").innerHTML = (userGuess)
}


//function updating the number of guesses left
function updateGuessLeft () {
  document.querySelector("#guess-left").innerHTML = guess
}

//update Winner
function updateWins () {
  document.querySelector ('#win-colomn').innerHTML = wins
}

//capture user guess
document.onkeyup = function () {
  userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log (userGuess)
  updateGuessList (userGuess)



//Winner Alert
function winner () {
  if (letterToGuess === userGuess)
  alert("Winner Winner Chicken Dinner!!!")
  resetGame ()
}

//Loser Alert
function loser () {
  if (guessTotal = 0)
  alert ('you lose!!!!')
  resetGame ()

}
}
//


