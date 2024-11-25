var complete = true;

class fetch_data {
  element_id = document.getElementById("content");
  check = document.getElementsByName("Completed");

  constructor(url) {
    this.url = url;
  }

  check_complete() {
    if (this.check.checked == true) {
      this.check.checked = false;
      console.log("checked");
    } else {
      this.check.checked = true;
      console.log("unchecked");
    }
  }

  fetch_data_method() {
    this.element_id.innerText = "";

    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((todo) => {
          if (todo.completed == this.check.checked) {
            let todoElement = document.createElement("div");

            todoElement.classList.add("todo-item");
            todoElement.innerHTML = `${todo.id} ${todo.title}`;

            this.element_id.appendChild(todoElement);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }
}

const x = new fetch_data("https://jsonplaceholder.typicode.com/todos/");

x.check_complete();
