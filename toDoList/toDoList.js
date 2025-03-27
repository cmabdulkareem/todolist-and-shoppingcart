let tasks = []

let userInput = document.querySelector("input")

function renderTasks(){
    let ul = document.querySelector("ul")
    ul.innerHTML = ""

    tasks.forEach((value)=>{
        let li = document.createElement("li")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = value.completed

        checkbox.onchange = ()=>{
            toggleChange(value)
        }

        let span = document.createElement("span")
        span.textContent = value.task

        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit"

        editBtn.onclick = ()=>{
            editTask(value)
        }

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"

        li.append(checkbox)
        li.append(span)
        li.append(editBtn)
        li.append(deleteBtn)
        ul.append(li)
    })
}

function add(){
    let newTaskText = userInput.value.trim()

    if(newTaskText){
        tasks.push({task: newTaskText, completed: false})
    }

    userInput.value = ""

    renderTasks()
}

function toggleChange(x){
    x.completed = !x.completed
    
    console.log(tasks)
    renderTasks()
}

function editTask(x){
    let editText = prompt("Edit text :", x.task)
    x.task = editText

    renderTasks()
}

