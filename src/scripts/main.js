import { fetchArticles, fetchEvents, fetchRequests } from "./DataAccess.js"
import { Nutshell, Navbar } from "./Nutshell.js"


const dashboard = document.querySelector("#dashboard")
const navbar = document.querySelector("#navbar")
const render = () => {
    fetchEvents()
    fetchArticles()
    fetchRequests()
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
