import "./style.css";

import Folder from "./modules/todoData/folder";
import TodoItem from "./modules/todoData/todoItem";
import DisplayTools from "./modules/display/display";
import CreateTodo from "./modules/userInput/createTodo";
import CreateFolderDialogue from "./modules/userInput/createFolder";
import {
  updateLocalStorage,
  retrieveItemsFromLocalStorage,
} from "./modules/helpers/LocalStorage";
import RemoveFolderDialogue from "./modules/userInput/removeFolderCheck";

const domRoot = document.getElementById("content");
const display = new DisplayTools(domRoot);
const folders = retrieveItemsFromLocalStorage();
let currentFolder = folders.getFirstFolder();

// open new item dialogue on new item button press
const createTodo = new CreateTodo(domRoot);
const openNewItemDialogueButton = document.getElementById(
  "openNewItemDialogueButton"
);
createTodo.createItemDialogue();
createItemContainer.style.display = "none";
openNewItemDialogueButton.addEventListener("click", () => {
  createItemContainer.style.display = "block";
  createFolderContainer.style.display = "none";
  areYouSureContainer.style.display = "none";
});

// open new folder dialogue on new folder button press
const createFolder = new CreateFolderDialogue(domRoot);
const newFolderButton = document.getElementById("newFolderDialogueButton");
createFolder.createFolderDialogue();
createFolderContainer.style.display = "none";
newFolderButton.addEventListener("click", () => {
  createFolderContainer.style.display = "block";
  createItemContainer.style.display = "none";
  areYouSureContainer.style.display = "none";
});

// open are you sure folder dialogue box
const areYouSure = new RemoveFolderDialogue(domRoot);
areYouSure.openRemoveFolderDialogue();
const areYouSureContainer = document.getElementById("areYouSureContainer");
const areYouSureSubmitButton = document.getElementById(
  "areYouSureConfirmButton"
);
const areYouSureCancelButton = document.getElementById(
  "areYouSureCancelButton"
);
areYouSureContainer.style.display = "none";

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
  const folderSubmitButton = document.getElementById(
    "createFolderSubmitButton"
  );
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
        alert("Due Date cannot be in the past.");
      } else if (dueDate > currentDate) {
        // get priority value from radio buttons
        if (priorityInputHigh.checked) {
          priority = "H";
        } else if (priorityInputMed.checked) {
          priority = "M";
        } else if (priorityInputLow.checked) {
          priority = "L";
        }

        // create and add new item to the selected folder
        let newItemTitle = titleInput.value;
        let newItemDueDate = dueDateInput.value;
        let newItem = new TodoItem(newItemTitle, newItemDueDate, priority);
        currentFolder.addItem(newItem);

        // display change
        todoElementContainer.remove();
        display.items(currentFolder);
        todoElementContainer = document.getElementById("todoElements");
        updateLocalStorage(folders);

        // reset input fields
        titleInput.value = "";
        dueDateInput.value = null;
        priorityInputHigh.checked = false;
        priorityInputMed.checked = false;
        priorityInputLow.checked = false;
      }
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
    // hacky, but solves a lot of errors
    currentFolder = folders.getFirstFolder();
    // ------------------------------------
    folderElementContainer.remove();
    display.folders(folders);
    folderElementContainer = document.getElementById("folders");
    folderTextInput.value = "";
    updateLocalStorage(folders);
  });

  // hide item dialogue when close button pressed
  todoCloseButton.addEventListener("click", () => {
    createItemContainer.style.display = "none";
    // reset input fields
    titleInput.value = "";
    dueDateInput.value = null;
    priorityInputHigh.checked = false;
    priorityInputMed.checked = false;
    priorityInputLow.checked = false;
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
    // remove selected class from folders children
    const folderElements =
      folderElementContainer.querySelectorAll(".folderContainers");
    folderElements.forEach((element) => {
      element.classList.remove("selected");
    });

    currentFolder = e.detail;
    todoElementContainer.remove();
    display.items(currentFolder);
    todoElementContainer = document.getElementById("todoElements");
  });

  // bring up 'are you sure' dialogue when remove folder button clicked
  document.addEventListener("removeFolderButtonClicked", (e) => {
    let folderToRemove = e.detail;
    areYouSureContainer.style.display = "block";
    createFolderContainer.style.display = "none";
    createItemContainer.style.display = "none";

    // de-select folderToRemove to avoid deleting folder accidentally
    // then close dialogue if user selects cancel
    areYouSureCancelButton.addEventListener("click", () => {
      folderToRemove = null;
      areYouSureContainer.style.display = "none";
    });

    // remove the folder and update display/local storage if the user selects yes
    areYouSureSubmitButton.addEventListener("click", () => {
      folders.removeFolder(folderToRemove);

      // re render folders on sidebar
      folderElementContainer.remove();
      display.folders(folders);
      folderElementContainer = document.getElementById("folders");

      // hide are you sure box
      areYouSureContainer.style.display = "none";

      // to ensure a folder is selected
      currentFolder = folders.getFirstFolder();

      // apply change to todoData.json
      updateLocalStorage(folders);
    });
  });
});
