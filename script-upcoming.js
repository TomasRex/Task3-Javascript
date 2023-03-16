const contenedorChecks = document.getElementById("checkboxes")
const contenedor = document.getElementById("contenedor")
const input = document.querySelector("input")


let futureEvents = []
const fecha = "2022-01-01"

function filtrarArrayFecha(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].date > fecha){
            futureEvents.push(array[i])
        }
    }   
}

filtrarArrayFecha(data)

console.log(futureEvents)


input.addEventListener("input", filtroDoble)
contenedorChecks.addEventListener("change", filtroDoble)

// Llamadas de funciones

pintarTarjetas(futureEvents)
crearCheckboxes(futureEvents)


// Funciones

function filtroDoble(){
  let arrayFiltrado = filtrarPorTexto(futureEvents, input.value)
  let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado)
  pintarTarjetas(arrayFiltrado2)
}

function pintarTarjetas(arrayDatos){
  if(arrayDatos.length == 0){
    contenedor.innerHTML = "<h3 class=`display-1`>No hay coincidencias.</h3>"
    return 
  }
  let tarjetas = ``
  arrayDatos.forEach(elemento => {
    tarjetas += `
    <div class="card" style="width: 18rem;">
    <img src="${elemento.image}" class="card-img-top" alt="${elemento.name}">
    <div class="card-body">
    <h4 class="card-text">${elemento.name}</h1>
      <p class="card-text">${elemento.description}</p>
      <p class="card-details" style="margin-top: 10px;">Date: ${elemento.date}</p>
      <div class="cards-flex">
      <p class="card-text">$${elemento.price}</p>
      <a class="more" href="./details.html?id=${elemento._id}">Ver más...</a>
    </div>
</div>
</div>
    `
  })
  contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(arrayDatos, texto){
  let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

function crearCheckboxes(arrayDatos){
  let checks = ``
  let categoriasRepetidas = arrayDatos.map(elemento => elemento.category)
  let categorias = new Set(categoriasRepetidas.sort((a,b)=>{
    if(a>b){
      return 1
    }
    if(a<b){
      return -1
    }
    return 0
  }))
  categorias.forEach(elemento =>{
    checks += `
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${elemento}" value="${elemento}">
    <label class="form-check-label" for="${elemento}">${elemento}</label>
  </div>
    `
  })
  contenedorChecks.innerHTML = checks
}

function filtrarPorCategoria(arrayDatos){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  let arrayChecks = Array.from(checkboxes)
  let checksChecked = arrayChecks.filter(check => check.checked)
  if(checksChecked.length == 0){
    return arrayDatos
  }
  let checkValues = checksChecked.map(check => check.value)
  let arrayFiltrado = arrayDatos.filter(elemento => checkValues.includes(elemento.category))
  return arrayFiltrado
}