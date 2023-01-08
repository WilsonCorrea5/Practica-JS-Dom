const tituloPagina = document.querySelector('h1');
const parrafo = document.querySelector('p');
const parrafo2 = document.getElementById('idp')
const entradaTexto = document.querySelector('input');


//LEYENDO HTML DESDE JS
console.log(tituloPagina);
console.log({tituloPagina, parrafo})//de esta manera  enviamos varios argumentos a la consola.
console.log(entradaTexto.value);//al colocar .value en el imput nos muestra por consola el contenido de dicho input.

//ESCRIBIENDO HTML DESDE JS
tituloPagina.innerHTML ='Otra <br> <fieldset>Cosa'; //con innerHTML se puede agregar etiquetas html aunque esten embebidas en textos.
parrafo.innerText ='O no lo Notas?'; // con innerText solo podemos agregar texto
 
// parrafo.getAttribute('class'); //
console.log(parrafo.getAttribute('class')); //getAttribute obtiene los atributos de los elementos del html al JS.

 
parrafo.setAttribute('class','otraClase');// setAttribute ayuda a modificar los atributos de nuestro html desde JS.

parrafo.classList.add('wilson','correa');
parrafo.classList.remove('wilson');

entradaTexto.value ='hola'; // agregamos o cambiamos valores del input

//CREANDO ELEMENTOS DESDE JS A HTML
const imagen = document.createElement('img'); //con createElement creamos nuevos elementos desde el JS hacia el HTML. ejemplo una imagen.
imagen.setAttribute('src','chocolate.png'); //agregamos atributos
parrafo2.innerHTML = 'Que te parece esta torta:<br>';
parrafo2.append(imagen); //con append agregamos el nuevo elemento en la etiqueta
console.log(imagen);

















