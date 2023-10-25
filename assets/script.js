const timerElement = document.getElementById('.timer');
const startQuizButton = document.getElementById('start-quiz');
const timeLeft = document.getElementById('time-left');


//ToDo: set up variables for the quiz
//ToDo: set up timer for the quiz


document.addEventListener('DOMContentLoaded', (event) => {
    startQuizButton.addEventListener('click', 
    startQuiz);

function startQuiz() {
let timeLeft = 60;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.innerHTML = `${minutes}:${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        alert('Time is up!');
    }
  }


const timerInterval = setInterval(updateTimer, 1000);
}
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
function quizQuestion1() {
    const question = prompt('What HTML element to we put the JavaScript in?');
    const choices =['<script>', '<javascript>', '<js>', '<scripting>'];
    const answer = '<script>'

    // display the question
    const questionElement = document.getElementById('question');
    questionElement.textContent = question;
    document.body.appendChild(questionElement);

    // display the choices as buttons
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

}
