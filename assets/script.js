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
    for (let i = 0; i < question.answers.length; i++) {
        let button = document.createElement('button');
        button.innerText = question.answers[i];
        button.addEventListener('click', function () {
            checkAnswer(question.answers[i], question.answer);
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

function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
        score++;
    }
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
    document.querySelector('#final-score').innerText = `Your final score is: ${score}`;
}


startBtn.addEventListener('click', () => {
    // Start timer
    startTimer();
   // Hide start screen
   startQuiz();
   startScreen.style.display = 'none';
   // Show question screen
   quizScreen(); // ! saying property is undefined (reading 'display')

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