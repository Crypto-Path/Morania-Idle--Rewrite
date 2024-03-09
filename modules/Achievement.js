class Achievement {
    constructor(title, description, funcForCheck) {
        this.title = title;
        this.description = description;
        this.funcForCheck = funcForCheck;

        this.completed = false;
    }

    checkCompletion() {
        return this.complete = this.funcForCheck();
    }
}