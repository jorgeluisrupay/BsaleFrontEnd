let inputProducto = document.getElementById('inputProducto')

inputProducto.addEventListener('change', ()=> {
    const nameProducto = inputProducto.value

    cargarProductos(nameProducto)
    inputProducto.value = "";

})

const cargarProductos = async(name) => {
    try {
        const respuesta = await fetch(`https://bsalenode.herokuapp.com/buscador/${name}`)
        
        const datos = await respuesta.json();
        //console.log(datos.length)
        if (datos.length !== 0) {
            let categoriasData = ''
            datos.forEach(dato => {
                if(dato.url_image){
                    if(datos.length===1){
                        categoriasData += `
                    <div class="col-12  mb-3">
                        <div class="card">
                            <img src=${dato.url_image} class="card-img-top" alt=${dato.name} />
                            <div class="card-body">
                            <h5 class="card-title">${dato.name}</h5>
                            <p class="card-text">$ <span>${dato.price}</span></p>
                            </div>
                        </div>
                    </div>
                    `
                    }
                    else{
                        categoriasData += `
                    <div class="col-12 col-md-4 mb-3">
                        <div class="card">
                            <img src=${dato.url_image} class="card-img-top" alt=${dato.name} />
                            <div class="card-body">
                            <h5 class="card-title">${dato.name}</h5>
                            <p class="card-text">$ <span>${dato.price}</span></p>
                            </div>
                        </div>
                    </div>
                    `
                    }
                }else{

                    if(datos.length===1){
                        categoriasData += `
                    <div class="col-12  mb-3">
                        <div class="card">
                            <img src='../assets/bsaleImagen.gif' class="card-img-top" alt=${dato.name} />
                            <div class="card-body">
                            <h5 class="card-title">${dato.name}</h5>
                            <p class="card-text">$ <span>${dato.price}</span></p>
                            </div>
                        </div>
                    </div>
                    `
                    }
                    else{
                        categoriasData += `
                    <div class="col-12 col-md-4 mb-3">
                        <div class="card">
                            <img src='../assets/bsaleImagen.gif' class="card-img-top" alt=${dato.name} />
                            <div class="card-body">
                            <h5 class="card-title">${dato.name}</h5>
                            <p class="card-text">$ <span>${dato.price}</span></p>
                            </div>
                        </div>
                    </div>
                    `
                    }
                    
                }
        })
        document.getElementById('listarProductos').innerHTML = categoriasData;
        }else{
            let categoriasData = `
            <div class errorCaja>
                <h3 class="error"> No existe el producto <span> ${name}</span> </h3> 
                <img class="errorImg" src='../assets/error.jpg'  alt='error' />
            </div>
                `
            document.getElementById('listarProductos').innerHTML = categoriasData;
        }
        
        
    } catch (error) {
        console.log(error)
    }
}



