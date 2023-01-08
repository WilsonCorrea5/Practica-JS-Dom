const tituloPagina = document.querySelector('.tituloParrafo');
const input1 = document.getElementById('entrada1');
const input2 = document.getElementById('entrada2');
const btn = document.querySelector('#idBoton');
const result = document.getElementById('resultado')

function calcular() {
    const rs = (parseInt(input1.value) + parseInt(input2.value));
    result.innerText ='resultado es: '+ rs;
    console.log(rs);
}

// -----------------------------------------------------

const input3 = document.getElementById('entrada3');
const input4 = document.getElementById('entrada4');
const btn2 = document.querySelector('#idBoton2');
const result2 = document.getElementById('resultado2');
formulario = document.getElementById('form');

btn2.addEventListener('click' , calcular2);//Otra posible solucion es agregar el addevenlistener al id formulario con el evento 'submit'
    

function calcular2() { //<--aqui agregar 'el evento 'event' como argumento
    // event.preventDefault(); //y llamar esta funcion 
    const rs2 = (parseInt(input3.value) + parseInt(input4.value));
    result2.innerText ='resultado es: '+ rs2;
    console.log(rs2);
}
