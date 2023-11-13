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