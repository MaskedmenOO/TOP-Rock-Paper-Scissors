let humanScore = 0;
let computerScore= 0;
let draw = 0;

function getComputerChoice(){
    let RandomNumber = Math.floor(Math.random() *3);
    let ComputerChoice;
    //returns either 0,1 or 2
    if(RandomNumber == 0){
        ComputerChoice = "Rock";
    }else if(RandomNumber == 1){
        ComputerChoice = "Paper";
    }else if(RandomNumber == 2){
        ComputerChoice = "Scissors";
    }
    return ComputerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("What's your choice?", "Rock/paper/scissors");
    let humanText = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLocaleLowerCase();
    let humanNumber ;
    if(humanText =="Rock"){
        humanNumber = 0;
    }else if (humanText =="Paper"){
        humanNumber = 1;
    }else if (humanText =="Scissors"){
        humanNumber = 2;
    }else{
        alert("Invalid input. Recheck spelling.")
    }
    return humanText;
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

        if(humanChoice===computerChoice){
            draw = draw +1;
            humanScore = humanScore + 0;
            computerScore = computerScore + 0;
            alert("It's a draw! ( Human Choice: "+humanChoice+" "+ "Computer Choice: "+ computerChoice +" )"  +
                "\nHuman Score is : "+ humanScore + " Computer Score is : " + computerScore + " "+ "Draw: "+ draw);
        }else if((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice==="Scissors") 
            || (humanChoice ==="Scissors" && computerChoice ==="Rock")){
                draw = draw +0;
                humanScore = humanScore + 0;
                computerScore = computerScore + 1;
            alert ("You lost! ( Human Choice: "+ humanChoice+ " , "+ "Computer Choice: " + computerChoice + " )"+
                "\nHuman Score is : "+ humanScore + " Computer Score is : " + computerScore + " "+ "Draw: "+ draw);
        }else if((humanChoice ==="Paper" && computerChoice ==="Rock")||(humanChoice ==="Scissors" && computerChoice ==="Paper")
            || (humanChoice==="Rock" && computerChoice ==="Scissors")){
                draw = draw +0;
                humanScore = humanScore + 1;
                computerScore = computerScore + 0;
            alert("You won! Human Choice : " + humanChoice + ", Computer Choice: " + computerChoice + " )"+
                "\nHuman Score is : "+ humanScore + " Computer Score is : " + computerScore + " "+ "Draw: "+ draw)
        }else{
            playRound();
        }

    return humanChoice + computerChoice;

}

function playGame(){
    for(i=1; i<6; i++){
        playRound();
    }
}

playGame();
