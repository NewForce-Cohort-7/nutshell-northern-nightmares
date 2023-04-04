import { getEvents,sendEvents,sendCompletion, getCompletions, deleteEvents } from "./DataAccess.js"

const dashboard = document.querySelector("#dashboard")
const events = getEvents()


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
dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "event") {
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

const  convertEventToListElement=(event)=>{
    const completions = getCompletions()
    
  return `
    <li>
   <a href=${events.name}>${events.date}</a>${events.location}

    
        <button class="event__Delete"
                id="event--${event.id}">
            Delete
        </button>
    </li>
    `
}
    


dashboard.addEventListener(
    "change",
    (event) => {

    }
)




export const Events = () => {
   const events = getEvents() 
    // const sortEvents = events.sort((a,b) => new Date(b.date)- new Date(a.date))

    return `
        <li>
            ${
               events.map(convertEventToListElement).join("")
            }
        </li>
    `

    return 
        }

dashboard.addEventListener("click", click => {
        if (click.target.id.startsWith("event--")) {
            const [,eventId] = click.target.id.split("--")
            deleteEvents(parseInt(eventId))
        }})





    


        
   



dashboard.addEventListener(
"change",
(event) => {
    if (event.target.id === "events") {
        const [eventsId] = event.target.value.split("--")

        
      
        const completion = {
            eventsId: parseInt(eventsId),
            eventsName: parseInt(eventsName),
            eventsDate: parseInt(eventsDate),
            eventsLocation: parseInt(eventsLocation),
            date_created: Date.now()
         }
         sendCompletion(completion)

        

    }
}
)