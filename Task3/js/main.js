let titleSite = document.title;
let loading = "";
let containerCategory = "category-container";
let searchButton = document.getElementById("search");
let inputSearch = document.getElementById("form-search");
let checkArea = document.getElementById("category-container");

let eventos = data.events;

let fechaReferencia = data.currentDate;
console.log(fechaReferencia);

{
    titleSite === "Amazing Events"
    ? createCards(eventos, "card-container")
    : loading;
}

  // Dynamic cards
function createCards(amazing, container) {
    let card = document.getElementById(container);
    card.innerHTML = "";

    amazing.forEach((e) => {
    let eventos = document.createElement("div");
    eventos.className = "profile-card-4 text-center";
    eventos.innerHTML = `
    <div class="col">
    <div class="card">
        <img src="${e.image}" class="card-img-top" alt="${e.name}">
        <div class="card-body">
        <h5 class="card-title">"${e.name}"</h5>
        <p class="card-text">"${e.description}".</p>
        <p class="card-text">"Price: $ ${e.price}".</p>
        <a href="./Details.html" class="btn btn-primary">Ver más..</a>
        </div>
    </div>
    </div>`;
    card.appendChild(eventos);
    });
}

  // event listener de las cajas
checkArea.addEventListener("change", () => {
    let filteredCat = amazingChecks(eventos);
    let filteredCards = filtrarCards(filteredCat, inputSearch.value);
    createCards(filteredCards, "card-container");
});

  //event listener de search
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let filteredCards = filtrarCards(eventos, inputSearch.value);
    let filteredCat = amazingChecks(filteredCards);
    createCards(filteredCat, "card-container");
});

  // Dynamic categories
function creatCategory(array, divForm) {
    array.forEach((cat) => {
    let containerForm = document.getElementById(divForm);
    let categorias = document.createElement("div");
    categorias.className = "form-check";
    categorias.innerHTML = `<label class="form-check-label cat-buttons" for="${cat}">
        ${cat}
        <input name="${cat}" class="form-check-input" type="checkbox" value="${cat}"
            id="${cat}">
        </label>`;
    containerForm.appendChild(categorias);
    return cat;
    });
}

function filtrarCategory() {
    let arrayCategoriasData = [];
    eventos.map((e) => {
    arrayCategoriasData.push(e.category);
    });
    let arrayCategorias = arrayCategoriasData.filter((cat, i) => {
    return arrayCategoriasData.indexOf(cat) === i;
    });
    return arrayCategorias;
}
creatCategory(filtrarCategory(), containerCategory);

//Checkboxes
function amazingChecks(amazing) {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkboxesChecked = Array.from(checkboxes)
    .filter((check) => check.checked)
    .map((e) => e.value);
    if (checkboxesChecked.length > 0) {
    let filteredCheckBox = amazing.filter((e) =>
        checkboxesChecked.includes(e.category)
    );
    return filteredCheckBox;
    }
    return amazing;
}

function filtrarCards(amazing, textoSearch) {
    let filteredCards = amazing.filter((e) =>
    e.name.toLowerCase().includes(textoSearch.toLowerCase())
    );

    if (filteredCards.length == 0) {
    notFound (textoSearch);
    return [];
    }
    return filteredCards;
}

function notFound(textoSearch) {
    let mistake = document.getElementById("not-found");
    let div = document.createElement("div");
    div.className =
    "container d-flex d-flex justify-content-center contact-div py-5";
    div.innerHTML = `<div class="row">
                        <div class="col-md-12">
                            <div class="error-template">
                                <div class="error-details">
                                    Sorry,  ${textoSearch} , was not found!
                                </div><br>
                                <div class="error-actions">
                                    <a href="./index.html" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                    Go back </a><a href="http://www.jquery2dotnet.com" class="btn btn-default btn-lg">
                                </div>
                            </div>
                        </div>
                        </div>`;
    mistake.appendChild(div);
    }

amazingEventsWeb();