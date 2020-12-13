var dsTask = new taskList();
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}

document.getElementById("addItem").addEventListener("click", function () {
    var id = getEle("newTask").innerHTML = Math.random();
    var name = getEle("newTask").value;

    

    var isValid = true;

    isValid &= validation.kiemTraRong(name, "newTask", "notiInput");
    isValid &= validation.kiemTraTrung(dsTask.timViTriTask, name, "newTask",  "notiInput");

    if (!isValid) return;


    var task = new Task(id, name, "todo");
    dsTask.themTask(task);


    table(dsTask.arr);
})

function table(arr) {
    var content1 = "";
    var content2 = "";
    getEle("todo").innerHTML = '';
    getEle("completed").innerHTML = '';
    arr.map(function (item, i) {   
        if (item.status === "todo") {
            content1 += `
        <li>
        <span>${item.name}</span>
        <div class = "buttons">
        <button class = "complete" onclick = "editTodo('${item.name}')" ><i  class="fa fa-check-circle"></i></button>
        <button class = "remove" onclick = "deleteTodo('${item.name}')"><i class="fa fa-trash"></i></button>
        </div>
        </li>
        `;
            getEle("todo").innerHTML = content1;
        }

        else if (item.status === "completed") {
            
            content2 += `
        <li>
        <span>${item.name}</span>
        <div class = "buttons">
        <button class = "complete" ><i  class="fa fa-check-circle"></i></button>
        <button class = "remove" onclick = "deleteTodo('${item.name}')"><i class="fa fa-trash"></i></button>
        </div>
        </li>
        `;
            getEle("completed").innerHTML = content2;
        }
    });

}

function deleteTodo(name) {
    dsTask._xoaTask(name);
    table(dsTask.arr);
}
function editTodo(name){
    dsTask.updateTask(name);
    table(dsTask.arr);
}


