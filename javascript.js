    // 1. Start a new Git repo for your project. -DONE

    // 2, Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don't worry about putting anything else in there. -DONE

    // 3. Your game is gong to play against the computer, so begin with a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'. We'll use this function in the game to make the computer's play. Tip: use the console to make sure this is returning the expected output before moving to the next step! DONE

function computerPlay(cplay) {
return cplay[Math.floor(Math.random()*cplay.length)];
}
var cplay = [ "paper", "scissors", "rock"];
// console.log(computerPlay(cplay));

    // 4a. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" DONE

    // 4b. Make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). DONE

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return("Draw!");
    } else if(computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
        ++playerPoints;
        return ("You Win! Scissors beats Paper");
    } else if(computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        ++computerPoints;
        return ("You Lose! Paper beats Rock");
    } else if(computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        ++playerPoints;
        return ("You Win! Rock beats Scissors");
    } else if(computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        ++computerPoints;
        return ("You Lose! Scissors beats Paper");
    } else if(computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        ++playerPoints;
        return ("You Win! Paper beats Rock");
    } else if(computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        ++computerPoints;
        return ("You Lose! Rock beats Scissors");
    } else {
        return("Error!");
    }
}

    // 5. Important note: you want to return the results of this function call, not console.log() them. DONE
    
    // 6a. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. (Call your playRound function 5 times in a row.) DONE

function game() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = computerPlay(cplay);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay(cplay);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay(cplay);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay(cplay);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay(cplay);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

game();

if (playerPoints == computerPoints) {
    alert("Tie Game!");
} else if (playerPoints > computerPoints) {
    alert("Player Wins Best of Five!");
} else if (playerPoints < computerPoints) {
    alert("Computer Wins Best of Five!");
}

    // 6b. At this point you should be using console.log() to display the results of each round and the winner at the end. DONE

    // 6c. Use prompt() to get input from the user. DONE

    // 6d. Feel free to re-work your previous functions if you need to. Speficially, you might want to change the return value to something more useful.

    // 6e. Feel free to create more "helper" functions if you think it would be useful.