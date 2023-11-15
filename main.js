var classicButton = document.getElementById('classic-button');
var extremeButton = document.getElementById('extreme-button');
var goBackButton = document.getElementById('back-button');
var fighterButtonsSection = document.querySelector('.fighter-buttons-section');
var gameModeButtonsSection = document.querySelector('.game-mode-buttons-section');
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

var humanPlayer = createPlayer('human', '👩🏻');
var machinePlayer = createPlayer('machine', '🤖');
var game = createGame(humanPlayer, machinePlayer);



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
    updateScores(winner);
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
    updateScores(winner);
}

function showElement(element) {
    element.style.display = 'flex';
}

function hideElement(element) {
    element.style.display = 'none';
}

// Update scores in the DOM
function updateScores(winner) {
    if (winner === 'draw') {
        displayMessage("it's a draw!");
    } else {
        if (winner) {
            winner.wins++;
        }
        document.getElementById('human-score').innerText = game.player1.wins;
        document.getElementById('machine-score').innerText = game.player2.wins;
        displayMessage(winner ? `${winner.name} wins!` : '');
    }
}

// Display the pop up winner message in the DOM
function displayMessage(message) {
    var messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    var closeButton = document.createElement('button');
    closeButton.classList = 'button';
    closeButton.textContent = '🔙';
    closeButton.addEventListener('click', function () {
        messageBox.remove();
        showElement(chooseFighterTitle);
        showElement(fighterButtonsSection);
        showElement(goBackButton);
    });
    
    messageBox.appendChild(messageElement);
    messageBox.appendChild(closeButton);
    
    document.querySelector('.main-section').appendChild(messageBox);
    
    hideElement(chooseFighterTitle);
    hideElement(fighterButtonsSection);
    hideElement(goBackButton);
}

// to show fighter buttons
function showFighterButtons() {
    showElement(rockButton);
    showElement(paperButton);
    showElement(scissorsButton);
    showElement(chooseFighterTitle);
    showElement(fighterButtonsSection);
    showElement(goBackButton);
    hideElement(alienButton);
    hideElement(robotButton);
    hideElement(rules);
    hideElement(classicButton);
    hideElement(extremeButton);
    hideElement(chooseGameTitle);
    hideElement(gameModeButtonsSection);

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

goBackButton.addEventListener('click', function () {
    showElement(chooseGameTitle);
    showElement(gameModeButtonsSection);
    showElement(classicButton);
    showElement(extremeButton);
    showElement(rules);
    hideElement(chooseFighterTitle);
    hideElement(fighterButtonsSection);
    hideElement(goBackButton);
});