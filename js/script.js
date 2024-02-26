import peliculas from './peliculas.js'



const generoContainer = document.querySelectorAll("genero-container")
const generoAventura =document.getElementById("genero-12")
const generoThriller =document.getElementById("genero-53")
const generoAccion =document.getElementById("genero-28")



const peliculas28 = console.log(peliculas.filter((element) => element.genre_ids.includes(28)));