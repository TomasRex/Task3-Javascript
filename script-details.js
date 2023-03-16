// Obtenemos los datos de los parametros de la url

let query = location.search
let params = new URLSearchParams(query)
let idParams = params.get("id")

// Buscar con find ese id en el array

let profile = data.find(info => info._id == idParams)

// Renderizar profile

const container = document.getElementById("cards-details");
let html = "";

      html += `
        <div class="card mb-3 container-cards" style="max-width: 1300px; height: 400px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${profile.image}" class="img-fluid rounded-start img-details" alt="${profile.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body card-align">
              <h4 class="card-title" style="font-size: 60px">${profile.name}</h5>
              <p class="card-details" style="font-size: 30px">${profile.description}</p>
              <p class="card-details" style="font-size: 30px;">Ubicated in the ${profile.place}</p>
              <div class="cards-flex">
              <p class="card-text" style="font-size: 30px; margin-right: 100px;">Price: $${profile.price}</p>
              <p class="card-text" style="font-size: 30px; margin-left: 100px;">Capacity: ${profile.capacity}</p>
            </div>
          </div>
        </div>
      </div>
        `


container.innerHTML = html
