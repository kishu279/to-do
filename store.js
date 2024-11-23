const url = "https://jsonplaceholder.typicode.com/todos/";

const element_id = document.getElementById("content");
const check = document.getElementById("complete");

const fetchData = () => {
  element_id.innerText = ""; // Clear the content before displaying new data

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => {
        let complete = true;

        if (todo.completed == complete) {
          const todoElement = document.createElement("div");
          todoElement.classList.add("todo-item");
          todoElement.innerHTML = `<strong>ID:</strong> ${todo.id} <br><strong>Title:</strong> ${todo.title}`;

          element_id.appendChild(todoElement);
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
