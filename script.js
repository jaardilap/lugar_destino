
import { barcelona,roma, paris, londres } from "./ciudades.js";


//OBTENCION DEL DOM()
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//para agregar un EVENTO con un click

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
         //para remover la clase "active" de todos lo enlaces
         enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
         });
         //para agregar la clase "active" correspondiente segun el enlace
         this.classList.add('active')

         //para tener el contenido correspondiente segun el enlace
         let contenido = obtenerContenido(this.textContent)

         tituloElemento.innerHTML = contenido.titulo
         subtituloElemento.innerHTML = contenido.subtitulo
         parrafoElemento.innerHTML = contenido.parrafo
    });


});

//funcion para traer la informacion correcta desde ciudades
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris':paris,
        'Londres':londres

    };
    return contenido[enlace];
}
