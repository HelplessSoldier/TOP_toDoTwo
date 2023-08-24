import createElement from "../helpers/createElement";

class RemoveFolderDialogue {
    constructor(parent) {
        this.parent = parent;
    }
    openRemoveFolderDialogue() {
        const container = createElement("div", { id: "areYouSureContainer" }, "");
        const title = createElement("h3", { id: "areYouSureTitle" }, "Deleting Folder");
        const text = createElement(
            "p",
            { id: "areYouSureText" },
            "Are you sure? This cannot be undone."
        );
        const buttonContainer = createElement("div", { id: "areYouSureButtonContainer" }, "");
        const confirmButton = createElement("button", { id: "areYouSureConfirmButton" }, "Yes");
        const cancelButton = createElement("button", { id: "areYouSureCancelButton" }, "Cancel");
        buttonContainer.append(confirmButton, cancelButton);
        container.append(title, text, buttonContainer);
        this.parent.append(container);
    }
}

export default RemoveFolderDialogue;
