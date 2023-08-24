class FolderContainer {
    constructor() {
        this.folders = [];
    }
    addFolder(folderToAdd) {
        this.folders.push(folderToAdd);
    }
    removeFolder(folderToRemove) {
        const index = this.folders.indexOf(folderToRemove);
        if (index !== -1) {
            this.folders.splice(index, 1);
        }
    }
    getFirstFolder() {
        return this.folders[0];
    }
}

export default FolderContainer;
