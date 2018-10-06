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
var activeLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
   console.log(activeLetter)


function checkGuess() {
    var userGuess = event.key.toLowerCase();
    //Create code to push guessed letters to array
    guessedLetters.push(userGuess)

    if (userGuess !== activeLetter && guessCounter > 0) {
        guessCounter--
        numGuessLeft.textContent = "Guesses Left: " + guessCounter;
        guessedArray.textContent = "Your guesses so far: " + guessedLetters;
        console.log("Guesses left: " + guessCounter + guessedLetters); 
    }

    else if (userGuess !== activeLetter && guessCounter === 0) {
            lossCounter++
            losses.textContent = "Losses: " + lossCounter;
            reset();
            console.log("Sorry, you lost")
    }
    else if (userGuess === activeLetter) {
        winCounter++
        wins.textContent = "Wins: " + winCounter;
        reset();
    }
}

document.addEventListener("keyup", checkGuess);

//RESET game
    //clear the guessed letters
    //reset the guess counter
    //run the function to start the game again
function reset () {
    guessCounter = 10;
    numGuessLeft.textContent = "Guesses Left: 10";
    guessedArray.textContent = "Your guesses so far: ";
    guessedLetters.length = 0;
    activeLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log(activeLetter);
}


