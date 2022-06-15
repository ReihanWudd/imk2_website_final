var fulllogin = document.getElementById("loginbar")
var fullregis = document.getElementById("regisbar")
var fulloption = document.getElementById("option")
var fullseller = document.getElementById("loginsellerbar")

function openfulllogin() {
    fulloption.style.display = "flex";
}

function open_user() {
    fulloption.style.display = "none";
    fulllogin.style.display = "flex";
}

function open_seller() {
    fulloption.style.display = "none";
    loginsellerbar.style.display = "flex";
}

function closefulllogin() {
    fulllogin.style.display = "none";
    fullregis.style.display = "none";
    fullseller.style.display = "none";
}

function registerclick() {
    fulllogin.style.display = "none";
    fullregis.style.display = "flex";
}

