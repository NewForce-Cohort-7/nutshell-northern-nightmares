import { fetchArticles } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"
import { fetchEvents} from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    .then(() => fetchArticles())
    {
            dashboard.innerHTML = Nutshell()
            
        }
}

dashboard.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    })
render()

