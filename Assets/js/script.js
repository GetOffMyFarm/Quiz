var timer = document.getElementById("timer");
var highScore = document.getElementById("hscore");
var start = document.getElementById('start-button');
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var questions = [question1, question2, question3, question4, question5];
var startMenu = document.getElementById('card1');
var answer1 = document.querySelectorAll('input[name = "json"]');
var answer2 = document.querySelectorAll('input[name = "log"]');
var answer3 = document.querySelectorAll('input[name = "reset"]');
var answer4 = document.querySelectorAll('input[name = "flexbox"]');
var answer5 = document.querySelectorAll('input[name = "api"]');
var answers = [answer1, answer2, answer3, answer4, answer5];
var lastCard = document.getElementById('high-score-page');

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
    question1.style.display = "flex";
});

answer1.addEventListener()

