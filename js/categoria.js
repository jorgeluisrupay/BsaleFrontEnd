const BuscarCategoria = document.getElementById('BuscarCategoria');
BuscarCategoria.addEventListener('click', ()=> {
    
    let categorias = document.getElementById('categorias').value;
    cargarCategorias(categorias);
}
)

const cargarCategorias = async(categoria) => {
    try {
        const respuesta = await fetch(`https://bsalenode.herokuapp.com/categorias/${categoria}`)
        
        const datos = await respuesta.json();
        //console.log(datos)

        let categoriasData = ''
        datos.forEach(dato => {
            if (dato.url_image) {
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
            }else{

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
            
        })
        document.getElementById('listarCategorias').innerHTML = categoriasData;
        
    } catch (error) {
        console.log(error)
    }
}

