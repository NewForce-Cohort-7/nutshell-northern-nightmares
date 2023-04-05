import { fetchArticles, fetchMessages, fetchEvents } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    fetchArticles()
    fetchMessages()
    .then(
        () => 
    {
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
