//SET win counter to zero
var winCounter = 0;
//SET loss counter to zero
var lossCounter = 0;
//SET guess counter to number
var guessCounter = 10;
//CREATE array of possible guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//CREATE var to hold guessed letters
var guessedLetters = []

//CREATE method for random letter choice
var activeLetter = function() {
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
   
}
// console.log(activeLetter)


//Create function to push guessed letters to array










document.addEventListener("keyup", function(){
    var userGuess = event.key.toLowerCase();
    
    if (userGuess !== activeLetter) {
        guessCounter--
        console.log(guessCounter);
        if(guessCounter === 0) {
            console.log("Sorry, you lost")
        }
       
        // guessed.appendChild(guessCounter);
    }
    else{
        winCounter++
        wins.textContent = "Wins: " + winCounter;
        console.log(winCounter);
    }
})

    
// });
//TRACK user guess

    //incorrect
    //correct
//INCREMENT appropriate counter until win or loss
    //WRITE information to page
//RESET game
    //clear the guessed letters
    //reset the guess counter
    //run the function to start the game again


