let catalogo = []

let enviarInputs = document.getElementById("enviar")
enviarInputs.addEventListener("click",(e)=>{

    let imagen = document.getElementById("imagen").value
    let marca = document.getElementById("marca").value
    let precio = document.getElementById("precio").value

   
    let formulario = document.getElementById("gafas")
    formulario.innerHTML +=`
    
        <div class="gafas">
                    <img class="fotos" src="${imagen}" alt="Gafas de Sol Ray Ban"><br>
                   <p class="descripcion"><strong> ${marca}</strong></p>
                    <p class="precioRay"><strong>$${precio}</strong></p>
                </div>
    `
    catalogo.push(formulario)

    
    

   /* let crearDescripcion = document.createElement("h2")
    
    crearDescripcion.textContent = marca
    formulario.appendChild(crearDescripcion)

    let crearPrecio = document.createElement("p")
    crearPrecio.textContent = precio
    formulario.appendChild(crearPrecio)

    let agregarImagen = document.getElementById("imagen")
    agregarImagen.src = "./imagenes/gafasDeSol.jpg"
    agregarImagen.style.height = "250px"
    agregarImagen.style.width = "350px"*/
    
})
