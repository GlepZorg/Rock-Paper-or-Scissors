// Greeting to user.
console.log('hi welcome to Rock Paper Scissors');

// Method to censure user input is lowercase and is a valid option.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else{
        console.log('Error: invalid input entered.')
    }
};

// Method gets a random computer input via the math random method.
const getComputerChoice = () => {
    const choiceNum = Math.floor(Math.random() * 3);
    switch(choiceNum){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
        default:
            return 'bomb';
    }
}

// Method is the main logic of the game will return the winner.
function determineWinner(userChoice, computerChoice){
    let computerWon = 'The COMPUTER won!!!';
    let userWon = 'The USER won!!!';

    if(userChoice === computerChoice){
        return 'The game was a tie!';
    } 
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return computerWon;
        } else{
            return userWon;
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return computerWon;
        } else {
            return userWon;
        }
    }
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return computerWon;
        }
        else {
            return userWon;
        }
    }
    if(userChoice === 'bomb'){
        return userWon;
    }
}
// Method to play the game.
function playGame(){
    let userChoice = getUserChoice('BOMB');
    let computerChoice  = getComputerChoice();

    console.log(`User Picked: ${userChoice}`);
    console.log(`Computer Picked: ${computerChoice}`);
    console.log('-----------------------------------------');
    console.log(determineWinner(userChoice, computerChoice));
}

// Calling game method.
playGame();