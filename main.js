// Add this at the beginning of your JavaScript file
var classicButton = document.getElementById('classic-button');
var extremeButton = document.getElementById('extreme-button');
var chooseGameTitle = document.querySelector('.choose-game-p')
var rockButton = document.getElementById('rock-button');
var paperButton = document.getElementById('paper-button');
var scissorsButton = document.getElementById('scissors-button');
var alienButton = document.getElementById('alien-button');
var robotButton = document.getElementById('robot-button');


function showGameButtons() {
    classicButton.style.display = 'none';
    extremeButton.style.display = 'none';
    rockButton.style.display = 'inline-block';
    paperButton.style.display = 'inline-block';
    scissorsButton.style.display = 'inline-block';
    alienButton.style.display = 'none';
    robotButton.style.display = 'none';
    chooseGameTitle.style.display = 'none';
}


classicButton.addEventListener('click', function () {
    showGameButtons();
});


extremeButton.addEventListener('click', function () {
    showGameButtons();
    alienButton.style.display = 'inline-block';
    robotButton.style.display = 'inline-block';
});
