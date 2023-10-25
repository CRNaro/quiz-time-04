const timerElement = document.getElementById('timer');
const startQuizButton = document.getElementById('start-quiz');



//ToDo: set up variables for the quiz
//ToDo: set up timer for the quiz - DONE (may need some tweaking)
    let timeLeft = 60;
    let timerInterval;
    
    startQuizButton.addEventListener('click', startQuiz);

    function startQuiz() {
      timerInterval = setInterval(updateTimer, 1000);
}
    
    // Timer starter
    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;

      timerElement.innerHTML = `${minutes}:${seconds}`;
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent('Time is up!');
      }
    }
    function startQuiz() {
      timerInterval = setInterval(updateTimer, 1000);
      
      quizQuestion1();
   }

    document.addEventListener('DOMContentLoaded', (event) => {
    startQuizButton.addEventListener('click', startQuiz);
});

//ToDo: set up function to start the quiz
//ToDo: set up function to end the quiz
//ToDo: set up function to save the score
//ToDo: set up function to display the score
//ToDo: set up function to display the questions
//ToDo: set up function to check the answers
//ToDo: set up function to display the high scores
//ToDo: set up function to clear the high scores
//ToDo: set up function to go back to the start of the quiz




// ToDo: set up prompts for questions to be used for the quiz

