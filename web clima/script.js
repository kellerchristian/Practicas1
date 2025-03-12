// 1. API Key constante interna
const API_KEY = "FzT3JqW2thYlu4gj"; // Aquí va tu API Key

// 2. Función asincrónica para hacer la petición
async function obtenerClima(lat, lon) {
    const API_URL = `https://my.meteoblue.com/packages/basic-day?apikey=${API_KEY}&lat=${lat}&lon=${lon}&asl=37&format=json`;

    try {
        // Hacer la solicitud y esperar la respuesta
        const response = await fetch(API_URL);

        // Comprobar si la respuesta es correcta
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        // Convertir la respuesta a JSON y esperar el resultado
        const data = await response.json();

        // Llamar a la función para mostrar el clima
        mostrarClima(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// 3. Función para mostrar los datos en la página
function mostrarClima(data) {
    const lista = document.getElementById("weather-list");
    lista.innerHTML = ''; // Limpiar lista

    // Obtener la hora de consulta en UTC desde la API
    const utcTime = data.metadata.modelrun_updatetime_utc; // Ejemplo: "2025-02-26 10:49"

    // Convertir la hora UTC a la hora local en España
    const fechaUTC = new Date(utcTime + " UTC"); // Convertir string a objeto Date en UTC
    const horaLocal = new Intl.DateTimeFormat("es-ES", {
        timeZone: "Europe/Madrid",
        timeStyle: "short" // Muestra solo la hora y minutos
    }).format(fechaUTC);

    // Mostrar solo la hora de la consulta
    document.getElementById("consulta-hora").textContent = `Consulta realizada a las: ${horaLocal}`;

    // Obtener fechas y temperaturas
    const dias = data.data_day.time;
    const temperaturas = data.data_day.temperature_mean;

    // Iterar sobre los datos y agregarlos a la lista
    dias.forEach((dia, index) => {
        const item = document.createElement("li");
        item.textContent = `${dia}: ${temperaturas[index]}°C`;
        lista.appendChild(item);
    });
}

// 4. Capturar el evento del formulario
document.getElementById("clima-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    // Obtener los valores introducidos por el usuario
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;

    // Llamar a la función para obtener el clima
    obtenerClima(lat, lon);
});
