let hScore = document.getElementById("h-score");
let gScore = document.getElementById("g-score");

let scoreTotal = 0;
let gScoreTotal = 0;

let hScoreConsole = hScore.textContent;

function add1() {
  scoreTotal += 1;
  hScore.textContent = scoreTotal;
}

function add2() {
  scoreTotal += 2;
  hScore.textContent = scoreTotal;
}

function add3() {
  scoreTotal += 3;
  hScore.textContent = scoreTotal;
}

function gAdd1() {
  gScoreTotal += 1;
  gScore.textContent = gScoreTotal;
}

function gAdd2() {
  gScoreTotal += 2;
  gScore.textContent = gScoreTotal;
}

function gAdd3() {
  gScoreTotal += 3;
  gScore.textContent = gScoreTotal;
}
