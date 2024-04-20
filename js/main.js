
let connectFour = [[0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]]

let empty = 0;
let red = 1;
let black = 2;

let turnRed = true;

let winBlack = false;
let winRed = false;

let nameRed = "";
let nameBlack = "";

let NW = 0;
let W = 0;
let SW = 0;
let NE = 0;
let E = 0;
let SE = 0;
let S = 0;



function checkNorthWest (x, y) {
    if (x >= 1 && y >=1) {
        if (connectFour[x - 1][y - 1] === 1) {
            NW++;
            x--;
            y--;
        } else {
            return;
        }
        checkNorthWest(x, y);
    }
}

function checkSouthEast(x, y) {
    if (x <= 4 && y <= 5) {
        if (connectFour[x + 1][y + 1] === 1) {
            SE++;
            x++;
            y++;
        } else {
            return;
        }
        checkSouthEast(x, y);
    }
}


function checkNorthEast(x, y) {
    if (x >= 1 && y <= 5) {
        if (connectFour[x - 1][y + 1] === 1) {
            NE++;
            x--;
            y++;
        } else {
            return;
        }
        checkNorthEast(x, y);
    }
}


function checkSouthWest(x, y) {
    if (x <= 4 && y >= 1) {
        if (connectFour[x+1][y-1] === 1) {
            SW++;
            x++;
            y--;
        } else {
            return;
        }
        checkSouthWest(x, y);
    }
}


function checkEast(x, y) {
    if (y <= 5) {
        if (connectFour[x][y+1] === 1) {
            E++;
            y++;
        } else {
            return;
        }
        checkEast(x, y);
    }
}

function checkWest(x, y) {
    if (y >= 1) {
        if (connectFour[x][y-1] === 1) {
            W++;
            y--;
        } else {
            return;
        }
        checkWest(x, y);
    } 
}


function checkSouth(x, y) {
     if (x <= 4) {
        if (connectFour[x+1][y] === 1) {
            S++;
            x++;
        } else {
            return;
        }
        checkSouth(x, y);
    }
}


function checkAdjacent(x, y) {
    checkNorthWest(x, y);
    checkNorthEast(x, y);
    checkEast(x, y);
    checkSouthEast(x, y);
    checkSouth(x, y);
    checkSouthWest(x, y);
    checkWest(x, y);

    checkWin();

    reset();
}


function checkWin() {
    if (NW + SE >= 3 ||
        S >= 3 ||
        NE + SW >= 3 ||
        E + W >= 3) {
        winRed = true;
    }
}

function reset() {
    NW = 0;
    W = 0;
    SW = 0;
    NE = 0;
    E = 0;
    SE = 0;
    S = 0;
}






let NW2 = 0;
let W2 = 0;
let SW2 = 0;
let NE2 = 0;
let E2 = 0;
let SE2 = 0;
let S2 = 0;


function checkNorthWest2 (x, y) {
    if (x >= 1 && y >=1) {
        if (connectFour[x - 1][y - 1] === 2) {
            NW2++;
            x--;
            y--;
        } else {
            return;
        }
        checkNorthWest2(x, y);
    }
}

function checkSouthEast2(x, y) {
    if (x <= 4 && y <= 5) {
        if (connectFour[x + 1][y + 1] === 2) {
            SE2++;
            x++;
            y++;
        } else {
            return;
        }
        checkSouthEast2(x, y);
    }
}


function checkNorthEast2(x, y) {
    if (x >= 1 && y <= 5) {
        if (connectFour[x - 1][y + 1] === 2) {
            NE2++;
            x--;
            y++;
        } else {
            return;
        }
        checkNorthEast2(x, y);
    }
}


function checkSouthWest2(x, y) {
    if (x <= 4 && y >= 1) {
        if (connectFour[x+1][y-1] === 2) {
            SW2++;
            x++;
            y--;
        } else {
            return;
        }
        checkSouthWest2(x, y);
    }
}


function checkEast2(x, y) {
    if (y <= 5) {
        if (connectFour[x][y+1] === 2) {
            E2++;
            y++;
        } else {
            return;
        }
        checkEast2(x, y);
    }
}

function checkWest2(x, y) {
    if (y >= 1) {
        if (connectFour[x][y-1] === 2) {
            W2++;
            y--;
        } else {
            return;
        }
        checkWest2(x, y);
    } 
}


function checkSouth2(x, y) {
     if (x <= 4) {
        if (connectFour[x+1][y] === 2) {
            S2++;
            x++;
        } else {
            return;
        }
        checkSouth2(x, y);
    }
}


function checkAdjacent2(x, y) {
    checkNorthWest2(x, y);
    checkNorthEast2(x, y);
    checkEast2(x, y);
    checkSouthEast2(x, y);
    checkSouth2(x, y);
    checkSouthWest2(x, y);
    checkWest2(x, y);

    checkWin2();

    reset2();
    
}


function checkWin2() {
    if (NW2 + SE2 >= 3 ||
        S2 >= 3 ||
        NE2 + SW2 >= 3 ||
        E2 + W2 >= 3) {
        winBlack = true;
        }

    if (winBlack === true) { //If a win condition is true
        if (nameBlack !== "") { //If entered name
            document.getElementById("message").innerHTML = `${nameBlack.toUpperCase()} WINS` //Display NAME WINS
        } else { //If no name
            document.getElementById("message").innerHTML = "BLACK WINS"; //Display Red WINS
        }
    }
}

function reset2() {
    NW2 = 0;
    SE2 = 0;
    S2 = 0;
    NE2 = 0;
    SW2 = 0;
    E2 = 0;
    W2 = 0;
}





let column1 = 5;
let column2 = 5;
let column3 = 5;
let column4 = 5;
let column5 = 5;
let column6 = 5;
let column7 = 5;




const button1 = document.querySelectorAll('.button1');

button1.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) {
        if (connectFour[0][0] === 0) {
            if (turnRed === true) {
                connectFour[column1][0] = 1;
                checkAdjacent(column1, 0);
                document.getElementById(`0${column1}`).style.backgroundColor = "red";
                column1--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column1][0] = 2;
                checkAdjacent2(column1, 0);
                document.getElementById(`0${column1}`).style.backgroundColor = "black";
                column1--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))



const button2 = document.querySelectorAll('.button2');

button2.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) {   
        if (connectFour[0][1] === 0) {
            if (turnRed === true) {
                connectFour[column2][1] = 1;
                checkAdjacent(column2, 1);
                document.getElementById(`1${column2}`).style.backgroundColor = "red";
                column2--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column2][1] = 2;
                checkAdjacent2(column2, 1);
                document.getElementById(`1${column2}`).style.backgroundColor = "black";
                column2--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))


const button3 = document.querySelectorAll('.button3');

button3.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) { 
        if (connectFour[0][2] === 0) {
            if (turnRed === true) {
                connectFour[column3][2] = 1;
                checkAdjacent(column3, 2);
                document.getElementById(`2${column3}`).style.backgroundColor = "red";
                column3--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column3][2] = 2;
                checkAdjacent2(column3, 2);
                document.getElementById(`2${column3}`).style.backgroundColor = "black";
                column3--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))



const button4 = document.querySelectorAll('.button4');

button4.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) { 
        if (connectFour[0][3] === 0) {
            if (turnRed === true) {
                connectFour[column4][3] = 1;
                checkAdjacent(column4, 3);
                document.getElementById(`3${column4}`).style.backgroundColor = "red";
                column4--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column4][3] = 2;
                checkAdjacent2(column4, 3);
                document.getElementById(`3${column4}`).style.backgroundColor = "black";
                column4--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))


const button5 = document.querySelectorAll('.button5');

button5.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) {     
        if (connectFour[0][4] === 0) {
            if (turnRed === true) {
                connectFour[column5][4] = 1;
                checkAdjacent(column5, 4);
                document.getElementById(`4${column5}`).style.backgroundColor = "red";
                column5--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column5][4] = 2;
                checkAdjacent2(column5, 4);
                document.getElementById(`4${column5}`).style.backgroundColor = "black";
                column5--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))


const button6 = document.querySelectorAll('.button6');

button6.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) {     
        if (connectFour[0][5] === 0) {
            if (turnRed === true) {
                connectFour[column6][5] = 1;
                checkAdjacent(column6, 5);
                document.getElementById(`5${column6}`).style.backgroundColor = "red";
                column6--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column6][5] = 2;
                checkAdjacent2(column6, 5);
                document.getElementById(`5${column6}`).style.backgroundColor = "black";
                column6--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))


const button7 = document.querySelectorAll('.button7');

button7.forEach(el => el.addEventListener('click', event => {
    if (winRed === false && winBlack === false) {     
        if (connectFour[0][6] === 0) {
            if (turnRed === true) {
                connectFour[column7][6] = 1;
                checkAdjacent(column7, 6);
                document.getElementById(`6${column7}`).style.backgroundColor = "red";
                column7--;
                turnRed = false;
                displayNameBlack();
            }   else {
                connectFour[column7][6] = 2;
                checkAdjacent2(column7, 6);
                document.getElementById(`6${column7}`).style.backgroundColor = "black";
                column7--;
                turnRed = true;
                displayNameRed();
            }
        }
    }
}))




document.getElementById("red-player").addEventListener("input", (e) => {
    nameRed = e.target.value;
    if (winRed === false && winBlack === false && turnRed === true) {
        displayNameRed();
    }
})

document.getElementById("black-player").addEventListener("input", (e) => {
    nameBlack = e.target.value;
    if (winRed === false && winBlack === false && turnRed === false) {
        displayNameBlack();
    }
})


function displayNameBlack() {
    if (winRed === false && winBlack === false) {
        if (nameBlack !== "") { //If input is not blank
            document.getElementById("message").innerHTML = `${nameBlack}'s Turn (Black)` //Display Name's Turn (O)
        } else { //If input is blank
            document.getElementById("message").innerHTML = "Black's Turn"; //Display O's Turn
        }
    } else if (winRed === true) { //If a win condition is true
        if (nameRed !== "") { //If entered name
            document.getElementById("message").innerHTML = `${nameRed.toUpperCase()} WINS` //Display NAME WINS
        } else { //If no name
            document.getElementById("message").innerHTML = "RED WINS"; //Display Red WINS
        }    
    }
}

function displayNameRed() {
    if (winRed === false && winBlack === false) {
        if (nameRed !== "") {
            document.getElementById("message").innerHTML = `${nameRed}'s Turn (Red)`
        } else {
            document.getElementById("message").innerHTML = "Red's Turn";
        }
    } else if (winBlack === true) { //If a win condition is true
        if (nameBlack !== "") { //If entered name
            document.getElementById("message").innerHTML = `${nameBlack.toUpperCase()} WINS` //Display NAME WINS
        } else { //If no name
            document.getElementById("message").innerHTML = "BLACK WINS"; //Display Red WINS
        }    
    }
}



document.getElementById("reset").addEventListener("click", resetAll); //RESET BUTTON

function resetAll () {
    for (let i = 0; i <= 6; i++) {
        document.getElementById(`${i}0`).style.backgroundColor = "white";
        document.getElementById(`${i}1`).style.backgroundColor = "white";
        document.getElementById(`${i}2`).style.backgroundColor = "white";
        document.getElementById(`${i}3`).style.backgroundColor = "white";
        document.getElementById(`${i}4`).style.backgroundColor = "white";
        document.getElementById(`${i}5`).style.backgroundColor = "white";
    }

    column1 = 5;
    column2 = 5;
    column3 = 5;
    column4 = 5;
    column5 = 5;
    column6 = 5;
    column7 = 5;

    turnRed = true;

    winBlack = false;
    winRed = false;

    NW = 0;
    W = 0;
    SW = 0;
    NE = 0;
    E = 0;
    SE = 0;
    S = 0;

    NW2 = 0;
    W2 = 0;
    SW2 = 0;
    NE2 = 0;
    E2 = 0;
    SE2 = 0;
    S2 = 0;

    connectFour = [[0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]]

    displayNameRed();
    
}

    



