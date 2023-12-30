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
    };


    //Is call all the inner function
    startGame();
    playGame();
};

//start the game function
mainGame();