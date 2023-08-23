import FolderContainer from "./modules/todoData/folderContainer";
import Folder from "./modules/todoData/folder";
import TodoItem from "./modules/todoData/todoItem";
import DisplayTools from "./modules/display/display";

const root = document.getElementById("content");
const display = new DisplayTools(root);
const folders = new FolderContainer();
const defaultFolder = new Folder("Main");
const item1 = new TodoItem("item1", "2077/24/23", 3);

folders.addFolder(defaultFolder);
console.log(folders);
defaultFolder.addItem(item1);

display.folders(folders);
display.items(defaultFolder);
