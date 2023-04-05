import {eventForm,Events} from "./Events.js"
import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"

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
      `
      // Render all your UI components here
}