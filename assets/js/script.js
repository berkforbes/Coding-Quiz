//DOM references
var startBtn = document.querySelector(".start-btn");
var timer = document.querySelector("#timer");
var question = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionSection = document.querySelector(".quiz-questions");
var individualResult = document.querySelector("#correct-incorrect");
var highscoreSection = document.querySelector(".highscore-section");

//Question array
var question1 = "Question1"
var question2 = "Question2"
var question3 = "Question3"
var question4 = "Question4"
var question5 = "Question5"
var allQuestions = [question1, question2, question3, question4, question5]

//Answer Objects
var question1Answer = {
  content1: "1",
  content2: "2",
  content3: "3",
  content4: "4"
}
var question2Answer = {
  content1: "1",
  content2: "2",
  content3: "3",
  content4: "4"
}

var question3Answer = {
  content1: "1",
  content2: "2",
  content3: "3",
  content4: "4"
}

var question4Answer = {
  content1: "1",
  content2: "2",
  content3: "3",
  content4: "4"
}

var question5Answer = {
  content1: "1",
  content2: "2",
  content3: "3",
  content4: "4"
}
//Answers array
var answersArray = [question1Answer, question2Answer, question3Answer, question4Answer, question5Answer]

//Corect Answers
var correctAnswer1 = question1Answer.content3;
var correctAnswer2 = question2Answer.content2;
var correctAnswer3 = question3Answer.content1;
var correctAnswer4 = question4Answer.content2;
var correctAnswer5 = question5Answer.content4;
var allCorrectAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5]

//Start timer, hide instructions and show first question
startBtn.addEventListener("click", startTimer)
  
startBtn.addEventListener("click", function(){
  document.querySelector(".about").style.display = "none";
  questionSection.style.display = "block";
})

startBtn.addEventListener("click", nextQuestion) 

  //Start Timer 
    var secondsLeft = 75;
    var timerInterval;
    function startTimer(){
      timerInterval = setInterval(function() {
        secondsLeft --;
        timer.textContent =  "Time: " + secondsLeft + " seconds";
        
  //Display Username Page when user runs out of time
    if (secondsLeft === 0) {
          clearInterval(timerInterval);
          quizSection.style.display = "none";
          usernameSection.style.display = "inline";
          }
        }, 1000);
    return timerInterval;
    } 

var correctIndex = 0;
  
    //Next Question function
    function nextQuestion(){
    //Open section to log high score if all q's have been answered
    if (correctIndex === allQuestions.length - 1) {
        setTimeout(function(){questionSection.style.display = "none";
        highscoreSection.style.display = "inline";
    }, 500);
    //Stop Timer
        setTimeout(function(){clearInterval(timerInterval)}, 500);
    //If questions remain then display next question
    } else {
        question.textContent = allQuestions[correctIndex];
        answer1.textContent = answersArray[correctIndex].content1;
        answer2.textContent = answersArray[correctIndex].content2;
        answer3.textContent = answersArray[correctIndex].content3;
        answer4.textContent = answersArray[correctIndex].content4;
    }
    }

