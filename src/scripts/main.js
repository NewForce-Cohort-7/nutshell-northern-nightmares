import { fetchArticles } from "./DataAccess.js"
import { Nutshell, Navbar } from "./Nutshell.js"
import { fetchEvents} from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")
const navbar = document.querySelector("#navbar")
const render = () => {
    fetchEvents()
    fetchArticles()
    .then(
        () => 
    {
            dashboard.innerHTML = Nutshell()
            navbar.innerHTML = Navbar()
            
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
