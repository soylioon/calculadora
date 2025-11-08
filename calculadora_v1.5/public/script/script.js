
let currentInput = ""; 
let previousInput = ""; 
let operation = ""; 

const display = document.getElementById("display");

function numDisplay(number) {
  currentInput += number.toString();  
    updateDisplay();
}

function operar(op) {
  if (currentInput === "") return; 
    if (previousInput !== "") {
    igual();  
    }
    operation = op; 
    previousInput = currentInput;  
    currentInput = "";  
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
    currentInput = result.toString(); 
    operation = ""; 
    previousInput = "";  
    updateDisplay();
}

function limpiar() {
  currentInput = "";  
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
    if (currentInput === "") return; 
    let entero = parseInt(currentInput);
    if (isNaN(entero)) return;

    let binario = "";
    while (entero > 0) {
        binario = (entero % 2) + binario;
        entero = Math.floor(entero / 2); 
    }

    currentInput = binario || "0";
    updateDisplay();
}

    
    
function binarioAEntero() {
    if (currentInput === "") return;
    const binario = currentInput; 
    let entero = 0;

    for (let i = 0; i < binario.length; i++) {
        const bit = parseInt(binario[i]); 
        if (bit !== 0 && bit !== 1) return; 
        entero = entero * 2 + bit; 
    }

    currentInput = entero.toString(); 
    updateDisplay(); 
}


