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
  document.querySelector("#guess-total").innerHTML = guessLeft
}


//
function updateGuessList () {
  document.querySelector().innerHTML = 
}


//function updating the number of guesses left
function updateGuessLeft () {
  document.querySelector("#guess-list").innerHTML = guess
}












document.on('keyup', function () {




  var userGuess = .toLowerCase (userGuess)
    if (userGuess > -1) {
        alert("winner!")
    } else {
        alert("loss")
    }
  }
console.log('word')



  ];
    
          // Reworked our code from last step to use "else if" instead of lots of if statements.
    
          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
          if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
    
            if ((userGuess === "r" && computerGuess === "s") ||
              (userGuess === "s" && computerGuess === "p") || 
              (userGuess === "p" && computerGuess === "r")) {
              wins++;
            } else if (userGuess === computerGuess) {
              ties++;
            } else {
              losses++;
            }


var totalSum = total(9)

function total (num) {
    var sum = 0
    for(var i = 0; i <= num ; i++) {
        sum += i
    }
    return sum
}
console.log (totalSum)