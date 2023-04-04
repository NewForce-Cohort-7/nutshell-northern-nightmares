


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
