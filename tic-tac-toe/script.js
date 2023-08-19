console.log("Welcome to Harsh Tanwar Gaming-Zone")
console.log("This is 'Tic Tac Toe' game")
console.log("All rights reserved to Harsh Tanwar")

// let a,b;
// function p1() {
//     a = prompt("Hi, Player 1 - Enter your name here.");
// }
// function p2() {
//     b = prompt("Hi, Player 2 - Enter your name here.");
//     alert("Good Luck " + a + " and " + b + ". Please play fair.");
// }

let turn = "X"
let isgameover = false;

// change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("turn")[0].innerText = "This is " + turn + " turn.";
            }
        }
    })
})

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Add onclick listener to reset button
// reset.addEventListener('click', () => {
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = ""
//     });
//     turn = "X";
//     isgameover = false
//     document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("turn")[0].innerText = "This is " + turn + " turn.";
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

// })