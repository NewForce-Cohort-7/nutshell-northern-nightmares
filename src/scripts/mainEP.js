import { fetchArticles } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"
import { fetchEvents} from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    fetchArticles()
    .then(
        () => 
    {
            dashboard.innerHTML = ""
            
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
