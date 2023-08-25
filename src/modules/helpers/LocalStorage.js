import Folder from "../todoData/folder";
import FolderContainer from "../todoData/folderContainer";
import TodoItem from "../todoData/todoItem";

function updateLocalStorage(folders) {
    // creates a json from the data's root point then saves to local storage
    const foldersJSON = JSON.stringify(folders);
    console.log(foldersJSON);
    localStorage.setItem("foldersData", foldersJSON);
}

function retrieveItemsFromLocalStorage() {
    // creates folders and todo items from the json, then returns their root element
    const storedFoldersJSON = localStorage.getItem("foldersData");
    const storedFolders = JSON.parse(storedFoldersJSON);
    if (storedFolders) {
        const folderContainer = new FolderContainer();
        for (let folder of storedFolders.folders) {
            let folderName = folder.name;
            let currentFolder = new Folder(folderName);
            folderContainer.addFolder(currentFolder);
            for (let item of folder.items) {
                let itemTitle = item.title;
                let itemDueDate = item.dueDate;
                let itemPriority = item.priority;
                let itemToAdd = new TodoItem(itemTitle, itemDueDate, itemPriority);
                currentFolder.addItem(itemToAdd);
            }
        }
        return folderContainer;
    } else {
        return _defaultData();
    }
}

function _defaultData() {
    // for first load or if local storage cleared
    const folderContainer = new FolderContainer();
    const folder = new Folder("Main");

    const todoItemH = new TodoItem("High Priority", "2077-11-11", "H");
    const todoItemM = new TodoItem("Medium Priority", "2077-11-12", "M");
    const todoItemL = new TodoItem("Low Priority", "2077-11-13", "L");

    folder.addItem(todoItemH);
    folder.addItem(todoItemM);
    folder.addItem(todoItemL);

    folderContainer.addFolder(folder);

    return folderContainer;
}

export { updateLocalStorage, retrieveItemsFromLocalStorage };
