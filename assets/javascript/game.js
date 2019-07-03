//create arrays to cover possibilities

var letters  = ['a', 'b', 'c', 'd'];

var wins = 0;

var losses = 0;

var guessTotal = 9;

var userGuess = [];

var letterToGuess = null;

var guessCount = 0

//computer randomly picks a number to be chosen

var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log (letterToGuess)


//game restart
function restGame (){
  letterToGuess = letters[Math.floor(Math.random() *letters.length)];
  guessTotal = 9;
  userGuess = [];
}

//get user input using keypress -- store info in variable for later use
document.onkeyup = function (event) {
  userGuess.push(event.key);
  console.log (userGuess)
  console.log (letterToGuess)
  console.log (guessCount)

//total number of guesses player has -- 9
function updateGuessTotal (){
  document.getElementById("#guess-total") = (guessTotal - (guessCount))
}


//
function updateGuessList () {
  document.getElementById("guess-list").innerHTML = ('Guesses so far:   ' + userGuess)
}


//function updating the number of guesses left
function updateGuessLeft () {
  document.getElementById("#guess-left").innerHTML = guess
}

//update Winner
function updateWins () {
  document.querySelector ('#win-colomn').innerHTML = wins
}



  updateGuessList ()
  


//Winner Alert
function winner () {
  if (letterToGuess === userGuess) {
  alert("Winner Winner Chicken Dinner!!!")
  resetGame ()
}
}

//Loser Alert
function loser () {
  if (guessTotal = 0) {
  alert ('you lose!!!!')
  resetGame ()

}
}
}
//


