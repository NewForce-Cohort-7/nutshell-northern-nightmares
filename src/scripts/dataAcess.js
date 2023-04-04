const applicationState = {
tasks: []
}

const dashboard = document.querySelector("#dashboard")
const API = "http://localhost:8088"


export const sendTask = (taskToComplete) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskToComplete)
    }


    return fetch(`${API}/tasks`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            dashboard.dispatchEvent(new CustomEvent("stateChanged"))

        })
}


export const deleteTask = (id) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchRequests = () => {
    return fetch(`${API}/tasks`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.tasks = serviceRequests
            }
        )
}
