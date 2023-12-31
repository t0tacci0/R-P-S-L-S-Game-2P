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

                //Animation
                player.style.animation = "shakePlayer 2s ease";
                computer.style.animation = "shakeComputer 2s ease";

            });
        });           
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const game = document.querySelector(".game");
        //Tie Option
        if (playerChoice === computerChoice) {
            game.textContent = "TIE!";
            return;
        }//Rock Option
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                game.textContent = "YOU WIN!";
                return;
            } else {

    }


    //Calling functions
    startGame();
    playGame();
};

//Start the main function
mainGame();