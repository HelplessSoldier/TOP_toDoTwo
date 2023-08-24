import "./style.css";

import Folder from "./modules/todoData/folder";
import TodoItem from "./modules/todoData/todoItem";
import DisplayTools from "./modules/display/display";
import CreateTodo from "./modules/userInput/createTodo";
import CreateFolderDialogue from "./modules/userInput/createFolder";
import { updateLocalStorage, retrieveItemsFromLocalStorage } from "./modules/helpers/LocalStorage";

const domRoot = document.getElementById("content");
const display = new DisplayTools(domRoot);
const folders = retrieveItemsFromLocalStorage();
let currentFolder = folders.getFirstFolder();

// open new item dialogue on new item button press
const createTodo = new CreateTodo(domRoot);
const openNewItemDialogueButton = document.getElementById("openNewItemDialogueButton");
createTodo.createItemDialogue();
createItemContainer.style.display = "none";
openNewItemDialogueButton.addEventListener("click", () => {
    createItemContainer.style.display = "block";
});

// open new folder dialogue on new folder button press
const createFolder = new CreateFolderDialogue(domRoot);
const newFolderButton = document.getElementById("newFolderDialogueButton");
createFolder.createFolderDialogue();
createFolderContainer.style.display = "none";
newFolderButton.addEventListener("click", () => {
    createFolderContainer.style.display = "block";
});

// add folders and todo items to dom
display.folders(folders);
display.items(currentFolder);

// wait for dom to be populated before attempting to select any elements
document.addEventListener("DOMContentLoaded", () => {
    // todo inputs
    const createItemContainer = document.getElementById("createItemContainer");
    const titleInput = document.getElementById("titleInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const priorityInputHigh = document.getElementById("radioHigh");
    const priorityInputMed = document.getElementById("radioMed");
    const priorityInputLow = document.getElementById("radioLow");
    const todoSubmitButton = document.getElementById("todoSubmitButton");
    const todoCloseButton = document.getElementById("todoCloseButton");
    let todoElementContainer = document.getElementById("todoElements");

    // folder inputs
    const folderTextInput = document.getElementById("createFolderTextInput");
    const folderSubmitButton = document.getElementById("createFolderSubmitButton");
    const folderCloseButton = document.getElementById("folderCloseButton");
    let folderElementContainer = document.getElementById("folders");

    // add todo item if fields filled and make sense
    todoSubmitButton.addEventListener("click", () => {
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
            updateLocalStorage(folders);
        }
    });
    // add folder if name filled
    // then update folders on site
    folderSubmitButton.addEventListener("click", () => {
        const newFolderName = folderTextInput.value;
        if (newFolderName) {
            let itemToAdd = new Folder(newFolderName);
            folders.addFolder(itemToAdd);
        }
        folderElementContainer.remove();
        display.folders(folders);
        folderElementContainer = document.getElementById("folders");
        updateLocalStorage(folders);
    });

    // hide item dialogue when close button pressed
    todoCloseButton.addEventListener("click", () => {
        createItemContainer.style.display = "none";
    });
    // hide folder dialogue when close button pressed
    folderCloseButton.addEventListener("click", () => {
        createFolderContainer.style.display = "none";
    });
    // update todo items when asked
    document.addEventListener("updateTodoItems", () => {
        todoElementContainer.remove();
        display.items(currentFolder);
        todoElementContainer = document.getElementById("todoElements");
        updateLocalStorage(folders);
    });
    // change currentFolder when folder title clicked
    // then update todo items to fit the new folder
    document.addEventListener("folderClicked", (e) => {
        currentFolder = e.detail;
        todoElementContainer.remove();
        display.items(currentFolder);
        todoElementContainer = document.getElementById("todoElements");
    });
});
