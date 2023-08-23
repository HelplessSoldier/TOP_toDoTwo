class Folder {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
    changeName(newName) {
        for (let todoItem in this.items) {
            todoItem.folder = newName;
        }
        this.name = newName;
    }
    removeItem(itemToRemove) {
        for (let item in this.items) {
            if (item === itemToRemove) {
                this.items.splice(item, 1);
            }
        }
    }
    addItem(itemToAdd) {
        this.items.push(itemToAdd);
    }
    getName() {
        return this.name;
    }
}

export default Folder;
