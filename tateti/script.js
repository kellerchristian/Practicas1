
let currentPlayer = "X"; // Alterna entre "X" y "O"

let board = ["", "", "", "", "", "", "", "", ""]; // Representa el tablero

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
];

function markCell(event) {
    let index = event.target.dataset.index;
    if (board[index] === "") { // Solo marcar si está vacío
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.style.backgroundColor = currentPlayer === "X" ? "lightblue" : "lightcoral";

        let winner = checkWinner();
        if (winner) {
			setTimeout(() => {
				showWinnerModal(winner);
			}, 100); // Pequeño retraso para permitir la actualización del DOM
		} else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Devuelve "X" o "O"
        }
    }
    return null;
}



document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", markCell);
});



function showWinnerModal(winner) {
    document.getElementById("winnerText").textContent = `¡Ganó ${winner}! ¿Quieres jugar otra vez?`;
    document.getElementById("winnerModal").style.display = "block";
}

function resetGame() {
    // Limpiar todas las celdas del tablero
    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = ""; // Borra la "X" o "O"
        cell.style.backgroundColor =  "lightgray";
    });

    // Reiniciar variables de control del juego
    currentPlayer = "X"; // O el jugador que empiece
    board = ["", "", "", "", "", "", "", "", ""];
}

// Eventos para los botones del modal
document.getElementById("playAgain").addEventListener("click", () => {
    resetGame(); // Llamas a una función para reiniciar el juego
    document.getElementById("winnerModal").style.display = "none";
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("winnerModal").style.display = "none";
});
