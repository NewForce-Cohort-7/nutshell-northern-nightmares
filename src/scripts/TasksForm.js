import { sendTask } from "./DataAccess.js";

const dashboard = document.querySelector("#dashboard")


export const taskForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="eventName">Event Name</label>
    <input type="text" name="eventName" class="input" />
</div>
<div class="field">
    <label class="label" for="eventDate">Expected Completion Date</label>
    <input type="date" name="eventDate" class="input" />
</div>

<button class="button" id="saveTask">Save Task</button>

`
return html

}


dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        // Get what the user typed into the form fields
        const userEvent = document.querySelector("input[name='eventName']").value
        const userDate = document.querySelector("input[name='eventDate']").value


        const dataToSendToAPI = {
            event: userEvent,
            date: userDate
        }

        sendTask(dataToSendToAPI)

    }
})
