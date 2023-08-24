import createElement from "../helpers/createElement";

class CreateFolderDialogue {
    constructor(parent) {
        this.parent = parent;
    }
    createFolderDialogue() {
        const container = createElement("div", { id: "createFolderContainer" }, "");
        const textInput = createElement("input", { type: "text", id: "createFolderTextInput" }, "");
        const submitButton = createElement("button", { id: "createFolderSubmitButton" }, "Submit");
        const closeButton = createElement("button", { id: "folderCloseButton" }, "Close");
        container.append(textInput, submitButton, closeButton);
        this.parent.append(container);
    }
}

export default CreateFolderDialogue;
