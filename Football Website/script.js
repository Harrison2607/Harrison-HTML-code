// Game state variables
let homeScore = 0;
let awayScore = 0;
let fouls = 0;
let yellowCards = 0;
let redCards = 0;
let offsides = 0;
let substitutions = 0;

// Function to update the game status display
function updateGameStatus() {
  document.getElementById('score').textContent = `${homeScore} - ${awayScore}`;
  document.getElementById('fouls').textContent = fouls;
  document.getElementById('yellowCards').textContent = yellowCards;
  document.getElementById('redCards').textContent = redCards;
  document.getElementById('offsides').textContent = offsides;
  document.getElementById('substitutions').textContent = substitutions;
}

// Function to display messages to the player
function displayMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

// Function to simulate scoring a goal
function scoreGoal(team) {
  if (team === 'home') {
    homeScore++;
    displayMessage('Home team scores a goal!');
  } else if (team === 'away') {
    awayScore++;
    displayMessage('Away team scores a goal!');
  }
  updateGameStatus();
}

// Function to simulate committing a foul and receiving a card
function commitFoul() {
  fouls++;
  let card = Math.random();  // 50% chance to get a yellow or red card
  if (card < 0.5) {
    yellowCards++;
    displayMessage('A yellow card was given for a foul!');
  } else {
    redCards++;
    displayMessage('A red card was given for a foul!');
  }
  updateGameStatus();
}

// Function to check if an offside violation occurs
function checkOffside() {
  let offsideOccurred = Math.random() < 0.3;  // 30% chance for offside violation
  if (offsideOccurred) {
    offsides++;
    displayMessage('Offside violation occurred!');
  } else {
    displayMessage('No offside violation.');
  }
  updateGameStatus();
}

// Function to simulate a substitution
function makeSubstitution() {
  if (substitutions < 3) {  // Limit to 3 substitutions
    substitutions++;
    displayMessage('A substitution has been made.');
  } else {
    displayMessage('No more substitutions allowed.');
  }
  updateGameStatus();
}

// Function to award a free kick after a foul
function awardFreeKick() {
  let location = Math.random();
  if (location < 0.5) {
    displayMessage('A free kick is awarded at the edge of the penalty box.');
  } else {
    displayMessage('A free kick is awarded just outside the box.');
  }
}
