
function addbutton() {
    var task = document.getElementById("task").value;
    newtodotask(task);
}

function newtodotask(task){
    var listitem = document.createElement("li");
    var itemtext = document.createTextNode(task);
    listitem.appendChild(itemtext);
    document.querySelector('ol').appendChild(listitem);
    listitem.addEventListener("click", taskcompleted);
}

function taskcompleted() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    }
    else{
        this.classList.add("completed");
    }
}

function emptylist() {
    var todolist = document.getElementById("todo-list");
    var toDoItems = todolist.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}




