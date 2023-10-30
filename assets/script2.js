

// !!DEBUG THIS!!!
const scores = JSON.parse(localStorage.getItem('scores'));
const highScoresList = document.getElementById('high-scores-list');
scores.forEach(score => {
  const listItem = document.createElement('li');
  listItem.textContent = `${score.initials}: ${score.score}`;
  highScoresList.appendChild(listItem);
});