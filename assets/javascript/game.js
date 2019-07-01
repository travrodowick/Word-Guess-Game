var letters  = ['a', 'b', 'c', 'd'];

var wins = 0;

var losses = 0;

var guessTotal = 9;

var userGuess = [];

var letterToGuess = null;

//computer randomly picks a number to be chosen

var compPick = letters[Math.floor(Math.random() * letters.length)];


//game restart
function restGame (){
  letters = compPick[Math.floor(Math.random() *compPick.length)];
  guessTotal = 9;
  userGuess = [];
}

//total number of guesses player has -- 9
function updateGuessTotal (){
  document.querySelector("#guess-total").innerHTML = guessTotal -
}


//
function updateGuessList () {
  document.querySelector("guess-list ").innerHTML = userGuess
}


//function updating the number of guesses left
function updateGuessLeft () {
  document.querySelector("#guess-left").innerHTML = guess
}

//




//Winner Alert
for (var i = 0; i < letters.length; i++) {
  if (letters[i] === userGuess)
  alert("Winner Winner Chicken Dinner!!!")
}


//Loser Alert
for 

//


 





//shows how many letters are left in the word
var answer = [];
for (var i = 0; 1 < letters.length; i++) {
  answer[i] = "_";
}



var userGuess = toLowerCase (userGuess)
    if (userGuess > -1) {
        alert("winner!")
    } else {
        alert("loss")
    }

console.log('word')


function total (num) {
    var sum = 0
    for(var i = 0; i <= num ; i++) {
        sum += i
    }
    return sum
}
console.log (totalSum)