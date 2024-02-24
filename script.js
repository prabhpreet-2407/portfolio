window.onscroll = function() {
    // Get the scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is greater than a threshold (e.g., 100)
    if (scrollPosition > 100) {
        document.getElementById('bottomNavbar').style.top = '-60px'; // Hide the bottom navbar
        document.getElementById('topNavbar').style.top = '0'; // Show the top navbar
    } else {
        document.getElementById('bottomNavbar').style.top = '0'; // Show the bottom navbar
        document.getElementById('topNavbar').style.top = '-60px'; // Hide the top navbar
    }
};


function sendEmail() {
    window.location = "mailto:prabhpreet.singh001@gmail.com";
}

function sendCall() {
}
var typed = new Typed('#titleElement', {
    strings: ['Welcome to Portfolio Website'],
    typeSpeed: 50,
    backSpeed: 200,
    backDelay: 100,
    loop: true
});
var typed = new Typed('#element', {
    strings: ['<i>Web Developer</i>', ' Front-end Developer', '&amp; Back-end Developer', 'Full-Stack Developer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const displayValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

const board = document.getElementById("board");
const modeForm = document.getElementById("modeForm");
const gameStatus = document.getElementById("gameStatus");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let multiplayerMode = true;
let gameEnded = false;

modeForm.addEventListener("change", (e) => {
    multiplayerMode = e.target.value === "multiplayer";
    resetGame();
});

function makeMove(cell, index) {
    gameBoard[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.style.pointerEvents = "none";

    if (checkWinner()) {
        showGameStatus(`Player ${currentPlayer} wins!`);
    } else if (!gameBoard.includes("")) {
        showGameStatus("It's a draw!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    if (!multiplayerMode && currentPlayer === "O") {
        setTimeout(computerMove, 500);
    }
}

function computerMove() {
    if (!gameEnded && !multiplayerMode) {
        let emptyCells = gameBoard.reduce((acc, cell, index) => {
            if (cell === "") {
                acc.push(index);
            }
            return acc;
        }, []);

        if (emptyCells.length > 0) {
            // Check if the player can win in the next move and block them
            for (let i = 0; i < emptyCells.length; i++) {
                let testBoard = [...gameBoard];
                testBoard[emptyCells[i]] = 'X'; // Assuming 'X' represents the player's move
                if (checkWinner(testBoard, 'X')) {
                    const cell = board.children[emptyCells[i]];
                    makeMove(cell, emptyCells[i]);
                    return;
                }
            }

            // Check if the computer can win in the next move
            for (let i = 0; i < emptyCells.length; i++) {
                let testBoard = [...gameBoard];
                testBoard[emptyCells[i]] = 'O'; // Assuming 'O' represents the computer's move
                if (checkWinner(testBoard, 'O')) {
                    const cell = board.children[emptyCells[i]];
                    makeMove(cell, emptyCells[i]);
                    return;
                }
            }

            
            // If no immediate winning moves, choose a random empty cell
            const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const cell = board.children[randomIndex];
            makeMove(cell, randomIndex);
        }
    }
}


function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameEnded = true;
            return true;
        }
    }

    return false;
}

function showGameStatus(message) {
    gameStatus.innerText = message;
    gameEnded = true;
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameEnded = false;
    gameStatus.innerText = "";
    board.innerHTML = "";
    createBoard();

    if (!multiplayerMode && currentPlayer === "O") {
        setTimeout(computerMove, 500);
    }
}

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (!gameEnded && (multiplayerMode || (currentPlayer === "X" && !multiplayerMode))) {
            cell.style.pointerEvents = "auto";

            cell.addEventListener("click", () => {
                if (gameBoard[i] === "" && !checkWinner()) {
                    makeMove(cell, i);
                }
            });
        }

        board.appendChild(cell);
    }
}

createBoard();

document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.scroll-up-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove the # character
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuContainer = document.querySelector(".menu-container");

    menuIcon.addEventListener("click", () => {
        if (menuContainer.classList.contains("menu-opened")) {
            menuContainer.classList.remove("menu-opened");
        } else {
            menuContainer.classList.add("menu-opened");
        }
    });
});
