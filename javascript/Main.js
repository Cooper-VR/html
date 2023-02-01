window.onload = function() {
    let todoList = ["Get groceries", "Wash car", "Make dinner"];
    todoList.push("another todo");

    function addTodo(todoTitle){
            let elememt = document.createElement("div");
            elememt.innerHTML = todoTitle;
            document.body.appendChild(elememt);
    }

    todoList.forEach(function(parem){
        addTodo(parem)
    });
}