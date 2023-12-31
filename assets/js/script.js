const mainGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    //Start the Game
    const startGame = () => {
        const startBtn = document.querySelector(".start button");
        const startScreen = document.querySelector(".start");
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissors = document.querySelector(".scissors");

        startBtn.addEventListener("click", () => {
            startScreen.style.visibility = "hidden";
            rock.style.visibility = "visible";
            paper.style.visibility = "visible";
            scissors.style.visibility = "visible";
        });
    };

    //Play the Game
    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const computer = document.querySelector(".computer");
        const player = document.querySelector(".player");
        const hands = document.querySelectorAll(".hands img");

        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Game Text Result
                compareHands(this.textContent, computerChoice);
                //Update Images
                player.src = `assets/images/${this.textContent}.png`;
                computer.src = `assets/images/${computerChoice}.png`;
                //Animation
                player.style.animation = "shakePlayer 2s ease";
                computer.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const result = document.querySelector(".result");
        //Tie Option
        if (playerChoice === computerChoice) {
            result.textContent = "TIE!";
            return;
        }
        //Rock Option
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                result.textContent = "YOU WIN!";
                return;
            } else {
                result.textContent = "YOU LOSE!";
                return;
            }
        }
        //Paper Option
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                result.textContent = "YOU LOSE!";
                return;
            } else {
                result.textContent = "YOU WIN!";
                return;
            }
        }
        //Scissors Option
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                result.textContent = "YOU LOSE!";
                return;
            } else {
                result.textContent = " YOU WIN!";
                return;
            }
        }

    }


    //Calling functions
    startGame();
    playGame();
};

//Start the main function
mainGame();