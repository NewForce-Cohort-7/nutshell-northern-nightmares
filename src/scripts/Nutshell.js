import {eventForm,Events} from "./Events.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { Messages } from "./Messages.js"
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

      <h1>Article Tester</h1>
      <section class="articleForm"
      ${buttonForForm()}
      ${articleForm()}
      </section>
      <section class="currentArticles">
      ${Articles()}
      </section>
      
      <h1>Messages Tester</h1>
      <section class="messageForm"
      ${buttonForForm()}
      ${articleForm()}
      </section>
      <section class="currentMessages">
      ${Messages()}
      </section>`
      
  
      // Render all your UI components here
}