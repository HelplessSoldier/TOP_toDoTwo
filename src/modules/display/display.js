import createElement from "../helpers/createElement";
import dispatchEvent from "../helpers/dispatchEvent";

class DisplayTools {
    constructor(parent) {
        this.parent = parent;
    }
    folders(folderContainerList) {
        // created dom items for the folders sidebar
        const folderContainer = createElement("div", { id: "folders" }, "");
        for (let folder of folderContainerList.folders) {
            const folderElement = createElement("div", { class: "folderContainers" }, "");
            const folderTitle = createElement("p", { class: "folderTitles" }, folder.getName());
            folderElement.addEventListener("click", () => {
                dispatchEvent("folderClicked", folder);
                folderElement.classList.add("selected");
            });

            // remove button for each folder, except for main
            // X svg hardcoded because i was having problems importing
            // don't allow main to be deleted, was having errors when no folder existed
            const removeButtonContainer = createElement("div", { id: "removeButtonContainer" }, "");
            if (folder.name !== "Main") {
                const removeButton = createElement("div", { class: "removeButtonSvg" }, "");
                const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElement.setAttribute("width", "40px");
                svgElement.setAttribute("height", "40px");
                svgElement.setAttribute("viewBox", "0 0 24 24");

                const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                pathElement.setAttribute("d", "M7 7.00006L17 17.0001M7 17.0001L17 7.00006");
                pathElement.setAttribute("stroke", "#b83d14");
                pathElement.setAttribute("stroke-width", "2.5");
                pathElement.setAttribute("stroke-linecap", "round");
                pathElement.setAttribute("stroke-linejoin", "round");

                svgElement.appendChild(pathElement);
                removeButton.appendChild(svgElement);

                removeButton.addEventListener("click", () => {
                    dispatchEvent("removeFolderButtonClicked", folder);
                });
                removeButtonContainer.append(removeButton);
            }
            folderElement.append(folderTitle, removeButtonContainer);
            folderContainer.append(folderElement);
        }
        this.parent.append(folderContainer);
    }
    items(folder) {
        console.log(folder.name);
        // creates dom items for the todo items within a folder

        const todoElements = createElement("div", { id: "todoElements" }, "");
        for (let todoElement of folder.items) {
            let priorityColorClass;
            if (todoElement.getPriority() === "H") {
                priorityColorClass = "priorityColorClassHigh";
            } else if (todoElement.getPriority() === "M") {
                priorityColorClass = "priorityColorClassMid";
            } else if (todoElement.getPriority() === "L") {
                priorityColorClass = "priorityColorClassLow";
            }
            const todoElementContainer = createElement(
                "div",
                { class: `todoElement ${priorityColorClass}` },
                ""
            );

            const Title = createElement("p", { class: "todoElementTitle" }, todoElement.getTitle());
            const DueDate = createElement(
                "p",
                { class: "todoElementDueDate" },
                todoElement.getDueDate()
            );

            // remove button for each item
            // X svg hardcoded because i was having problems importing
            const removeButton = createElement("div", { class: "removeButtonSvg" }, "");
            const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElement.setAttribute("width", "40px");
            svgElement.setAttribute("height", "40px");
            svgElement.setAttribute("viewBox", "0 0 24 24");

            const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathElement.setAttribute("d", "M7 7.00006L17 17.0001M7 17.0001L17 7.00006");
            pathElement.setAttribute("stroke", "#b83d14");
            pathElement.setAttribute("stroke-width", "2.5");
            pathElement.setAttribute("stroke-linecap", "round");
            pathElement.setAttribute("stroke-linejoin", "round");

            svgElement.appendChild(pathElement);
            removeButton.appendChild(svgElement);

            removeButton.addEventListener("click", () => {
                folder.removeItem(todoElement);
                dispatchEvent("updateTodoItems");
            });

            todoElementContainer.append(Title, DueDate, removeButton);
            todoElements.append(todoElementContainer);
        }
        this.parent.append(todoElements);
    }
}

export default DisplayTools;
