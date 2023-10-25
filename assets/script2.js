const timerElement = document.getElementById('timer');
const startQuizButton = document.getElementById('start-quiz');
const timeLeft = document.getElementById('time-left');


//ToDo: set up variables for the quiz
//ToDo: set up timer for the quiz



    
    let timeLeft = 60;
    let timerInterval;
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

for (let i = 0; i < choices.length; i++) {
    const choiceElement = document.createElement('button');
    choiceElement.textContent = choices[i];
    document.body.appendChild(choiceElement);

    // display the choices as buttons
  for (let i = 0; i < choices.length; i++) {
    const choiceElement = document.createElement('button');
    choiceElement.textContent = choices[i];
    document.body.appendChild(choiceElement);
    
    // add event listener to check the answer
    choiceElement.addEventListener('click', function() {
      if (choices[i] === answer) {
        // ToDo: add code to increment the score
        alert('Correct!');
      } else {
        alert('Sorry, that is incorrect.');
      }
    }
    )};
});

}function quizQuestion1() {
    const question = prompt('What HTML element to we put the JavaScript in?');
    const choices =['<script>', '<javascript>', '<js>', '<scripting>'];
    const answer = '<script>'

    // display the question
    const questionElement = document.getElementById('question');
    questionElement.textContent = question;
    document.body.appendChild(questionElement);

    // display the choices as buttons
