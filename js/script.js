import peliculas from "./peliculas.js";

const generoContainer = document.querySelectorAll("genero-container");
const generoAventura = document.getElementById("genero-12");
const generoThriller = document.getElementById("genero-53");
const generoAccion = document.getElementById("genero-28");

const peliculasAccion = console.log(
  peliculas.filter((element) => element.genre_ids.includes(28))
);
const peliculasThriller = console.log(
  peliculas.filter((element) => element.genre_ids.includes(53))
);
const peliculasAventuras = console.log(
  peliculas.filter((element) => element.genre_ids.includes(12))
);

// function genero(){
//     if (peliculasAccion === true){
//         generoAccion.innerHTML = "Peliculas Accion"}
//     else if (peliculasAventuras ===true){
//         generoAventura.innerHTML =" Peliculas Aventura"

//     } else {
//         generoThriller.innerHTML ="Peliculas Thriller"
//     }
//     }

//     console.log(genero)
function accion() {
  return peliculas.filter((element) => element.genre_ids.includes(28));
}
function aventuras() {
  return peliculas.filter((element) => element.genre_ids.includes(12));
}
function thriller() {
  return peliculas.filter((element) => element.genre_ids.includes(53));
}
//generoAccion.innerHTML= accion().map(peliculas =>  `<img src='https://image.tmdb.org/t/p/w200/${peliculas.poster_path}'></img>)`.join(`<span id="titulo">${peliculas.title}</span>`))

function funAventuraBoton(){generoAventura.innerHTML = aventuras().map(
  (peliculas) =>{ if (peliculas.poster_path) {
    return `<div><img id="img" src='https://image.tmdb.org/t/p/w200/${peliculas.poster_path}'></img> <p id ="titulo">${peliculas.title}</p></div>`
  }}).join("")};

function funThrillerBoton() {
    generoThriller.innerHTML = thriller().map(
 (peliculas) =>{ if (peliculas.poster_path) {
    return `<div><img id="img"src='https://image.tmdb.org/t/p/w200/${peliculas.poster_path}'></img> <p id ="titulo">${peliculas.title}</p></div>`
  }}).join("")};


function titulos() {
  return peliculas.filter((element) => element.title);
}
function funAccionBoton(){generoAccion.innerHTML = accion()
  .map((peliculas) => {
    
    if (peliculas.poster_path) {
     
      return `<div>
                    <img id="img" src='https://image.tmdb.org/t/p/w200/${peliculas.poster_path}'></img>
                    <p id ="titulo">${peliculas.title}</p>
                </div>`;
    }
  })
  .join("");}

  const botonAccion = document.getElementById("boton1");
  const botonThriller = document.getElementById("boton2");
  const botonAventura = document.getElementById("boton3");
  botonAccion.addEventListener("click", function() {funAccionBoton()
    
  })
  botonThriller.addEventListener("click", function(){
    funThrillerBoton()
  })
  botonAventura.addEventListener("click",function(){
    funAventuraBoton()
  })
