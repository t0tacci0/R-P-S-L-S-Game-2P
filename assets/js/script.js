const computer = document.querySelector(".player0 img");
const player = document.querySelector(".player1 img");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const buttons = document.querySelectorAll(".buttons-container button");
const audio = new Audio();

audio.src = "assets/music/music_game.wav";

function shacking() {
    buttons.forEach((option) => {
        option.addEventListener("click", () => {
            computer.classList.add("shakeComputer");
            player.classList.add("shakePlayer");
        });
    });
}
shacking();

