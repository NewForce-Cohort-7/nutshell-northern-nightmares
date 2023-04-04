import { articleForm, buttonForForm} from "./ArticlesForm.js"
import { Articles } from "./Articles.js"
import { taskForm } from "./tasks.js"

export const Nutshell = () => {
      return `
      <h1>Article Tester</h1>
      <section class="articleForm"
      ${buttonForForm()}
      ${articleForm()}
      </section>
      <section class="currentArticles">
       ${Articles()}
      </section>
      <section class = "taskForm">
       ${taskForm()}
      </section>
      `
  
      // Render all your UI components here
}