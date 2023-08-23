class FolderContainer {
    constructor() {
        this.folders = [];
    }
    addFolder(folderToAdd) {
        this.folders.push(folderToAdd);
    }
    removeFolder(folderToRemove) {
        for (let folder of this.folders) {
            if (folder === folderToRemove) {
                this.folders.splice(folder, 1);
            }
        }
    }
}

export default FolderContainer;
