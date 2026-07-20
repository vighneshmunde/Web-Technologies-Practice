
function addTask() {
    let input = document.getElementById('inputTask')

    let task = input.value;

    if (task === ""){
        alert("Pls enter a task")
        return;
    }

    let li = document.createElement('li')
    li.textContent = task;

    let delBtn = document.createElement('button')
    delBtn.textContent = "❌"

    delBtn.onclick = function () {
        li.remove()
    }

    li.appendChild(delBtn)
    document.getElementById("list").appendChild(li)

    input.value = ""
}