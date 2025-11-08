
let currentInput = ""; // Entrada actual (números en la pantalla)
let previousInput = ""; // Número anterior para realizar operaciones
let operation = ""; // Operación actual (+, -, x, /)

const display = document.getElementById("display");

function numDisplay(number) {
  currentInput += number.toString();  // Añadir el número a la pantalla
    updateDisplay();
}

function operar(op) {
  if (currentInput === "") return;  // Si no hay número, no hacemos nada
    if (previousInput !== "") {
    igual();  // Si ya había una operación, calculamos primero
    }
    operation = op; 
    previousInput = currentInput;  // Guardamos el número anterior
    currentInput = "";  // Limpiamos la pantalla para el siguiente número
}

function igual() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
    case "+":
        result = prev + current;
        break;
    case "-":
        result = prev - current;
        break;
    case "x":
      result = prev * current;
        break;
    case "/":
        if (current === 0) {
        result = "Error";
        } else {
        result = prev / current;
        }
        break;
    default:
        return;
}
 // Mostramos el resultado en la pantalla
    currentInput = result.toString(); 
    // Limpiamos la operación
    operation = ""; 
    // Limpiamos el número anterior
    previousInput = "";  
    updateDisplay();
}

function limpiar() {
  currentInput = "";  // Limpiar la pantalla
    previousInput = "";
    operation = "";
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}


    function convertirABinario() {
  if (currentInput === "") return; 

  const number = parseInt(currentInput, 10); 
  if (isNaN(number)) {
    currentInput = "Error"; 
  } else {
    currentInput = number.toString(2);
  }

  updateDisplay(); 
}

    function enteroABinario() {
    if (currentInput === "") return; // Si no hay entrada, no hacemos nada
    let entero = parseInt(currentInput); // Convertimos la entrada a entero
    if (isNaN(entero)) return; // Validamos que sea un número válido

    let binario = "";
    while (entero > 0) {
        binario = (entero % 2) + binario; // Obtenemos el resto (0 o 1) y lo añadimos al inicio
        entero = Math.floor(entero / 2); // Dividimos entre 2 y tomamos la parte entera
    }

    currentInput = binario || "0"; // Si el número era 0, devolvemos "0"
    updateDisplay(); // Actualizamos la pantalla
}

    
    
function binarioAEntero() {
    if (currentInput === "") return; // Si no hay entrada, no hacemos nada
    const binario = currentInput; // Tomamos el número en binario como cadena
    let entero = 0;

    for (let i = 0; i < binario.length; i++) {
        const bit = parseInt(binario[i]); // Obtenemos cada dígito del binario
        if (bit !== 0 && bit !== 1) return; // Validamos que solo haya 0 y 1
        entero = entero * 2 + bit; // Calculamos el entero con desplazamiento de base
    }

    currentInput = entero.toString(); // Convertimos a cadena para mostrarlo
    updateDisplay(); // Actualizamos la pantalla
}


