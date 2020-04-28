const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

fetch(`http://localhost:3000/exercises/${id}`)
    .then(response => response.json())
    .then(exercise => {
        const exerciseTitle = document.createElement("h2");
        exerciseTitle.innerText = exercise.type;

    }