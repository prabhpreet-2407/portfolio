window.onscroll = function () {
    // Get the scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is greater than a threshold (e.g., 100)
    if (scrollPosition > 100) {
        document.getElementById('bottomNavbar').style.transform = 'translateY(-60px)'; // Hide the bottom navbar
        document.getElementById('topNavbar').style.transform = 'translateY(0)'; // Show the top navbar
    } else {
        document.getElementById('bottomNavbar').style.transform = 'translateY(0)'; // Show the bottom navbar
        document.getElementById('topNavbar').style.transform = 'translateY(-60px)'; // Hide the top navbar
    }
};


async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}&units=metric`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    let weatherIcon = document.getElementById("weather-icon");
    const weatherCondition = data.weather[0].main;
    const basePath = "asset/images/";
    switch (weatherCondition) {
        case "Clouds":
            weatherIcon.src = `${basePath}clouds.png`;
            break;
        case "Rain":
            weatherIcon.src = `${basePath}rain.png`;
            break;
        case "Clear":
            weatherIcon.src = `${basePath}clear.png`;
            break;
        case "Drizzle":
            weatherIcon.src = `${basePath}drizzle.png`;
            break;
        case "Mist":
            weatherIcon.src = `${basePath}mist.png`;
            break;
        case "Wind":
            weatherIcon.src = `${basePath}wind.png`;
            break;
        case "Snow":
            weatherIcon.src = `${basePath}snow.png`;
            break;
        case "Humidity":
            weatherIcon.src = `${basePath}humidity.png`;
            break;
        default:
            console.log("Weather condition not matched");

    }


}

document.querySelector('.download-button').addEventListener('click', function() {
        // This can be more dynamic if needed, e.g., generating URL on the fly
        var link = document.createElement('a');
        link.href = './asset/prabh resume.pdf'; // URL to the PDF file
        link.download = 'Prabh_Resume.pdf'; // Suggest a filename to save as
        document.body.appendChild(link); // Append to the document
        link.click(); // Simulate a click
        document.body.removeChild(link); // Remove the link from the document
    });

const apiKey = "28ac0ae1847ff3b2e816722434d7aed2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon");
checkWeather("Brisbane");

searchBox.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        searchBtn.click();
    }
});
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


function todoList(todoValue) {
    if (todoValue.trim() === "") {
        alert("Please enter text..");
    } else {
        let li = document.createElement("li");
        li.textContent = todoValue;
        listContainer.appendChild(li);
    }
    todoInput.value = " ";
}

const todoBtn = document.querySelector(".todoBtn");
const todoInput = document.querySelector(".todoInput");
const listContainer = document.querySelector(".todoTasks");

todoBtn.addEventListener("click", () => {
    todoList(todoInput.value);
});

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        todoBtn.click();
    }
});
function qrCreater(qrValue) {
    // Delay the execution inside the function
    
        if (qrValue.trim() === "") {
            alert("Please enter text..");
            qrWait.style.display = 'none';
        } else {
            setTimeout(function() {
            
            qrImg.src = qrUrl + encodeURIComponent(qrValue); // Encode the QR value to handle special characters
            qrInputBox.value = "";
            // qrDownload.style.display = 'block';
            qrWait.style.display = 'none';
            }, 2000);
        }
    
}

const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const qrInputBox = document.querySelector("#qrInput");
const qrBtn = document.querySelector("#qrBtn");
const qrImg = document.querySelector("#qrImg");
const qrWait = document.querySelector(".wait");
// const qrDownload = document.querySelector(".qrDownload");

qrInputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default action (form submission)
        qrWait.style.display = 'block'; // Show loading indicator
        qrCreater(qrInputBox.value); // Create QR code after delay
    }
});

qrBtn.addEventListener("click", () => {
    qrWait.style.display = 'block'; // Show loading indicator
    qrCreater(qrInputBox.value); // Create QR code after delay
});

/* qrDownload.addEventListener("click", () => {
   event.preventDefault(); // Prevent default anchor behavior
    
    if (!qrImg.src) {
        console.log('No QR code image source found.');
        return; // Exit if there's no source for the QR image
    }
    
    // Direct download approach without converting to canvas
    const a = document.createElement('a');
    a.href = qrImg.src; // Use the source of the QR code image directly
    a.download = 'QRCode.png'; // Set the file name for the download
    document.body.appendChild(a); // Append the anchor to the body
    a.click(); // Trigger the download
    document.body.removeChild(a); 
}); */

// function showToast(msg) {
//     console.log(msg);

//     // Clear existing toasts before adding a new one
//     while (toastbox.firstChild) {
//         toastbox.removeChild(toastbox.firstChild);
//     }

//     let toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.innerHTML = msg;
//     toastbox.appendChild(toast);

//     // Use clearTimeout to ensure proper removal after the specified duration
//     setTimeout(() => {
//         // Check if the toast is still a child before attempting to remove
//         if (toastbox.contains(toast)) {
//             toastbox.removeChild(toast);
//         }
//     }, 6000);
// }

let progress = document.getElementById("progress");
let cntrlIcon = document.getElementById("cntrlIcon");
let song = document.getElementById("song");
let nextSong = document.querySelector(".fa-angle-right");
let prevSong = document.querySelector(".fa-angle-left");
let toastbox = document.querySelector(".toastbox");

nextSong.addEventListener("click", () =>{
    console.log('hello');
    let msg = 'no more song available';
    showToast(msg);
});
prevSong.addEventListener("click", () =>{
    console.log('hello');
    let msg = 'no more song available';
    showToast(msg);
});

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        cntrlIcon.classList.add("fa-pause");
        cntrlIcon.classList.remove("fa-play");
    } else {
        song.pause();
        cntrlIcon.classList.add("fa-play");
        cntrlIcon.classList.remove("fa-pause");
    }
}

// Add this event listener for the play/pause button
cntrlIcon.addEventListener('click', playPause);

// Update progress bar as the song plays
song.ontimeupdate = function() {
    progress.value = song.currentTime;
};

// Seek functionality for the progress bar
progress.addEventListener('input', function() {
    song.currentTime = progress.value;
});

const navy = document.querySelector(".navy-pink");

navy.addEventListener('click' , function() {
     document.documentElement.style.setProperty('--primary-color', '#33186B'); 
    document.documentElement.style.setProperty('--secondary-color', '#F2AFEF');
});
const brown = document.querySelector(".brown-beige");

brown.addEventListener('click' , function() {
     document.documentElement.style.setProperty('--primary-color', '#402B3A'); 
    document.documentElement.style.setProperty('--secondary-color', '#D63484');
});

const teal = document.querySelector(".teal-green");

teal.addEventListener('click' , function() {
     document.documentElement.style.setProperty('--primary-color', '#2D9596'); 
    document.documentElement.style.setProperty('--secondary-color', '#9AD0C2');
});
const green = document.querySelector(".green-yellow");

green.addEventListener('click' , function() {
     document.documentElement.style.setProperty('--primary-color', '#416D19'); 
    document.documentElement.style.setProperty('--secondary-color', '#e0d433');
});
const red = document.querySelector(".red-white");

red.addEventListener('click' , function() {
     document.documentElement.style.setProperty('--primary-color', '#860A35'); 
    document.documentElement.style.setProperty('--secondary-color', '#dad4d4');
});
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

const reset = document.getElementById("resetGame");

reset.addEventListener("click", (e) => {
    e.preventDefault();
    resetGame();
});

document.addEventListener('DOMContentLoaded', function () {
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
    const menuItems = document.querySelectorAll("#menu-list a"); // Select all menu items

    // Toggle menu open/close
    menuIcon.addEventListener("click", () => {
        menuContainer.classList.toggle("menu-opened");
    });

    // Close menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuContainer.classList.remove("menu-opened");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
        if (!menuContainer.contains(e.target) && e.target !== menuIcon) {
            menuContainer.classList.remove("menu-opened");
        }
    });
});

const throwDice = document.querySelector("#dice1");


throwDice.addEventListener("click", function dice1() {
    const newValue= Math.floor(Math.random()*5)+1;
   throwDice.src = `./asset/images/dice${newValue}.png`;
   throwDice.classList.add("press");

   const newValue1= Math.floor(Math.random()*5)+1;
   throwDice2.src = `./asset/images/dice${newValue1}.png`;
   setTimeout( function (){
    throwDice.classList.remove("press");
   },100);
});

const throwDice2 = document.querySelector("#dice2");


throwDice2.addEventListener("click", function dice2() {
     const newValue= Math.floor(Math.random()*5)+1;
   throwDice.src = `./asset/images/dice${newValue}.png`;
   const newValue1= Math.floor(Math.random()*5)+1;
   throwDice2.src = `./asset/images/dice${newValue1}.png`;
   throwDice2.classList.add("press");
   setTimeout( function (){
    throwDice2.classList.remove("press");
   },100);
});
