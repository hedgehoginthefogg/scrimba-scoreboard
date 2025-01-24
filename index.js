let homeScoreEl = document.getElementById("home-score");
console.log(homeScoreEl);
let guestScoreEl = document.getElementById("guest-score");
console.log(guestScoreEl);

function homeAdd1() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 1;
}

function homeAdd2() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
}

function homeAdd3() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
}

function guestAdd1() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 1;
}

function guestAdd2() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
}

function guestAdd3() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
}
