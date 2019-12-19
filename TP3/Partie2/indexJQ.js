window.addEventListener("load", distribuerAction);


const bouton = $("#bouton");
const input = $("#input");

function distribuerAction() {
    $("#bouton").click(checkVille);
}

let France = ["Paris", "Marseille", "Grenoble", "Aixx en Provence"];
let Espagne = ["Madrid", "Grenade", "Barcelone", "Seville"];
let Angleterre = ["Londres", "Liverpool", "Cambridge", "Manchester"];
let Italie = ["Turin", "Rome", "Milan", "Venise"];

let pays;

function checkVille() {

console.log(input.val());


    if (France.find(element => element == input.val())) {
        console.log("France");
        afficherListe(France, "France", input.val())

    } else if (Italie.find(element => element == input.val())) {
        console.log("Italie");
        afficherListe(Italie, "Italie", input.val())

    } else if (Espagne.find(element => element == input.val())) {
        console.log("Espagne");
        afficherListe(Espagne, "Espagne", input.val())

    } else if (Angleterre.find(element => element == input.val())) {
        console.log("Angleterre");
        afficherListe(Angleterre, "Angleterre", input.val());

    } else {
        alert("Ville incorecte");
    }
}

function afficherListe(pays, nomPays, ville) {

    let paysExist = $(`#liste-${nomPays}`);
    
    if(paysExist.length === 0){
        $('<span>Bienvenue en ' + nomPays + ', Vous pouvez aussi visiter : </span>').appendTo($('body'));
        $(`<ul id="liste-${nomPays}">  </ul>`).appendTo($('body'));
        pays.forEach(element => {
    
            if(element != ville) {
                $(`<li> ${element} </li>`).appendTo($(`#liste-${nomPays}`));
            }
        });
    }


}

