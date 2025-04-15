let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 const clickAudio = new Audio("\mixkit-select-click-1109.wav");
 const winAudio = new Audio("\mixkit-quick-win-video-game-notification-269.wav");
 const loseAudio = new Audio("\mixkit-wrong-answer-fail-notification-946.wav");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor( Math.random() *3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You Lose! ${compChoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
        console.log("user choice =",userChoice);
        //Generate computer choice
        const compChoice = genCompChoice();
        console.log("Comp choice =",compChoice);

        if(userChoice==compChoice){
            drawGame();
        } else {
            let userWin = true;
            if(userChoice=== "rock"){
                //scissors , paper
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice==="paper"){
                userWin = compChoice === "scissors" ? false : true;
            }else{
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice , compChoice);
        }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
       playGame(userChoice);
    });
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       clickAudio.play();
    });
});

// const winnerScore = document.querySelector("#user-score");
// const loseScore = document.querySelector("#Comp-score");

// winnerScore.addEventListener("click", () =>{
//     winAudio.play();
// });

// loseScore.addEventListener("click", ()=>{
//     loseAudio.play();
// });



