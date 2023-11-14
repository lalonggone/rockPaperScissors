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


// Data model functions for CLASSIC MODE

function getRandomMachineChoiceClassic() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinnerClassic(playerChoice, machineChoice) {
    var winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (playerChoice === machineChoice) {
        return "draw";
    } else if (winningMoves[playerChoice] === machineChoice) {
        return humanPlayer;
    } else {
        return machinePlayer;
    }
}

function takeTurnClassic(playerChoice) {

    var machineChoice = getRandomMachineChoiceClassic();
    var winner = determineWinnerClassic(playerChoice, machineChoice);

    if (winner === "draw") {
        console.log("It's a draw!");
    } else {
        winner.wins++; 
        updateScores(); 
        console.log(`${winner.name} wins!`);
    }

}

// Data Model for EXTREME mode..

function getRandomMachineChoiceExtreme() {
    var choices = ['rock', 'paper', 'scissors', 'robot', 'alien'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinnerExtreme(playerChoice, machineChoice) {
    var winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
        robot: ["paper", "alien"],
        alien: ["scissors", "rock"],
    };

    if (playerChoice === machineChoice) {
        return "draw";
    } else if (winningMoves[playerChoice].includes(machineChoice)) {
        return humanPlayer;
    } else {
        return machinePlayer;
    }
}

function takeTurnExtreme(playerChoice) {

    var machineChoice = getRandomMachineChoiceExtreme();
    var winner = determineWinnerExtreme(playerChoice, machineChoice);

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
    takeTurnClassic('rock');
});

paperButton.addEventListener('click', function () {
    takeTurnClassic('paper');
});

scissorsButton.addEventListener('click', function () {
    takeTurnClassic('scissors');
});

robotButton.addEventListener('click', function () {
    takeTurnExtreme('robot');
});

alienButton.addEventListener('click', function () {
    takeTurnExtreme('alien');
});

