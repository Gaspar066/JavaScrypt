//----------creación de una tarjeta---------------

function crearUnaTarjeta(arr) {
  let mostrar = ""
  arr.forEach(evento => {    
    mostrar += `<div class="card">
        <img src=${evento.image} class="card-img-top">
        <div class="card-body">
            <h5>${evento.name}</h5>
              <div class="footer-card">
                <p>Price: $${evento.price}</p>
                <a href="./details.html?id=${evento._id}">Ver más</a>
              </div>
        </div>       
        </div>         
        `;
    });
    sectionCards.innerHTML = mostrar  
  }

  let sectionCards = document.querySelector(".sectionCards");
  let eventos = data.events
  let categories = [];

  for (let i = 0; i < data.events.length; i++) {
    if (!categories.includes(data.events[i].category)) {
      categories.push(data.events[i].category);
    }
  }

  for (let i = 0; i < categories.length; i++) {
    let idCategories = document.getElementById("category");
    let divCategory = document.createElement("div");
    let eventCategory = `
        <input type="checkbox" id="${categories[i]}" name="${categories[i]}" value="${categories[i]}">
        <label for="${categories[i]}">${categories[i]}</label>
        `;
    divCategory.innerHTML += eventCategory;
    idCategories.appendChild(divCategory);
    console.log(categories.indexOf);
  }

  //-------------SEARCH--------------//

  crearUnaTarjeta(eventos)

  const input = document.getElementById("search")
  let dataInput;
  const checkboxs = document.querySelectorAll("input[type='checkbox']");
  function filtroCards(e){
    e.preventDefault()
    dataInput = input.value.trim().toLowerCase();
    let categoriasSeleccionadas = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());
    let busquedaFiltrada = data.events.filter(function (evento){
    let filtroSearch = evento.name.toLowerCase().includes(dataInput) || evento.description.toLowerCase().includes(dataInput)
    let filtroCategorias = categoriasSeleccionadas.length == 0 || categoriasSeleccionadas.includes(evento.category.toLowerCase())
    return filtroSearch && filtroCategorias
    })
    if (busquedaFiltrada.length > 0){
      crearUnaTarjeta(busquedaFiltrada)
    } 
    } 
  //-------------EVENT LISTENER-----------//
  input.addEventListener("input", filtroCards)
  checkboxs.forEach(checkbox => checkbox.addEventListener('change', filtroCards))

