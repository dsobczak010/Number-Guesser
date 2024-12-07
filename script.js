let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, targetGuess) {
    return Math.abs(targetGuess - guess);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
    if ((humanGuess < 0) || (humanGuess > 9)) {
        alert('Please enter a number between 0 and 9');
    } else {
        let humanDistance = getAbsoluteDistance(humanGuess, targetGuess);
        let computerDistance = getAbsoluteDistance(computerGuess, targetGuess);

        if (humanDistance < computerDistance) {
            return true;
        } else if (humanDistance > computerDistance) {
            return false;
        } else if (humanDistance === computerDistance) {
            return true;
        }
    }
    
}

// function compareGuesses(humanGuess, computerGuess, targetGuess) {
//     if (Math.abs(targetGuess - humanGuess) < Math.abs(targetGuess - computerGuess)) {
//         return true;
//     } else if (Math.abs(targetGuess - humanGuess) > Math.abs(targetGuess - computerGuess)) {
//         return false;
//     } else if (Math.abs(targetGuess - humanGuess) === Math.abs(targetGuess - computerGuess)) {
//         return true;
//     }
// }

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        humanScore += 0;
        computerScore += 0;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}