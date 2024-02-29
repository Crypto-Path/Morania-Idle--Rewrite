class Quest {
    constructor(title, description, data, isCompleted = false) {
        this.title = title;
        this.description = description;
        this.data = JSON.parse(data);
        this.isComplete = isCompleted;

        let sampleQuest = {
            "items" : [["Stick",2]],
            "slain" : [["Slime-Green-Large", 5000]],
            "reward" : {
                "xp" : 1000,
                "items" : [["Stick", 1], ["Sword-Wooden", 1]]
            }
        }
    }

    check(game) {
        if (this.data["slain"]) {
            for (let i = 0; i < this.data["slain"].length; i++) {
                const slainReq = this.data["slain"][i];

                if (game.Monsters[slainReq[0]].deaths < slainReq[1]) {
                    return false;
                }
            }
        }
        
        let _items = this.data["items"]
        if (_items == undefined) {
            return this.getRewards(game)
        }
        
        if (game.inventory.hasAndRemoveItems(_items)) {
            return this.getRewards(game)
        }
    }

    getRewards(game) {
        this.isComplete = true;
        game.gainXP((this.data["reward"]["xp"]) ? this.data["reward"]["xp"] : 0);
        if (this.data["reward"]["items"]) {
            for (let i = 0; i < this.data["reward"]["items"].length; i++) {
                const itemData = this.data["reward"]["items"][i];
                for (let j = 0; j < itemData[1]; j++) {
                    const item = game.Items[itemData[0]];
                    game.inventory.addItem(item);             
                }
            }
        }
        game.inventory.drawItems()
        return true;
    }
}