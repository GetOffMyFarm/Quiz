var timer = document.querySelector("#timer");
var highScore = document.querySelector("#hscore");

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
}
function checkAnswer(ans) {

    if (ans.value == 'right') {

    }
}