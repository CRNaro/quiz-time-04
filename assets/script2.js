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
