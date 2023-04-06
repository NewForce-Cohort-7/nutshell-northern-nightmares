import {Events} from "./Events.js"
import { eventsForm,buttonForEvent } from "./EventsForm.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { Tasks } from "./Tasks.js"
import { taskForm, buttonForTask } from "./TasksForm.js"
import { Messages } from "./Messages.js"

export const Navbar = () => {
      return `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
        <a class="navbar-link" href="#">Tasks</a>
        <a class="navbar-link" href="#">Events</a>
        <a class="navbar-link" href="#">Forum</a>
      </div>
    </nav>
      `
}
export const Nutshell = () => {
      return `
      <h1>Event Lister</h1>
      <section class="eventForm">
      ${buttonForEvent()}
      ${eventsForm()}
      </section>
      

      <section class="Tasks">
        <h2>Events</h2>
        ${Events()}
    </section>

    <section class="taskForm">
    ${buttonForTask()}
    ${taskForm()}
    </section>
    

    <section class="Tasks">
      <h2>Tasks</h2>
      ${Tasks()}
  </section>

  <section class="Tasks">
  <h2>Tasks</h2>
  ${Messages()}
</section>

      <h1>Article Tester</h1>
      <section class="articleForm"
      ${buttonForForm()}
      ${articleForm()}
      </section>
      <section class="currentArticles">
      ${Articles()}
      </section>
      `
      // Render all your UI components here
}