//DOM references
var startBtn = document.querySelector(".start-btn");
var timer = document.querySelector("#timer");
var question = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionSection = document.querySelector(".quiz-questions");
var userAnswer = document.querySelector("#correct-incorrect");
var highscoreSection = document.querySelector(".highscores-section");
var usernameSection = document.querySelector(".username-section");
var submitUsernameButton = document.querySelector(".submit-btn");
var highScoreLink = document.querySelector("#highscore");

//Question array
var question1 = "Where within the HTML should your Javascript reference be placed?"
var question2 = "Which of these is not a data type in Javascript?"
var question3 = "When you assign a variable to document.queryselector('selector') you..."
var question4 = "An if/else conditional statement is enclosed with ____"
var question5 = "An array can be used to store what type of data?"
var allQuestions = [question1, question2, question3, question4, question5]

//Answer Objects
var question1Answer = {
  content1: "Anywhere you'd like",
  content2: "Just above the CSS reference in the <head>",
  content3: "At the bottom of the page just above the closing </body> element", //
  content4: "This is not necessary as HTML is automatically linked to Javascript"
}
var question2Answer = {
  content1: "Boolean",
  content2: "Variable", //
  content3: "Null",
  content4: "String"
}

var question3Answer = {
  content1: "Assign the variable to the referenced HTML selector with the DOM", //
  content2: "Give that element a new selector to use in CSS",
  content3: "Tell the DOM to delete that selector when the variable is called in a function",
  content4: "Make that variable a clickable link"
}

var question4Answer = {
  content1: "Forward slashes",
  content2: "Curly Brackets", //
  content3: "Asterisks",
  content4: "Parentheses"
}

var question5Answer = {
  content1: "Booleans",
  content2: "Strings",
  content3: "Other Arrays",
  content4: "All Of The Above" //
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

startBtn.addEventListener("click", function () {
  document.querySelector(".about").style.display = "none";
  questionSection.style.display = "block";
})

startBtn.addEventListener("click", nextQuestion)

//Start Timer 
var secondsLeft = 50;
var timerInterval;
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft + " seconds";

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


//Did the user answer correctly?
questionSection.addEventListener("click", correctOrIncorrect)
function correctOrIncorrect(event) {
  if (event.target.matches(".btn-warning")) {
    var chosenAnswer = event.target.textContent;
    userAnswer.textContent = " ";
    userAnswer.style.display = "block";
    if (chosenAnswer === allCorrectAnswers[correctIndex]) {
      userAnswer.textContent = "That's Right!";
      setTimeout(function () { userAnswer.style.display = "none" }, 750);
    } else {
      userAnswer.textContent = "Not Quite"
      setTimeout(function () { userAnswer.style.display = "none" }, 750);
      secondsLeft -= 10;
      timer.textContent = "Time: " + secondsLeft + " seconds";
    }
    correctIndex++;
  }
  return secondsLeft;
};

//Next Question After User Selection
questionSection.addEventListener("click", function (event) {
  if (event.target.matches(".btn-warning")) {
    nextQuestion();
  }
})

//Next Question function
function nextQuestion() {
  //Open section to log high score if all q's have been answered
  if (correctIndex === allQuestions.length - 1) {
    setTimeout(function () {
      questionSection.style.display = "none";
      usernameSection.style.display = "inline";
    }, 500);
    //Stop Timer if all questions answered
    setTimeout(function () { clearInterval(timerInterval) }, 500);
    //If questions remain then display next question
  } else {
    question.textContent = allQuestions[correctIndex];
    answer1.textContent = answersArray[correctIndex].content1;
    answer2.textContent = answersArray[correctIndex].content2;
    answer3.textContent = answersArray[correctIndex].content3;
    answer4.textContent = answersArray[correctIndex].content4;
  }
}

//Record username and save in local storage
function usernameInput() {
  var userInitial = document.querySelector(".username").value;
  if (userInitial === "") {
    userInitial = "anonymous";
  }
  localStorage.setItem(userInitial, secondsLeft);
  document.querySelector(".user-scores").textContent = " ";
  var p = document.createElement("p");
  p.textContent = userInitial + ": " + secondsLeft;
  document.querySelector(".user-scores").appendChild(p);

}

//Submit username and show score 
submitUsernameButton.addEventListener("click", function (event) {
  event.preventDefault();
  usernameInput();
  usernameSection.style.display = "none";
  document.querySelector(".highscores-section").style.display = "block";
  document.querySelector(".user-scores").style.display = "block";
})

//Try Again
document.querySelector(".try-again").addEventListener("click", function () {
  correctIndex = 0;
  secondsLeft = 50;
  timer.textContent = "Time: 50 seconds";
  document.querySelector(".about").style.display = "block";
  highscoreSection.style.display = "none";
})

//Clear Highscores
document.querySelector(".clear-highscores").addEventListener("click", function () {
  localStorage.clear();
  document.querySelector(".user-scores").textContent = " ";
  document.querySelector(".user-scores").style.display = "none";
});

//Highscore link
highScoreLink.addEventListener("click", function () {
  //stop timer if selected
  clearInterval(timerInterval);
  //Display only highscore section if link is clicked
  document.querySelector(".about").style.display = "none";
  questionSection.style.display = "none";
  usernameSection.style.display = "none";
  highscoreSection.style.display = "block";
})