class Game {
    constructor() {
        console.log("Game: Initializing Game Data")
        this.strength = 1;
        this.dcm = 1; // Drop Chance Multiplier

        this.Items = {
            /* General Materials */
            "Grass" : new Item("Item_Grass", "Grass", "A blade of grass, not to mistaken with a Grass Blade", "{\"Traits\":[\"Material\"]}"),
            "Stick" : new Item("Item_Stick", "Stick", "A mighty weapon of mass destru... Wrong description. This my fellow, dear, is just a a stick", "{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":1}"),
            "Bone" : new Item("Item_Bone", "Bone", "The only stable thing you'll find in an undead being... sometimes", "{\"Traits\":[\"Material\"]}"),
            "Rock" : new Item("Item_Pebble", "Rock", "Rocking rock rock, Rock", "{\"Traits\":[\"Material\"]}"),
            "Aura" : new Item("Item_Aura", "Aura", "Frick an actual fantasy thing, gotta be serious about this description", "{\"Traits\":[\"Material\"]}"),
            "Skull" : new Item("Item_Skull", "Skull", "Obtained from... how did you get this?", "{\"Traits\":[\"Material\"]}"),
            "String" : new Item("Item_String", "String", "Stroinky stroinky string", "{\"Traits\":[\"Material\"]}"),
            "Paper" : new Item("Item_Paper", "Paper", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Paper-Used" : new Item("Item_Paper_Used", "Used Paper", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Paper-Mapped" : new Item("Item_Paper_Mapped", "Map", "Unset", "{\"Traits\":[\"Consumable\"]}"),
            "Handle-Wooden" : new Item("Item_Handle_Sword", "Sword Handle", "Handler of many blades. Can you handle the handle?", "{\"Traits\":[\"Material\"]}"),

            /* Metals */
            "Copper" : new Item("Item_Copper", "Copper", "A simple material, in this world at least", "{\"Traits\":[\"Material\"]}"),
            "Iron" : new Item("Item_Iron", "Iron", "Yea! The average game's first quick pick for a metal material", "{\"Traits\":[\"Material\"]}"),
            "Silver" : new Item("Item_Silver", "Silver", "Vampires loveeeee this stuff, so much so, they just die", "{\"Traits\":[\"Material\"]}"),
            "Jade" : new Item("Item_Jade", "Jade", "I'm seeing a pattern here, Copper, Iron, Jade, hah what's next Gold. Then the Lord Realm, pfft ha", "{\"Traits\":[\"Material\"]}"),
            "Gold" : new Item("Item_Gold", "Gold", "Butter: rewrite - harder, better, faster", "{\"Traits\":[\"Material\"]}"),
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
            "Slime-Green" : new Item("Item_Slime_Green", "Green Slime", "A calming green slimy substance", "{\"Traits\":[\"Material\"]}"),
            "Slime-Yellow" : new Item("Item_Slime_Yellow", "Yellow Slime", "A electrifying yellow slimy substance", "{\"Traits\":[\"Material\"]}"),
            "Slime-Blue" : new Item("Item_Slime_Blue", "Blue Slime", "A wet blue slimy substance", "{\"Traits\":[\"Material\"]}"),
            "Slime-Red" : new Item("Item_Slime_Red", "Red Slime", "A hot red slimy substance", "{\"Traits\":[\"Material\"]}"),
            "Slime-Sword-Green" : new Item("Sword_Slime_Green", "Green Slime Sword","A manifestation of nature slime into a sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":15,\"DCM\":10}"),
            "Slime-Sword-Yellow" : new Item("Sword_Slime_Yellow", "Yellow Slime Sword","A manifestation of energy slime into a sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":18,\"DCM\":10}"),
            "Slime-Sword-Blue" : new Item("Sword_Slime_Blue", "Blue Slime Sword","A manifestation of water slime into a sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":21,\"DCM\":10}"),
            "Slime-Sword-Red" : new Item("Sword_Slime_Red", "Red Slime Sword","A manifestation of magma slime into a sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":24,\"DCM\":10}"),
            "Slime-Sword" : new Item("Sword_Slime", "Slime Sword","A manifestation of pure slime into an sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":28,\"DCM\":20}"),
            "Slime-Sword-2" : new Item("Sword_Slime", "Slime Sword II","A concentrated manifestation of pure slime into an sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":32,\"DCM\":25}"),
            "Slime-Sword-3" : new Item("Sword_Slime", "Slime Sword III","A superior concentrated manifestation of pure slime into an sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":64,\"DCM\":33}"),
            "Slime-Sword-4" : new Item("Sword_Slime", "Slime Sword IV","A mastery of superior concentrated manifestation of pure slime into an sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":128,\"DCM\":50}"),
            "Slime-Sword-5" : new Item("Sword_Slime", "True Slime Sword","The true legendary embodiment of a slime sword","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":256,\"DCM\":100}"),

            /* Wood Set */
            "Blade-Wooden" : new Item("Blade_Wooden", "Wooden Blade", "The most basic of blades", "{\"Traits\":[\"Material\"]}"),
            "Sword-Wooden" : new Item("Sword_Wooden", "Wooden Sword","The most basic of weapons","{\"Traits\":[\"Equipable\"],\"Damage\":5}"),

            /* Bone Set */
            "Blade-Bone" : new Item("Blade_Bone", "Bone Blade", "Undead beings warped down into something you could call a blade", "{\"Traits\":[\"Material\"]}"),
            "Sword-Bone" : new Item("Sword_Bone", "Bone Sword", "A sword of writhing undead matter splotched onto a blade of bones","{\"Traits\":[\"Equipable\"],\"Damage\":12,\"XPM\":25}"),

            /* Stone Set */
            "Blade-Stone" : new Item("Blade_Stone", "Stone Blade", "A simple blade comprised of stone", "{\"Traits\":[\"Material\"]}"),
            "Sword-Stone" : new Item("Sword_Stone", "Stone Sword", "A simple yet wieldy sword made up of stones","{\"Traits\":[\"Equipable\"],\"Damage\":50}"),

            /* Copper Set */
            "Blade-Copper" : new Item("Blade_Copper", "Copper Blade", "A copper infused blade", "{\"Traits\":[\"Material\"]}"),
            "Sword-Copper" : new Item("Sword_Copper", "Copper Sword", "Infused with copper into itself it's a compelling choice","{\"Traits\":[\"Equipable\"],\"Damage\":100}"),

            /* Grass Set */
            "Blade-Grass" : new Item("Blade_Grass", "Grass Blade", "Thousand upon thousands of blades of grass tied up into a Grass Blade", "{\"Traits\":[\"Material\"]}"),
            "Sword-Grass" : new Item("Sword_Grass", "Grass Sword", "A thousand needs would pierce, but 25000 grass blades will cut","{\"Traits\":[\"Equipable\"],\"Damage\":128}"),

            /* Copper Set */
            "Blade-Iron" : new Item("Blade_Iron", "Iron Blade", "Iron blade forged of.. iron", "{\"Traits\":[\"Material\"]}"),
            "Sword-Iron" : new Item("Sword_Iron", "Iron Sword", "The average adventurers trusty sword, is the base for all advancement after all","{\"Traits\":[\"Equipable\"],\"Damage\":192}"),

            /* Silver Set */
            "Blade-Silver" : new Item("Blade_Silver", "Silver Blade", "Vampires bane in one simple blade", "{\"Traits\":[\"Material\"]}"),
            "Sword-Silver" : new Item("Sword_Silver", "Silver Sword", "A sword made to eradicate the existence of vampires","{\"Traits\":[\"Equipable\"],\"Damage\":256}"),

            /* Jade Set */
            "Blade-Jade" : new Item("Blade_Jade", "Jade Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Jade" : new Item("Sword_Jade", "Jade Sword", "Unset","{\"Traits\":[\"Equipable\"],\"Damage\":384}"),

            /* Jade Set */
            "Blade-Gold" : new Item("Blade_Gold", "Gold Blade", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Sword-Gold" : new Item("Sword_Gold", "Gold Sword", "Unset","{\"Traits\":[\"Equipable\"],\"Damage\":512}"),
        }
        console.log("Game: Item Data Set")

        this.Recipes = { // [[Item, Amount], [AnotherItem, Amount]]
            "String" : [[this.Items["Slime-Green"], 5],[this.Items["Slime-Yellow"], 2]],
            "Grass" : [[this.Items["Slime-Green"], 2]],
            "Stick" : [[this.Items["Slime-Green"], 40]],
            "Bone" : [[this.Items["Slime-Green"], 15],[this.Items["Slime-Red"], 10]],
            "Rock" : [[this.Items["Slime-Blue"], 20],[this.Items["Slime-Red"], 20]],
            "Aura" :  [[this.Items["Slime-Blue"], 1000]],
            "Copper" : [[this.Items["Slime-Blue"], 100],[this.Items["Slime-Red"], 100]],
            "Iron" : [[this.Items["Slime-Blue"], 250],[this.Items["Slime-Red"], 250]],
            "Silver" : [[this.Items["Slime-Yellow"], 250],[this.Items["Slime-Blue"], 1250],[this.Items["Slime-Red"], 1250]],
            "Handle-Wooden" : [[this.Items["Stick"], 2],[this.Items["String"], 2]],
            "Blade-Wooden" : [[this.Items["Stick"], 4]],
            "Sword-Wooden" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 4],[this.Items["Blade-Wooden"], 1]],
            "Slime-Sword-Green" : [[this.Items["Slime-Green"], 10000]],
            "Slime-Sword-Yellow" : [[this.Items["Slime-Yellow"], 10000]],
            "Slime-Sword-Blue" : [[this.Items["Slime-Blue"], 10000]],
            "Slime-Sword-Red" : [[this.Items["Slime-Red"], 10000]],
            "Slime-Sword" : [[this.Items["Slime-Sword-Green"], 1], [this.Items["Slime-Sword-Yellow"], 1], [this.Items["Slime-Sword-Blue"], 1], [this.Items["Slime-Sword-Red"], 1]],
            "Slime-Sword-2" : [[this.Items["Slime-Sword"], 2]],
            "Slime-Sword-3" : [[this.Items["Slime-Sword-2"], 2]],
            "Slime-Sword-4" : [[this.Items["Slime-Sword-3"], 2]],
            "Slime-Sword-5" : [[this.Items["Slime-Sword-4"], 2]],
            "Blade-Bone" : [[this.Items["Bone"], 16]],
            "Sword-Bone" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 4],[this.Items["Blade-Bone"], 1]],
            "Blade-Stone" : [[this.Items["Rock"], 24]],
            "Sword-Stone" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 8],[this.Items["Blade-Stone"], 1]],
            "Blade-Grass" : [[this.Items["Grass"], 25000]],
            "Sword-Grass" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 2],[this.Items["Blade-Grass"], 1]],
            "Blade-Copper" : [[this.Items["Copper"], 32]],
            "Sword-Copper" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 8],[this.Items["Blade-Copper"], 1]],
            "Blade-Iron" : [[this.Items["Iron"], 32]],
            "Sword-Iron" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 8],[this.Items["Blade-Iron"], 1]],
            "Blade-Silver" : [[this.Items["Silver"], 32]],
            "Sword-Silver" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 16],[this.Items["Blade-Silver"], 1]],
        }
        console.log("Game: Recipe Data Set")
        
        this.Catagories = {
            "All" : [],
            "Misc" : ["String", "Grass", "Stick", "Bone", "Rock"],
            "Metals" : ["Copper", "Iron", "Silver"],
            "Weaponry" : ["Handle-Wooden", "Blade-Wooden", "Sword-Wooden", "Slime-Sword-Green", "Slime-Sword-Yellow", "Slime-Sword-Blue", "Slime-Sword-Red", "Slime-Sword", "Slime-Sword-2", "Slime-Sword-3", "Slime-Sword-4", "Slime-Sword-5","Blade-Bone", "Sword-Bone", "Blade-Stone", "Sword-Stone", "Blade-Grass", "Sword-Grass", "Blade-Copper", "Sword-Copper", "Blade-Iron", "Sword-Iron", "Blade-Silver", "Sword-Silver"],
            "Alchemy" : ["Aura"],
            "Idle" : ["Aura"]
        }
        console.log("Game: Category Data Set")

        this.Monsters = {
            "Slime-Green-Small" : new Monster("Monster_Slime_Small_Green", "Small Green Slime", 10, 0, [ new DropChance(this.Items["Slime-Green"], 0.12, 4), new DropChance(this.Items["Slime-Sword-Green"], 0.00001, 1)] ),
            "Slime-Yellow-Small" :new Monster("Monster_Slime_Small_Yellow", "Small Yellow Slime", 10, 0, [ new DropChance(this.Items["Slime-Yellow"], 0.12, 3), new DropChance(this.Items["Slime-Yellow-Green"], 0.00001, 1) ]),
            "Slime-Blue-Small" :new Monster("Monster_Slime_Small_Blue", "Small Blue Slime", 10, 0, [ new DropChance(this.Items["Slime-Blue"], 0.12, 2), new DropChance(this.Items["Slime-Blue-Green"], 0.00001, 1) ]),
            "Slime-Red-Small" :new Monster("Monster_Slime_Small_Red", "Small Red Slime", 10, 0, [ new DropChance(this.Items["Slime-Red"], 0.12, 1), new DropChance(this.Items["Slime-Red-Green"], 0.00001, 1) ]),
            "Slime-Green" : new Monster("Monster_Slime_Green", "Green Slime", 100, 5, [ new DropChance(this.Items["Slime-Green"], 0.14, 8), new DropChance(this.Items["Slime-Sword-Green"], 0.00002, 1)] ),
            "Slime-Yellow" :new Monster("Monster_Slime_Yellow", "Yellow Slime", 100, 5, [ new DropChance(this.Items["Slime-Yellow"], 0.14, 6), new DropChance(this.Items["Slime-Yellow-Green"], 0.00002, 1) ]),
            "Slime-Blue" :new Monster("Monster_Slime_Blue", "Blue Slime", 100, 5, [ new DropChance(this.Items["Slime-Blue"], 0.14, 4), new DropChance(this.Items["Slime-Blue-Green"], 0.00002, 1) ]),
            "Slime-Red" :new Monster("Monster_Slime_Red", "Red Slime", 100, 5, [ new DropChance(this.Items["Slime-Red"], 0.14, 2), new DropChance(this.Items["Slime-Red-Green"], 0.00002, 1) ]),
            "Slime-Green-Large" : new Monster("Monster_Slime_Large_Green", "Large Green Slime", 300, 10, [ new DropChance(this.Items["Slime-Green"], 0.16, 12), new DropChance(this.Items["Slime-Sword-Green"], 0.00003, 1)] ),
            "Slime-Yellow-Large" :new Monster("Monster_Slime_Large_Yellow", "Large Yellow Slime", 300, 10, [ new DropChance(this.Items["Slime-Yellow"], 0.16, 9), new DropChance(this.Items["Slime-Yellow-Green"], 0.00003, 1) ]),
            "Slime-Blue-Large" :new Monster("Monster_Slime_Large_Blue", "Large Blue Slime", 300, 10, [ new DropChance(this.Items["Slime-Blue"], 0.16, 6), new DropChance(this.Items["Slime-Blue-Green"], 0.00003, 1) ]),
            "Slime-Red-Large" :new Monster("Monster_Slime_Large_Red", "Large Red Slime", 300, 10, [ new DropChance(this.Items["Slime-Red"], 0.16, 3), new DropChance(this.Items["Slime-Red-Green"], 0.00003, 1) ]),
            "Slime-Green-Massive" : new Monster("Monster_Slime_Massive_Green", "Massive Green Slime", 1000, 15, [ new DropChance(this.Items["Slime-Green"], 0.18, 16), new DropChance(this.Items["Slime-Sword-Green"], 0.00004, 1)] ),
            "Slime-Yellow-Massive" :new Monster("Monster_Slime_Massive_Yellow", "Massive Yellow Slime", 1000, 15, [ new DropChance(this.Items["Slime-Yellow"], 0.18, 12), new DropChance(this.Items["Slime-Yellow-Green"], 0.00004, 1) ]),
            "Slime-Blue-Massive" :new Monster("Monster_Slime_Massive_Blue", "Massive Blue Slime", 1000, 15, [ new DropChance(this.Items["Slime-Blue"], 0.18, 8), new DropChance(this.Items["Slime-Blue-Green"], 0.00004, 1) ]),
            "Slime-Red-Massive" :new Monster("Monster_Slime_Massive_Red", "Massive Red Slime", 1000, 15, [ new DropChance(this.Items["Slime-Red"], 0.18, 4), new DropChance(this.Items["Slime-Red-Green"], 0.00004, 1) ]),

            "Plant-Flower-Murderous" :new Monster("Monster_Flower_Murderous", "Murderous Flower", 5000, 20, [new DropChance(this.Items["Slime-Green"], 0.2, 2), new DropChance(this.Items["Slime-Yellow"], 0.2, 2), new DropChance(this.Items["Slime-Blue"], 0.2, 2), new DropChance(this.Items["Slime-Red"], 0.2, 2), new DropChance(this.Items["Aura"], 0.01, 1), new DropChance(this.Items["Slime-Sword-Green"], 0.00001, 1), new DropChance(this.Items["Slime-Yellow-Green"], 0.00001, 1), new DropChance(this.Items["Slime-Blue-Green"], 0.00001, 1), new DropChance(this.Items["Slime-Red-Green"], 0.00001, 1)]),
            "Goblin-Villager" :new Monster("Monster_Goblin_Villager", "Goblin Villager", 7000, 20, [ new DropChance(this.Items["Bone"], 0.1, 1), new DropChance(this.Items["Rock"], 0.01, 3), new DropChance(this.Items["Copper"], 0.001, 2), new DropChance(this.Items["Iron"], 0.0001, 1) ]),
            "Goblin-Scout" :new Monster("Monster_Goblin_Scout", "Goblin Scout", 12000, 20, [ new DropChance(this.Items["Bone"], 0.1, 1), new DropChance(this.Items["Copper"], 0.01, 3), new DropChance(this.Items["Iron"], 0.001, 2), new DropChance(this.Items["Silver"], 0.0001, 1)  ]),
            "Goblin-Warrior" :new Monster("Monster_Goblin_Warrior", "Goblin Warrior", 20000, 25, [ new DropChance(this.Items["Bone"], 0.1, 2), new DropChance(this.Items["Copper"], 0.02, 4), new DropChance(this.Items["Iron"], 0.003, 3), new DropChance(this.Items["Silver"], 0.0003, 2)  ]),
            "Goblin-Guard" :new Monster("Monster_Goblin_Guard", "Goblin Guard", 50000, 30, [ new DropChance(this.Items["Bone"], 0.1, 2), new DropChance(this.Items["Iron"], 0.01, 3), new DropChance(this.Items["Silver"], 0.001, 2), new DropChance(this.Items["Jade"], 0.0001, 1)]),
            "Goblin-Knight" :new Monster("Monster_Goblin_Knight", "Goblin Knight", 100000, 35, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Iron"], 0.05, 5), new DropChance(this.Items["Silver"], 0.01, 3), new DropChance(this.Items["Jade"], 0.001, 2)]),
            "Goblin-Knight-Royal" :new Monster("Monster_Goblin_RoyalKnight", "Royal Goblin Knight", 500000, 40, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Iron"], 0.1, 7), new DropChance(this.Items["Silver"], 0.05, 5), new DropChance(this.Items["Jade"], 0.00015, 2)]),
            "Goblin-King" :new Monster("Monster_Goblin_King", "Goblin King", 1000000, 50, [ new DropChance(this.Items["Bone"], 0.1, 4), new DropChance(this.Items["Gold"], 0.5, 10)]),
            "Goblin-Queen" :new Monster("Monster_Goblin_Queen", "Goblin Queen", 1000000, 50, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Gold"], 0.5, 10)]),
        }
        console.log("Game: Monster Data Set")

        this.Areas = [
            new Area("Icon_Area_Plains_Green", "Green Plains", [[this.Monsters["Slime-Green-Small"], 1]]),
            new Area("Icon_Area_Plains_Lime", "Lime Plains", [[this.Monsters["Slime-Green-Small"], 0.5], [this.Monsters["Slime-Yellow-Small"], 0.5]]),
            new Area("Icon_Area_Plains_Purple", "Purple Plains", [[this.Monsters["Slime-Blue-Small"], 0.5], [this.Monsters["Slime-Red-Small"], 0.5]]),
            new Area("Icon_Area_Plains_Small", "Small Plains", [[this.Monsters["Slime-Green-Small"], 0.25], [this.Monsters["Slime-Yellow-Small"], 0.25], [this.Monsters["Slime-Blue-Small"], 0.25], [this.Monsters["Slime-Red-Small"], 0.25]]),
            new Area("Icon_Area_Plains_Medium", "Medium Plains", [[this.Monsters["Slime-Green"], 0.25], [this.Monsters["Slime-Yellow"], 0.25], [this.Monsters["Slime-Blue"], 0.25], [this.Monsters["Slime-Red"], 0.25]]),
            new Area("Icon_Area_Plains_Large", "Large Plains", [[this.Monsters["Slime-Green-Large"], 0.25], [this.Monsters["Slime-Yellow-Large"], 0.25], [this.Monsters["Slime-Blue-Large"], 0.25], [this.Monsters["Slime-Red-Large"], 0.25]]),
            new Area("Icon_Area_Plains_Massive", "Massive Plains", [[this.Monsters["Slime-Green-Massive"], 0.25], [this.Monsters["Slime-Yellow-Massive"], 0.25], [this.Monsters["Slime-Blue-Massive"], 0.25], [this.Monsters["Slime-Red-Massive"], 0.25]]),
            new Area("Icon_Area_Forrest_Entrance", "Forrest Entrance", [[this.Monsters["Plant-Flower-Murderous"], 0.66],[this.Monsters["Goblin-Villager"], 0.20],[this.Monsters["Goblin-Scout"], 0.12]]),
            new Area("Icon_Area_Forrest_Entrance", "Forrest Meadows", [[this.Monsters["Goblin-Villager"], 0.33],[this.Monsters["Goblin-Scout"], 0.33],[this.Monsters["Plant-Flower-Murderous"], 0.33]]),
            new Area("Icon_Area_Forrest_Entrance", "Forrest Path", [[this.Monsters["Goblin-Villager"], 0.33],[this.Monsters["Goblin-Scout"], 0.33],[this.Monsters["Goblin-Warrior"], 0.33]]),
            new Area("Icon_Area_Forrest_Entrance", "Goblin Fortress Entrance", [[this.Monsters["Goblin-Scout"], 0.33],[this.Monsters["Goblin-Warrior"], 0.33],[this.Monsters["Goblin-Guard"], 0.33]]),
            new Area("Icon_Area_Forrest_Entrance", "Goblin Fortress City", [[this.Monsters["Goblin-Warrior"], 0.33],[this.Monsters["Goblin-Guard"], 0.33],[this.Monsters["Goblin-Knight"], 0.33]]),
            new Area("Icon_Area_Forrest_Entrance", "Goblin Fortress Tower", [[this.Monsters["Goblin-Guard"], 0.33],[this.Monsters["Goblin-Knight"], 0.33],[this.Monsters["Goblin-Knight-Royal"], 0.33]]),
            new Area("Icon_Area_Forrest_Entrance", "Goblin Fortress Throne Room", [[this.Monsters["Goblin-King"], 0.5],[this.Monsters["Goblin-Queen"], 0.5]]),
        ]
        console.log("Game: Area Data Set")

        this.Quests = [
            new QuestLine("Basic Hunting", [
                    new Quest("Basic Hunt I", "A lot of small slimes have been closing in on the town, and threatening the children who play outside", "{\"slain\":[[\"Slime-Green-Small\", 100],[\"Slime-Yellow-Small\", 100],[\"Slime-Red-Small\", 100],[\"Slime-Blue-Small\", 100]],\"reward\":{\"xp\" : 1000,\"items\" : [[\"Rock\", 6]]}}"),
                ],
                [
                    new Quest("Basic Hunt II", "Small slimes have started appearing randomly around town, it seems their population is growing exponentially", "{\"slain\":[[\"Slime-Green-Small\", 1000],[\"Slime-Yellow-Small\", 1000],[\"Slime-Red-Small\", 1000],[\"Slime-Blue-Small\", 1000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}"),
                ]
            ),
            new QuestLine("Sword Master", [
                    new Quest("Sword Master I", "I am interested in the art of swords, but I need a weapon, preferably something simple to get started", "{\"items\":[[\"Stick\", 1]],\"reward\":{\"xp\" : 500}}"),
                
                    new Quest("Sword Master II", "After learning the basics of sword play with a stick, I believe it's my time to move to a real weapon", "{\"items\":[[\"Wooden Sword\", 1]],\"reward\":{\"xp\" : 1000}}"),
                
                    new Quest("Sword Master III", "Now that I have some real experience, I want to boost my experience even further and faster", "{\"items\":[[\"Bone Sword\", 1]],\"reward\":{\"xp\" : 2000}}"),
                
                    new Quest("Sword Master IV", "With enough experience I realize I need a sturdy weapon I can trust on, a weapon that won't falter so easy", "{\"items\":[[\"Stone Sword\", 1]],\"reward\":{\"xp\" : 4000}}"),
            
                    new Quest("Sword Master V", "My sword now struggles to keep up with me and the strains of battle I put it threw. I must advance", "{\"items\":[[\"Copper Sword\", 1]],\"reward\":{\"xp\" : 8000}}"),
        
                    new Quest("Sword Master VI", "I seek the sword or iron to elevate my skills to the next level", "{\"items\":[[\"Iron Sword\", 1]],\"reward\":{\"xp\" : 16000}}"),
          
                    new Quest("Sword Master VII", "The vampires are coming, I must surpass my weaknesses and destroy them all", "{\"items\":[[\"Silver Sword\", 1]],\"reward\":{\"xp\" : 32000}}"),
                ]
            ),
        ]
        console.log("Game: Quest Data Set")

        this.createQuest()

        this.playerLevel = 1;
        this.playerXP = 0;
        this.playerTotalXP = 0;
        console.log("Game: Player Stats Set")

        this.inventory = null;
        console.log("Game: Inventory Set")

        this.CategoryNames = ["All", "Misc", "Metals", "Weaponry", "Alchemy", "Idle"]
        this.genCraftingMenu(this.CategoryNames[0])
        this.nextCategory();

        this.currentArea = 0
        this.gotoArea(0)
        this.newMonster();
        console.log("Game: Current Monster Set")
        console.log("Game: Initialized Game Data")
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

        container.addEventListener('mouseenter', function(event) {
            const tooltip = document.getElementById('tooltip');
            //tooltip.textContent = container.dataset.tooltip;
            tooltip.style.display = 'block';
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.left = `${event.clientX + 10}px`;

            const _item = game.Items[recipeName];
            const _count = 1;


            const attributes = JSON.parse(_item.attributes);
            const title = document.getElementById('tooltipTitle');
            const desc = document.getElementById('tooltipDescription');
            let traits = attributes.Traits.join(", ")
            let scrapText = ""
            let damageText = ""
            if (attributes.scrap) {
                scrapText = attributes.scrap.map(([item, count]) => `${item} (x${count})`).join("\n");
            }
            if (attributes.Damage) {
                damageText = "\n\nDamage: " + attributes.Damage;
            }
            if (attributes.DCM) {
                damageText += "\nDrop Chance Multi: +" + attributes.DCM + "%";
            }
            if (attributes.XPM) {
                damageText += "\nXP Multi: +" + attributes.XPM + "%";
            }
            
            let alreadyHas = ""
            for (let i = 0; i < game.inventory.inventory.length; i++) {
                const userItem = game.inventory.inventory[i];
                if (userItem[0].name == _item.name) {
                    alreadyHas = `(x${userItem[1]})`;
                }
                
            }
            
            title.innerText = `${_item.name} (x${_count}) ${alreadyHas}`;
            
            desc.innerText = `[${traits}]${damageText}\n\n${_item.description}${(scrapText != "") ? `\n\n[Scrap] (LMB)\n\n${scrapText}` : ""}`
        });
    
        container.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'none';
        });

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

    createQuest() {
        this.Quests.forEach(questLine => {
            if (!questLine.quests[questLine.currentQuest].isComplete) {
                const list = document.getElementById("questList");
                const container = document.createElement("div");
                container.classList.add("Quest");
        
                const title = document.createElement("p");
                title.innerHTML = questLine.quests[questLine.currentQuest].title;
                title.classList.add("questTitle");
        
                const desc = document.createElement("a");
                desc.innerHTML = questLine.quests[questLine.currentQuest].description;
                desc.classList.add("questText");
        
                let formattedString = this.formatQuestData(questLine.quests[questLine.currentQuest].data)

                const reqs = document.createElement("a");
                reqs.innerText = formattedString;
                reqs.classList.add("questText");

                container.onclick = () => {
                    if (questLine.completeQuest(this) != false) {
                        console.log("Quest Complete")
                        container.remove();
                        this.resetQuestMenu()
                    }
                }

                container.appendChild(title);
                container.appendChild(desc);
                container.appendChild(reqs);

                list.appendChild(container)
            }
        });
    }

    resetQuestMenu() {
        for (let i = 0; i < document.getElementById("questList").children.length; i++) {
            const child = document.getElementById("questList").children[0];
            child.remove()
        }
        this.createQuest();
    }

    formatQuestData(data) {
        let formattedString = "";
        if (data.items) {
            formattedString += "Items:\n"
            formattedString += this.formatItems(data.items);
        }
        if (data.slain) {
            formattedString += "\nDefeats:\n";
            formattedString += this.formatItems(data.slain);
        }
        formattedString += "\nRewards:\n";
        formattedString += this.formatRewards(data.reward);
        return formattedString;
    }

    formatItems(items) {
        let itemString = "";
        items.forEach(item => {
            itemString += `- ${item[0]} (x${item[1]})\n`;
        });
        return itemString;
    }

    formatRewards(reward) {
        let rewardString = "";
        if (reward.xp) {
            rewardString += `- ${reward.xp}xp\n`;
        }
        if (reward.items) {
            reward.items.forEach(item => {
                rewardString += `- ${item[0]} (x${item[1]})\n`;
            });
        }
        return rewardString;
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
            createNotification("You've leveled up!")

            const p = 100 * this.playerXP / this.getXpReq();
            document.getElementById("XPBar").style.width = 100 * this.playerXP / this.getXpReq() + "%";
            document.getElementById("XPProgress").innerText = `[${this.playerLevel}] ${this.playerXP} / ${this.getXpReq()} (${Math.floor(p)}%)`;

            this.updateStats();
        }
    }

    updateStats() {
        const attributes = (this.inventory.equipped != undefined) ? JSON.parse(this.inventory.equipped.attributes) :{"Traits":["Material", "Equipable"],"Damage":0,"DCM":0} ;
        const weaponDMG =  attributes["Damage"];
        const playerDMG = Math.max(1 * Math.sqrt(this.playerLevel / 2), 1) + this.playerLevel / 10;
        this.strength = Math.sqrt(Math.pow(playerDMG, 2) + Math.pow(((this.inventory.equipped != undefined) ? 1 + weaponDMG : 1), 2));
        this.dcm = 1;
        this.dcm += (attributes["DCM"] == undefined) ? 1 : attributes["DCM"] / 100;

        document.getElementById("PlayerStatsText").innerText = `Strength: ${Math.floor(10 * playerDMG) / 10}\nWeapon Strength: ${Math.floor(weaponDMG)}\nTotal Damage: ${Math.floor(10 * this.strength) / 10}\nDrop Chance Multi: ${Math.floor(10 * this.dcm) / 10}`
    }

    getXpReq(lvl = -1) {
        const req = Math.pow(Math.max(this.playerLevel, lvl), 3) * 10;
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
            
            document.getElementById("EquippedSlot").src = getImageURL("Slot_Equipment_Sword");
            this.updateStats();
            PlayAudio(packAudio)
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