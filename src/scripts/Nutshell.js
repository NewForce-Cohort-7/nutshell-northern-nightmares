import { articleForm } from "./ArticlesForm.js"
import { Articles } from "./Articles.js"

export const Nutshell = () => {
      return `
      <h1>Article Tester</h1>
      <section class="articleForm"
      ${articleForm()}
      </section>
      <section class="currentArticles">
      ${Articles()}
      `
  
      // Render all your UI components here
}