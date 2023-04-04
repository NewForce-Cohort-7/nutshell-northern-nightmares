const dashboard = document.querySelector("#dashboard")

const applicationState = {
    articles: [],
    events: [],
    tasks: [],
    messages: []
}

const API = "http://localhost:8088"

//get exports
export const getArticles = () => {
    return applicationState.articles.map(article => ({...article}))
}

export const getMessages = () => {
    return applicationState.articles.map(message => ({...message}))
}

export const getReadArticles = (state) => {
    
    //sort readArticles based on dates read
    const sortedReadArticles = state.readArticles.map(readArticle =>({...readArticle})).sort((a, b) => a.date_read - b.date_read)

    //map the current articles
    const articles = state.articles.map(article => ({...article}))

    //filter and match the current articles witht he read articles based on ids
    const readArticles = sortedReadArticles.filter(singleReadArticle => { return articles.some(singleArticle => singleArticle.id === singleReadArticle.articleId)})

    //return filtered list of read articles
    return readArticles
}

export const getState = () => {
    return ({...applicationState})
}

//fetch exports
export const fetchArticles = () => {
    return fetch(`${API}/articles`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                applicationState.articles = data
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                applicationState.messages = data
            }
        )
}

//Send Exports
export const sendArticle = (newUserArticle) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserArticle)
    }


    return fetch(`${API}/articles`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const sendMessage = (newUserMessage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserMessage)
    }


    return fetch(`${API}/messages`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

//Save Exports
export const saveArticle = (newUserArticleRead) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserArticleRead)
    }


    return fetch(`${API}/readArticles`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

//Delete Exports
export const deleteArticle = (id) => {
    return fetch(`${API}/articles/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                dashboard.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}