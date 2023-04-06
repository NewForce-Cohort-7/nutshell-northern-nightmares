import {Events} from "./Events.js"
import { eventsForm,buttonForEvent } from "./EventsForm.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { Tasks } from "./Tasks.js"
import { taskForm, buttonForTask } from "./TasksForm.js"
import { Messages } from "./Messages.js"
import { messagesForm, buttonForMessages } from "./MessagesForm.js"

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

      <h1>Events!</h1>
      <section class="eventForm">
      ${buttonForEvent()}
      ${eventsForm()}
      </section>
      <section class="Events">
        <h2>Event List</h2>
        ${Events()}
    </section>
    
    <h1>Tasks!</h1>
    <section class="taskForm">
    ${buttonForTask()}
    ${taskForm()}
    </section>
    <section class="Tasks">
      <h2>Task List</h2>
      ${Tasks()}
  </section>

  <h1>Chat!</h1>
  <section class="messageForm"
  ${buttonForMessages()}
  ${messagesForm()}
  </section>
  <section class="currentMessages">
    <h2>Chatroom</h2>
    ${Messages()}
    </section>


  <h1>Articles!</h1>
  <section class="articleForm"
  ${buttonForForm()}
  ${articleForm()}
  </section>
  <h1>Posted Articles</h1>
  <section class="currentArticles">
  ${Articles()}
  </section>
  `
      // Render all your UI components here
}