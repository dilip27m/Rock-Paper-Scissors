let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const us= document.querySelector('#user-score');
const cs= document.querySelector('#computer-score');

// const uScore = (userScore) => {
//     userScore++;
//     us.innertext = userScore;
//     console.log(userScore);
// }

// const cScore = (computerScore) => {
//     computerScore++;
//     cs.innertext = computerScore;
//     console.log(computerScore);
// }

const draw = () => {
    console.log("draw");
    msg.innerText = "Game was draw . Play again"
    msg.style.backgroundColor = "black" ;
}

const showWin = (userWin,userChoice,ComputerChoice) => {
 if(userWin){
    console.log("you won");
    userScore++;
    us.innerText = userScore;
    msg.innerText = `You win ! Your ${userChoice} beats ${ComputerChoice}`;
    msg.style.backgroundColor = "green" ;
    
 }
 else{
    console.log("you lost");
    computerScore++;
    cs.innerText = computerScore;
    msg.innerText = `You lose !  ${ComputerChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red" ;
 }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const ComputerChoice = genCompChoice();
    console.log("computer choice is ", ComputerChoice);

    if (userChoice === ComputerChoice){
        draw();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = ComputerChoice === "scissors" ? true :false;
        }
        else if (userChoice === "paper") {
            userWin = ComputerChoice === "rock" ? true :false;
        }
        else{
            userWin = ComputerChoice === "paper" ? true : false;        }

            showWin(userWin, userChoice, ComputerChoice);
    }

   
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}

)

const reset = document.querySelector('#reset');
reset.addEventListener('click',()=> {
    userScore = 0;
    computerScore = 0;
    us.innerText = userScore;
    cs.innerText = computerScore;
    msg.innerText = "Game reset . Play again"
    msg.style.backgroundColor = "black" ;
;})