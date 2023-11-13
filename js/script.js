import peliculas from './peliculas.js'

function mostrarPelicula(pelicula) {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.classList.add('pelicula');

    /* Imagen de portada*/
    const caratula = document.createElement('img');
    caratula.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`; 
    caratula.alt = `${pelicula.title} Poster`;

   /*titulo de la pelicula*/
    const titulo = document.createElement('h3');
    titulo.textContent = pelicula.title;

    /*sinopsis de la pelicula*/
    const sinopsis = document.createElement('p');
    sinopsis.textContent = pelicula.overview;

    nuevoElemento.appendChild(caratula);
    nuevoElemento.appendChild(titulo);
    nuevoElemento.appendChild(sinopsis);
    
    return nuevoElemento;
}

function filtrarPeliculas(containerId, generoId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const generos = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));

    generos.forEach(pelicula => {
        const  nuevoElemento = mostrarPelicula(pelicula);
        container.appendChild(nuevoElemento);
    });
}


filtrarPeliculas('genero-28', 28);
filtrarPeliculas('genero-53', 53);
filtrarPeliculas('genero-12', 12);

/* CORRECCION

const filtradoPeliculas = (generoID, contenedorID) => {
    const contenedor = document.getElementById(contenedorID)
    const peliculasGenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoID))

    for(const pelicula of peliculasGenero) {
        let templatePelis = `
        <div class = "pelicula">
            <img src = "https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt = "${pelicula.title}" />
            <p>${pelicula.title}</p>
        </div>
        `;
        contenedor.innerHTML += templatePelis
    }
}

filtradoPeliculas(28, 'genero-28');
filtradoPeliculas(53, 'genero-53');
filtradoPeliculas(12, 'genero-12');

*/