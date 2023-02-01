window.onload = function() {
    let todo1 = "Get groceries";
    let todo2 = "Wash car";
    let todo3 = "Make dinner";

    

    function addTodo(todoTitle){
        let elememt = document.createElement("div");
        elememt.innerHTML = todoTitle;
        document.body.appendChild(elememt);
    }

    addTodo(todo1);
    addTodo(todo2);
    addTodo(todo3);
}