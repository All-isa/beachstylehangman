var wordOptions = ["seashell", "seagull", "crabs", "sandcastle", "bucket", "shovel", "boats","seaweed", "towel", "fish", "sandals", "beachball", "lighthouse", "driftwood", "lifeguard"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winsCount = 0;
var lossesCount = 0;
var guessesLeft = 0;

guessesLeft = 8;
wrongLetters = [];
blanksAndSuccesses = [];

startGame ();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(letterGuessed); 
   roundComplete();
}

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

for (var i=0; i < numBlanks; i++){
    blanksAndSuccesses.push("_ ");
        }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("_");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("gamesWon").innerHTML = winsCount;
    document.getElementById("gamesLost").innerHTML = lossesCount;


    console.log(blanksAndSuccesses);
    console.log(numBlanks);
    console.log(lettersInWord);
    console.log(selectedWord);}


function checkLetters(letter)   {

    var isLetterInWord = false;
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
        }
    }

    if(isLetterInWord)  {
        for (var i=0; i<numBlanks; i++){
            if(selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
}
function roundComplete(){
    console.log("Wins: " + winsCount + " | Losses: " + lossesCount + " | Guesses Left: " + guessesLeft);

document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.toString();
document.getElementById("guessesUsed").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winsCount++;
        alert("Congratulations! You Guessed Correct!");

        document.getElementById("gamesWon").innerHTML = winsCount;

        startGame();
    }

    else if (guessesLeft == 0){
        lossesCount++;
        alert("You Lose");

        document.getElementById("gamesLost").innerHTML = lossesCount;

        startGame();
    }
}