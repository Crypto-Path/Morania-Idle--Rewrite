class Game {
    constructor() {
        console.log("Initiating Game Data")
        this.strength = 1;
        this.dcm = 1; // Drop Chance Multiplier

        this.Items = {
            /* General Materials */
            "Grass" : new Item("Item_Grass", "Grass", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Stick" : new Item("Item_Stick", "Stick", "Unset", "{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":1}"),
            "Rock" : new Item("Item_Pebble", "Rock", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Bone" : new Item("Item_Bone", "Bone", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Skull" : new Item("Item_Skull", "Skull", "Unset", "{\"Traits\":[\"Material\"]}"),
            "String" : new Item("Item_String", "String", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Paper" : new Item("Item_Paper", "Paper", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Paper-Used" : new Item("Item_Paper_Used", "Used Paper", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Paper-Mapped" : new Item("Item_Paper_Mapped", "Map", "Unset", "{\"Traits\":[\"Consumable\"]}"),
            "Handle-Wooden" : new Item("Item_Handle_Sword", "Sword Handle", "Unset", "{\"Traits\":[\"Material\"]}"),

            /* Metals */
            "Copper" : new Item("Item_Copper", "Copper", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Iron" : new Item("Item_Iron", "Iron", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Silver" : new Item("Item_Silver", "Silver", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Jade" : new Item("Item_Jade", "Jade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Gold" : new Item("Item_Gold", "Gold", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Platinum" : new Item("Item_Platinum", "Platinum", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Onyx" : new Item("Item_Onyx", "Onyx", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Agate" : new Item("Item_Agate", "Agate", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Pearl" : new Item("Item_Pearl", "Pearl", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Turquoise" : new Item("Item_Turquoise", "Turquoise", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Moonstone" : new Item("Item_Moonstone", "Moonstone", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Garnet" : new Item("Item_Garnet", "Garnet", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Amethyst" : new Item("Item_Amethyst", "Amethyst", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Citrine" : new Item("Item_Citrine", "Citrine", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Peridot" : new Item("Item_Peridot", "Peridot", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Topaz" : new Item("Item_Topaz", "Topaz", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Aquamarine" : new Item("Item_Aquamarine", "Aquamarine", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Tanzanite" : new Item("Item_Tanzanite", "Tanzanite", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Opal" : new Item("Item_Opal", "Opal", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Lapis Lazuli" : new Item("Item_Lapis_Lazuli", "Lapis Lazuli", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Tourmaline" : new Item("Item_Tourmaline", "Tourmaline", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Ruby" : new Item("Item_Ruby", "Ruby", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sapphire" : new Item("Item_Sapphire", "Sapphire", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Emerald" : new Item("Item_Emerald", "Emerald", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Diamond" : new Item("Item_Diamond", "Diamond", "Unset", "{\"Traits\":[\"Material\"]}"),
            "DarkGem" : new Item("Item_DarkGem", "DarkGem", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Underlordium" : new Item("Item_Underlordium", "Underlordium", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Overlordium" : new Item("Item_Overlordium", "Overlordium", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Archlordium" : new Item("Item_Archlordium", "Archlordium", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sageium" : new Item("Item_Sageium", "Sageium", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Monarchion" : new Item("Item_Monarchion", "Monarchion", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Moranium" : new Item("Item_Moranium", "Moranium", "Unset", "{\"Traits\":[\"Material\"]}"),

            /* Slime Set */
            "Slime-Green" : new Item("Item_Slime_Green", "Green Slime", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Slime-Yellow" : new Item("Item_Slime_Yellow", "Yellow Slime", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Slime-Blue" : new Item("Item_Slime_Blue", "Blue Slime", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Slime-Red" : new Item("Item_Slime_Red", "Red Slime", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Slime-Sword-Green" : new Item("Sword_Slime_Green", "Green Slime Sword","Unset","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":15,\"DCM\":10}"),
            "Slime-Sword-Yellow" : new Item("Sword_Slime_Yellow", "Yellow Slime Sword","Unset","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":18,\"DCM\":10}"),
            "Slime-Sword-Blue" : new Item("Sword_Slime_Blue", "Blue Slime Sword","Unset","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":21,\"DCM\":10}"),
            "Slime-Sword-Red" : new Item("Sword_Slime_Red", "Red Slime Sword","Unset","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":24,\"DCM\":10}"),
            "Slime-Sword" : new Item("Sword_Slime", "Slime Sword","Unset","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":28,\"DCM\":20}"),

            /* Wood Set */
            "Blade-Wooden" : new Item("Blade_Wooden", "Wooden Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Wooden" : new Item("Sword_Wooden", "Wooden Sword","Unset","{\"Traits\":[\"Equipable\"],\"Damage\":5}"),

            /* Bone Set */
            "Blade-Bone" : new Item("Blade_Bone", "Bone Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Bone" : new Item("Sword_Bone", "Bone Sword", "Unset","{\"Traits\":[\"Equipable\"],\"Damage\":12,\"XPM\":25}"),

            /* Stone Set */
            "Blade-Stone" : new Item("Blade_Stone", "Stone Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Stone" : new Item("Sword_Stone", "Stone Sword", "Unset","{\"Traits\":[\"Equipable\"],\"Damage\":32}"),

            /* Grass Set */
            "Blade-Grass" : new Item("Blade_Grass", "Grass Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Grass" : new Item("Sword_Grass", "Grass Sword", "Unset","{\"Traits\":[\"Equipable\"],\"Damage\":40}"),

            /* Silver Set */
            "Blade-Silver" : new Item("Blade_Silver", "Silver Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Silver" : new Item("Sword_Silver", "Silver Sword", "Unset","{\"Traits\":[\"Equipable\"],\"Damage\":70}"),
        }

        this.Recipes = { // [[Item, Amount], [AnotherItem, Amount]]
            "String" : [[this.Items["Slime-Green"], 5],[this.Items["Slime-Yellow"], 2]],
            "Grass" : [[this.Items["Slime-Green"], 2]],
            "Stick" : [[this.Items["Slime-Green"], 40]],
            "Bone" : [[this.Items["Slime-Green"], 15],[this.Items["Slime-Red"], 10]],
            "Rock" : [[this.Items["Slime-Blue"], 20],[this.Items["Slime-Red"], 20]],
            "Copper" : [[this.Items["Slime-Blue"], 100],[this.Items["Slime-Red"], 100]],
            "Iron" : [[this.Items["Slime-Blue"], 250],[this.Items["Slime-Red"], 250]],
            "Silver" : [[this.Items["Slime-Yellow"], 5000],[this.Items["Slime-Blue"], 1000],[this.Items["Slime-Red"], 1000]],
            "Handle-Wooden" : [[this.Items["Stick"], 2],[this.Items["String"], 2]],
            "Blade-Wooden" : [[this.Items["Stick"], 4]],
            "Sword-Wooden" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 4],[this.Items["Blade-Wooden"], 1]],
            "Slime-Sword-Green" : [[this.Items["Slime-Green"], 10000]],
            "Slime-Sword-Yellow" : [[this.Items["Slime-Yellow"], 10000]],
            "Slime-Sword-Blue" : [[this.Items["Slime-Blue"], 10000]],
            "Slime-Sword-Red" : [[this.Items["Slime-Red"], 10000]],
            "Slime-Sword" : [[this.Items["Slime-Sword-Green"], 1], [this.Items["Slime-Sword-Yellow"], 1], [this.Items["Slime-Sword-Blue"], 1], [this.Items["Slime-Sword-Red"], 1]],
            "Blade-Bone" : [[this.Items["Bone"], 16]],
            "Sword-Bone" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 4],[this.Items["Blade-Bone"], 1]],
            "Blade-Stone" : [[this.Items["Rock"], 32]],
            "Sword-Stone" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 8],[this.Items["Blade-Stone"], 1]],
            "Blade-Grass" : [[this.Items["Grass"], 25000]],
            "Sword-Grass" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 2],[this.Items["Blade-Grass"], 1]],
            "Blade-Silver" : [[this.Items["Silver"], 48]],
            "Sword-Silver" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 16],[this.Items["Blade-Silver"], 1]],
        }
        
        this.Catagories = {
            "All" : [],
            "Misc" : ["String", "Grass", "Stick", "Bone", "Rock"],
            "Metals" : ["Copper", "Iron", "Silver"],
            "Weaponry" : ["Handle-Wooden", "Blade-Wooden", "Sword-Wooden", "Slime-Sword-Green", "Slime-Sword-Yellow", "Slime-Sword-Blue", "Slime-Sword-Red", "Blade-Bone", "Sword-Bone", "Blade-Stone", "Sword-Stone", "Blade-Grass", "Sword-Grass", "Blade-Silver", "Sword-Silver"],
            "Alchemy" : [],
            "Idle" : []
        }

        this.CategoryNames = ["All", "Misc", "Metals", "Weaponry", "Alchemy", "Idle"]
        this.genCraftingMenu(this.CategoryNames[0])
        this.nextCategory();

        this.Monsters = {
            "Slime-Green-Small" : new Monster("Monster_Slime_Small_Green", "Small Green Slime", 10, 0, [ new DropChance(this.Items["Slime-Green"], 0.12, 4), new DropChance(this.Items["Slime-Sword-Green"], 0.00001, 1)] ),
            "Slime-Yellow-Small" :new Monster("Monster_Slime_Small_Yellow", "Small Yellow Slime", 10, 0, [ new DropChance(this.Items["Slime-Yellow"], 0.12, 3), new DropChance(this.Items["Slime-Yellow-Green"], 0.00001, 1) ]),
            "Slime-Blue-Small" :new Monster("Monster_Slime_Small_Blue", "Small Blue Slime", 10, 0, [ new DropChance(this.Items["Slime-Blue"], 0.12, 2), new DropChance(this.Items["Slime-Blue-Green"], 0.00001, 1) ]),
            "Slime-Red-Small" :new Monster("Monster_Slime_Small_Red", "Small Red Slime", 10, 0, [ new DropChance(this.Items["Slime-Red"], 0.12, 1), new DropChance(this.Items["Slime-Red-Green"], 0.00001, 1) ]),
            "Slime-Green" : new Monster("Monster_Slime_Green", "Green Slime", 100, 0, [ new DropChance(this.Items["Slime-Green"], 0.14, 8), new DropChance(this.Items["Slime-Sword-Green"], 0.00002, 1)] ),
            "Slime-Yellow" :new Monster("Monster_Slime_Yellow", "Yellow Slime", 100, 0, [ new DropChance(this.Items["Slime-Yellow"], 0.14, 6), new DropChance(this.Items["Slime-Yellow-Green"], 0.00002, 1) ]),
            "Slime-Blue" :new Monster("Monster_Slime_Blue", "Blue Slime", 100, 0, [ new DropChance(this.Items["Slime-Blue"], 0.14, 4), new DropChance(this.Items["Slime-Blue-Green"], 0.00002, 1) ]),
            "Slime-Red" :new Monster("Monster_Slime_Red", "Red Slime", 100, 0, [ new DropChance(this.Items["Slime-Red"], 0.14, 2), new DropChance(this.Items["Slime-Red-Green"], 0.00002, 1) ]),
            "Slime-Green-Large" : new Monster("Monster_Slime_Large_Green", "Green Slime", 300, 0, [ new DropChance(this.Items["Slime-Green"], 0.16, 12), new DropChance(this.Items["Slime-Sword-Green"], 0.00003, 1)] ),
            "Slime-Yellow-Large" :new Monster("Monster_Slime_Large_Yellow", "Yellow Slime", 300, 0, [ new DropChance(this.Items["Slime-Yellow"], 0.16, 9), new DropChance(this.Items["Slime-Yellow-Green"], 0.00003, 1) ]),
            "Slime-Blue-Large" :new Monster("Monster_Slime_Large_Blue", "Blue Slime", 300, 0, [ new DropChance(this.Items["Slime-Blue"], 0.16, 6), new DropChance(this.Items["Slime-Blue-Green"], 0.00003, 1) ]),
            "Slime-Red-Large" :new Monster("Monster_Slime_Large_Red", "Red Slime", 300, 0, [ new DropChance(this.Items["Slime-Red"], 0.16, 3), new DropChance(this.Items["Slime-Red-Green"], 0.00003, 1) ]),
            "Slime-Green-Massive" : new Monster("Monster_Slime_Massive_Green", "Green Slime", 1000, 0, [ new DropChance(this.Items["Slime-Green"], 0.18, 16), new DropChance(this.Items["Slime-Sword-Green"], 0.00004, 1)] ),
            "Slime-Yellow-Massive" :new Monster("Monster_Slime_Massive_Yellow", "Yellow Slime", 1000, 0, [ new DropChance(this.Items["Slime-Yellow"], 0.18, 12), new DropChance(this.Items["Slime-Yellow-Green"], 0.00004, 1) ]),
            "Slime-Blue-Massive" :new Monster("Monster_Slime_Massive_Blue", "Blue Slime", 1000, 0, [ new DropChance(this.Items["Slime-Blue"], 0.18, 8), new DropChance(this.Items["Slime-Blue-Green"], 0.00004, 1) ]),
            "Slime-Red-Massive" :new Monster("Monster_Slime_Massive_Red", "Red Slime", 1000, 0, [ new DropChance(this.Items["Slime-Red"], 0.18, 4), new DropChance(this.Items["Slime-Red-Green"], 0.00004, 1) ]),
        }

        this.Areas = [
            new Area("Icon_Area_Plains_Green", "Green Plains", [[this.Monsters["Slime-Green-Small"], 1]]),
            new Area("Icon_Area_Plains_Lime", "Lime Plains", [[this.Monsters["Slime-Green-Small"], 0.5], [this.Monsters["Slime-Yellow-Small"], 0.5]]),
            new Area("Icon_Area_Plains_Purple", "Purple Plains", [[this.Monsters["Slime-Blue-Small"], 0.5], [this.Monsters["Slime-Red-Small"], 0.5]]),
            new Area("Icon_Area_Plains_Small", "Small Plains", [[this.Monsters["Slime-Green-Small"], 0.5], [this.Monsters["Slime-Yellow-Small"], 0.5], [this.Monsters["Slime-Blue-Small"], 0.5], [this.Monsters["Slime-Red-Small"], 0.5]]),
            new Area("Icon_Area_Plains_Medium", "Medium Plains", [[this.Monsters["Slime-Green"], 0.5], [this.Monsters["Slime-Yellow"], 0.5], [this.Monsters["Slime-Blue"], 0.5], [this.Monsters["Slime-Red"], 0.5]]),
            new Area("Icon_Area_Plains_Large", "Large Plains", [[this.Monsters["Slime-Green-Large"], 0.5], [this.Monsters["Slime-Yellow-Large"], 0.5], [this.Monsters["Slime-Blue-Large"], 0.5], [this.Monsters["Slime-Red-Large"], 0.5]]),
            new Area("Icon_Area_Plains_Large", "Large Plains", [[this.Monsters["Slime-Green-Massive"], 0.5], [this.Monsters["Slime-Yellow-Massive"], 0.5], [this.Monsters["Slime-Blue-Massive"], 0.5], [this.Monsters["Slime-Red-Massive"], 0.5]]),
        ]

        this.playerLevel = 1;
        this.playerXP = 0;
        this.playerTotalXP = 0;

        this.inventory = null;

        this.currentArea = 0
        this.gotoArea(0)
        this.newMonster();
    }
    
    nextCategory() {
        const currentIndex = this.CategoryNames.indexOf(this.currentCategory);
        const nextIndex = (currentIndex + 1) % this.CategoryNames.length;
        this.currentCategory = this.CategoryNames[nextIndex];
        this.genCraftingMenu(this.currentCategory);
    }
    
    previousCategory() {
        const currentIndex = this.CategoryNames.indexOf(this.currentCategory);
        const previousIndex = (currentIndex - 1 + this.CategoryNames.length) % this.CategoryNames.length;
        this.currentCategory = this.CategoryNames[previousIndex];
        this.genCraftingMenu(this.currentCategory);
    }

    previousArea() {
        this.currentArea = Math.max(this.currentArea - 1, 0);
        this.area = this.Areas[this.currentArea];
        AreaName.innerText = this.Areas[this.currentArea].name;
        this.newMonster();
    }

    nextArea() {
        this.currentArea = Math.min(this.currentArea + 1, this.Areas.length - 1);
        AreaName.innerText = this.Areas[this.currentArea].name;
        this.area = this.Areas[this.currentArea];
        this.newMonster();
    }
    

    gotoArea(area) {
        this.currentArea = area;
        this.area = this.Areas[this.currentArea];
        AreaName.innerText = this.Areas[this.currentArea].name;
        this.newMonster();
    }

    newMonster() {
        this.currentMonster = this.getNewMonster();
    }

    getNewMonster() {
        let mon = this.area.getRandomMonster()
        console.log(mon)
        let currentMonster = mon.clone();
        hitBoxImage.src = getImageURL(currentMonster.sprite);

        return currentMonster;
    }

    attackMonster() {
        game.currentMonster.hp -= game.strength;
        
        if (game.currentMonster.hp <= 0) {
            Object.entries(this.Monsters).forEach(([id, monster]) => {
                if (monster.name == this.currentMonster.name) {
                    monster.deaths++;
                }
            });
            const items = game.currentMonster.getDrops(game.dcm);
            this.inventory.addItems(items);
            this.gainXP(Math.ceil(Math.log10((items.length + 1) * game.currentMonster.maxHp) + game.currentMonster.def));
            
            game.newMonster()
        }
    }

    genCraftingMenu(Category = "All") {
        document.getElementById("CategoryText").innerText = Category;
        this.resetCraftingMenu()
        if (Category == "All") {
            Object.entries(this.Recipes).forEach(([recipeName, recipeItems]) => {
                if (this.Items[recipeName] == undefined) {
                    return;
                }
                this.CreateRecipe([recipeName, recipeItems]);
            });
        } else if(this.Catagories[Category] != undefined) {
            this.Catagories[Category].forEach(recipeName => {
                if (this.Items[recipeName] == undefined) {
                    return;
                }
                this.CreateRecipe([recipeName, this.Recipes[recipeName]]);
            });
        }
    }

    resetCraftingMenu() {
        const craftElements = document.querySelectorAll('.Craft');
            craftElements.forEach(element => {
            element.remove();
        });
    }

    CreateRecipe([recipeName, recipeItems]) {
        const list = document.getElementsByClassName("CraftingList")[0];
        const container = document.createElement("a");
        container.classList.add("Craft");
        container.onclick = () => {
            const recipe = recipeItems.map(innerArray => {
                const [object, count] = innerArray;
                return [object.name, count];
            })
            if (this.inventory.hasAndRemoveItems(recipe)) {
                console.log("Crafting succeeded")
                this.inventory.addItem(this.Items[recipeName]);
                PlayAudio(chinkAudio);
            }
        };

        const image = document.createElement("img");
        image.src = getImageURL(this.Items[recipeName].sprite);
        image.id = recipeName;

        const text = document.createElement("p");
        text.classList.add("CraftReqs");

        // Formatting requirements
        let formattedList = [];

        recipeItems.forEach((item, index) => {
            try {
                const name = item[0].name;
                const quantity = item[1];
                const formattedItem = `${name} (x${quantity})`;
                if (index % 2 === 1) {
                    formattedList[formattedList.length - 1] += '    - ' + formattedItem;
                } else {
                    formattedList.push(formattedItem);
                }
            } catch (error) {
                console.log("Error, reporting item");
                console.log(item);
            }
        });
        
        const RecipeList = `[${recipeName}]<br>-${formattedList.join('<br>-')}`;

        text.innerHTML = RecipeList;

        container.appendChild(image);
        container.appendChild(text);
        list.appendChild(container);
    }

    gainXP(amnt) {
        this.playerXP += amnt;
        this.playerTotalXP += amnt;

        const p = 100 * this.playerXP / this.getXpReq();
        document.getElementById("XPBar").style.width = 100 * this.playerXP / this.getXpReq() + "%";
        document.getElementById("XPProgress").innerText = `[${this.playerLevel}] ${this.playerXP} / ${this.getXpReq()} (${Math.floor(p)}%)`;

        this.checkForLevelUp();
    }

    checkForLevelUp() {
        const req = this.getXpReq();
        if (this.playerXP >= req) {
            this.playerXP -= req;
            this.playerLevel++;
            console.log("player levelup!!")

            const p = 100 * this.playerXP / this.getXpReq();
            document.getElementById("XPBar").style.width = 100 * this.playerXP / this.getXpReq() + "%";
            document.getElementById("XPProgress").innerText = `[${this.playerLevel}] ${this.playerXP} / ${this.getXpReq()} (${Math.floor(p)}%)`;

            this.updateStats();
        }
    }

    updateStats() {
        const attributes = (this.inventory.equipped != undefined) ? JSON.parse(this.inventory.equipped.attributes) :{"Traits":["Material", "Equipable"],"Damage":0,"DCM":0} ;
        const weaponDMG =  attributes["Damage"];
        this.strength = Math.max(1 * Math.sqrt(this.playerLevel / 2), 1) * ((this.inventory.equipped != undefined) ? 1 + weaponDMG : 1);
        this.dcm = 1;
        this.dcm += (attributes["DCM"] == undefined) ? 1 : attributes["DCM"] / 100;

        document.getElementById("PlayerStatsText").innerText = `Strength: ${Math.floor(10 * Math.max(1 * Math.sqrt(this.playerLevel / 2), 1)) / 10}\nWeapon Damage: ${Math.floor(weaponDMG)}\nTotal Damage: ${Math.floor(10 * this.strength) / 10}\nDrop Chance Multi: ${Math.floor(10 * this.dcm) / 10}`
    }

    getXpReq() {
        const req = Math.pow(this.playerLevel, 3) * 10;
        return req;
    }
    

    equipItem(itemName) {
        const item = this.Items[this.getItem(itemName)];

        if (JSON.parse(item.attributes).Traits.includes("Equipable")) {
            this.inventory.hasAndRemoveItem(itemName);
    
            this.unequipItem();
    
            this.inventory.equipped = item;
            document.getElementById("EquippedSlot").src = getImageURL(item.sprite);
            this.updateStats();
            PlayAudio(equipAudio)
        } else {

        }
    }

    unequipItem() {
        if (this.inventory.equipped != undefined) {
            this.inventory.addItem(this.inventory.equipped)
            this.inventory.equipped = undefined;
            
            document.getElementById("EquippedSlot").src = getImageURL("Slot_Equipment_sword");
            this.updateStats();
        }
    }

    getItem(itemName) {
        let r = undefined;
        Object.entries(this.Items).forEach(([ItemName, Item]) => {
            if (Item.name == itemName) {
                r = ItemName;
                return;
            }
        });
        return r;
    }
}