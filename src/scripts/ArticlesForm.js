import { sendArticle } from "./DataAccess.js";
const dashboard = document.querySelector("#dashboard")

//
export const articleForm = () => {
    let html =`
    <div class="article">
    <div><label class="label" for="articleTitle">Title</label></div>
    <input type="text" name="articleTitle" class="input"/>
    </div>

    <div class="synopsis">
    <div><label class="label" for="articleSynopsis">Synopsis</label></div>
    <textarea name="articleSynopsis" class="input" rows="4" cols="50"></textarea>
    </div>

    <div class="url">
    <div><label class="label" for="articleURL">URL</label></div>
    <input type="text" name="articleURL" class="input" />
    </div>

    <button class="button" id="submitArticle">Submit New Article</button>
    `
    return html
    
}

//input assignment to json
dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitArticle") {
        // Get what the user typed into the form fields
        const userTitle = document.querySelector("input[name='articleTitle']").value
        const userSynopsis = document.querySelector("textarea[name='articleSynopsis']").value
        const userURL = document.querySelector("input[name='articleURL']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            title: userTitle,
            synopsis: userSynopsis,
            url: userURL
        }

        // Send the data to the API for permanent storage
        sendArticle(dataToSendToAPI)

        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    }
})