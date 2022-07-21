// selectores y variables
const display = document.querySelector('.calculadora__display');
const buttons = document.querySelectorAll('.calculadora__tecla');

// eventos
eventListeners();
function eventListeners(){
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            calculadoraApp(display, button);
        });
    })
}

// funciones
function calculadoraApp(display, button){

    switch (button.innerHTML) {
        case 'C':
            borrar(display);
        break;
        case '=':
           calcular(display);
        break;
    
        default:
            actualizar(display, button);
        break;
    }
}

function borrar(display){
    display.value = '0';
}

function actualizar(display, button){
    if (display.value === '0') {
        display.value = '';
    }
   
    display.value += button.innerHTML;
}

function calcular(display){
    display.value = eval(display.value);
}