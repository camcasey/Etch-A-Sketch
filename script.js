
let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const scoreDisplay = document.querySelector("#scoreDisplay");
const whoPlayedWhat = document.querySelector("#whoPlayedWhat");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayScore() {
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

function finalScore() {
    if (humanScore === computerScore) {
        whoPlayedWhat.textContent = `It's a tie! Human: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanScore > computerScore) {
        whoPlayedWhat.textContent = `Game Over! You win!`;
    } else {
        whoPlayedWhat.textContent = `Game Over! You lose!`;
    }

    // Disable buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    // Create and display a reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    resetButton.id = "resetButton";
    document.body.appendChild(resetButton);

    // Add event listener to reset button
    resetButton.addEventListener("click", resetGame);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        whoPlayedWhat.textContent = `It's a tie! Both players chose ${humanChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        whoPlayedWhat.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
        humanScore++;
    } else {
        whoPlayedWhat.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
        computerScore++;
    }
    
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    
    // Check if the game is over (first to 5)
    if (humanScore == 5 || computerScore == 5) {
        finalScore();
    }
}

function resetGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;

    // Update the score display
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    whoPlayedWhat.textContent = '';

    // Re-enable buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    // Remove the reset button
    const resetButton = document.querySelector("#resetButton");
    resetButton.remove();
}

// Event listeners for the buttons
rockButton.addEventListener("click", () => playRound('rock', getComputerChoice()));
paperButton.addEventListener("click", () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound('scissors', getComputerChoice()));