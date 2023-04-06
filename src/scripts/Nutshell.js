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
        <a class="navbar-link" href="tasks.html">Tasks</a>
        <a class="navbar-link" href="events.html">Events</a>
        <a class="navbar-link" href="chat.html">Forum</a>
      </div>
    </nav>
      `
}
export const Nutshell = () => {
      return `
      <div class="row"
      
            <!--(---------Task Section-----------)-->
            <div class="column" id="task-col">
                  <div class="upper-header">
                       <h2>Tasks</h2>
                  </div>

                  <section class="taskForm">
                  ${taskForm()}
                  </section>
      
      
                  <section class="Tasks">
                  ${Tasks()}
                  </section>
      
            </div>

    <section class="taskForm">
    ${buttonForTask()}
    ${taskForm()}
    </section>
    

            <!--(---------Article Section-----------)-->
            <div class="column" id="article-col">
            <!--(---------Forum Section-----------)-->
            <div class="column" id="forum-col">
                  <div class="upper-header">
                        <h2>Forum</h2>
                  </div>

  <h1>Article Tester</h1>
  <section class="articleForm"
  ${buttonForMessages()}
  ${messagesForm()}
  </section>
  <section class="currentArticles">
  ${Messages()}
  </section>


            
                  <div class="upper-header">
                      <h1>Articles</h1>
                  </div>
            
                  <section class="articleForm"
                  ${buttonForForm()}
                  ${articleForm()}
                  </section>
            
                  <section class="currentArticles">
                  ${Articles()}
                  </section>
            </div>


      </div>

      <div class="row">

      <!--(---------Events Section-----------)-->
            <div class="column" id="task-col">      
                  <div class="lower-header">
                        <h2>Events</h2>
                  </div>

                  <section class="eventForm">
                  ${buttonForEvent()}
                  ${eventsForm()}
                  </section>
      
                  <section class="events">
                  <div class="subheading">
                        <h5>Upcoming Events</h5>
                  </div>
                  ${Events()}
                  </section>
            </div>
      </div>
            `
      // Render all your UI components here
}