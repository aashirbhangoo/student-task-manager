// ======================================
// ADD TASK
// ======================================

function addTask() {

    // Get the input value
    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;


    // Don't add an empty task
    if (taskText == "") {
        alert("Please enter a task.");
        return;
    }


    // Create a new list item
    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <div>
            <button onclick="completeTask(this)">
                Complete
            </button>

            <button onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;


    // Add task to the list
    document.getElementById("taskList").appendChild(li);


    // Clear input
    taskInput.value = "";
}


// ======================================
// COMPLETE TASK
// ======================================

function completeTask(button) {

    // Get the task
    let task = button.parentElement.parentElement;


    // Add/remove completed class
    task.classList.toggle("completed");


    // Change button text
    if (button.innerText == "Complete") {

        button.innerText = "Undo";

    } else {

        button.innerText = "Complete";

    }
}


// ======================================
// DELETE TASK
// ======================================

function deleteTask(button) {

    // Get the task
    let task = button.parentElement.parentElement;


    // Remove the task
    task.remove();
}


// ======================================
// SEARCH TASKS
// ======================================

function searchTasks() {

    // Get search text
    let searchText =
        document.getElementById("searchInput").value.toLowerCase();


    // Get all tasks
    let tasks =
        document.getElementById("taskList").children;


    // Check every task
    for (let task of tasks) {

        let text =
            task.querySelector("span").innerText.toLowerCase();


        // Show matching tasks
        if (text.includes(searchText)) {

            task.style.display = "flex";

        } else {

            task.style.display = "none";

        }
    }
}