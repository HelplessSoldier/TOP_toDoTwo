class TodoItem {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    changeTitle(newTitle) {
        this.title = newTitle;
    }
    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
    getTitle() {
        return this.title;
    }
    getDueDate() {
        return this.dueDate;
    }
    getPriority() {
        return this.priority;
    }
}

export default TodoItem;
