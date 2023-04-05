import { fetchArticles, fetchEvents, fetchMessages, fetchRequests } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"



const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    fetchArticles()
    fetchRequests()
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
