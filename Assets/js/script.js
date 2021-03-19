var timer = document.getElementById("timer");
var highScore = document.getElementById("hscore");
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
var wrongValues = document.querySelectorAll('button[value = "wrong"]')
var rightValue = document.querySelectorAll('button[value = "right"]')
console.log(radioButton);
console.log(wrongValues);


for (var i = 0; i <radioButton.length; i++) {
    radioButton[i].addEventListener("click", function(event) {
        console.log("change", event.target.value);
    });
};

function rightAnswer() {
    
}

function countDown() {
    var newTime = 60;
    
    var timerInt = setInterval(function() {
        if (newTime > 0) {
            timer.textContent = newTime;
            newTime--;
         }
        else {
            timer.textContent = '';
            clearInterval(timerInt);
        }
    }, 1000)
};

start.addEventListener("click", function() {
    countDown();
    startMenu.style.display = "none";
    questionCard.style.display = "flex";
});

