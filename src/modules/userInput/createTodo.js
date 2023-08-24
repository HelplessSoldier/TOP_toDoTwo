import createElement from "../helpers/createElement";

class CreateTodo {
    constructor(parent) {
        this.parent = parent;
    }
    createItemDialogue() {
        const container = createElement("div", { id: "createItemContainer" }, "");

        // title input field and tag
        const titleInputLabel = createElement(
            "label",
            { class: "InputLabel", for: "titleInput" },
            "Title: "
        );
        const titleInput = createElement("input", { id: "titleInput", type: "text" });

        // due date input field and tag
        const dueDateInputLabel = createElement(
            "label",
            { class: "InputLabel", for: "dueDateInput" },
            "DueDate: "
        );
        const dueDateInput = createElement("input", { id: "dueDateInput", type: "date" }, "");

        // priority labels and radio buttons
        const priorityInputLabel = createElement("label", { class: "InputLabel" }, "Priority: ");
        const radioContainer = createElement("div", { class: "radioContainer" }, "");
        const radioHigh = radioPair("High");
        const radioMid = radioPair("Med");
        const radioLow = radioPair("Low");
        radioContainer.append(radioHigh, radioMid, radioLow);

        // submitButton and closeButton
        const buttonContainer = createElement("div", { class: "buttonContainer" }, "");
        const submitButton = createElement("button", { id: "todoSubmitButton" }, "Submit");
        const closeButton = createElement("button", { id: "todoCloseButton" }, "Close");
        buttonContainer.append(submitButton, closeButton);

        container.append(
            titleInputLabel,
            titleInput,
            dueDateInputLabel,
            dueDateInput,
            priorityInputLabel,
            radioContainer,
            buttonContainer
        );

        this.parent.append(container);
    }
}

function radioPair(tag) {
    const container = createElement("div", { class: "radioContainer" }, "");
    const label = createElement("label", { for: `${tag}Radio`, class: "radioLabel" }, `${tag}`);
    const radioButton = createElement(
        "input",
        {
            type: "radio",
            name: "priority",
            id: `radio${tag}`,
        },
        ""
    );
    container.append(label, radioButton);
    return container;
}

export default CreateTodo;
