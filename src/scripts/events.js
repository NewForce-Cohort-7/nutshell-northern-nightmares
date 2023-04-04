import { getEvents,sendEvents,deleteEvents } from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")

 dashboard.addEventListener("click", click => {
        if (click.target.id.startsWith("event--")) {
            const [,eventId] = click.target.id.split("--")
            deleteEvents(parseInt(eventId))
            .then(
                () => {
                    dashboard.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
        }
    })

    const convertEventToListElement = (eventObject) => {
            return `<li class="eventDone">
            ${eventObject.name} 
            <button class="event__delete" id="event--${eventObject.id}">-
            Delete
            </button>
       
    </li>`
    }



export const eventForm =  () => {
    let html = `<div class="field">
    <label class="label" for="eventName">Event name</label>
    <input type="text" name="eventName" class="input" />
    </div>


    <div class="field">
    <label class="label" for="eventDate">Event Date</label>
    <input type="date" name="eventDate" class="input" />
    </div>


<div class="field">
    <label class="label" for="eventLocation">Event Location</label>
    <input type="text" name="eventLocation" class="input" />
    </div>

<button class="button" id="createEvent">Save Event</button>
    `

    return html
}
dashboard.addEventListener("click", click => {
    if (click.target.id === "createEvent") {
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
    }
    
    })

   
    
    
    
    export const Events = () => {
        const events = getEvents()
        const sortEvents = events.sort((a,b) => new Date(a.date) - new Date(b.date))
    
        let html = `
            <ul class="eventsList"> 
                ${
                    sortEvents.map(convertEventToListElement).join("")
                }
            </ul>
        `
    
        return html
    }


    


        
   



