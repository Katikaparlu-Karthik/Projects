const choices = document.querySelectorAll(".choice div"); 
const result = document.querySelector("#result-p");
const compChoices = ["rock", "paper", "scissor"];
const comp = document.querySelector("#comp");
const user = document.querySelector("#user");
let userscore = 0;
let compscore = 0;
let gameStarted = false; 

let generate = () => {
    let randindx = Math.floor(Math.random() * 3);
    return compChoices[randindx];
};

let draw = () => {
    result.style.display = "block";
    result.style.backgroundColor = "black";
    result.style.border = "5px solid rgb(146, 9, 9)";
    result.innerText = "Draw !! Play again!!";
};

let win = (userChoice, compChoice) => {
    result.style.display = "block";
    result.style.backgroundColor = "green";
    result.style.border = "none";
    result.innerText = `You Win !! Your ${userChoice} beats ${compChoice}`;
    userscore++;
    user.innerText = `${userscore}`;
};

let loss = (userChoice, compChoice) => {
    result.style.display = "block";
    result.style.backgroundColor = "red";
    result.style.border = "none";
    result.innerText = `You lost !! ${compChoice} beats Your ${userChoice}`;
    compscore++;
    comp.innerText = `${compscore}`;
};

const playGame = (userChoice) => {
    let compChoice = generate();
    console.log(userChoice);
    console.log(compChoice);
    if (userChoice === compChoice) {
        draw();
    } else if (userChoice === "rock") {
        if (compChoice === "paper") {
            loss(userChoice, compChoice);
        } else {
            win(userChoice, compChoice);
        }
    } else if (userChoice === "paper") {
        if (compChoice === "scissors") {
            loss(userChoice, compChoice);
        } else {
            win(userChoice, compChoice);
        }
    } else {
        if (compChoice === "paper") {
            win(userChoice, compChoice);
        } else {
            loss(userChoice, compChoice);
        }
    }
};


if (result) {
    result.addEventListener("click", () => {
        gameStarted = true; // Mark the game as started
        result.style.display = "none"; 
        choices.forEach((choice) => {
            
            choice.addEventListener("click", () => {
                let userChoice = choice.getAttribute("id"); 
                playGame(userChoice);
            });
        });
    });
}

// Global event listener to check if the game has started
document.addEventListener("click", (e) => {
    
    const isGameElement = e.target.id === "result-p" ;
    if (!gameStarted && !isGameElement) {
        alert("Click on the PLAY!! button");
    }
});
