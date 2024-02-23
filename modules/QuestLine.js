class QuestLine {
    constructor(title, quests) {
        this.title = title;
        this.quests = quests;

        this.currentQuest = 0;
        this.isVisible = false;
    }

    completeQuest(game) {
        for (let i = 0; i < this.quests.length; i++) {
            const quest = this.quests[i];
            if (quest.isCompleted) {
                continue;
            }
            return quest.check(game) ? 100 + this.currentQuest++ : false;            
        }
    }
}