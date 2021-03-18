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
var answer1 = document.querySelector('input[name="json"]');
var answer2 = document.querySelector('input[name="log"]:checked');
var answer3 = document.querySelector('input[name="reset"]:checked');
var answer4 = document.querySelector('input[name="flexbox"]:checked');
var answer5 = document.querySelector('input[name="api"]:checked');
answers = [answer1, answer2, answer3, answer4, answer5];
var lastCard = document.getElementById('high-score-page');
var turnIndex = 0;
var radioButton = document.querySelectorAll('input[type=radio]');

console.log(radioButton);
for (var i = 0; i <radioButton.length; i++) {
    radioButton[i].addEventListener("click", function(event) {
        console.log("change", event.target.value);
    });
};

function countDown() {
    var newTime = 60;
    
    var timerInt = setInterval(function() {
        if (newTime > 1) {
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
    startGame();
    startMenu.style.display = "none";
});

function startGame() {
    countDown();
    showQuestion();    
};
function showQuestion() {
    //question1.style.display = "flex";
    questions[turnIndex].style.display = "flex";
}