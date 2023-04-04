import {eventForm,Events} from "./Events.js"

export const Nutshell = () => {
      return `
      <h1>Nutshell</h1>
      <section class="eventForm">
      ${eventForm()}
      </section>
      

      <section class="Events">
        <h2>Events</h2>
        ${Events()}
    </section>
      `
  
      // Render all your UI components here
}