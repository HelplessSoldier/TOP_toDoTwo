import Folder from "../todoData/folder";
import FolderContainer from "../todoData/folderContainer";
import TodoItem from "../todoData/todoItem";

function updateLocalStorage(folders) {
    const foldersJSON = JSON.stringify(folders);
    console.log(foldersJSON);
    localStorage.setItem("foldersData", foldersJSON);
}

function retrieveItemsFromLocalStorage() {
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
        return defaultData();
    }
}

function defaultData() {
    const folderContainer = new FolderContainer();
    const folder = new Folder("Main");
    const todoItem = new TodoItem("Default item", "2077/11/11", 3);
    folder.addItem(todoItem);
    folderContainer.addFolder(folder);
    return folderContainer;
}

export { updateLocalStorage, retrieveItemsFromLocalStorage };
