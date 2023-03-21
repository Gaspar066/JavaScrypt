let queryString = location.search;
let params = new URLSearchParams(queryString);
//nombre que se va a comparar
let id = params.get("id");

let eventos = data.events;
let cardDetails = eventos.find(cardDetails => cardDetails._id == id);
let divDetails = document.querySelector(".section");

divDetails.innerHTML = `
                    <img src=${cardDetails.image} class="card-img-top">
                    <div class="card-body">
                        <h5>${cardDetails.name}</h5>
                        <p>${cardDetails.description}</p>
                          <div class="footer-card">
                            <p>Price: $${cardDetails.price}</p>
                            <a href="./index.html" class="btn btn-primary" onclick="history.back()">Go back</a>
                          </div>
                    </div>        
                    `;
createDetails(details, "container-detail")
createTitleDetail(details,"tittle-details")

//function createTitleDetail(eventos, container){
//  let detailDiv = document.getElementById(container);
//  let titleP = document.createElement("p");
//  titleP.className = "event-name fs-1 ";
//  titleP.innerHTML = `${eventos.name}`
//  detailDiv.appendChild(titleP)
//borrar intento fallido}