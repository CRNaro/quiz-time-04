//  NOTES FOR THE FUTURE- Things go consider while tackling a problem:
//                         You CAN NOT go at it the way you did this project.  The steps to 
//                        solving the problems: Understand (make notes of what the problem 
//                        I am trying to solve is). Plan (where I want to start and lay out 
//                        psuedocode to as a map.  Divide (break it down in to smaller parts/smaller 
//                        problems to solve)



//  !!! go though code and add psuedocode for everything !!!

const timerEl = document.querySelector('#timer');
const startScreen = document.querySelector('#start-screen');
const startBtn = document.querySelector('#start-button');
const endScreen = document.querySelector('#end-screen');
const questionText= document.querySelector('#question-text');
const quizScreen = document.querySelector('#quiz-screen'); //!!!! USE qE or quizScreen?
const answerButtons = document.querySelector('#answer-buttons');
const submitBtn = document.querySelector('#submit-form #submit-button');

let currentIndex = 0;
let score = 0;
let timerInterval;

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    displayQuestion(currentIndex);
    
}

function displayQuestion(index) {
    let question = questions[index];
    questionText.innerText = question.questionText;
    // Need to clear the answer buttons on the loop
    answerButtons.innerHTML = '';
    for (let i = 0; i < question.answers.length; i++) {
        let button = document.createElement('button');
        button.innerText = question.answers[i];
        button.addEventListener('click', function () {
              let isCorrect = checkAnswer(question.answers[i], question.answer);
              if (isCorrect) {
                  score++;
              }else{
                timer -= 2;  // Deduct 2 seconds from timer
                updateTimerDisplay(); // Update timer
              }
                currentIndex++;
              if (currentIndex < questions.length) {
                  displayQuestion(currentIndex);
              } else {
                if (currentIndex - 1 === questions.length - 1) {
                endQuiz();
              }
              }
          });
          answerButtons.appendChild(button);
        } 
        
        }

        // Check if answers are correct
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        return true;
        }else{
          timer -= 2;  // Deduct 2 seconds from timer
          updateTimerDisplay(); // Update timer display on screen
          return false;
        }      
}
let timer = 60;
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


function updateTimerDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerEl.textContent = 
  `${minutes.toString().padStart(2, "0")}:
  ${seconds.toString().padStart(2, "0")}`;
}
 
function startTimer() {
  updateTimerDisplay();
    timerInterval = setInterval(function () {
        timer--;
        updateTimerDisplay();
        if (timer === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}


// the main problem seems to be two things. 1 the score is saving to 
// local storage prior to allowing user to add initial and then saving
// problem 2. the initials are not being saved in the local file
var finalScoreEl = document.getElementById('final-score'); //this got moved
function endQuiz() {
  //var finalScoreEl = document.getElementById('final-score'); //this got moved
  var initialsInput = document.getElementById('initials-input');
  var initials = initialsInput.value; 
  let finalTime = timerEl.textContent;
  var scoreListString = localStorage.getItem('scoreList');
  var scoreList = [];
  
  if (scoreListString) {
    scoreList = JSON.parse(scoreListString)
  }
  scoreList.push({ initials: initials, score: finalTime});  
  
  //localStorage.setItem('finalTime', JSON.stringify(scoreList));
  
  finalScoreEl.textContent = 'Your final score is: ' + finalTime + '!';
  clearInterval(timerInterval);
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';
  }

// Save scores to local storage
function saveScore(finalScoreEl) {
  var initialsInput = document.getElementById('initials-input');
  var initials = initialsInput.value;

  if (initials === '') {
    alert('Please enter your initials');
    return;
  }
  var finalTime = timerEl.textContent;
  var scoreListString = localStorage.getItem('scoreList');
  var scoreList = [];
  
  if (scoreListString) {
    scoreList = JSON.parse(scoreListString)
  }
  scoreList.push({ initials: initials, score: finalTime});
  localStorage.setItem('scoreList', JSON.stringify(scoreList));
  alert('Your score has been saved!');
  finalScoreEl.textContent = 'Your final score is: ' + finalTime + '!';
}


startBtn.addEventListener('click', () => {
  startTimer();
  startQuiz();
  startScreen.style.display = 'none';
  quizScreen.style.display = 'block';
});
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    saveScore(finalScoreEl);
});




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
  questionText: 'What is the correct syntax for a function?', 
  answers: [
    'function = myFunction()', 
    'function myFunction()', 
    'function: myFunction()', 
    'function myFunction[]', 
  ], 
  answer: 'function = myFunction()',
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