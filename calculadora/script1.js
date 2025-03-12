// Variable para almacenar la expresión que se va construyendo
let currentExpression = "";

function updateDisplay(){
	document.getElementById("display").value = currentExpression;
}
// Función para manejar los botones numéricos y operadores
function handleButtonClick(event) {
    const value = event.target.value; // Obtiene el valor del botón presionado
    currentExpression += value; // Agregar el valor del botón al string
    updateDisplay(); // Actualizar el display
}

// Función para manejar el "="
function calculateResult() {
    try {
        const result = eval(currentExpression); // Evaluar la expresión
        document.getElementById("display").value = result; // Mostrar el resultado
        currentExpression = ""; // Limpiar la expresión para la siguiente operación
    } catch (error) {
        document.getElementById("display").value = "Error"; // En caso de error
    }
}

// Función para manejar el botón de limpiar
function clearDisplay() {
    currentExpression = ""; // Limpiar la expresión
    document.getElementById("display").value = "0"; // Mostrar 0 en el display
}

// Agregar el manejador de eventos a todos los botones con la clase "button"
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

// Agregar los event listeners para los botones "=" y "C"
document.getElementById("equalButton").addEventListener("click", calculateResult);
document.getElementById("clearButton").addEventListener("click", clearDisplay);

// Escuchar el evento "keydown" para capturar las teclas del teclado
document.addEventListener("keydown", function(event) {
    const key = event.key; // Obtener la tecla presionada
    if ("0123456789".includes(key)) {
        // Si es un número, agregarlo al display
        currentExpression += key;
		updateDisplay();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        // Si es un operador, agregarlo al display
        currentExpression += key;
    } else if (key === "Enter") {
        // Si es "Enter", calcular el resultado
        calculateResult();
    } else if (key === "Backspace") {
        // Si es "Backspace", eliminar el último carácter
        currentExpression = currentExpression.slice(0, -1);
    } else if (key === "Escape") {
        // Si es "Escape", limpiar el display
        clearDisplay();
    }

    // Actualizar el display con la expresión actual
    updateDisplay();
});