const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
console.log(id)

let eventos = data.events

let detailedCard = eventos.find(detailedCard => detailedCard._id == id)

let divDetails = document.querySelector(".Detalle")

divDetails.innerHTML = `
<img src=${detailedCard.image} class="card-img-top">
<div class="card-body">
    <h5>${detailedCard.name}</h5>
    <p>${detailedCard.description}</p>
    <div class="footer-card">
        <p>Price: $${detailedCard.price}</p>
        <a href="../index.html">Volver al Inicio</a>
    </div>
</div>        
`
//----------------------------------------------------------Details----------------------------------------------------------//