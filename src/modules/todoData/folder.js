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
        this.items = this.items.filter((item) => item !== itemToRemove);
    }
    addItem(itemToAdd) {
        this.items.push(itemToAdd);
    }
    getName() {
        return this.name;
    }
}

export default Folder;
