class QuestLine {
    constructor(title, quests) {
        this.title = title;
        this.quests = quests;

        this.currentQuest = 0;
        this.isVisible = false;
    }

    completeQuest(game) {
        const quest = this.quests[this.currentQuest];
        if (quest.isCompleted) {
            return undefined;
        }
        console.log(quest.isCompleted)
        return quest.check(game) ? 1 + this.currentQuest++ : false;        
    }
}