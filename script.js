const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");

function playGame (playerChoice){
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerChoiceIndex];
    let result = "";
    
    if(playerChoice === computerChoice){
        result = "It's a Tie";
    }

    else{
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenDisplay", "redDisplay");

    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("greenDisplay")
            break;
        case "You Lose!":
            resultDisplay.classList.add("redDisplay")
            break;
    }
};