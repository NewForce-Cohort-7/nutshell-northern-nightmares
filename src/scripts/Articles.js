import { getArticles, getState, getReadArticles, saveArticle, deleteArticle } from "./DataAccess.js"
const dashboard = document.querySelector("#dashboard")

//Change event Listener to store article as read
// mainContainer.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "readOption") {
//             const [articleId] = event.target.value.split("--")

//             const readArticle = { 
//                 "articleId": +(articleId),
//                 "date_read": new Date()
//             }
//             /*
//             Invoke the function that performs the POST request
//             to the `completions` resource for your API. Send the
//             completion object as a parameter.
//             */
//             saveArticle(readArticle)

//             }

//     }
// )
const convertArticleToListElement = (article) => {
 
        return `
        <li>
        <div class="card mb-2">
        <div class="card-header">
        ${article.title}
        <button class="article__delete" id="article--${article.id}">Delete</button>
        </div>
        <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>
                ${article.synopsis}
            </p>
            <footer class="blockquote-footer"><a href=${article.url}>Learn More</a></footer>
          </blockquote>
        </div>
      </div>
        </li>
        `
    }
    

//Delete event listener
dashboard.addEventListener("click", click => {
    if (click.target.id.startsWith("article--")) {
        const [,articleId] = click.target.id.split("--")
        deleteArticle(parseInt(articleId))
    }
})

//export for display of article list
export const Articles = () => {
    const articles = getArticles()

    let html = `
    <ul class="articleCol">
    ${
        articles.map(convertArticleToListElement).join("")
    }
    </ul>
    `

    return html
}