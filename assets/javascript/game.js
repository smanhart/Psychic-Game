//SET win counter to zero
var winCounter = 0;
//SET loss counter to zero
var lossCounter = 0;
//SET guess counter to number
// var guessCounter = 10;
//CREATE array of possible guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//CREATE method for random letter choice
var activeLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
//CREATE var to hold guessed letters
var guessedLetters = []


document.addEventListener("keyup", function(){
    var userGuess = event.key.toLowerCase();

    for (var guessCounter = 10; guessCounter > -1; guessCounter--)
    
    if (userGuess !== activeLetter) {
        
        // guessed.appendChild(guessCounter);
    }
    else if (){
        winCounter++
        wins.textContent = "Wins: " + winCounter;
        
    }
    else {

    }

    console.log(guessCounter);
});
//TRACK user guess

    //incorrect
    //correct
//INCREMENT appropriate counter until win or loss
    //WRITE information to page
//RESET game

