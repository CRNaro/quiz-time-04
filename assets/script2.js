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
  
  let currentQuestionIndex = 0;

  startQuizButton.addEventListener('click', startQuiz); 
  
  function startQuiz() {
    startQuizButton.classList.add('hide');
    quizContainer.classList.remove('hide');
    setNextQuestion();
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.questionText;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer() {
    const selectedButton = this;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
  } else {
    endQuiz();
  }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  
  function startTimer() {
    let timeLeft = 60;
    const timerElement = document.getElementById('timer');
    const timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      timerElement.textContent = `${minutes}:${seconds}`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Time is up!';
        endQuiz();
      }
    }, 1000);
  }
  
  function endQuiz() {
    quizContainer.classList.add('hide');
    startQuizButton.classList.remove('hide');
    currentQuestionIndex = 0;
  }


// example --------------------------
// script.js 








let questions = [ 
	{ 
		prompt: `Inside which HTML 
				element do we put 
				the JavaScript?`, 
		options: [ 
			"<javascript>", 
			"<js>", 
			"<script>", 
			"<scripting>", 
		], 
		answer: "<script>", 
	}, 

	{ 
		prompt: `How do you call a 
				function named 
				myFunction?`, 
		options: [ 
			"call myFunction()", 
			"myFunction()", 
			"call function myFunction", 
			"Call.myFunction", 
		], 
		answer: "myFunction()", 
	}, 

	{ 
		prompt: `How does a for loop 
				start?`, 
		options: [ 
			"for (i = 0; i <= 5; i++)", 
			"for (i = 0; i <= 5)", 
			"for i = 1 to 5", 
			" for (i <= 5; i++)", 
		], 
		answer: "for (i = 0; i <= 5; i++)", 
	}, 

	{ 
		prompt: `In JavaScript, which 
				of the following is 
				a logical operator?`, 
		options: ["|", "&&", "%", "/"], 
		answer: "&&", 
	}, 

	{ 
		prompt: `A named element in a 
				JavaScript program that 
				is used to store and 
				retrieve data is a _____.`, 
		options: [ 
			"method", 
			"assignment operator", 
			"letiable", 
			"string", 
		], 
		answer: "letiable", 
	}, 
]; 

// Get Dom Elements 

let questionsEl = 
	document.querySelector( 
		"#questions"
	); 
let timerEl = 
	document.querySelector("#timer"); 
let choicesEl = 
	document.querySelector("#options"); 
let submitBtn = document.querySelector( 
	"#submit-score"
); 
let startBtn = 
	document.querySelector("#start"); 
let nameEl = 
	document.querySelector("#name"); 
let feedbackEl = document.querySelector( 
	"#feedback"
); 
let reStartBtn = 
	document.querySelector("#restart"); 

// Quiz's initial state 
let currentQuestionIndex = 0; 
let time = questions.length * 15; 
let timerId; 

// Start quiz and hide frontpage 

function quizStart() { 
	timerId = setInterval( 
		clockTick, 
		1000 
	); 
	timerEl.textContent = time; 
	let landingScreenEl = 
		document.getElementById( 
			"start-screen"
		); 
	landingScreenEl.setAttribute( 
		"class", 
		"hide"
	); 
	questionsEl.removeAttribute( 
		"class"
	); 
	getQuestion(); 
} 

// Loop through array of questions and 
// Answers and create list with buttons 
function getQuestion() { 
	let currentQuestion = 
		questions[currentQuestionIndex]; 
	let promptEl = 
		document.getElementById( 
			"question-words"
		); 
	promptEl.textContent = 
		currentQuestion.prompt; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			let choiceBtn = 
				document.createElement( 
					"button"
				); 
			choiceBtn.setAttribute( 
				"value", 
				choice 
			); 
			choiceBtn.textContent = 
				i + 1 + ". " + choice; 
			choiceBtn.onclick = 
				questionClick; 
			choicesEl.appendChild( 
				choiceBtn 
			); 
		} 
	); 
} 

// Check for right answers and deduct 
// Time for wrong answer, go to next question 

function questionClick() { 
	if ( 
		this.value !== 
		questions[currentQuestionIndex] 
			.answer 
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timerEl.textContent = time; 
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`; 
		feedbackEl.style.color = "red"; 
	} else { 
		feedbackEl.textContent = 
			"Correct!"; 
		feedbackEl.style.color = 
			"green"; 
	} 
	feedbackEl.setAttribute( 
		"class", 
		"feedback"
	); 
	setTimeout(function () { 
		feedbackEl.setAttribute( 
			"class", 
			"feedback hide"
		); 
	}, 2000); 
	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 
		questions.length 
	) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 

// End quiz by hiding questions, 
// Stop timer and show final score 

function quizEnd() { 
	clearInterval(timerId); 
	let endScreenEl = 
		document.getElementById( 
			"quiz-end"
		); 
	endScreenEl.removeAttribute( 
		"class"
	); 
	let finalScoreEl = 
		document.getElementById( 
			"score-final"
		); 
	finalScoreEl.textContent = time; 
	questionsEl.setAttribute( 
		"class", 
		"hide"
	); 
} 

// End quiz if timer reaches 0 

function clockTick() { 
	time--; 
	timerEl.textContent = time; 
	if (time <= 0) { 
		quizEnd(); 
	} 
} 

// Save score in local storage 
// Along with users' name 

function saveHighscore() { 
	let name = nameEl.value.trim(); 
	if (name !== "") { 
		let highscores = 
			JSON.parse( 
				window.localStorage.getItem( 
					"highscores"
				) 
			) || []; 
		let newScore = { 
			score: time, 
			name: name, 
		}; 
		highscores.push(newScore); 
		window.localStorage.setItem( 
			"highscores", 
			JSON.stringify(highscores) 
		); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 

// Save users' score after pressing enter 

function checkForEnter(event) { 
	if (event.key === "Enter") { 
		saveHighscore(); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 
nameEl.onkeyup = checkForEnter; 

// Save users' score after clicking submit 

submitBtn.onclick = saveHighscore; 

// Start quiz after clicking start quiz 

startBtn.onclick = quizStart;
