// This code is connected to onclick events for play and pause music

const audio = new Audio();
audio.src = "assets/music/music_game.wav";

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var modalBtn = document.getElementById("how-to-play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modalBtn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Main Game function with scores and resetButton variables

const mainGame = () => {
    let plScore = 0;
    let cpScore = 0;
    const resetButton = document.getElementById("reset-button");

    // Start the Game function

    function startGame() {
        const startBtn = document.querySelector(".start button");
        const startScreen = document.querySelector(".start");
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissors = document.querySelector(".scissors");
        const lizard = document.querySelector(".lizard");
        const spock = document.querySelector(".spock");

        // EventListener to hide start button and to show game buttons

        startBtn.addEventListener("click", () => {
            startScreen.style.visibility = "hidden";
            rock.style.visibility = "visible";
            paper.style.visibility = "visible";
            scissors.style.visibility = "visible";
            lizard.style.visibility = "visible";
            spock.style.visibility = "visible";
        });
    }

    // Play the Game function

    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const computer = document.querySelector(".computer");
        const player = document.querySelector(".player");
        const hands = document.querySelectorAll(".hands img");

        // End animation cycle after choice

        hands.forEach((hand) => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        // All buttons disabled when a button is clicked

        const time = document.querySelectorAll(".time");
        options.forEach((option) => {
            option.addEventListener("click", function (){
                options.forEach((btn) => {
                    btn.disabled = true;
                });
                setTimeout(() => {
                    options.forEach((btn) => {
                      btn.disabled = false;
                    });
                },2000 );     
            });
        });

        // Computer Options Game

        const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

        options.forEach((option) => {
            option.addEventListener("click", function () {

                //Computer Choice

                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {

                    // Game Text Result

                    compareHands(this.textContent, computerChoice);

                    // Image Result choice

                    player.src = `assets/images/${this.textContent}.png`;
                    computer.src = `assets/images/${computerChoice}.png`;
                }, 2000);

                // Animation hands

                player.style.animation = "shakePlayer 2s ease";
                computer.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    // This code will update the score

    const upScore = () => {
        const playerScore = document.querySelector(".playerScore p");
        const computerScore = document.querySelector(".computerScore p");
        playerScore.textContent = plScore;
        computerScore.textContent = cpScore;
        resetScore();
    };

    /** This code will reset the score if player or computer choice
     * will be equal 10 with an EventListener showing 
     * the resetButton with resetGame function
     */

    const resetScore = () => {
        if(plScore === 1 || cpScore === 1){
            resetButton.style.visibility = "visible";
            resetButton.addEventListener("click", resetGame);
        }
            
    };

    // Following code is showing all possible combination choices

    const compareHands = (playerChoice, computerChoice) => {

        // Update Text

        const result = document.querySelector(".result");

        // Tie Result

        if (playerChoice === computerChoice) {
            result.textContent = "TIE!";
            upScore();

        // Player Win result  

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

        // Computer Win result   

        } else {
            result.textContent = "YOU LOSE!";
            cpScore++;
            upScore();
        }

    };

    // This function will reset the Game 
    
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

    //Calling functions start and play game

    startGame();
    playGame();
};

//Start the main function

mainGame();