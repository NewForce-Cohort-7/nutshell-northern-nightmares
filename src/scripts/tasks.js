import { sendTask } from "./dataAcess.js";

export const taskForm = () => {
    let html = `<div class = "field">
    <label class="label" for="eventName">Event Name</label>
    <input type="text" name="eventName" class="input" />
</div>
<div class="field">
    <label class="label" for="completionDate">Expected Completion Date</label>
    <input type="date" name="completionDate" class="input" />
</div>

<button class="button" id="saveTask">Save Task</button>

`
    return html
}


const dashboard = document.querySelector("#dashboard")

dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        // Get what the user typed into the form fields
        const userTask = document.querySelector("input[name='eventName']").value
        const userDate = document.querySelector("input[name='completionDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userTask,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendTask(dataToSendToAPI)
    }
})


