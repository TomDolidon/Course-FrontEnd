function Animal(nom, description, urlImage, paysNatal) {
    this.nom = nom;
    this.description = description;
    this.urlImage = urlImage;
    this.paysNatal = paysNatal;
}

const listeAnimaux = [
    {
        nom: "Lama",
        description: "Le lama blanc ou lama (Lama glama) est un camélidé domestique d'Amérique du Sud.",
        urlImage: "./res/img/lama.jpg",
        paysNatal: "Pérou, Bolivie"
    },
    {
        nom: "Cheval",
        description: "Le cheval (Equus ferus caballus ou Equus caballus) est un grand mammifère herbivore et ongulé à sabot unique",
        urlImage: "./res/img/cheval.jpg",
        paysNatal: "Monde"
    },
    {
        nom: "Loutre",
        description: "Les Loutres, sont une sous-famille de mammifères carnivores de la famille des Mustelidés. Il existe plusieurs espèces de loutres, caractérisées par de courtes pattes, des doigts griffus et palmés et une longue queue",
        urlImage: "./res/img/loutre.jpg",
        paysNatal: "(L)outre Atlantique"
    },
    {
        nom: "Goléphant",
        description: "Flippant",
        urlImage: "./res/img/golephant.jpg",
        paysNatal: "Inconnue"
    }
]

const animaux = listeAnimaux.map(({ nom, description, urlImage, paysNatal }) => {
    return new Animal(nom, description, urlImage, paysNatal);
});




function getAnimalRow(animal, index) {
    return `<tr>
        <td> <span class="${index} spanNom"> ${animal.nom} </span> </td>
        <td>  <img class="${index} imgAnimal" src="${animal.urlImage}" alt=""></td>
        <td> <span class="${index} spanDescription"> ${animal.description} </span> </td>
        <td> <span class="${index} spanPays"> ${animal.paysNatal} </span> </td>
        <td> <button class="edit ${index}" id="${index}"> Editer </button>
        <button class="save ${index}" id="${index}" style="display:none"> Sauvegarder </button>
        <button class="delete ${index}" id="${index}"> Supprimer </button></td>
    </tr>`;
};


function resetTable() {
    $("#tableAnimaux > tr").remove();

    this.animaux = listeAnimaux.map(({ nom, description, urlImage, paysNatal }) => {
        return new Animal(nom, description, urlImage, paysNatal);
    });

    this.animaux.map((obj, index) => {
        $(`${getAnimalRow(obj, index)}`).appendTo($('#tableAnimaux'));

    });

    $(".delete").click(function () {
        const _thisElement = $(this);
        const index = _thisElement.attr("id");
        removeAnimal(index);
    });
    
    
    $(".edit").click(function () {        
        const _thisElement = $(this);
        const index = _thisElement.attr("id");
        editAnimal(index);

    });

    $(".save").click(function () {        
        const _thisElement = $(this);
        const index = _thisElement.attr("id");
        updateAnimal(index);
    });
    
}


$("#creation-form").submit(event => {
    event.preventDefault();

    const nomVal = $("#field-nom").val();
    const descriptionVal = $("#field-description").val();
    const paysVal = $("#field-pays").val();
    const imageURLVal = $("#field-imageURL").val();

    addAnimal(nomVal, descriptionVal, paysVal, imageURLVal);

    console.log(listeAnimaux);

    resetTable();
});

function addAnimal(nomVal, descriptionVal, paysVal, imageURLVal) {
    listeAnimaux.push({
        "nom": nomVal,
        "description": descriptionVal,
        "paysNatal": paysVal,
        "urlImage": imageURLVal
    });
}


const handleButtonEditClickEvent = function (event) {
    const _thisElement = $(this);
    const index = _thisElement.attr("index");

    // Update state variables
    isCreationMode = false;
    selectedIndex = index;

    // Retrieve destination value based on index
    const destination = getDestinationFromIndex(index);

    // Fill form with current values
    const countryField = $("#field-country");
    const descriptionField = $("#field-circuitDescription");
    const priceField = $("#field-price");
    const imageURIField = $("#field-imageURI");

    countryField.val(destination.country);
    descriptionField.val(destination.circuitDescription);
    priceField.val(destination.price);
    imageURIField.val(destination.imageURI);

    // Change the submit button to edit
    $("#submitDestination").text("Modifier");

    // Scroll to the input
    countryField.focus()
};

function removeAnimal(index) {    
    listeAnimaux.splice(index, 1);
    resetTable();
};

function editAnimal(index) {
    console.log("replace");
    console.log(index);
    ;

    const animalToEdit = listeAnimaux[index];
    console.log(animalToEdit);
    
    $('.'+index+'.spanNom').replaceWith(function(){
        return `<input class="inputNom ${index}" value=" ${animalToEdit.nom}">`
    })

    $('.'+index+'.imgAnimal').replaceWith(function(){
        return `<input class="inputImg ${index}" value=" ${animalToEdit.urlImage}"> </span>`
    })

    $('.'+index+'.spanDescription').replaceWith(function(){
        return `<input class="inputDescription ${index}" value=" ${animalToEdit.description}"></span>`
    })

    $('.'+index+'.spanPays').replaceWith(function(){
        return `<input class="inputPays ${index}" value=" ${animalToEdit.paysNatal}"></span>`
    })

    $('.'+index+".edit").css("display", "none");
    $('.'+index+".save").css("display", "block");
}

function updateAnimal(index) {
    const inputNom = $('.'+index+".inputNom").val();
    const inputImg = $('.'+index+".inputImg").val();
    const inputDescription = $('.'+index+".inputDescription").val();
    const inputPays = $('.'+index+".inputPays").val();

    listeAnimaux[index] = {
        "nom": inputNom,
        "description": inputDescription,
        "paysNatal": inputPays,
        "urlImage": inputImg
    }
    resetTable();
}

//init le tableau
resetTable();




