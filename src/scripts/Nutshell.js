import {eventForm,Events} from "./Events.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { Tasks } from "./Tasks.js"
import { taskForm } from "./TasksForm.js"

export const Nutshell = () => {
      return `
      <h1>Nutshell</h1>
      <section class="eventForm">
      ${eventForm()}
      </section>
      

      <section class="Tasks">
        <h2>Events</h2>
        ${Events()}
    </section>

    <section class="taskForm">
    ${taskForm()}
    </section>
    

    <section class="Tasks">
      <h2>Tasks</h2>
      ${Tasks()}
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