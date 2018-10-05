//SET win counter to zero
var winCounter = 0;
//SET loss counter to zero
var lossCounter = 0;
//SET guess counter to number
var guessCounter = 10;
//CREATE array of possible guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//CREATE var to hold guessed letters


//CREATE method for random letter choice
var activeLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
   
console.log(activeLetter)

//TRACK user guess

    //incorrect
    //correct

//Create function to push guessed letters to array




document.addEventListener("keyup", function(){
    var userGuess = event.key.toLowerCase();
    

    if (userGuess !== activeLetter && guessCounter > 0) {
        guessCounter--
        guessedLetters.push(userGuess)
        numGuessLeft.textContent = "Guesses Left: " + guessCounter;
        console.log("Guesses left: " + guessCounter + guessedLetters); 
    }

    else if (userGuess !== activeLetter && guessCounter === 0) {
            lossCounter++
            losses.textContent = "Losses: " + lossCounter;
            console.log("Sorry, you lost")
    }
    else if (userGuess === activeLetter) {
        winCounter++
        wins.textContent = "Wins: " + winCounter;
        console.log("Number of wins: " + winCounter);
    }
})

    
// });

//INCREMENT appropriate counter until win or loss
    //WRITE information to page
//RESET game
    //clear the guessed letters
    //reset the guess counter
    //run the function to start the game again


