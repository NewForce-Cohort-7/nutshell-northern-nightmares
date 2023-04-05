import { fetchArticles, fetchEvents, fetchMessages, fetchRequests } from "./DataAccess.js"
import { Nutshell } from "./Nutshell.js"

import { fetchArticles, fetchEvents, fetchRequests } from "./DataAccess.js"
import { Nutshell, Navbar } from "./Nutshell.js"


const dashboard = document.querySelector("#dashboard")
const navbar = document.querySelector("#navbar")
const render = () => {
    fetchEvents()
    fetchArticles()
    fetchRequests()
    fetchMessages()
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
