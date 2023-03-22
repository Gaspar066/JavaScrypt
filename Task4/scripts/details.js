let data = "https://mindhub-xj03.onrender.com/api/amazing"
let eventos= [];
fetch(data)
    .then(Response => (Response.json()
        .then(data =>{
          /*data.events.forEach (item =>{
            eventos.push (item)
            
          })*/
          console.log (data.events)
          Detalles(data.events);
        })))



let queryString = location.search;
let params = new URLSearchParams(queryString);

let id = params.get("id"); //nombre que se va a comparar

function Detalles(arr){
let cardDetails = arr.find(cardDetails => cardDetails._id == id);
let divDetails = document.querySelector(".section");

divDetails.innerHTML = `
                    <img src=${cardDetails.image} class="card-img-top">
                    <div class="card-body">
                        <h5>${cardDetails.name}</h5>
                        <p>${cardDetails.description}</p>
                          <div class="footer-card">
                            <p>Price: $${cardDetails.price}</p>
                            <a href="./index.html" class="btn btn-primary">Go back</a>
                          </div>
                    </div>        
                    `;
createDetails(details, "container-detail")
createTitleDetail(details,"tittle-details")
}
