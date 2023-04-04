const dashboard = document.querySelector("#dashboard")


const applicationState =
{
    events:[],
    completions:[]
}

const API = "http://localhost:8088"

export const fetchEvents = () => {
    return fetch(`${API}/events`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.events = data
            }
        )
}

export const getEvents = () => {
    return applicationState.events.map(event => ({
        ...event
    }))
}



export const sendEvents = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/events`, fetchOptions)
    .then(response => response.json())
    .then(() => { dashboard.dispatchEvent(new CustomEvent("stateChanged"))

    })
}


export const getCompletions = () => {
    return applicationState.completions.map(completion => ({
        ...completion
    }))
}


export const deleteEvents = (id) => {
    return fetch(`${API}/events/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const sendCompletion = (userServiceCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceCompletion)
    }

    const dashboard = document.querySelector("#dashboard")
    return fetch(`${API}/completions`, fetchOptions)   //location of said heist
    // this changes the string into json, and json turns it into an object
        .then(response => response.json())          // dirty money => clean money (.json())
        .then(() => {                               //take clean money => do stuff with it
            dashboard.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

