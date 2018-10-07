//SET win counter to zero
var winCounter = 0;
//SET loss counter to zero
var lossCounter = 0;
//SET guess counter to number
var guessCounter = 10;
//CREATE array of possible guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Limit input to alphabet characters

//CREATE var to hold guessed letters
var guessedLetters = []

//CREATE method for random letter choice
var activeLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
   console.log(activeLetter)

 function checkChar(event) {
    var pressed = event.keycode;
    var validLetter = (pressed > 64 && pressed < 91)
}


function checkGuess() {
    var userGuess = event.key.toLowerCase();
    //Create code to push guessed letters to array
    guessedLetters.push(userGuess);

    //I can't figure out how to stop the guess counter from going down like i stopped the duplicate array push, so I took it out for consistancy.
    // if (guessedLetters.indexOf(userGuess) === -1) guessedLetters.push(userGuess);
    
    //I can't figure out how to get the keycode paramiters to appy to the guesses. Ive tried it here and also in the other if statement.
    // if (userGuess === validLetter) {
    

        if (userGuess !== activeLetter && guessCounter > 0) {
            guessCounter--
            numGuessLeft.textContent = "Guesses Left: " + guessCounter;
            guessedArray.textContent = "Your guesses so far: " + guessedLetters;
            console.log("Guesses left: " + guessCounter + guessedLetters); 
        }

        else if (userGuess !== activeLetter && guessCounter === 0) {
            lossCounter++
            losses.textContent = "Losses: " + lossCounter;
            alert("My thoughts remain a mystery. Better luck next time!")
            reset();
                
        }
        else if (userGuess === activeLetter) {
            winCounter++
            wins.textContent = "Wins: " + winCounter;
            alert("Ahh, I see you have a sixth sense. You've guessed my letter!")
            reset();
        }
    // }
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
    gameResult.textContent = ""
    activeLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log(activeLetter);
}


