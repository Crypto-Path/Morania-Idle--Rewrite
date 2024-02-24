class SaveAndLoad {
    constructor(game, date) {
        this.game = game;
        this.date = date.toLocaleString();
        this.loaded = false;
    }

    reeval() {
        this.inventory = this.game.inventory.inventory;
        this.equipped = this.game.inventory.equipped;
        this.monsterStats = this.game.Monsters;
        this.playerStats = [this.game.playerXP, this.game.playerLevel, this.game.playerTotalXP]
        return [this.date, this.inventory, this.equipped, this.monsterStats, this.playerStats];
    }

    save(ls = true, auto = false) {
        if (ls) {
            localStorage['file'] = JSON.stringify(this.reeval());
            if (auto) {
                createNotification("Game auto saved!");
                return;
            }
            createNotification("Successfully saved!")
            return;
        }
        // const saveFileText = JSON.stringify(this.reeval())
        // const file = new File([saveFileText], `save-${Date.now()}.txt`, {
        //     type: 'text/plain',
        // })
          
        // const link = document.createElement('a')
        // const url = URL.createObjectURL(file)
        
        // link.href = url
        // link.download = file.name
        // document.body.appendChild(link)
        // link.click()
        
        // document.body.removeChild(link)
        // window.URL.revokeObjectURL(url)
    }

    load() {
        console.log("File: Retrieving Save Data")
        let newSave = false;
        try {
            if (localStorage['file'].length < 100) {
                newSave = true;
            }
        } catch (error) {
            localStorage['file'] = ""
            newSave = true;
        }
        if (newSave) {
            let i = 5000
            setTimeout(() => {
                createNotification("Click the slime to begin");
            }, i + 1000)
            setTimeout(() => {
                createNotification("Once you have enough green slime, craft a stick. It can be your first weapon");
            }, i * 2)
            setTimeout(() => {
                createNotification("Use arrow keys and scroll to pan and zoom");
            }, i * 3)
            return;
        }
        const data = JSON.parse(localStorage['file']);
        this.date = data[0].toLocaleString()
        console.log("File: Start Date Overwritten")
        this.game.inventory.inventory = data[1];
        console.log("File: Inventory Overwritten")
        this.game.inventory.equipped = data[2] || undefined;
        console.log("File: Equipment Overwritten")
        Object.entries(data[3]).forEach(([id, monster]) => {
            this.game.Monsters[id].deaths = monster.deaths;
        });
        console.log("File: Monster Data Overwritten")
        this.game.playerXP = data[4][0];
        this.game.playerLevel = data[4][1];
        this.game.playerTotalXP = data[4][2];
        console.log("File: Player Stats Overwritten")

        this.game.inventory.drawItems();
        console.log("File: Redrawing Inventory")
        if (data[2]) {
            document.getElementById("EquippedSlot").src = getImageURL(this.game.inventory.equipped.sprite);
            console.log("File: Redrawing Equipped Weapon")
        }
        
        this.game.gainXP(0);
        console.log("File: Redrawing XPBar")
        this.game.updateStats();
        console.log("File: Redrawing Player Stats")

        this.loaded = true;
        console.log("File: Successfully Load Save File")
        setTimeout(() => {
            createNotification("Game successfully loaded!")
        }, 1300);
        return data;
    }

    getSaveCoverData() {
        const data = JSON.parse(localStorage['file']);
        return [data[0].toLocaleString(), data[4][0], data[4][1], data[2] || undefined]
    }
}