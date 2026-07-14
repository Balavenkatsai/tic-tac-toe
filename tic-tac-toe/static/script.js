const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");
const status = document.getElementById("status");
let currentPlayer = "X";
let gameOver = false;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {

    cell.addEventListener("click", () => {

        if(cell.textContent === "" && !gameOver){

           cell.textContent = currentPlayer;

checkWinner();

if (!gameOver) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = "Current Player: " + currentPlayer;
}

        }

    });

});

function checkWinner(){

    for(let combo of winningCombinations){

        const a = cells[combo[0]].textContent;
        const b = cells[combo[1]].textContent;
        const c = cells[combo[2]].textContent;

        if(a !== "" && a === b && b === c){

            status.textContent = "🏆 Winner: " + a + " 🎉";

            gameOver = true;

            return;

        }

    }

}

restartButton.addEventListener("click", () => {

    cells.forEach(cell => {

        cell.textContent = "";

    });

    currentPlayer = "X";

    status.textContent = "Current Player: X";

    gameOver = false;

});