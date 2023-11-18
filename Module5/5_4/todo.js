document.addEventListener("DOMContentLoaded", function() {
    let todos;
    let savedTodos = JSON.parse(localStorage.getItem("todos"))  || [];
    for (i = 0; i < savedTodos.length; i++){
      if (savedTodos[i] === null){
        
      }
    }
    //savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
    todos = document.getElementsByTagName("li");
    //localStorage.setItem("todoList", JSON.stringify(savedTodos));

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}
let todoForm = document.getElementById("newTodoForm");
let clearButton = document.getElementById("clearButton");
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}
for (i = 0; i < todos.length; i++) {
    if (todos[i].className === ("closebox")){
        continue;
    }
    else{
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.className = "closebox"
        todos[i].appendChild(removeButton);
    }

  }
clearButton.addEventListener("onclick", function(){
  console.log("CLEARING LOCAL MEMORY");
  localStorage.clear();
});
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let removeButton = document.createElement("button");
    removeButton.className = "closebox"
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("task").value;
    let taskValue = document.getElementById("task").value;
    newTodo.innerText = taskValue;

    todoList.appendChild(newTodo);
    savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    newTodo.appendChild(removeButton);
    todoForm.reset();
    console.log(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});
todoList.addEventListener("click", function(ev) {
  
    const targetTagToLowerCase = ev.target.tagName.toLowerCase();
    const targetClassToLowerCase = ev.target.className.toLowerCase();
    console.log(targetClassToLowerCase);
    if (targetTagToLowerCase === 'LI') {
        ev.target.classList.toggle('checked');
        ev.target.style.textDecoration = "line-through";
        }
    else if (targetClassToLowerCase === "closebox"){
        ev.target.parentNode.remove();
        todoItem = ev.target.parentNode.innerText.substring(0, ev.target.parentNode.innerText.length - 1);
        for (i = 0; i < savedTodos.length; i++){
          console.log(savedTodos[i]);
          if (savedTodos[i]['task'] === todoItem){
            console.log(`removing ${todoItem} in ${savedTodos[i]['task']}`);
            savedTodos.splice(i, 1);
            //savedTodos = JSON.parse(localStorage.getItem("todos"))  || [];
            localStorage.setItem("todos", JSON.stringify(savedTodos));
            for (i = 0; i < localStorage.length; i++)   {
              console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
          }
            return;
          }
        }
    }
    let clickedListItem = ev.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }
  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});
});
