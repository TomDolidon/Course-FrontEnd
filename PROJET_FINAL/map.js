// collections de partenaires pour la création de markers et les infos les concernant
var partenaires =
     [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-0.051510 ,47.679130]
        },
        "properties": {
          "name": "Zoo de la flèche",
          "popUpContent": "Zoo de la flèche",
          "description": "Le Zoo de La Flèche réputé pour la qualité de ses installations et classé parmi les 5 premiers parcs de France, abrite sur ses 14 hectares 1500 animaux.",
          "tel" : "02 43 48 19 19",
          "adresse" : "Le Tertre Rouge, 72200 La Flèche",
          "superficie" :"14 hectares",
          "ouverture": "1946",
          "horaires" : "10h00 - 17h30"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [1.358000, 47.256150]
        },
        "properties": {
            "name": "ZooParc de Beauval",
            "popUpContent": "ZooParc de Beauval",
            "description": "Classé parmi les 5 meilleurs zoos du monde, Le ZooParc de Beauval présente la plus grande diversité animalière de France",
            "tel" : "02 54 75 50 00",
            "adresse" : "Avenue du Blanc, 41110 St Aignan",
            "superficie" :"40 hectares",
            "ouverture": "1980",
            "horaires" : "09h00 - 18h00"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [4.851440, 45.774260]
        },
        "properties": {
            "name": "Parc de la tête d'or",
            "popUpContent": "Parc de la tête d'or",
            "description": "Le parc de la Tête d'or est un parc urbain public situé à Lyon, l'un des plus grands de France. Œuvre des frères Denis et Eugène Bühler, le parc est ouvert dès 1857 alors que les travaux ne sont pas achevés.",
            "tel" : "04 72 69 47 60",
            "adresse" : "69006 Lyon",
            "superficie" :"117 hectares",
            "ouverture": "1857",
            "horaires" : "06h30 - 22h30"
        }
      }
    ];

// rempli dynamiquement la partie information à partir de la collection partenaires
// (d'après les cours de référencements ce n'est pas une bonne chose ;) , mais simplifie l'ajout de nouveaux partenaires)
function fillInformation(){

    this.partenaires.forEach(element => {
        $(`
        <div>
        <h3> ${element.properties.name} </h3>
        <span> ${element.properties.description} </span>
        <div> superficie : <strong> ${element.properties.superficie }</strong> </div>
        <div> Date d'ouverture : <strong> ${element.properties.ouverture }</strong> </div>
        </div>
        `).appendTo($('#info'));
    });

}

// rempli dynamiquement la partie assistance à partir de la collection partenaires
function fillAssistance(){
    this.partenaires.forEach(element => {
        $(`
        <div>
        <h3> ${element.properties.name} </h3>
        <div> Adresse : <strong> ${element.properties.adresse }</strong> </div>
        <div> Horaires : <strong> ${element.properties.horaires }</strong> </div>
        <div> Téléphone : <strong> ${element.properties.tel }</strong> </div>
        </div>
        `).appendTo($('#assistance'));
    });
}


// Création de la map
var mymap = L.map('map').setView([47.41322, 3.405762], 6);


// Ajout du calque sur la map (on utilisera ici l'api mapbox avec un accessToken publique)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicHVtYmFsIiwiYSI6ImNrNHF3eTZxZzA2d2IzZGxpaXJrZGNiaWkifQ.-LSJKDMtmmhmCuelJnsVFA'
}).addTo(mymap);

//icone pour le marker principal
  var markerMain = L.icon({
    iconUrl: 'res/img/marker/markerMain.png',
    shadowUrl: 'res/img/marker/markers_shadow.png',
    iconSize:     [30, 40], 
    shadowSize:   [30, 15], 
    iconAnchor:   [22, 40], 
    shadowAnchor: [15, 10], 
    popupAnchor:  [-7, -40],
    className: "markerMain"
});

  //icone pour les markers partenaires
var markerPartenaire = L.ExtraMarkers.icon({
    icon: 'fas fa-paw',
    markerColor: 'blue',
    shape: 'penta',
    prefix: 'fa'
});

//ajout du marker de zoolidon
var zoolidonMarker = L.marker(
    [47.41322, 3.405762], 
    {icon: markerMain},
    ).addTo(mymap);
zoolidonMarker.bindPopup("Le meilleur des zoo, ZOOLIDON !");


  //fonction pour rajouter un popUp à chaque marker
  function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.popUpContent);
  }


//On ajoute la collection de markers à la map
L.geoJSON(partenaires, {
    pointToLayer: function (feature, latlng) {
              return L.marker(latlng, {icon: markerPartenaire});
      },
    onEachFeature: onEachFeature
  }).addTo(mymap);

//rempli la div info et assistance
fillInformation();
fillAssistance();

// Animation lors d'un clic sur le marker principal
 zoolidonMarker.on("click", function(e) {

    //animation sur l'opacité
    $( ".markerMain").css("opacity", "0");
    $( ".markerMain" ).animate({
        opacity: 1,
      }, 2000, function() {
      });

      //ajout d'un rebond du marker
      this.bounce(4);
  }); 
