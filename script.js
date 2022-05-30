let computerScore = 0;
let playerScore = 0;
let choicesArray = ["rock", "paper", "scissors"];
let computerPoints = document.querySelector('#computerScore')
let playerPoints = document.querySelector('#playerScore')

function computerPlay()
{
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}



function playRound(playerSelection, computerSelection)
{
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper"))
    {
        playerScore++;
        console.log(playerScore)
        playerPoints.textContent = playerScore
    }
    else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock"))
    {
        computerScore++;
        console.log(computerScore)
        computerPoints.textContent = computerScore
    }

    if (playerScore == 5 || computerScore ==5)
    {
        declareWinner(playerScore, computerScore)
    }
}

function declareWinner(playerScore, computerScore)
{

    if (playerScore > computerScore)
    {
        alert("Win")
    }
    else if (computerScore > playerScore)
    {
        alert("Lose")
    }
    else 
    {
        alert("Tie")
    }
}

function prepareRound(e)
{
    let playerSelection = e.target.id
    let computerSelection = computerPlay()
    console.log(computerSelection)
    playRound(playerSelection, computerSelection)
}
//main code
//function play()
//{
 //   while ((playerScore < 5) && (computerScore < 5))
  //  {
        const buttons = document.querySelectorAll('.btn')
        buttons.forEach(btn => {
          btn.addEventListener('click', prepareRound)})
   // })}
//}

//play()