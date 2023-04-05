import { getEvents,deleteEvents } from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")
   const convertEventToListElement = (eventObject) => {
            return `<li>

          ${eventObject.name}/${eventObject.date}/
           ${eventObject.location}
            <button class="event__delete" id="event--${eventObject.id}">-
            Delete
            </button>
       
    </li>`
    }

    // delete
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

 // display of events list
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




        
   



