window.addEventListener("load", distribuerAction);


var bouton = document.getElementById("bouton");
var input = document.getElementById("input");
var bienvenue = document.getElementById("bienvenue");

function distribuerAction() {
    bouton.addEventListener("click", checkState);
}

var France = ["Paris", "Marseille", "Grenoble", "Ex en Provence"];
var Espagne = ["Madrid", "Grenade", "Barcelone", "Seville"];
var Angleterre = ["Londres", "Liverpool", "Cambridge", "Manchester"];
var Italie = ["Turin", "Rome", "Milan", "Venise"];

var pays;
var message;
var state = false;


function checkState() {
    if (state == false) {
        checkville();
    } else {
        ajoutVille();
    }
}

function checkville() {
    if (France.find(element => element == input.value)) {
        console.log("France");
        pays = France;
        message = "Bienvenue en France";
        message += ", Vous pouvez aussi visiter les lieux suivants :"
        bienvenue.innerHTML = message;
        state = true;

    } else if (Italie.find(element => element == input.value)) {
        console.log("Italie");
        message = "Bienvenue en Italie";
        message += ", Vous pouvez aussi visiter les lieux suivants :"
        bienvenue.innerHTML = message;
        pays = Italie;
        state = true;

    } else if (Espagne.find(element => element == input.value)) {
        console.log("Espagne");
        message = "Bienvenue en Espagne";
        message += ", Vous pouvez aussi visiter les lieux suivants :"
        bienvenue.innerHTML = message;
        pays = Espagne;
        state = true;

    } else if (Angleterre.find(element => element == input.value)) {
        console.log("Angleterre");
        message = "Bienvenue en Angleterre";
        message += ", Vous pouvez aussi visiter les lieux suivants :"
        bienvenue.innerHTML = message;
        pays = Angleterre;
        state = true;

    } else {
        alert("Ville incorecte");
    }

    afficherListe(pays);


    if (state == true) {
        bouton.innerHTML = "Ajouter";
    }
}

function afficherListe(pays) {
    var ul = document.getElementById("listeVilles");
    pays.forEach(element => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        ul.appendChild(li);
    });
}

function ajoutVille() {
    if (!checkIfExist(pays)) {
        pays.push(input.value);
        var ul = document.getElementById("listeVilles");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
    }
}

function checkIfExist(pays) {
    var bool = false
    pays.forEach(element => {
        if (element == input.value)
        {
            bool = true;
        } 
    });
    return bool;
}