import {Events} from "./Events.js"
import { eventsForm,buttonForEvent } from "./EventsForm.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
export const Nutshell = () => {
      return `
      <h1>Event Lister</h1>
      <section class="eventForm">
      ${buttonForEvent()}
      ${eventsForm()}
      </section>
      <section class="Events">
        ${Events()}
    </section>

      <h1>Article Tester</h1>
      <section class="articleForm"
      ${buttonForForm()}
      ${articleForm()}
      </section>
      <section class="currentArticles">
      ${Articles()}
      </section>`
      
  
      // Render all your UI components here
}