import { deleteMessage, getMessages, sendMessages } from "./DataAccess.js"

const dashboard = document.querySelector("#dashboard")

export const buttonForEvent =() => {
    let html = `
    <div>
    <button id="newEvent">New Message</button>
    </div>
    `
    return html
      
}

export const Messages = () => {
const messages = getMessages()

return `<h3>Chat</h3>
        <div id="message-list">
            ${messages.map(message => {
                return `<div class="message-container">
                            <div class="message-name">${message.name}:</div>
                            <div class="message-text-container"><p class="message-text">${message.content}</p></div> 
                            <button class="delete-button" id="delete-message--${message.id}" value="${message.id}">Delete</button>
                            </div>
                        </div>`}).join("")
            }
        </div>
        `
}

dashboard.addEventListener("click", event => {
    if (event.target.id.startsWith("delete-message--")) {
        deleteMessage(parseInt(event.target.value))
    }
})

dashboard.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "new-message-save-button") {
        const userName = document.querySelector('input[id="new-message-username"]').value
        const userMessage = document.querySelector('textarea[name="new-message-input"]').value

        if(!userName || !userMessage){
            window.alert('Please enter a user name and message before hitting send')
            return
        }

        else{
            const newMessageObject = {
                userName: userName,
                message: userMessage
            }

            sendMessages(newMessageObject)
        }
    }
})