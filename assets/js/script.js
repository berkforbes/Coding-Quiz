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

//Question array
var question1 = "Question1"
var question2 = "Question2"
var question3 = "Question3"
var question4 = "Question4"
var question5 = "Question5"
var questionsArray = [question1, question2, question3, question4, question5]

//Start timer, hide instructions and show first question
startQuizBtn.addEventListener("click", startTimer)
  
startQuizBtn.addEventListener("click", function(){
  document.querySelector(".jumbotron").style.display = "none";
  questionSection.style.display = "block";
})

startBtn.addEventListener("click", nextQuestion) 

