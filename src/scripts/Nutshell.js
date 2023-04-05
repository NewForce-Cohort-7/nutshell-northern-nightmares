import {Events} from "./Events.js"
import { eventsForm,buttonForEvent } from "./EventsForm.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { Tasks } from "./Tasks.js"
import { taskForm } from "./TasksForm.js"

export const Navbar = () => {
      return `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
        <a class="navbar-link" href="tasks.html">Tasks</a>
        <a class="navbar-link" href="events.html">Events</a>
        <a class="navbar-link" href="chat.html">Forum</a>
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
      `
      // Render all your UI components here
}