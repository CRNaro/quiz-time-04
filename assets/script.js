//Timer elements
const timerEl = document.querySelector('#timer');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const startScreen = document.querySelector('#start-screen');
const startBtn = document.querySelector('#start-button');
const endScreen = document.querySelector('#end-screen');
const questionText= document.querySelector('#question-text');
const quizScreen = document.querySelector('#quiz-screen'); //!!!! USE qE or quizScreen?
const answerButtons = document.querySelector('#answer-buttons');

let currentIndex = 0;
let score = 0;
let timerInterval;

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    displayQuestion(currentIndex);
    startTimer();
}

function displayQuestion(index) {
    let question = questions[index];
    questionText.innerText = question.questionText;
    // Need to clear the answer buttons on the loop
    answerButtons.innerHTML = '';
    for (let i = 0; i < question.answers.length; i++) {
        let button = document.createElement('button');
        button.innerText = question.answers[i];

        if (question.answers[i] === question.answer) {
            button.addEventListener('click', function () {
              checkAnswer(question.answers[i], question.answer);
              currentIndex++;
              if (currentIndex < questions.length) {
                  displayQuestion(currentIndex);
              } else {
                  endQuiz();
              }
        });
      }else{
          button.addEventListener('click', function () {
            checkAnswer(question.answers[i], question.answer);
        });
      }  
        answerButtons.appendChild(button);
    }
}
        // Check if answers are correct
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        }else{
          timer -= 2;  // Deduct 2 seconds from timer
          updateTimerDisplay(); // Update timer display on screen
        }      
}
function updateTimerDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    let time = 60;
    timerInterval = setInterval(function () {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        if (time === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}



function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';

    finalTime = timer;
    localStorage.setItem('finalTime', finalTime);
    document.querySelector('#question-text').innerText = 
      'Your final score is: ${finalTime}';
}


startBtn.addEventListener('click', () => {


   // Hide start screen
  startQuiz();
  startScreen.style.display = 'none';
   // Show question screen
    quizScreen.style.display = 'block';
    

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