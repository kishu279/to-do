// class fetch_data {
//   element_id = document.getElementById("content");
//   check = document.getElementsByName("Completed");

//   constructor(url) {
//     this.url = url;
//     this.check_complete();
//   }

//   check_complete() {
//     if (this.check.checked == true) {
//       this.check.checked = false;
//       console.log("checked");
//     } else {
//       this.check.checked = true;
//       console.log("unchecked");
//     }
//   }

//   fetch_data_method() {
//     this.element_id.innerText = "";

//     fetch(this.url)
//       .then((response) => response.json())
//       .then((data) => {
//         data.forEach((todo) => {
//           if (todo.completed == this.check.checked) {
//             let todoElement = document.createElement("div");

//             todoElement.classList.add("todo-item");
//             todoElement.innerHTML = `${todo.id} ${todo.title}`;

//             this.element_id.appendChild(todoElement);
//           }
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching data : ", error);
//       });
//   }
// }

// const x = new fetch_data("https://jsonplaceholder.typicode.com/todos/");

class fetch_data {
  arr_data = [];

  content_id = document.getElementById('content');
  // check = document.getElementById('checkbox');

  txt_box = document.getElementById("textbox");
  local_data = localStorage.getItem("added_local");

  constructor() {
    this.arr_data = JSON.parse(this.local_data) || [];  
    console.log(this.arr_data);
  }

  to_do_add() {
    let usr_input = this.txt_box.value;

    if(usr_input == "") {
      alert('ERROR entry needed');
    } else {
      const data = {
        id : this.arr_data.length,
        to_do : usr_input,
      };
      console.log(usr_input);
      this.txt_box.value = "";
      this.arr_data.push(data);
    }
  }

  save_data() {
    if(this.arr_data.length > 0) {
      console.log(this.arr_data);
      localStorage.setItem("added_local", JSON.stringify(this.arr_data));
      console.log(localStorage.getItem("added_local"))
    } else {
      alert('Error :- entery first');
    }
  }

  fetch_data_method() {
    this.content_id.innerHTML = "";

    if(this.arr_data.length == 0) {
      alert('No data');
    } else {
      this.arr_data.forEach((data) => {
        let str = `${data.id} ${data.to_do}`;
        let to_do_element = document.createElement('div');
        to_do_element.classList.add("todo_element");

        to_do_element.innerHTML = str;

        this.content_id.append(to_do_element);
      })



    }
  }
  
  clear() {
    if(this.arr_data.length == 0) {
      alert('no data');
    } else {
      alert('deleted');
      this.arr_data = [];
      localStorage.removeItem("added_local");
    }
  }
}

const x = new fetch_data;