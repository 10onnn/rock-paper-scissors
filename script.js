let choicesArray = ["rock", "paper", "scissors"];

function computerPlay()
{
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        return "tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper"))
    {
        return "win";
    }
    else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock"))
    {
        return "lose";
    }
}

function play()
{
    let playerScore = 0;
    let computerScore = 0;
    //while ((playerScore < 5) || (computerScore < 5)) -->race to 5
    for (let i = 0; i < 5; i++) // -->best of 5
    {
        let computerSelection = computerPlay();
        console.log(computerSelection)
        let playerSelection = prompt("rock, paper, scissors - shoot!")
        let result = playRound(playerSelection, computerSelection);

        if (result == "win")
        {
            playerScore++
        }
        else if (result == "lose")
        {
            computerScore++
        }
    }
    declareWinner(playerScore, computerScore)
}

function declareWinner(playerScore, computerScore)
{
    if (playerScore > computerScore)
    {
        alert("You win")
    }
    else if (playerScore < computerScore)
    {
        alert("You lose")
    }
    else
    {
        alert("Tie")
    }
}

play();