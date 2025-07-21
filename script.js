const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");

        const taskText = document.createElement("div");
        taskText.textContent = inputBox.value;

        const timestamp = document.createElement("small");
        const now = new Date();
        const formatted = now.toLocaleString(); // eg. 21/07/2025, 5:30 PM
        timestamp.textContent = `Added on: ${formatted}`;
        timestamp.style.display = "block";
        timestamp.style.fontSize = "12px";
        timestamp.style.color = "#888";

        
        li.appendChild(taskText);
        li.appendChild(timestamp);

        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI" || e.target.tagName === "DIV" || e.target.tagName === "SMALL") {
        e.target.closest("li").classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
