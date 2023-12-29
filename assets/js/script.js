const game = () => {
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

    //Is call all the inner function
    startGame();
};

    //start the game function
    game();