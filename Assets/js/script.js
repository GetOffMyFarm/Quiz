//added all neccessary API variables as well as arrays to generate questions
var timer = document.getElementById("timer");
var highScore = document.getElementById("hScore");
var start = document.getElementById('start-button');
var startMenu = document.getElementById('card1');
var questionCard = document.getElementById('quiz-card');
var questions = ['What does JSON stand for?', 
'What is the correct syntax for console logging a variable?', 
'What is the name of the code that resets all native HTML stylings?', 'What is Flex Box?', 
'What does API stand for?'];
var rightAnswers = ['Javascript Object Notation', 'console.log(var)', 'reset.css', 'A web responsive layout', 'Application Programming Interface'];
var wrongAnswers = [['Juicey Story On Networktelevision', 'Jolly Santa Offering Nativity', 'Jambalaya Stew Over Nachos'],
['var.console(log)', 'function consoleLog(var)', 'console log var'], 
['reset.html', 'reset.js', 'reset.py'], 
['A web responsive display', 'A web responsive color scheme', 'A web responsive image catalogue'], 
['Appending Programming Interfaces', 'Application Positive Interference', 'Allowance for Programming Intelligence']];
var lastCard = document.getElementById('high-score-page');
var turnIndex = 0;
var radioButton = questionCard.querySelectorAll('button');
var fillInQuestions = document.getElementById('questions');
var wrongValues = document.querySelectorAll('button[value = "wrong"]');
var rightValue = document.querySelectorAll('button[value = "right"]');
var showScore = document.getElementById("score");
var theScore = 0;
var highScoreSubmit = document.getElementById('submit-button');
var highScoreFinal = localStorage.getItem('highScore');
var highScoreInit = localStorage.getItem('highScoreInitials');
var gameOver = document.getElementById('game-over-page');
var storedInit = document.getElementById('highScore').value;
var restart = document.getElementById('restart-game');
//if there is a high score in local storage, it will be displayed
if (highScoreFinal == null) {
    highScore.textContent = 0;
}
else {
    highScore.textContent = highScoreFinal + "" + highScoreInit;
}
//function to be called later that randomly sets the value of one of the buttons as "right" so we can place a right answer there
function rightAnswer() {
    buttonValue = radioButton.item(Math.floor(Math.random() * 4));
    buttonValue.value = 'right';
};
//sets all button values to wrong so that one can randomly be set to "right"
function resetAnswer() {
    for (var i = 0; i < radioButton.length; i++) {
        newButtonValue = radioButton.item(i);
        newButtonValue.value = 'wrong';
    }
};
//function that starts a countdown that ends when the timer reaches zero or when the quiz ends (the turn index conditional)
function countDown() {
    newTime = 60;
    
    var timerInt = setInterval(function() {
        if (newTime >= 0) {
            timer.textContent = newTime;
            newTime--;
         }
        else if (turnIndex == questions.length) {
            timer.textContent = 0;
            clearInterval(timerInt);
        }
        else {
            timer.textContent = 0;
            clearInterval(timerInt);
        }
    }, 1000)
};
//function to be called later that stops the question card and displays the end of game cards.
function endGame() {
    if (theScore > highScoreFinal) {
        questionCard.style.display = "none";
        lastCard.style.display = "flex";
        turnIndex = 0;
    }
    else {
        questionCard.style.display = "none";
        gameOver.style.display = "flex";
    }
}
//function that generates the questions on the screen
function setUpQuestions() {
    resetAnswer();
    rightAnswer();
    wrongValues = document.querySelectorAll('button[value = "wrong"]')
    rightValue = document.querySelectorAll('button[value = "right"]')
    fillInQuestions.textContent = questions[turnIndex];
    rightValue.item(0).textContent = rightAnswers[turnIndex];
    wrongValues.item(0).textContent = wrongAnswers[turnIndex][0];
    wrongValues.item(1).textContent = wrongAnswers[turnIndex][1];
    wrongValues.item(2).textContent = wrongAnswers[turnIndex][2];
};
//for loop that checks if an answer is right or wrong based on clicking a button, also ends the game when turn index is over
for (var k = 0; k <radioButton.length; k++) {
    radioButton.item(k).addEventListener("click", function(event) {
        if (event.target.value == 'wrong') {
            newTime -= 10;
            if (newTime <= 0) {
                showScore.textContent = theScore;
                endGame();
                newTime = 0;
                timer.textContent = 0;
            }
        }
        else {
            theScore +=1;
            showScore.textContent = theScore;
            turnIndex += 1;
            if (turnIndex == questions.length) {
                theScore += newTime;
                showScore.textContent = theScore;
                endGame();
                newTime = 0;
                timer.textContent = 0;
            }
            else{
            setUpQuestions();
            }
        }
    });
};
//click event that starts the game
start.addEventListener("click", function() {
    countDown();
    startMenu.style.display = "none";
    questionCard.style.display = "flex";
    setUpQuestions();
});
//submits initials and score to local storage then displays it at the top of the screen, as well as shows the last element to restart
highScoreSubmit.addEventListener("click", function() {
    storedInit = document.getElementById('highScore').value;
    localStorage.setItem("highScore", theScore)
    localStorage.setItem("highScoreInitials", storedInit);
    highScoreFinal = localStorage.getItem('highScore');
    highScoreInit = localStorage.getItem('highScoreInitials');
    highScore.textContent = highScoreFinal + "" + highScoreInit;
    lastCard.style.display = "none";
    gameOver.style.display = "flex";
});
//restarts the game and resets all variables that were added on to or subtracted from
restart.addEventListener("click", function() {
    gameOver.style.display = "none";
    turnIndex = 0;
    newTime = 0;
    timer.textContent = 0;
    theScore = 0;
    showScore.textContent = 0;
    startMenu.style.display = "flex";
})