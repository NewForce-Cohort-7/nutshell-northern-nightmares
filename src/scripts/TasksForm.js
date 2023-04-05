import { sendTask } from "./DataAccess.js";

const dashboard = document.querySelector("#dashboard")


export const taskForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="taskName">Task Name</label>
    <input type="text" name="taskName" class="input" />
</div>
<div class="field">
    <label class="label" for="taskDate">Expected Completion Date</label>
    <input type="date" name="taskDate" class="input" />
</div>

<button class="button" id="saveTask">Save Task</button>

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
