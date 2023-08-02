function getComputerChoice() {
    let i = Math.random();
    let a = Math.round((i * 10) % 3)
    if (a === 0 ){
        return "rock"
    } else if (a === 1) {
        return "paper" 
    } else  {
        return "scissor"
    }}

let userInput = prompt("Type your choice").toLowerCase()

let compChoice = getComputerChoice()


function playRound(playerSelection, compSelection) {

    if ( playerSelection === "rock" && compSelection === "rock" || 
         playerSelection === "paper" && compSelection === "paper" ||
         playerSelection === "scissor" && compSelection === "scissor") {
            return "Draw"
         } else if ( playerSelection === "rock" && compSelection === "paper" || 
            playerSelection === "paper" && compSelection === "scissor" ||
            playerSelection === "scissor" && compSelection === "rock") {
               return "Comp Win"
            } else {
                 return "You win"
            }
}

console.log(playRound(userInput, getComputerChoice()));