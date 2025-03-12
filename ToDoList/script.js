let taskList = JSON.parse(localStorage.getItem("taskList-LS")) || [];

function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task !== "") {
        let newtask = {id:Date.now(), name:task, completed:false};
        taskList.push(newtask);  // Agregar la tarea a la lista de tareas
        updateLocalStorage();

        createTaskElement(newtask);  // Agregar el item a la lista en el HTML

        document.getElementById("taskInput").value = "";  // Limpiar el input después de agregar la tarea
    }
}

function createTaskElement(newtask) {
    const list = document.getElementById("taskList");
    const item = document.createElement("li"); // Crear un nuevo elemento li
    item.textContent = newtask.name; // Establecer el texto del li
    item.style.backgroundColor = newtask.completed ? "lightgreen" : "white";

    // Agregar el listener de clic al nuevo item
    item.addEventListener("click", function () {
        newtask.completed = !newtask.completed; // Alternar entre true y false
        updateLocalStorage();
        item.style.backgroundColor = newtask.completed ? "lightgreen" : "white"; // Cambiar color de fondo al hacer clic
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.addEventListener("click", function () {
        taskList = taskList.filter(task => task.id !== newtask.id);
        updateLocalStorage();
        list.removeChild(item);
    });

    item.appendChild(deleteButton);

    list.appendChild(item);
}

// **Actualizar localStorage**
function updateLocalStorage() {
    localStorage.setItem("taskList-LS", JSON.stringify(taskList));
}

// Cargar tareas almacenadas al iniciar
function loadTasks() {
    taskList.forEach(createTaskElement);
}

document.getElementById("addTaskButton").addEventListener("click", addTask);

loadTasks();
