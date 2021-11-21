let startBtn = document.getElementById('start-btn')
let highScoresBtn = document.querySelector('#highscores-btn')
let quizModal = document.getElementById('quizModal')
let exit = document.getElementsByClassName('#close')[0];


// add high scores URL to activate high score button click highScoresBtn.addEventListener("click", location."highscores.html" )

// Start button click to open quiz modal
startBtn.onclick = function() {
  quizModal.style.display = "block";
}

// X click will close quiz modal
exit.onclick = function() {
  quizModal.style.display = "none";
}



