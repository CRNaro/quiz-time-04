//ToDo: set up variables for the quiz
const highScroresBtn = document.getElementById('see-highest-score'); //connected
const timerElement = document.getElementById('timer'); //connected
const mainScreen = document.getElementById('main-screen'); //connected
const startQuizButton = document.getElementById('start-quiz'); //connected
const questionScreen = document.getElementById('question-screen'); //connected
const answerButtonsElement = document.getElementById('answer-buttons');//connected
const endScreen = document.getElementById('end-window'); //connected
const finalScore = document.getElementById('final-score'); //connected
const scoreForm = document.getElementById('score'); //connected
const initials = document.getElementById('initials'); //connected
const submitScoreBtn = document.getElementById('submit-score'); //connected


let questionElement = document.getElementById('question'); 

// ToDo: set up function to display the questions - 
//       switch from start screen to question screen
// ToDo: set up prompts for questions to be used for the quiz (NOTE: NEED TO REARRANGE ANSWERS)
let questions = [{
      questionText: 'What element do we use in HTML to connect our JavaScript file?',
      answers: [
          '<script>', 
          '<link>', 
          '<meta>',
          '<style>',
      ],
      answer: '<script>',
}, {     
      questionText: 'What is declaration is used for a variable that can NOT be changed?',
      answers: [
          'const',
          'var',
          'let',
          'none of the above',
      ],
      answer: 'const',
}, {  
      questionText: 'What is the correct syntax for an array?',
      answers: [
          'var array = []',
          'var array = {}', 
          'var array = ()', 
          'var array = <>', 
      ],
      answer: 'var array = []',
}, {
        questionText: 'What is the correct syntax for a function?',
        answer: [
            'function = myFunction()', 
            'function myFunction()', 
            'function: myFunction()', 
            'function myFunction[]', 
        ], 
        answer: 'function myFunction()',
}, {
        questionText: 'How can we prevent default behavior of a link or form in JavaScript?',
        answers: [
            'preventDefault()', 
            'preventDefault', 
            'preventDefault = true', 
            'preventDefault = false', 
        ],
        answer: 'preventDefault()',
}];


let timeLeft = 60;
let timerInterval;
  // Start Quiz Button
startQuizButton.addEventListener('click', startQuiz);
  // Hide main screen  
  function startQuiz() {
    document.mainScreen.style.display = 'none';
      // Show question screen
    document.questionScreen.style.display = 'block';
      // Display question 1
      displayQuestionText(0);
    }

function displayQuestion(questionIndex) {
  const questions = questions[questionIndex].questionText;
  const answerChoices = questions[questionIndex].answerChoices;
}




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
  
  
}

document.addEventListener('DOMContentLoaded', (event) => {

});

// To Do: Wrong answer buttons need to be tied to 2-5 second penalty
// To Do: All answers need to be tied to next question screen
// To Do: When quiz is finished timer needs to stop and that is the score
// To Do: Need to set up local storage to save high scores/initials -
//        probably need to set up a second HTML page for this
// To Do: ONCE ALL FUNCTIONS IN JS ARE WORKING, NEED TO CLEAN UP CSS!!!





