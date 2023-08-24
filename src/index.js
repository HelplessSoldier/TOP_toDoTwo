import "./style.css";

import FolderContainer from "./modules/todoData/folderContainer";
import Folder from "./modules/todoData/folder";
import TodoItem from "./modules/todoData/todoItem";
import DisplayTools from "./modules/display/display";
import CreateTodo from "./modules/userInput/createTodo";

const domRoot = document.getElementById("content");
const display = new DisplayTools(domRoot);
const folders = new FolderContainer();
const defaultFolder = new Folder("Main");
const secondFolder = new Folder("second");
let currentFolder = defaultFolder;
const item1 = new TodoItem("item1", "2077/24/23", 3);
const item2 = new TodoItem("item2", "1776/12/12", 2);
const createTodoDialogue = new CreateTodo(domRoot);
const openNewItemDialogueButton = document.getElementById("openNewItemDialogueButton");

// open new item dialogue on new item button press
createTodoDialogue.createItemDialogue();
createItemContainer.style.display = "none";
openNewItemDialogueButton.addEventListener("click", () => {
    createItemContainer.style.display = "block";
});

// throwing stuff on page to test //
folders.addFolder(defaultFolder);
folders.addFolder(secondFolder);
defaultFolder.addItem(item1);
defaultFolder.addItem(item2);

display.folders(folders);
display.items(defaultFolder);
// -------------------------------//

document.addEventListener("DOMContentLoaded", () => {
    const createItemContainer = document.getElementById("createItemContainer");
    const titleInput = document.getElementById("titleInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const priorityInputHigh = document.getElementById("radioHigh");
    const priorityInputMed = document.getElementById("radioMed");
    const priorityInputLow = document.getElementById("radioLow");
    const submitButton = document.getElementById("submitButton");
    const closeButton = document.getElementById("closeButton");
    let todoElementContainer = document.getElementById("todoElements");

    submitButton.addEventListener("click", () => {
        if (titleInput.value && dueDateInput.value) {
            const dueDate = new Date(dueDateInput.value);
            const currentDate = new Date();
            let priority;

            // ensure due date makes sense
            if (dueDate < currentDate) {
                console.log("Due date must be in the future.");
            } else {
                // get priority value from radio buttons
                if (priorityInputHigh.checked) {
                    priority = 3;
                } else if (priorityInputMed.checked) {
                    priority = 2;
                } else if (priorityInputLow.checked) {
                    priority = 1;
                }
            }
            let newItemTitle = titleInput.value;
            let newItemDueDate = dueDateInput.value;
            let newItem = new TodoItem(newItemTitle, newItemDueDate, priority);
            currentFolder.addItem(newItem);

            // display change
            todoElementContainer.remove();
            display.items(currentFolder);
            todoElementContainer = document.getElementById("todoElements");
        }
    });
    // hide item dialogue when close button pressed
    closeButton.addEventListener("click", () => {
        createItemContainer.style.display = "none";
    });
    // update todo items when asked
    document.addEventListener("updateTodoItems", () => {
        todoElementContainer.remove();
        display.items(currentFolder);
        todoElementContainer = document.getElementById("todoElements");
    });
});
