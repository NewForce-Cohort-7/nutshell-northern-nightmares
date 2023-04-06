import { sendTask } from "./DataAccess.js";

const dashboard = document.querySelector("#dashboard")


// export const buttonForTask =() => {
//     let html = `
//     <div>
//     <button id="newTask">New Task</button>
//     </div>
//     `
//     return html
      
// }



export const taskForm = () => {
    let html = `
    <div id ="completeTaskForm" style = "display: none;">
    <div class="field">
    <label class="label" for="taskName">Task Name</label>
    <input type="text" name="taskName" class="input" />
</div>
<div class="field">
    <label class="label" for="taskDate">Expected Completion Date</label>
    <input type="date" name="taskDate" class="input" />
</div>

<div class = save button>
<button class="button" id="saveTask">Save Task</button>
</div>
</div>
`
return html

}


dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        // Get what the user typed into the form fields
        const userTask = document.querySelector("input[name='taskName']").value
        const userDate = document.querySelector("input[name='taskDate']").value


        const dataToSendToAPI = {
            event: userTask,
            date: userDate
        }

        sendTask(dataToSendToAPI)
dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    }
})


dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newTask") {
        console.log("It clicked")
        
     const taskForm = document.querySelector("#completeTaskForm")  
    taskForm.style.display = "block"
        }
})
