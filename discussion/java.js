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

function addtext(){
    var garis = document.createElement("hr")

    var tag1 = document.createElement("h2")
    var get1 = document.getElementById("namanya").value;
    var tulis1 = document.createTextNode(get1)
    tag1.appendChild(tulis1)

    var tag = document.createElement("h5")
    var get = document.getElementById("textnya").value;
    var tulis = document.createTextNode("reply @"+get)
    tag.appendChild(tulis)

    var tag3 = document.createElement("p")
    var get3 = document.getElementById("opinion").value;
    var tulis3 = document.createTextNode(get3)
    tag3.appendChild(tulis3)

    var tempat = document.getElementById("question_content");
    tempat.appendChild(garis)
    tempat.appendChild(tag1)
    tempat.appendChild(tag)
    tempat.appendChild(tag3)

}

