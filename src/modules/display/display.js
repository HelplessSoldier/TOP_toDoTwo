import createElement from "../helpers/createElement";

class DisplayTools {
    constructor(parent) {
        this.parent = parent;
    }
    folders(folderContainerList) {
        const folderContainer = createElement("div", { id: "folders" }, "");
        for (let folder of folderContainerList.folders) {
            const folderElement = createElement("div", { class: "folderContainers" }, "");
            const folderTitle = createElement("p", { class: "folderTitles" }, folder.getName());
            folderElement.append(folderTitle);
            folderContainer.append(folderElement);
        }
        this.parent.append(folderContainer);
    }
    items(folder) {
        const todoElements = createElement("div", { id: "todoElements" }, "");
        for (let todoElement of folder.items) {
            const todoElementContainer = createElement("div", { class: "todoElement" }, "");
            const Title = createElement("p", { class: "todoElementTitle" }, todoElement.getTitle());
            const DueDate = createElement(
                "p",
                { class: "todoElementDueDate" },
                todoElement.getDueDate()
            );
            const priority = createElement(
                "p",
                { class: "todoElementPriority" },
                todoElement.getPriority()
            );
            todoElementContainer.append(Title, DueDate, priority);
            todoElements.append(todoElementContainer);
        }
        this.parent.append(todoElements);
    }
}

export default DisplayTools;
