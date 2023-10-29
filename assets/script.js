//  TO DO: wrong answer buttons need to be fixed
//  TO DO: need to add a high score page ***DONE***
//  TO DO: add a place for initials and button to 
//         save to local storage on high score page


//Timer elements
const timerEl = document.querySelector('#timer');
const startScreen = document.querySelector('#start-screen');
const startBtn = document.querySelector('#start-button');
const endScreen = document.querySelector('#end-screen');
const questionText= document.querySelector('#question-text');
const quizScreen = document.querySelector('#quiz-screen'); //!!!! USE qE or quizScreen?
const answerButtons = document.querySelector('#answer-buttons');
const submitBtn = document.querySelector('#submit-button');

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
                  endQuiz();
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



function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';
    let finalTime = timerEl.textContent;
    localStorage.setItem('finalTime', finalTime);
    var finalScoreEl = document.getElementById('final-score'); 
    finalScoreEl.textContent = 'Your final score is: ' + finalTime + '!';
}

// Save scores to local storage
function saveScore() {
  const initials = document.querySelector('#initals').value; //get initials entered
  const scoreData = {          //Object to store my score and initals in 
    score: score,
    initials: initials
  };
  // retrieves scores from local storage also creates an empty array to fill with info
  let scores = JSON.parse(localStorage.getItem('scores')) [];
  scores.push(scoreData);
  localStorage.setItem('scores', JSON.stringify(scores));
}


startBtn.addEventListener('click', () => {
  startTimer();
  startQuiz();
  startScreen.style.display = 'none';
  quizScreen.style.display = 'block';
});
submitBtn.addEventListener('click', () => {
    saveScore();
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