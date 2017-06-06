// zegar i modyfikacja
window.addEventListener('load', startClock);
window.addEventListener('load', modyfikacja);

function modyfikacja() {
    document.getElementById('aktual').innerHTML = document.lastModified;
}

function startClock() {
    updateClock();
    setInterval("updateClock()", 1000);
}

function updateClock() {
    node = document.getElementById("clock");
    now = new Date();
    node.innerHTML = now.toLocaleString();
}
// klik Przeładuj
var elPrze = document.getElementById("prze");
elPrze.addEventListener('click', przeladuj);

function przeladuj() {
    location.reload(true);
}

//Pokaż ukryte
var elPoka = document.getElementById("poka");
elPoka.addEventListener("click", pokaz);

function pokaz() {
    $(':hidden').show(2500);
}
