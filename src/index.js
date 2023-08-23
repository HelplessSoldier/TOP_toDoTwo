import FolderContainer from "./modules/todoData/folderContainer";
import Folder from "./modules/todoData/folder";
import TodoItem from "./modules/todoData/todoItem";
import DisplayTools from "./modules/display/display";
import CreateTodo from "./modules/userInput/createTodo";

const root = document.getElementById("content");
const display = new DisplayTools(root);
const folders = new FolderContainer();
const defaultFolder = new Folder("Main");
const item1 = new TodoItem("item1", "2077/24/23", 3);
const createTodoDialogue = new CreateTodo(root);

createTodoDialogue.createItemDialogue();

item1.changePriority(2);

folders.addFolder(defaultFolder);
defaultFolder.addItem(item1);

display.folders(folders);
display.items(defaultFolder);

document.addEventListener("DOMContentLoaded", () => {
    const createItemContainer = document.getElementById("createItemContainer");
    const titleInput = document.getElementById("titleInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const priorityInputHigh = document.getElementById("radioHigh");
    const priorityInputMed = document.getElementById("radioMed");
    const priorityInputLow = document.getElementById("radioLow");
    const submitButton = document.getElementById("submitButton");
    const closeButton = document.getElementById("closeButton");

    submitButton.addEventListener("click", () => {
        if (titleInput.value && dueDateInput.value) {
            const dueDate = new Date(dueDateInput.value); // Convert input value to Date object
            const currentDate = new Date();

            if (dueDate > currentDate) {
                let priority;
                if (priorityInputHigh.checked) {
                    priority = 3;
                } else if (priorityInputMed.checked) {
                    priority = 2;
                } else if (priorityInputLow.checked) {
                    priority = 1;
                }
            } else {
                console.log("Due date must be in the future.");
            }
        }
    });
    closeButton.addEventListener("click", () => {
        createItemContainer.style.display = "none";
    });
});
