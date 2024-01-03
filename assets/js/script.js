const audio = new Audio();
audio.src = "assets/music/music_game.wav";


const mainGame = () => {
    let plScore = 0;
    let cpScore = 0;

    //Start the Game
    function startGame() {
        const startBtn = document.querySelector(".start button");
        const startScreen = document.querySelector(".start");
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissors = document.querySelector(".scissors");
        const lizard = document.querySelector(".lizard");
        const spock = document.querySelector(".spock");

        startBtn.addEventListener("click", () => {
            startScreen.style.visibility = "hidden";
            rock.style.visibility = "visible";
            paper.style.visibility = "visible";
            scissors.style.visibility = "visible";
            lizard.style.visibility = "visible";
            spock.style.visibility = "visible";
        });
    }

    //Play the Game
    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const computer = document.querySelector(".computer");
        const player = document.querySelector(".player");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach((hand) => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Game Text Result
                    compareHands(this.textContent, computerChoice);
                    //Image Result
                    player.src = `assets/images/${this.textContent}.png`;
                    computer.src = `assets/images/${computerChoice}.png`;
                }, 2000);
                //Animation
                player.style.animation = "shakePlayer 2s ease";
                computer.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const upScore = () => {
        const playerScore = document.querySelector(".playerScore p");
        const computerScore = document.querySelector(".computerScore p");
        playerScore.textContent = plScore;
        computerScore.textContent = cpScore;
    };


    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const result = document.querySelector(".result");
        //Tie Option
        if (playerChoice === computerChoice) {
            result.textContent = "TIE!";
            upScore();
            return;
        }
        //Rock Option
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                result.textContent = "YOU WIN!";
                plScore++;
                upScore();
                return;
            } else {
                result.textContent = "YOU LOSE!";
                cpScore++;
                upScore();
                return;
            }
        }
        //Paper Option
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                result.textContent = "YOU LOSE!";
                cpScore++;
                upScore();
                return;
            } else {
                result.textContent = "YOU WIN!";
                plScore++;
                upScore();
                return;
            }
        }
        //Scissors Option
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                result.textContent = "YOU LOSE!";
                cpScore++;
                upScore();
                return;
            } else {
                result.textContent = " YOU WIN!";
                plScore++;
                upScore();
                return;
            }
        }

    };


    //Calling functions
    startGame();
    playGame();
};

//Start the main function
mainGame();