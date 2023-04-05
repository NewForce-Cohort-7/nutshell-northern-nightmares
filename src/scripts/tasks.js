import {deleteTask, getTasks } from "./DataAccess.js"


const dashboard = document.querySelector("#dashboard")

 dashboard.addEventListener("click", click => {
        if (click.target.id.startsWith("task--")) {
            const [,taskId] = click.target.id.split("--")
            deleteTask(parseInt(taskId))
            .then(
                () => {
                    dashboard.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
        }
    })

    // dashboard.addEventListener(
    //     "change",
    //     (event) => {
    //         if (event.target.id === "tasks") {
    //             const [taskId] = event.target.value.split("--")
    
               
    //             const completion = { 
    //                 taskId: parseInt(taskId),
    //                 // date_created: new Date().toISOString()
    
    //             }
    //             /*
    //                 Invoke the function that performs the POST request
    //                 to the `completions` resource for your API. Send the
    //                 completion object as a parameter.
    //              */
    //             saveCompletion(completion)
    
    //         }
    //     }
    // )
    


    const convertTaskToListElement = (taskObject) => {
            return `<li class="taskDone">
            <a>${taskObject.event} </a>
            <button class="task__delete" id="task--${taskObject.id}">-
            Delete
            </button>
       
    </li>`
    }


        export const Tasks = () => {
        const tasks = getTasks()
        const sortTasks = tasks.sort((a,b) => new Date(a.date) - new Date(b.date))
    
        let html = `
            <ul class="tasksList"> 
                ${
                    sortTasks.map(convertTaskToListElement).join("")
                }
            </ul>
        `
    
        return html
    }
