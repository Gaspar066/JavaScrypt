let data = "https://mindhub-xj03.onrender.com/api/amazing"

fetch (data)
    .then (response =>(response.json()
        .then(data =>{
        loadStatsUno(data.events, "#uno");
        })))
.catch(error => console.log(error.message));

function loadStatsUno(arr,contenedor){
    let container = document.querySelector(contenedor);
    let highest = getHighest (arr)
    container.innerHTML += `
    <tr>
        <td>${highest.name}with ${(attendances(highest)).toFixed(2)}%</td>
        <td>${highest.name}with %</td>
        <td>${highest.name}with %</td>
    </tr>`;
}

function loadStats(arr,contenedor){
    let container = document.querySelector(contenedor);
    let tableBodyHTML =""
    arr.forEach(element => {
        let highest = getHighest (arr)
        tableBodyHTML +=`
    <tr>    
        <td>${highest.name}with %</td>
        <td>${highest.name}with %</td>
        <td>${highest.name}with %</td>
    </tr>`

    });
    container.innerHTML = tableBodyHTML;
}

function attendances (item){
    let atendance = (item.assitance)
        return atendance;
}

function getHighest (arr){
    return arr.reduce ((acummulator,valorActual) => {
        if(valorActual.attendance > acummulator.attendance){
        return valorActual;
    }else{
        return acummulator
    }
    })
}

function porcentajeMayorMenor(array){
    let maymen = document.getElementById("container") 

    let percent = []

    array.filter(pctj => percent.push({
        nombre: pctj.categoria,
        porcent: pctj.porcentAsistencia
        
    }))
    percent.sort( (a,b) => b.porcent-a.porcent )

    percent.map(evento =>{

    maymen.innerHTML += ` <td class="text-center">
    ${evento.porcentaje < 93
        ? `<span class="fw-bold text-danger">${evento.nombre}</span>`
        : `<span class="fw-bold text-success">${evento.nombre}</span>`
    } 
        <br />
        ${evento.porcentaje}%</td> `; 
})

}
