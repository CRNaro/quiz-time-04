//ToDo: set up variables for the quiz
const timerElement = document.getElementById('timer');
const startQuizButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const mainScreen = document.getElementById('main-screen');
const questionScreen = document.getElementById('questionScreen');


let questionElement = document.getElementById('question');

// ToDo: set up function to display the questions
// ToDo: set up prompts for questions to be used for the quiz (NOTE: NEED TO REARRANGE ANSWERS)
const questions = [{
      questionText: 'What element do we use in HTML to connect our JavaScript file?',
      answers: [
        { text: '<script>', correct: true },
        { text: '<link>', correct: false },
        { text: '<meta>', correct: false },
        { text: '<style>', correct: false },
      ]
}, {     
      questionText: 'What is declaration is used for a variable that can NOT be changed?',
      answers: [
        { text: 'const', correct: true },
        { text: 'var', correct: false },
        { text: 'let', correct: false },
        { text: 'none of the above', correct: false },
      ]
}, {  
      questionText: 'What is the correct syntax for an array?',
      answers: [
        { text: 'var array = []', correct: true },
        { text: 'var array = {}', correct: false },
        { text: 'var array = ()', correct: false },
        { text: 'var array = <>', correct: false },
      ]
}, {
        questionText: 'What is the correct syntax for a function?',
        answers: [
          { text: 'function = myFunction()', correct: true },
          { text: 'function myFunction()', correct: false },
          { text: 'function: myFunction()', correct: false },
          { text: 'function myFunction[]', correct: false },
        ] 
}, {
        questionText: 'How can we prevent default behavior of a link or form in JavaScript?',
        answers: [
          { text: 'preventDefault()', correct: true },
          { text: 'preventDefault', correct: false },
          { text: 'preventDefault = true', correct: false },
          { text: 'preventDefault = false', correct: false },
        ]
}];


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

//ToDo: set up function to check the answers
//ToDo: set up function to display the high scores
//ToDo: set up function to clear the high scores
//ToDo: set up function to go back to the start of the quiz






