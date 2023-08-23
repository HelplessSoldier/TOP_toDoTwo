import createElement from "../helpers/createElement";

class DisplayTools {
    constructor(parent) {
        this.parent = parent;
    }
    folders(folderContainerList) {
        for (let folder of folderContainerList.folders) {
            const folderElement = createElement("div", { class: "folderContainers" }, "");
            const folderTitle = createElement("p", { class: "folderTitles" }, folder.getName());
            folderElement.append(folderTitle);
            this.parent.append(folderElement);
        }
    }
    items(folder) {
        for (let todoElement of folder.items) {
            const container = createElement("div", { class: "todoElementContainer" }, "");
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
            container.append(Title, DueDate, priority);
            this.parent.append(container);
        }
    }
}

export default DisplayTools;
