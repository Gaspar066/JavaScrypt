
let Cards = document.querySelector(".sectionCards");
let eventos = data.events
//---------CARDS GENERATOR--------------//
function cardsGenerator(array) {
  let cards = ""
  array.forEach(evento => {    
    cards += `
      <div class="card">
        <img src=${evento.image} class="card-img-top" alt="card image">
        <div class="card-body">
            <h5>${evento.name}</h5>
              <div class="footer-card">
                <p>Price: $${evento.price}</p>
                <a href="./details.html?id=${evento._id}"class="btn btn-primary">See more</a>
              </div>
        </div>       
      </div>         
        `;
    });
    Cards.innerHTML = cards  
}
  let categories = [];   //array donde voy a meter el resultado de las categorías.
  
  function categorias(eventos){
    for (let i = 0; i < eventos.length; i++) {

          if (!categories.includes(eventos[i].category)) {
            categories.push(eventos[i].category);
          }else null;
    }

    for (let i = 0; i < categories.length; i++) {
      let idCategories = document.getElementById("categories");
      let divCategory = document.createElement("div");
      let eventCategory = `
          <input type="checkbox" 
          id="${categories[i]}" 
          name="${categories[i]}" value="${categories[i]}">
          <label for="${categories[i]}">${categories[i]}</label>
          `;
      divCategory.innerHTML += eventCategory;
      idCategories.appendChild(divCategory);
    }
  };

  function busqueda (eventos){
    const input = document.getElementById("search")
    let dataInput;
    const checkboxs = document.querySelectorAll("input[type='checkbox']");
    function filtroCards(e){
      e.preventDefault()
      dataInput = input.value.trim().toLowerCase();
      let checkedBoxes = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());
      let checkboxes = eventos.filter(function (evento){;
      let search = evento.name.toLowerCase().includes(dataInput) && evento.description.toLowerCase().includes(dataInput);
      let filteredCat = checkedBoxes.length == 0 || checkedBoxes.includes(evento.category.toLowerCase());
        return (filteredCat && search);
      })
      if (checkboxes.length > 0){
        cardsGenerator(checkboxes);
      }else  cardsGenerator(null);
    }
    input.addEventListener("input", filtroCards);
    checkboxs.forEach(checkbox => checkbox.addEventListener("change", filtroCards));
  }
  categorias(eventos)
  cardsGenerator(eventos)
  busqueda(eventos)

