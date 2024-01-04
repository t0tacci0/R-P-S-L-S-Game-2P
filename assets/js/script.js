const audio = new Audio();
audio.src = "assets/music/music_game.wav";

document.getElementById("how-to-play").addEventListener("click", function () {
    alert("Scissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock\nRock crushes Scissors");
});

const mainGame = () => {
    let plScore = 0;
    let cpScore = 0;
    const resetButton = document.getElementById("reset-button");

    //Start the Game
    function startGame() {
        const startBtn = document.querySelector(".start button");
        const startScreen = document.querySelector(".start");
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissors = document.querySelector(".scissors");
        const lizard = document.querySelector(".lizard");
        const spock = document.querySelector(".spock");

        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("reset-button").style.visibility = "hidden";
        });

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
        const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

        options.forEach((option) => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 5);
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
        resetScore();
    };
    const resetScore = () => {
        if(plScore === 10 || cpScore === 10){
            resetButton.style.visibility = "visible";
            resetButton.addEventListener("click", resetGame);
        }
            
    };


    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const result = document.querySelector(".result");
        //Tie Option
        if (playerChoice === computerChoice) {
            result.textContent = "TIE!";
            upScore();
            return;
        } else if (
                (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
                (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
                (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
                (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
                (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
            ) {
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

    };

    const resetGame = () => {
        plScore = 0;
        cpScore = 0;
        document.querySelector(".result").textContent = "";
        document.querySelector(".playerScore p").textContent = "0";
        document.querySelector(".computerScore p").textContent = "0";
        document.querySelector(".player").src = "assets/images/rock.png";
        document.querySelector(".computer").src = "assets/images/rock.png";
        resetButton.style.visibility = "hidden";
    };

    //Calling functions
    startGame();
    playGame();
};

//Start the main function
mainGame();