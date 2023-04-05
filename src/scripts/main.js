import { fetchArticles, fetchEvents, fetchRequests } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"



const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
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
