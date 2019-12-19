window.addEventListener("load", distribuerAction);

function distribuerAction(){
    bouton.addEventListener("click", jouer); 
    boutonEx2.addEventListener("click", checkville);
}

//EXO 1
function jouer() {
    var secretNumber = Math.ceil((Math.random() * 10));
    var message = "Devinez le bon nombre entre 1 et 10";
    var nbEssai = 1;

    while(true) {
        let reponse = window.prompt(message, '');
        if (reponse == "") {
            message = "Vous n'avez pas rentré de nombres";
        } else if (reponse > 10 || reponse < 0) {
            message = "Le nombre rentré n'est pas valide";
        } else {
            if (secretNumber == reponse) {
                message = "Bravo ! Nombre de tentatives : " + nbEssai + ", Génération d'un nouveau nombre";
                secretNumber = Math.ceil((Math.random() * 10));
                nbEssai = 1;
            } else {
                if (reponse < secretNumber) {
                    message = "Au dessus";
                } else {
                    message = "En dessous";
                }
                nbEssai++;
                message += ", il vous reste "+ (4 - nbEssai) + " tentatives";
    
                if (nbEssai == 4) {
                    message = "Perdu ! un nouveau nombre a été généré";
                    secretNumber = Math.ceil((Math.random() * 10));
                    nbEssai = 1;
                }
            }
        }
    }
}


//EXO 2

var France = ["Paris", "Marseille", "Grenoble", "Ex en Provence"];
var Espagne = ["Madrid", "Grenade", "Barcelone", "Seville"];
var Angleterre = ["Londres", "Liverpool", "Cambridge", "Manchester"];
var Italie = ["Turin", "Rome", "Milan", "Venise"];

var boutonEx2 = document.getElementById("boutonEx2");
var bienvenue = document.getElementById("bienvenue");
var inputEx2 = document.getElementById("inputEx2");


function checkville(){
    if(France.find(element => element == inputEx2.value)){
        console.log("France");
        alert("Bienvenue en France");
        return true;
    } else if (Italie.find(element => element == inputEx2.value)){
        console.log("Italie");
        alert("Bienvenue en Italie");
        return true;

    }  else if (Espagne.find(element => element == inputEx2.value)){
        console.log("Espagne");
        alert("Bienvenue en Espagne");
        return true;

    }  else if (Angleterre.find(element => element == inputEx2.value)){
        console.log("Angleterre");
        alert("Bienvenue en Angleterre");
        return true;

    } else {
        alert("Ville incorecte");
        return false;
    }
}


