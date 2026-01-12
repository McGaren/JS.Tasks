let myAllTasks = [];

function addTask() {
    let input = document.getElementById("addTask");
    let digitedValue = input.value;

    if (digitedValue === "") {
        alert("Please enter a task.");
        return;
    }

    let itemObject = {
        text: digitedValue,
        concluded: false
    };

    myAllTasks.push(itemObject);
    localStorage.setItem("myTasks", JSON.stringify(myAllTasks));

    assembleTaskList(itemObject);
    input.value = "";
}

const savedTasks = localStorage.getItem("myTasks");

if (savedTasks) {
    myAllTasks = JSON.parse(savedTasks);

    myAllTasks.forEach(function(taskObject) {
        assembleTaskList(taskObject);
    });
};
   
function assembleTaskList(item) {
    let newLine = document.createElement("li");
    newLine.innerText = item.text;

    if (item.concluded === true) {
        newLine.classList.add("completed");
    }
    newLine.onclick = function() {
        this.classList.toggle("completed");
        
        item.concluded = !item.concluded;
        localStorage.setItem("myTasks", JSON.stringify(myAllTasks));
}

    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    buttonDelete.classList.add("delete-btn");

    buttonDelete.onclick = function(event) {
        event.stopPropagation();

        newLine.remove();
        let position = myAllTasks.indexOf(item);

        if (position !== -1) {
            myAllTasks.splice(position, 1);
        }
        localStorage.setItem("myTasks", JSON.stringify(myAllTasks));
    }
    newLine.appendChild(buttonDelete);

    document.getElementById("taskList").appendChild(newLine);
}      


