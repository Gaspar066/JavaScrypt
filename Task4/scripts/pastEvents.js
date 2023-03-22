let data = "https://mindhub-xj03.onrender.com/api/amazing"
let eventos= [];
let categories= []; //array donde voy a meter el resultado de las categorías.
let pastEvents = []
fetch(data)
    .then(Response => (Response.json()
        .then(data =>{
          data.events.forEach (item =>{
            eventos.push (item)
          })
          eventosPasados(data.currentDate);
          cardsGenerator(pastEvents);
          categorias(eventos);
          busqueda(eventos);
        })))
.catch(error => console.log(error.message));

let sectionCards = document.querySelector(".sectionCards");
//---------CARDS GENERATOR--------------//
function cardsGenerator(array) {
  let cards = ""
  array.forEach(evento => {    
    cards += `
                <div class="card">
                  <img src=${evento.image} class="card-img-top">
                  <div class="card-body">
                      <h5>${evento.name}</h5>
                        <div class="footer-card">
                          <p>Price: $${evento.price}</p>
                          <a href="./details.html?id=${evento._id}"class="btn btn-primary">Ver más</a>
                        </div>
                  </div>       
                </div>         
                  `;
    });
    sectionCards.innerHTML = cards
}
  
  function eventosPasados(arr){      
    eventos.forEach(event => {
      if (event.date < arr){
        pastEvents.push(event)
      }
    })
  }   
  eventosPasados(eventos);
  cardsGenerator(pastEvents);

  function categorias(){
  for (let i = 0; i < eventos.length; i++) {
    if (!categories.includes(eventos[i].category)) {
      categories.push(eventos[i].category);
    }
  }
  for (let i = 0; i < categories.length; i++) {
    let idCategories = document.getElementById("categories");
    let divCategory = document.createElement("div");
    let eventCategory = `
        <input type="checkbox" id="${categories[i]}" name="${categories[i]}" value="${categories[i]}">
        <label for="${categories[i]}">${categories[i]}</label>
        `;
    divCategory.innerHTML += eventCategory;
    idCategories.appendChild(divCategory);
  }
}
  categorias (eventos);

  function busqueda(){
  const input = document.getElementById("searchPast")
  let dataInput;
  const checkboxs = document.querySelectorAll("input[type='checkbox']");
  function filtroCards(e){
    e.preventDefault()
    dataInput = input.value.trim().toLowerCase();
    let checkedBoxes = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());
    let checkboxes = pastEvents.filter(function (evento){
    let search = evento.name.toLowerCase().includes(dataInput) || evento.description.toLowerCase().includes(dataInput);
    let filteredCat = checkedBoxes.length == 0 || checkedBoxes.includes(evento.category.toLowerCase());
      return search && filteredCat;
    })
    if (checkboxes.length > 0){
      cardsGenerator(checkboxes)
    }else  cardsGenerator(null); 
    } 
  input.addEventListener("input", filtroCards)
  checkboxs.forEach(checkbox => checkbox.addEventListener("change", filtroCards))
}
busqueda(eventos);  

