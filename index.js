function getComputerChoice() {
    let i = Math.random();
    let a = Math.round((i * 10) % 3);
    if (a === 0 ){
        return "rock"
    } else if (a === 1) {
        return "paper" 
    } else  {
        return "scissor"
    }};

let rock = document.getElementById('rock').addEventListener('click', function(){
    this.classList.replace("btn", "rock")
});
let paper = document.getElementById('paper').addEventListener('click', function(){
    this.classList.replace("btn", "paper")
});
let scissor = document.getElementById('scissor').addEventListener('click', function(){
    this.classList.replace("btn", "scissor")
}); 


function playRound(compSelection) {

    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissor = document.getElementById("scissor")

    let rockSel = rock.classList.value === "rock"
    let paperSel = paper.classList.value === "paper"
    let scissorSel = scissor.classList.value === "scissor"

    let rockBtn = rock.classList.value != "rock" 
    let paperBtn = paper.classList.value != "paper"
    let scissorBtn = scissor.classList.value != "scissor"

    let compRock = compSelection === "rock"
    let compPaper = compSelection === "paper"
    let compScissor = compSelection === "scissor"

    if ( rockSel && compRock && paperBtn && scissorBtn ||
        paperSel && compPaper && rockBtn && scissorBtn ||
        scissorSel && compScissor && rockBtn && paperBtn) {
        return "Draw"
    } else if (rockSel && compPaper && paperBtn && scissorBtn ||
        paperSel && compScissor && rockBtn && scissorBtn ||
        scissorSel && compRock && rockBtn && paperBtn ) {
            return "Computer Win"
        } else if ( rockSel && compScissor && paperBtn && scissorBtn ||
            paperSel && compRock && rockBtn && scissorBtn ||
            scissorSel && compPaper && rockBtn && paperBtn) {
                return "You win"
            } return "Please give your answer" 
}

function repeat() {
    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissor = document.getElementById("scissor")

    let buttonArray = [rock, paper, scissor];
    for (let button of buttonArray) {
        if (button.classList.value == "rock" ) {
            rock.classList.replace("rock", "btn")
        } else if (button.classList.value == "paper") {
            paper.classList.replace("paper", "btn")
        } else if (button.classList.value == "scissor") {
            scissor.classList.replace("scissor", "btn")
}}}


document.getElementById('submit').addEventListener('click', function(){
    let compAnswer = getComputerChoice()
    let game = playRound(compAnswer)
    
   let result =  document.getElementById('result').innerHTML = `Result: ${game}`
    
    repeat()
    /*
   if ( document.getElementById("rock").classList.value === "rock") {
        this.classList.replace("rock", "btn")
    } else if ( document.getElementById('paper').classList.value === "paper") {
        this.classList.replace("paper", "btn")
    } else if ( document.getElementById('scissor').classList.value === "scissor") {
        this.classList.replace("scissor", "btn")
    } */
})














   /* let buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.addEventListener('change', function(){
    
     if ( rock.classList === "rock" && compSelection === "rock" || 
         paper.classList === "paper" && compSelection === "paper" ||
         scissor.classList === "scissor" && compSelection === "scissor") {
            return "Draw"
         } 
         else if ( rock.classList === "rock" && compSelection === "paper" || 
         paper.classList === "paper" && compSelection === "scissor" ||
         scissor.classList === "scissor" && compSelection === "rock") {
               return "Comp Win"
            }   
         else if ( rock.classList === "rock" && compSelection === "paper" || 
         paper.classList === "paper" && compSelection === "scissor" ||
         scissor.classList === "scissor" && compSelection === "rock") {
            return "You win"
         } 
        })) 
};
document.addEventListener('click', function() {
    
    document.getElementById("rock").addEventListener('click', function(){
        this.classList.replace("btn", "rock")   
    });
    document.getElementById("paper").addEventListener('click', function(){
        this.classList.replace("btn", "paper")
    });
    document.getElementById("scissor").addEventListener('click', function(){
        this.classList.replace("btn", "scissor")
    }); 


    if ( document.getElementById("rock").onclick) {
        this.classList.replace("btn", "rock")
    } else if (document.getElementById("paper").onclick) {
        this.classList.replace("btn", "paper")
    } else if (document.getElementById("scissor").onclick) {
        this.classList.replace("btn", "scissor")
    }

})
*/