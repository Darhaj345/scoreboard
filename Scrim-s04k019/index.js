// getElementById ONLY retrieves the element itself, not the content it stores.
let hScore = document.getElementById("hScore");
let gScore = document.getElementById("gScore");
let homeScore = 0;
let guestScore = 0;

// Home Buttons
function hAdd1() {
    homeScore += 1;
    hScore.textContent = homeScore;
}

function hAdd2() {
    homeScore += 2;
    hScore.textContent = homeScore;
}

function hAdd3() {
    homeScore += 3;
    hScore.textContent = homeScore;
}

// Away Buttons
function gAdd1() {
    guestScore += 1;
    gScore.textContent = guestScore;
}

function gAdd2() {
    guestScore += 2;
    gScore.textContent = guestScore;
}

function gAdd3() {
    guestScore += 3;
    gScore.textContent = guestScore;
}

