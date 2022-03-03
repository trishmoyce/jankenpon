/* RPS VERSION TWO

Player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

1. For now, remove the logic that plays exactly five rounds.
2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
3. Add a div for displaying results and change all of your console.logs into DOM methods
Display the running score, and announce a winner of the game once one player reaches 5 points.

 The game looks like this: 1) player clicks paper, scissors or rock. 2) When one is clicked, the function for the computer random selection executes, and 3) both selections are displayed, 4) the selections are compared, 5) the winner gets the points outputted on their score, 6) after five rounds a winner is displayed, 6) the button no longer clicks after the winner is declared

 */

// declares points tally variables

let playerPoints = 0;
let computerPoints = 0;

// computer randomized play

function computerPlay(cplay) {
    return cplay[Math.floor(Math.random()*cplay.length)];
}
var cplay = [ 'Paper', 'Scissors', 'Rock'];

// function that includes a function that will randomly play paper/scissors/rock and compare it against the button the player clicked

const allbuttons = document.querySelectorAll('button');

const playRound = e => {
    var playerSelection = e.target.value;
    var computerSelection = computerPlay(cplay);
    console.log(computerSelection);
    if (computerSelection == 'Paper' && e.target.id === 'buttonp') {
        document.getElementById('cplays').textContent += 'Paper ';
        declareWinner();
    } else if (computerSelection == 'Scissors' && e.target.id === 'buttonp') {
        computerPoints += 1;
        document.getElementById('cscore').textContent = computerPoints;        
        document.getElementById('cplays').textContent += 'Scissors ';
        declareWinner();
    } else if (computerSelection == 'Rock' && e.target.id === 'buttonp') {
        playerPoints += 1;
        document.getElementById('pscore').textContent = playerPoints;        
        document.getElementById('cplays').textContent += 'Rock ';
        declareWinner();
    } else if (computerSelection == 'Scissors' && e.target.id === 'buttons') {
        document.getElementById('cplays').textContent += 'Scissors ';
        declareWinner();
    } else if (computerSelection == 'Rock' && e.target.id === 'buttons') {
        computerPoints += 1;
        document.getElementById('cscore').textContent = computerPoints;        
        document.getElementById('cplays').textContent += 'Rock ';
        declareWinner();
    } else if (computerSelection == 'Paper' && e.target.id === 'buttons') {
        playerPoints += 1;
        document.getElementById('pscore').textContent = playerPoints;        
        document.getElementById('cplays').textContent += 'Paper ';
        declareWinner();
    } else if (computerSelection == 'Rock' && e.target.id === 'buttonr') {
        document.getElementById('cplays').textContent += 'Rock ';
        declareWinner();
    } else if (computerSelection == 'Paper' && e.target.id === 'buttonr') {
        computerPoints += 1;
        document.getElementById('cscore').textContent = computerPoints;        
        document.getElementById('cplays').textContent += 'Paper ';
        declareWinner();
    } else if (computerSelection == 'Scissors' && e.target.id === 'buttonr') {
        playerPoints += 1;
        document.getElementById('pscore').textContent = playerPoints;        
        document.getElementById('cplays').textContent += 'Scissors ';
        declareWinner();
  }
}

allbuttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

// function and listener events that displays the player's selection

function paperButton() {
    document.getElementById("pplays").textContent += "Paper ";
}

function scissorsButton() {
    document.getElementById("pplays").textContent += "Scissors ";
}

function rockButton() {
    document.getElementById("pplays").textContent += "Rock ";
}

buttonp.addEventListener('click', paperButton);
buttons.addEventListener('click', scissorsButton);
buttonr.addEventListener('click', rockButton);

// when player or computer reaches a score of five a winner is declared and buttons are grayed out

function declareWinner() {
if (playerPoints === 5) {
    document.getElementById("winnerresults").textContent = "...Player Wins!"
    winnerresults.style.color = 'green'
    winnerresults.style.fontSize = '35px'
    winnerresults.style.fontStyle = 'italic';
    disableButton();
} else if (computerPoints === 5) {
    document.getElementById("winnerresults").textContent = "...Computer Wins!"
    winnerresults.style.color = 'red'
    winnerresults.style.fontSize = '35px'
    winnerresults.style.fontStyle = 'italic';
    disableButton();
}
}

function disableButton() {
    buttonp.disabled = true;
    buttons.disabled = true;
    buttonr.disabled = true;
}