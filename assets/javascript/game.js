//Letter choices available
var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];




//This line generates a random item from the alphabetArray
var randomGenerated = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

//Linking to guessLeft id in html, then the number of guesses left out of 9 are displayed on page.  See loop statement below as well.
var updateRemainingGuesses = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

// Linking to tally id in html, then the guesses will be updated and separated by commas
var updateGuessesSoFar = function() { 
  document.querySelector('#tally').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};




//This function is activated when the so-called psychic pushes a key down.  
//The number of guesses left is decreased by 1.
//I found the userGuess variable online
document.onkeydown = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  
  //The functions described above on line 17 and 22 will be activated after a key is pushed
  updateRemainingGuesses();
  updateGuessesSoFar();

    //This 'if' statement says if the user's letter guessed matches the random generated
    //then wins will increase by 1
    //Also links to wins in html, allows to update win total
            if (userGuess == randomGenerated){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
    
    //When the number of guesses left becomes 0, the loss column will increase by 1
    //Also links losses in html, allows to update the loss total
        }else if (guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
};