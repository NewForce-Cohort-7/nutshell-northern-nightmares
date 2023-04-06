import { getEvents,deleteEvents } from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")
   const convertEventToListElement = (eventObject) => {
            return `<li>
            <div class="card mb-2">
            <div class="card-header">
            ${eventObject.date}
            <button class="event__delete" id="event--${eventObject.id}">-
            Delete
            </button>
            </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>
                    ${eventObject.name}
                </p>
                <footer class="blockquote-footer">${eventObject.location}</footer>
              </blockquote>
            </div>
          </div>
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




        
   



