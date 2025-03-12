let currentInput = ""; // Almacenará lo que se muestra en la pantalla

// Agrega valores a la pantalla
function addToDisplay(value) {
    currentInput += value; // Concatenamos el valor al input actual
    document.getElementById("display").value = currentInput; // Mostramos el valor en el display
}

// Calcula el resultado
function calculateResult() {
    try {
        currentInput = eval(currentInput); // Usamos eval() para evaluar la expresión matemática
        document.getElementById("display").value = currentInput; // Mostramos el resultado
    } catch (error) {
        document.getElementById("display").value = "Error"; // En caso de error, mostramos "Error"
    }
}

// Limpia la pantalla
function clearDisplay() {
    currentInput = ""; // Vaciamos el input
    document.getElementById("display").value = currentInput; // Limpiamos el display
}
