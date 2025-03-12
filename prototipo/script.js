const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",(e) => {
    id = e.target.dataset.id || null;
    post(e, id);
});
const loading = document.getElementById("loading");
const submit = document.getElementById("submitting");
const API_URL = `http://192.168.1.40:8081/v1/posts`;

async function obtenerArticulos() {


    loading.style.display = "block";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();

        loading.style.display = "none";

        mostrarArticulos(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

function mostrarArticulos(data){
    const postsContainer = document.getElementById("posts-container");
    postsContainer.textContent = "";

    data.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;
        postElement.appendChild(postTitle);

        const postDate = document.createElement("p");
        postDate.textContent = `Fecha: ${post.date.date} | Autor: ${post.author}`;
        postElement.appendChild(postDate);

        const postContent = document.createElement("p");
        postContent.textContent = post.content.slice(0, 100) + "...";  // Resumen de los primeros 100 caracteres
        postElement.appendChild(postContent);

        const readMoreLink = document.createElement("a");
        readMoreLink.href = `#`;  // Aquí puedes agregar el enlace al post completo
        readMoreLink.textContent = "Leer más";
        readMoreLink.classList.add("read-more");
        postElement.appendChild(readMoreLink);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("deleteButton");
        deleteButton.dataset.id = post.id;
        deleteButton.addEventListener("click", (e) => deletePost(e))
        postElement.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("editButton");
        editButton.dataset.id = post.id;
        editButton.addEventListener("click", () => editPost(post));
        postElement.appendChild(editButton);

        postsContainer.appendChild(postElement);
    })
}

function deletePost(e){
    const id = e.target.dataset.id;
    const button = e.target;
    button.disabled = true;
    button.textContent = "Eliminando...";
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al eliminar el post: ${response.status}`);
        }
        return response.json();
    })
    .then(() => {
        alert("Post eliminado correctamente");
        obtenerArticulos();
    })
    .catch(error => {
        console.error("Error al eliminar el post:", error);
    });
}

function editPost(post) {
    document.getElementById('title').value = post.title;
    document.getElementById('content').value = post.content;
    document.getElementById('author').value = post.author;

    submitButton.dataset.id = post.id; // Guardar ID en el botón
}

function post(e, id) {
    e.preventDefault();
    submitButton.disabled = true;
    submit.style.display = "block";

    const newPost = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        author: document.getElementById('author').value
    };

    const method = id ? "PUT" : "POST";
    const url = id ? `${API_URL}/${id}` : API_URL;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(response => response.json())
        .then(data => {
            alert(method === "POST" ? 'Post creado exitosamente' : 'Post actualizado exitosamente');
            obtenerArticulos();
        })
        .catch(error => {
            console.error(`Error al ${method === "POST" ? 'crear' : 'actualizar'} el post:`, error);
        });
}

obtenerArticulos();