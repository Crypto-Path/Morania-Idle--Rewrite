class Inventory {
    constructor(slots) {
        this.slots = slots;
        this.inventory = []

        this.equipped = undefined;
        
        this.fuel = undefined;
        this.smelted = undefined;
        this.smelterResult = undefined;
        this.smeltingProgress = 0;
        this.smeltingTime = 1;
        this.canSmelt = true;
    }

    drawItems() {
        this.slots.forEach(slot => {
            if (this.inventory[slot.id] != undefined) {
                slot.parentElement.nextSibling.innerText = this.inventory[slot.id][1];
                const imageURL = getImageURL(this.inventory[slot.id][0].sprite);
                slot.setAttribute('src', imageURL);
            } else {
                slot.setAttribute('src', "");
                slot.parentElement.nextSibling.innerText = "";
            }
        });

        if (this.equipped){
            document.getElementById("EquippedSlot").src = getImageURL(this.equipped.sprite);
        } else {
            document.getElementById("EquippedSlot").src = "";
        }

        if (this.fuel)
            if (this.fuel[1] <= 0)
                this.fuel = undefined;
        if (this.smelted)
            if (this.smelted[1] <= 0)
                this.smelted = undefined;

        if (this.fuel) {
            document.getElementById("SmelterFuelSlotImage").parentElement.nextSibling.innerText = this.fuel[1];
        } else {
            document.getElementById("SmelterFuelSlotImage").parentElement.nextSibling.innerText = "";
            document.getElementById("SmelterFuelSlotImage").src = "";
        }
        if (this.smelted) {
            document.getElementById("SmelterOreSlotImage").parentElement.nextSibling.innerText = this.smelted[1];
        } else {
            document.getElementById("SmelterOreSlotImage").parentElement.nextSibling.innerText = "";
            document.getElementById("SmelterOreSlotImage").src = "";
        }
    }

    hasItem(itemName, amount = 1) {
        for (let i = 0; i < this.inventory.length; i++) {
            const item = this.inventory[i];
            if ((item[0].name == itemName) && (item[1] >= amount)) {
                return true;
            }
        }
        return false
    }

    hasItems(items) {
        for (const [itemName, amount] of items) {
            if (!this.hasItem(itemName, amount)) {
                return false;
            }
        }
        return true;
    }

    hasAndRemoveItem(itemName, amount = 1) {
        for (let i = 0; i < this.inventory.length; i++) {
            const item = this.inventory[i];
            if (item[0].name === itemName && item[1] >= amount) {
                if (item[1] > amount) {
                    item[1] -= amount;
                } else {
                    this.inventory.splice(i, 1);
                    this.drawItems()
                }
                return true;
            }
        }
        return false;
    }

    hasAndRemoveItems(items) {
        if (!this.hasItems(items)) {
            return false;
        }

        for (const [itemName, amount] of items) {
            const removed = this.hasAndRemoveItem(itemName, amount);
            if (!removed) {
                this.drawItems()
                return false;
            }
        }

        return true;
    }

    addItem(itemToAdd, count = 1) {
        for (let i = 0; i < this.inventory.length; i++) {
            const item = this.inventory[i];
            if (item[0].name === itemToAdd.name) {
                item[1] += count;
                this.drawItems()
                return true;
            }
        }
        this.inventory.push([itemToAdd, count]);
        this.drawItems()
        return false;
    }

    addItems(items) {
        for (const itemToAdd of items) {
            this.addItem(itemToAdd, 1);
        }
        this.drawItems()
    }

    removeItem(itemName, amount = 1) {console.log(itemName);
        const index = this.inventory.findIndex(item => item[0].name === itemName && item[1] >= amount);
        if (index !== -1) {
            const item = this.inventory[index];
            if (item[1] > amount) {
                item[1] -= amount;
            } else {
                this.inventory.splice(index, 1);
            }
            this.drawItems()
            return true;
        }
        this.drawItems()
        return false;
    }
}