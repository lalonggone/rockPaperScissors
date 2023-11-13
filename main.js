// Variables
var classicButton = document.getElementById('classic-button');
var extremeButton = document.getElementById('extreme-button');
var chooseGameTitle = document.querySelector('.choose-game-p')
var chooseFighterTitle = document.querySelector('.choose-fighter-p')
var rockButton = document.getElementById('rock-button');
var paperButton = document.getElementById('paper-button');
var scissorsButton = document.getElementById('scissors-button');
var alienButton = document.getElementById('alien-button');
var robotButton = document.getElementById('robot-button');
var rules = document.querySelector('.rules')

// Game setup 

function createPlayer(name, token) {
    return {
        name: name,
        token: token,
        wins: 0
    };
}


function createGame(player1, player2) {
    return {
        player1: player1,
        player2: player2,
    };
}

var humanPlayer = createPlayer('Human', '👩🏻');
var machinePlayer = createPlayer('Machine', '🤖');
var game = createGame(humanPlayer, machinePlayer);

// DOM manipulation... hold off on this

function showElement(element) {
    element.style.display = 'inline-block';
}

function hideElement(element) {
    element.style.display = 'none';
}

function updateScores() {
    document.getElementById('human-score').innerText = game.player1.wins;
    document.getElementById('machine-score').innerText = game.player2.wins;
}

function showFighterButtons() {
    showElement(rockButton);
    showElement(paperButton);
    showElement(scissorsButton);
    showElement(chooseFighterTitle);
    hideElement(alienButton);
    hideElement(robotButton);
    hideElement(rules);
    hideElement(classicButton);
    hideElement(extremeButton);
    hideElement(chooseGameTitle);
}


// Data model functions

function getRandomComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (playerChoice === computerChoice) {
        return "draw";
    } else if (winningMoves[playerChoice] === computerChoice) {
        return humanPlayer;
    } else {
        return machinePlayer;
    }
}

function takeTurn(playerChoice) {

    var computerChoice = getRandomComputerChoice();
    var winner = determineWinner(playerChoice, computerChoice);

    if (winner === "draw") {
        console.log("It's a draw!");
    } else {
        winner.wins++; 
        updateScores(); 
        console.log(`${winner.name} wins!`);
    }

}

// Event listeners

classicButton.addEventListener('click', function () {
    showFighterButtons();
});

extremeButton.addEventListener('click', function () {
    showFighterButtons();
    showElement(alienButton);
    showElement(robotButton);
});

rockButton.addEventListener('click', function () {
    takeTurn('rock');
});

paperButton.addEventListener('click', function () {
    takeTurn('paper');
});

scissorsButton.addEventListener('click', function () {
    takeTurn('scissors');
});

