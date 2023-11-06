

// !!DEBUG THIS!!!
const scores = JSON.parse(localStorage.getItem('scoreList'));
const highScoresList = document.getElementById('high-scores-list');
const clearBtn = document.getElementById('clear-scores-button');

scores.forEach(score => {
  const listItem = document.createElement('li');
  listItem.textContent = `${score.initials}: ${score.score}`;
  highScoresList.appendChild(listItem);
});

// Function to display scores
function displayScores() {
  // Retrieve the score list from local storage
  var scoreListString = localStorage.getItem('scoreList');
  
  // Parse the score list from a string to an array
  var scoreList = JSON.parse(scoreListString);
  
  // Get the container element for the high scores list
  var scoreListContainer = document.getElementById('high-scores-list');
  
  // Clear any existing scores in the container
  scoreListContainer.innerHTML = '';
  
  // Check if the score list is not empty and has scores
  if (scoreList && scoreList.length > 0) {
    // Loop through each score in the list
    for (let i = 0; i < scoreList.length; i++) {
      const score = scoreList[i];
      
      // Create a new list item element
      const listItem = document.createElement('li');
      
      // Set the text content of the list item to display the initials and score
      listItem.textContent = score.initials + ': ' + score.score;
      // Alternatively, you can use template literals for more readability:
      // listItem.textContent = `${score.initials}: ${score.score}`;
      
      // Append the list item to the score list container
      scoreListContainer.appendChild(listItem);
    }
  }
}

clearBtn.addEventListener('click', function() {
  localStorage.removeItem('scoreList');
  displayScores();
});
// Add a DOMContentLoaded event listener to call the displayScores function when the page is loaded
window.addEventListener('DOMContentLoaded', displayScores);