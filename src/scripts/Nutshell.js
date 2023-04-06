import {Events} from "./Events.js"
import { eventsForm } from "./EventsForm.js"
import { articleForm } from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { Tasks } from "./Tasks.js"
import { taskForm} from "./TasksForm.js"
import { Messages } from "./Messages.js"
import { messagesForm} from "./MessagesForm.js"

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
  <body class="p-3 m-0 border-0 bd-example">
    <header class="navbar">

    </header>
    <!-- Example Code -->
    <!-- Upper Row Code -->
<div class="container-1">
  <div class="row">
    <!-- 3 Column Code -->
    <div class="col-md">
      <div class="card mb-3">
        <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-1">
          <a class="navbar-brand">Tasks</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1"><button id="newTask">New Task</button></a>
            </li>
          </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
         
        <section class="taskForm">
        ${taskForm()}
        </section>

        <section class="Tasks">
        ${Tasks()}
        </section>
         
        </div>
      </div>
    </div>

    <div class="col-md">
      <div class="card mb-3">
        <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-1">
          <a class="navbar-brand">Events</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1"><button id="newEvent">New Event</button></a>
            </li>
          </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
          
        <section class="eventForm">
        ${eventsForm()}
        </section>

        <section class="events">
        ${Events()}
        </section>
          
        </div>
      </div>
    </div>

    <div class="col-md">
      <div class="card mb-3">
        <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-1">
          <a class="navbar-brand">Forum</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1"><button id="newMessage">New Message</button></a>
            </li>
          </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">

        <section class="articleForm"
        ${messagesForm()}
        </section>

        <section class="currentMessages">
        ${Messages()}
        </section>

        </div>
     </div>
    </div>
  </div>
</div>

<div class="container-2">
  <div class="d-grid gap-5 d-md-flex justify-content-md-center">
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-success">Success</button>
  </div>
</div>

<div class="container-3">
  <div class="row">
    <!-- 3 Column Code -->
    <div class="col-md">
      <div class="card mt-3 mb-">
        <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-1">
          <a class="navbar-brand">Articles</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1"><button id="newArticle">New Article</button></a>
            </li>
          </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
         
        <section class="articleForm"
        ${articleForm()}
        </section>
  
        <section class="currentArticles">
        ${Articles()}
        </section>
          
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- End Example Code -->
  </body>

            `
      // Render all your UI components here
}