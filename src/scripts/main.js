import { fetchArticles } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchArticles()
    .then(() => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()

dashboard.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)