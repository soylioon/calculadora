let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (navigator.vibrate) navigator.vibrate(30);
    });
});

const display = document.getElementById("display");

function numDisplay(number) {
  expression += number.toString();
  updateDisplay();
}

function operar(op) {
  if (expression === "") return;

  const lastChar = expression.slice(-1);
  if ("+-x/".includes(lastChar)) return;

  expression += op;
  updateDisplay();
}

function igual() {
  if (expression === "") return;

  try {
    const result = eval(expression.replace(/x/g, "*"));
    expression = result.toString();
    updateDisplay();
  } catch {
    expression = "Error";
    updateDisplay();
  }
}

function limpiar() {
  expression = "";
  updateDisplay();
}

function updateDisplay() {
  display.value = expression;
}

function convertirABinario() {
  if (expression === "") return;

  const number = parseInt(expression, 10);
  if (isNaN(number)) {
    expression = "Error";
  } else {
    expression = number.toString(2);
  }

  updateDisplay();
}

function enteroABinario() {
  if (expression === "") return;

  let entero = parseInt(expression, 10);
  if (isNaN(entero)) return;

  let binario = "";
  while (entero > 0) {
    binario = (entero % 2) + binario;
    entero = Math.floor(entero / 2);
  }

  expression = binario || "0";
  updateDisplay();
}

function binarioAEntero() {
  if (expression === "") return;

  let entero = 0;
  for (let i = 0; i < expression.length; i++) {
    const bit = expression[i];
    if (bit !== "0" && bit !== "1") {
      expression = "Error";
      updateDisplay();
      return;
    }
    entero = entero * 2 + Number(bit);
  }

  expression = entero.toString();
  updateDisplay();
}
