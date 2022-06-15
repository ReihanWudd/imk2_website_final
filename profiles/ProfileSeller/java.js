var fulllogin = document.getElementById("loginbar")
var fullregis = document.getElementById("regisbar")

function openfulllogin() {
    fulllogin.style.display = "flex";
}

function closefulllogin() {
    fulllogin.style.display = "none";
    fullregis.style.display = "none";
}

function registerclick() {
    fulllogin.style.display = "none";
    fullregis.style.display = "flex";
}