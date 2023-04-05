import { sendEvents } from "./DataAccess.js";
const dashboard = document.querySelector("#dashboard")
 

export const buttonForEvent =() => {
    let html = `
    <div>
    <button id="newEvent">New Event</button>
    </div>
    `
    return html
      
}

export const eventsForm =  () => {
    let html = `
    <div id="completeEventsForm" style = "display: none;">
    <div class="Event Name">
    <div><label class="label" for="eventName">Event name</label></div>
    <input type="text" name="eventName" class="input"/>
    </div>

    <div class="Event Date">
    <div><label class="label" for="eventDate">Event Date</label></div>
    <input type="date" name="eventDate" class="input"/>
    </div>

<div class="Event Location">
    <div><label class="label" for="eventLocation">Event Location</label></div>
    <input type="text" name="eventLocation" class="input"/>
    </div>

<div class ="savebutton>
<button class="button" id="createEvent">Create New Event</button>
</div>
</div>
    `

    return html
}

dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createEvent") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='eventName']").value
        const userDate = document.querySelector("input[name='eventDate']").value
        const userLocation = document.querySelector("input[name='eventLocation']").value
      


         // Make an object out of the user input
         const dataToSendToAPI = {
            name: userName,
            date: userDate,
            location: userLocation,
            
            
        }

        // Send the data to the API for permanent storage
        sendEvents(dataToSendToAPI)
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    }
    
    })


    dashboard.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "newEvent") {
            console.log("It clicked")
            
         const eventsForm = document.querySelector("#completeEventsForm")  
        eventsForm.style.display = "block"
            }
    })
