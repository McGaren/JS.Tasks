// function addTask(task){
//     if(task === ""){
//         alert("button clicked");
//     }
// }

let myAllTasks = [];

function addTask(){

    let input = document.getElementById("addTask");
    let digitedValue = input.value;

    if (digitedValue === "") {
        alert("Please enter a task.");
        return;
    }

    myAllTasks.push(digitedValue);
    console.log(myAllTasks);

    let newLine = document.createElement("li");
    newLine.innerText = digitedValue;

    newLine.onclick = function() {
        this.classList.toggle("completed");
    }

    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    buttonDelete.classList.add("delete-btn");
    buttonDelete.onclick = function(event) {
        event.stopPropagation();
        newLine.remove();
    }
    newLine.appendChild(buttonDelete);

    let taskList = document.getElementById("taskList");
    taskList.appendChild(newLine);
    input.value = "";
}