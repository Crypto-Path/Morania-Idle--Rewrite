class Game {
    constructor() {
        console.log("Game: Initializing Game Data")
        this.strength = 1;
        this.dcm = 1; // Drop Chance Multiplier

        this.Items = {
            /* General Materials */
            "Grass" : new Item("Item_Grass", "Grass", "A common blade of grass, its verdant hue a testament to nature's simplicity.", "{\"Traits\":[\"Material\"]}"),
            "Stick" : new Item("Item_Stick", "Stick", "A simple stick, rough and sturdy, perhaps a makeshift tool or a weapon in dire times.", "{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":1}"),
            "Bone" : new Item("Item_Bone", "Bone", "A bone, stripped of flesh, lies weathered and bare, a common sight in the wilds.", "{\"Traits\":[\"Material\"]}"),
            "Rock" : new Item("Item_Pebble", "Rock", "A plain rock, unassuming and solid, blending into the landscape without a whisper of grandeur.", "{\"Traits\":[\"Material\"]}"),
            "Aura" : new Item("Item_Aura", "Aura", "An intangible presence, barely perceptible yet undeniable, hinting at hidden mysteries and unseen forces.", "{\"Traits\":[\"Material\"]}"),
            "Skull" : new Item("Item_Skull", "Skull", "A skull, a bony relic of the past, devoid of life and expression.", "{\"Traits\":[\"Material\"]}"),
            "String" : new Item("Item_String", "String", "A length of string, simple yet versatile, ready to be woven into solutions or unravel into chaos.", "{\"Traits\":[\"Material\"]}"),
            "Paper" : new Item("Item_Paper", "Paper", "Paper, a thin and versatile material, ready to be inscribed with thoughts or crumpled into oblivion.", "{\"Traits\":[\"Material\"]}"),
            "Paper-Used" : new Item("Item_Paper_Used", "Used paper, bearing faint traces of its past purpose, now marked by the passage of time and human touch.", "Unset", "{\"Traits\":[\"Material\"]}"),
            "Paper-Mapped" : new Item("Item_Paper_Mapped", "Map", "A weathered paper map, its creases and faded ink telling tales of past journeys and uncharted territories.", "{\"Traits\":[\"Consumable\"]}"),
            "Handle-Wooden" : new Item("Item_Handle_Sword", "Sword Handle", "A sturdy sword handle, crafted with care and designed for firm grip, poised to harness the might of a blade in battle.", "{\"Traits\":[\"Material\"]}"),

            /* Metals */
            "Ore-Copper" : new Item("Item_Copper_Ore", "Copper Ore", "A chunk of copper ore, rough and unrefined, harboring the potential for transformation into valuable metal through skilled craftsmanship.", "{\"Traits\":[\"Material\", \"Smeltable\"]}"),
            "Copper" : new Item("Item_Copper", "Copper", "A gleaming piece of copper, reflecting light with a warm hue, a prized material for crafting and trade.", "{\"Traits\":[\"Material\", \"Smeltable\"]}"),
            "Ore-Iron" : new Item("Item_Iron", "Raw Iron", "A raw piece of iron ore, rugged and unyielding, awaiting the forge's embrace to reveal its true strength.", "{\"Traits\":[\"Material\", \"Smeltable\"]}"),
            "Iron" : new Item("Item_Iron_Refined", "Iron", "A solid block of iron, sturdy and dependable, a cornerstone of craftsmanship and fortitude.", "{\"Traits\":[\"Material\"]}"),
            "Ore-Silver" : new Item("Item_Silver_Ore", "Raw Silver", "A vein of silver ore, glinting faintly in the dim light, promising wealth and refinement to those who can extract its precious metal.", "{\"Traits\":[\"Material\", \"Smeltable\"]}"),
            "Silver" : new Item("Item_Silver", "Silver", "A polished silver ingot, shimmering with a cool elegance, coveted for its beauty and utility in crafting.", "{\"Traits\":[\"Material\",\"Smeltable\"]}"),
            "Echo-Stone" : new Item("Item_EchoStone", "Echo Stone", "The Echo Stone, a subtle yet potent catalyst for enchantment and enhancement, serves as the cornerstone of crafting gemstones. With its latent energy, it holds the promise of unlocking the hidden potential within, ready to infuse weapons and artifacts with newfound abilities.", "{\"Traits\":[\"Material\"]}"),
            "Jade" : new Item("Item_Jade", "Jade", "Revered for its exquisite beauty and mystical properties, embodies the harmony of nature and the resilience of earth, offering craftsmen and enchanters a rare and versatile material for their creations.", "{\"Traits\":[\"Material\",\"Smeltable\"]}"),
            "Ore-Gold" : new Item("Item_Gold_Ore", "Raw Gold", "A prized mineral hidden within the earth's depths, promises riches and opportunity to those with the skill and determination to extract its precious bounty.", "{\"Traits\":[\"Material\"]}"),
            "Gold" : new Item("Item_Gold", "Gold", "The precious metal coveted for its lustrous beauty and inherent value, symbolizes wealth, prestige, and power in the realm of crafting and commerce.", "{\"Traits\":[\"Material\"]}"),
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
            "Slime-Green" : new Item("Item_Slime_Green", "Green Slime", "A viscous green slime, pulsating with vitality, embodying the untamed essence of nature's primal forces", "{\"Traits\":[\"Material\"]}"),
            "Slime-Yellow" : new Item("Item_Slime_Yellow", "Yellow Slime", "A pulsating yellow slime, crackling with electric energy, a manifestation of raw power amidst the natural world.", "{\"Traits\":[\"Material\"]}"),
            "Slime-Blue" : new Item("Item_Slime_Blue", "Blue Slime", "A flowing blue slime, undulating with the essence of water, embodying fluidity and adaptability in its aqueous form.", "{\"Traits\":[\"Material\"]}"),
            "Slime-Red" : new Item("Item_Slime_Red", "Red Slime", "A seething red slime, emanating heat and fury, embodying the fiery essence of molten magma within its viscous form.", "{\"Traits\":[\"Material\", \"Fuel\"]}"),
            "Slime-Sword-Green" : new Item("Sword_Slime_Green", "Green Slime Sword","A sword crafted from the essence of green slime, its blade pulsating with nature's vitality, capable of delivering potent strikes infused with the untamed energy of the wilderness.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":15,\"DCM\":10}"),
            "Slime-Sword-Yellow" : new Item("Sword_Slime_Yellow", "Yellow Slime Sword","A sword forged from the electrifying essence of yellow slime, crackling with energy and capable of delivering shocking strikes that surge with raw power.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":18,\"DCM\":10}"),
            "Slime-Sword-Blue" : new Item("Sword_Slime_Blue", "Blue Slime Sword","A sword forged from the essence of blue slime, its blade flowing like water and imbued with the fluidity of the oceans, offering swift and agile strikes in combat.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":21,\"DCM\":10}"),
            "Slime-Sword-Red" : new Item("Sword_Slime_Red", "Red Slime Sword","A sword forged from the fiery essence of red slime, its blade ablaze with the heat of molten magma, capable of delivering devastating strikes that scorch and sear through the fiercest of adversaries.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":24,\"DCM\":10}"),
            "Slime-Sword" : new Item("Sword_Slime", "Slime Sword","The Slime Sword, a versatile weapon crafted from the essence of various slimes, its blade embodying the elemental powers of nature, electricity, water, and fire, offering wielders a range of formidable abilities in battle.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":28,\"DCM\":20}"),
            "Slime-Sword-2" : new Item("Sword_Slime", "Slime Sword II","An upgraded version of its predecessor, honed with refined craftsmanship and imbued with even greater elemental prowess, promising wielders enhanced combat capabilities against formidable foes.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":32,\"DCM\":25}"),
            "Slime-Sword-3" : new Item("Sword_Slime", "Slime Sword III","A masterfully crafted blade forged from the essence of advanced slimes, its gleaming edge pulsating with heightened elemental power, offering seasoned adventurers unparalleled strength and precision in battle.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":64,\"DCM\":75}"),
            "Slime-Sword-4" : new Item("Sword_Slime", "Slime Sword IV","The pinnacle of slime weaponry, meticulously crafted from rare and potent slime essences, its blade infused with unparalleled elemental mastery, capable of unleashing devastating attacks that defy the limits of conventional weaponry.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":128,\"DCM\":225}"),
            "Slime-Sword-5" : new Item("Sword_Slime", "True Slime Sword","The True Slime Sword, a legendary artifact forged through ancient rites and infused with the purest essence of the primordial slime, its humble appearance belies its formidable power, granting its wielder mastery over the harmonious balance of nature's elements.","{\"Traits\":[\"Material\", \"Equipable\"],\"Damage\":256,\"DCM\":500}"),

            /* Wood Set */
            "Blade-Wooden" : new Item("Blade_Wooden", "Wooden Blade", "A simple wooden blade, carved with care and designed for basic combat, offering reliability and versatility to adventurers exploring the wilds.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Wooden" : new Item("Sword_Wooden", "Wooden Sword","A wooden sword, crafted with precision and simplicity, providing novice adventurers with a reliable tool for basic combat and training in the art of swordsmanship.","{\"Traits\":[\"Equipable\"],\"Damage\":5}"),

            /* Bone Set */
            "Blade-Bone" : new Item("Blade_Bone", "Bone Blade", "A blade crafted from bone, its jagged edges honed to a keen edge, offering a primitive yet effective weapon for those who dare to wield it.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Bone" : new Item("Sword_Bone", "Bone Sword", "A sword fashioned from bone, its primitive yet sturdy design reflecting the resourcefulness of its creator, offering a formidable weapon with a haunting aesthetic.","{\"Traits\":[\"Equipable\"],\"Damage\":12,\"XPM\":25}"),

            /* Stone Set */
            "Blade-Stone" : new Item("Blade_Stone", "Stone Blade", "A blade hewn from solid stone, its rough edges honed to a crude yet effective edge, embodying the primal strength of the earth and offering a rugged weapon for survival in the wilderness.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Stone" : new Item("Sword_Stone", "Stone Sword", "A sword crafted from durable stone, its rugged appearance belying its strength and reliability as a formidable weapon, suited for adventurers braving the untamed wilds.","{\"Traits\":[\"Equipable\"],\"Damage\":50}"),

            /* Copper Set */
            "Blade-Copper" : new Item("Blade_Copper", "Copper Blade", "A blade forged from sturdy copper, its gleaming surface reflecting craftsmanship and utility, offering a reliable weapon with a hint of elegance to adventurers seeking both strength and style.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Copper" : new Item("Sword_Copper", "Copper Sword", "A sword expertly forged from resilient copper, its lustrous hue hinting at both its durability and refined craftsmanship, providing a reliable weapon for adventurers venturing into the fray.","{\"Traits\":[\"Equipable\"],\"Damage\":100}"),

            /* Grass Set */
            "Blade-Grass" : new Item("Blade_Grass", "Grass Blade", "A blade crafted from toughened grass fibers, its verdant sheen concealing its surprising strength, offering a weapon both lightweight and unexpectedly resilient, ideal for agile warriors attuned to nature's secrets.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Grass" : new Item("Sword_Grass", "Grass Sword", "A sword woven from resilient grass fibers, its flexible yet durable construction harnessing the vitality of nature, providing a unique and versatile weapon for those who favor agility and resourcefulness in combat.","{\"Traits\":[\"Equipable\"],\"Damage\":128}"),

            /* Copper Set */
            "Blade-Iron" : new Item("Blade_Iron", "Iron Blade", "An imposing blade forged from solid iron, its weight and strength unmatched by lesser materials, serving as a formidable weapon capable of cleaving through even the toughest adversaries with ease.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Iron" : new Item("Sword_Iron", "Iron Sword", "An iron sword, crafted with precision and strength in mind, offering a reliable and formidable weapon favored by warriors for its durability and cutting power on the battlefield.","{\"Traits\":[\"Equipable\"],\"Damage\":192}"),

            /* Silver Set */
            "Blade-Silver" : new Item("Blade_Silver", "Silver Blade", "A blade crafted from gleaming silver, imbued with an otherworldly sheen and renowned for its ability to repel dark forces, offering a potent weapon for those who seek to combat the supernatural with purity and grace.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Silver" : new Item("Sword_Silver", "Silver Sword", "A silver sword, its shimmering blade infused with purity and strength, renowned for its effectiveness against the unholy and the supernatural, making it a favored weapon among hunters of the dark and defenders of the innocent.","{\"Traits\":[\"Equipable\"],\"Damage\":256}"),

            /* Jade Set */
            "Blade-Jade" : new Item("Blade_Jade", "Jade Blade", "A masterfully crafted weapon forged from refined jade, exudes an aura of elegance and strength. Its verdant hue reflects the resilience of nature, while its razor-sharp edge promises precision and power in combat.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Jade" : new Item("Sword_Jade", "Jade Sword", "A formidable weapon crafted from the finest jade, emanates an aura of natural beauty and strength. Its sleek design and vibrant green hue symbolize resilience and vitality, making it a favored choice for warriors seeking both style and substance on the battlefield.","{\"Traits\":[\"Equipable\"],\"Damage\":384}"),

            /* Gold Set */
            "Blade-Gold" : new Item("Blade_Gold", "Gold Blade", "A symbol of opulence and prestige, crafted from the finest gold, radiates a dazzling brilliance and promises swift and decisive strikes in battle, befitting of warriors of nobility and valor.", "{\"Traits\":[\"Material\"]}"),
            "Sword-Gold" : new Item("Sword_Gold", "Gold Sword", "A regal weapon forged from pure gold, commands attention with its gleaming brilliance and promises both strength and prestige to its wielder, making it a prized possession fit for royalty and champions alike.","{\"Traits\":[\"Equipable\"],\"Damage\":512}"),
        }
        console.log("Game: Item Data Set")

        this.Recipes = { // [[Item, Amount], [AnotherItem, Amount]]
            "String" : [[this.Items["Slime-Green"], 5],[this.Items["Slime-Yellow"], 2]],
            "Grass" : [[this.Items["Slime-Green"], 2]],
            "Stick" : [[this.Items["Slime-Green"], 40]],
            "Bone" : [[this.Items["Slime-Green"], 15],[this.Items["Slime-Red"], 10]],
            "Rock" : [[this.Items["Slime-Blue"], 20],[this.Items["Slime-Red"], 20]],
            "Aura" :  [[this.Items["Slime-Blue"], 1000]],
            "Ore-Copper" : [[this.Items["Slime-Blue"], 100],[this.Items["Slime-Red"], 100]],
            "Ore-Iron" : [[this.Items["Slime-Blue"], 250],[this.Items["Slime-Red"], 250]],
            "Ore-Silver" : [[this.Items["Slime-Yellow"], 250],[this.Items["Slime-Blue"], 1250],[this.Items["Slime-Red"], 1250]],
            "Jade" : [[this.Items["Aura"], 1],[this.Items["Slime-Green"], 5000],[this.Items["Echo-Stone"], 1]],
            "Ore-Gold" : [[this.Items["Slime-Yellow"], 1000],[this.Items["Slime-Blue"], 10000],[this.Items["Slime-Red"], 10000],[this.Items["Echo-Stone"], 10]],
            "Handle-Wooden" : [[this.Items["Stick"], 2],[this.Items["String"], 2]],
            "Blade-Wooden" : [[this.Items["Stick"], 4]],
            "Sword-Wooden" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 4],[this.Items["Blade-Wooden"], 1]],
            "Slime-Sword-Green" : [[this.Items["Slime-Green"], 5000]],
            "Slime-Sword-Yellow" : [[this.Items["Slime-Yellow"], 5000]],
            "Slime-Sword-Blue" : [[this.Items["Slime-Blue"], 5000]],
            "Slime-Sword-Red" : [[this.Items["Slime-Red"], 5000]],
            "Slime-Sword" : [[this.Items["Slime-Sword-Green"], 1], [this.Items["Slime-Sword-Yellow"], 1], [this.Items["Slime-Sword-Blue"], 1], [this.Items["Slime-Sword-Red"], 1]],
            "Slime-Sword-2" : [[this.Items["Slime-Sword"], 4]],
            "Slime-Sword-3" : [[this.Items["Slime-Sword-2"], 4]],
            "Slime-Sword-4" : [[this.Items["Slime-Sword-3"], 4]],
            "Slime-Sword-5" : [[this.Items["Slime-Sword-4"], 4]],
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
            "Blade-Jade" : [[this.Items["Jade"], 16]],
            "Sword-Jade" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 24],[this.Items["Blade-Jade"], 1]],
            "Blade-Gold" : [[this.Items["Gold"], 24], [this.Items["Echo-Stone"], 2]],
            "Sword-Gold" : [[this.Items["Handle-Wooden"], 1],[this.Items["String"], 24],[this.Items["Blade-Gold"], 1]],
        }
        console.log("Game: Recipe Data Set")

        this.SmeltingRecipes = {
            // "Essence-Nature" : [[this.Items["Slime-Green"], 100], 10],
            // "Essence-Energy" : [[this.Items["Slime-Yellow"], 100], 10],
            // "Essence-Water" : [[this.Items["Slime-Blue"], 100], 10],
            // "Essence-Magma" : [[this.Items["Slime-Red"], 100], 10],
            "Copper" : [[this.Items["Ore-Copper"], 1], 15],
            "Iron" : [[this.Items["Ore-Iron"], 1], 60],
            "Silver" : [[this.Items["Ore-Silver"], 2], 300],
            "Gold" : [[this.Items["Ore-Gold"], 2], 600],
            "Echo-Stone" : [[this.Items["Silver"], 2], 1200],
        }
        
        this.Catagories = {
            "All" : [],
            "Materials" : ["String", "Grass", "Stick", "Bone", "Rock", "Ore-Copper", "Ore-Iron", "Ore-Silver", "Jade", "Ore-Gold"],
            "Weaponry" : ["Handle-Wooden", "Blade-Wooden", "Sword-Wooden", "Slime-Sword-Green", "Slime-Sword-Yellow", "Slime-Sword-Blue", "Slime-Sword-Red", "Slime-Sword", "Slime-Sword-2", "Slime-Sword-3", "Slime-Sword-4", "Slime-Sword-5",
            "Blade-Bone", "Sword-Bone", "Blade-Stone", "Sword-Stone", "Blade-Grass", "Sword-Grass", "Blade-Copper", "Sword-Copper", "Blade-Iron", "Sword-Iron", "Blade-Silver", "Sword-Silver",
            "Blade-Jade", "Sword-Jade", "Blade-Gold", "Sword-Gold"],
            "Alchemy" : ["Aura"]
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
            "Goblin-King" :new Monster("Monster_Goblin_King", "Goblin King", 1000000, 50, [ new DropChance(this.Items["Bone"], 0.1, 4), new DropChance(this.Items["Echo-Stone"], 0.05, 3)]),
            "Goblin-Queen" :new Monster("Monster_Goblin_Queen", "Goblin Queen", 1000000, 50, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Echo-Stone"], 0.05, 3)]),
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
            new QuestLine("Small Slime Hunting", [
                    new Quest("Small Slime Hunt I", "Residents report an increase in small slime sightings near the town. Investigate and eliminate the threat to ensure the safety of the townsfolk.", "{\"slain\":[[\"Slime-Green-Small\", 100],[\"Slime-Yellow-Small\", 100],[\"Slime-Red-Small\", 100],[\"Slime-Blue-Small\", 100]],\"reward\":{\"xp\" : 1000,\"items\" : [[\"Rock\", 6]]}}"),
                    new Quest("Small Slime Hunt II", "Reports confirm a hidden slime den as the source of the infestation. Your mission is to locate and eliminate the creatures within, ensuring the safety of the town from further slime encroachment.", "{\"slain\":[[\"Slime-Green-Small\", 1000],[\"Slime-Yellow-Small\", 1000],[\"Slime-Red-Small\", 1000],[\"Slime-Blue-Small\", 1000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}"),
                    new Quest("Small Slime Hunt III", "Following the eradication of the slime den, reports indicate a hidden chamber harboring a colossal slime nest. Your mission is to venture into the depths, confront the monstrous slime creatures within, and eliminate the threat to the town's safety.", "{\"slain\":[[\"Slime-Green-Small\", 10000],[\"Slime-Yellow-Small\", 10000],[\"Slime-Red-Small\", 10000],[\"Slime-Blue-Small\", 10000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}"),
                    new Quest("Small Slime Hunt IV", "Having cleared the titan slime nest, reports reveal a deeper, more expansive cavern network beneath the town, housing a colossal slime nest. Your task is to navigate the labyrinthine depths, confront the hulking slime guardians, and purge the nest of its monstrous inhabitants to safeguard the town's well-being. Prepare for a perilous journey fraught with danger and uncertainty.", "{\"slain\":[[\"Slime-Green-Small\", 100000],[\"Slime-Yellow-Small\", 100000],[\"Slime-Red-Small\", 100000],[\"Slime-Blue-Small\", 100000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}")
                ]
            ),
            new QuestLine("Sword Master", [
                    new Quest("Sword Master I", "I am interested in the art of swords, but I need a weapon, preferably something simple to get started", "{\"items\":[[\"Stick\", 1]],\"reward\":{\"xp\" : 500}}"),
                    new Quest("Sword Master II", "After learning the basics of sword play with a stick, I believe it's my time to move to a real weapon", "{\"items\":[[\"Wooden Sword\", 1]],\"reward\":{\"xp\" : 2000}}"),                
                    new Quest("Sword Master III", "Now that I have some real experience, I want to boost my experience even further and faster", "{\"items\":[[\"Bone Sword\", 1]],\"reward\":{\"xp\" : 8000}}"),                
                    new Quest("Sword Master IV", "With enough experience I realize I need a sturdy weapon I can trust on, a weapon that won't falter so easy", "{\"items\":[[\"Stone Sword\", 1]],\"reward\":{\"xp\" : 32000}}"),            
                    new Quest("Sword Master V", "My sword now struggles to keep up with me and the strains of battle I put it threw. I must advance", "{\"items\":[[\"Copper Sword\", 1]],\"reward\":{\"xp\" : 128000}}"),        
                    new Quest("Sword Master VI", "I seek the sword or iron to elevate my skills to the next level", "{\"items\":[[\"Iron Sword\", 1]],\"reward\":{\"xp\" : 512000}}"),          
                    new Quest("Sword Master VII", "The vampires are coming, I must surpass my weaknesses and destroy them all", "{\"items\":[[\"Silver Sword\", 1]],\"reward\":{\"xp\" : 2048000 }}")
                ]
            ),
            new QuestLine("Brewer Master", [
                    new Quest("Brewer Master I", "Monsters have recently overran my field, but I have a deadline to have strength potions and am lacking grass to finish those potions", "{\"items\":[[\"Grass\", 10]],\"reward\":{\"xp\" : 50,\"items\" : [[\"Stick\", 1]]}}"),
                    new Quest("Brewer Master II", "New potions are coming out in my rival shop, so I need more materials for my experimentation", "{\"items\":[[\"String\", 10],[\"Copper\", 5]],\"reward\":{\"xp\" : 300, \"items\" : [[\"Slime-Green\", 100]]}}"),
                    new Quest("Brewer Master III", "I'm coming up on a breakthrough for a potion with something to do with undead beings", "{\"items\":[[\"Bone\", 10],[\"Aura\", 2]],\"reward\":{\"xp\" : 900, \"items\" : [[\"Slime-Red\", 500]]}}")
                ]
            ),
            new QuestLine("Master Smither", [
                    new Quest("Master Smither I", "Novice smith seeking copper ore to gain valuable experience in the craft of tool and weapon making. Embark on this quest to aid the aspiring artisan on their journey of skill development and craftsmanship.", "{\"items\":[[\"Copper Ore\", 10]],\"reward\":{\"xp\" : 1000,\"items\" : [[\"Copper\", 10]]}}"),
                    new Quest("Master Smither II", "I'm a budding smith and I need iron to practice my craft. Looking for adventurers willing to gather iron ore. Let's work together to fuel my progress in metalworking!", "{\"items\":[[\"Raw Iron\", 10]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Iron\", 10]]}}"),
                    new Quest("Master Smither III", "I'm a beginner smith in need of silver for my next project. If you can gather silver ore, I'll be able to continue honing my skills.", "{\"items\":[[\"Raw Silver\", 10]],\"reward\":{\"xp\" : 25000,\"items\" : [[\"Silver\", 10]]}}"),
                    new Quest("Master Smither IV", "Having advanced in my craftsmanship, I'm now ready to work with jade in my next project. If you can acquire some jade for me, I'll be able to explore more intricate designs and techniques in my work. I heard you can get Echo Stones from smelting Silver", "{\"items\":[[\"Jade\", 10]],\"reward\":{\"xp\" : 125000,\"items\" : [[\"Echo-Stone\", 15]]}}"),
                    new Quest("Master Smither V", "With my skills as a smith advancing, I now seek gold for my next endeavor. If you can provide gold, I'll be able to undertake more ambitious projects and showcase my growing expertise.", "{\"items\":[[\"Raw Gold\", 10]],\"reward\":{\"xp\" : 500000,\"items\" : [[\"Gold\", 10]]}}")
                ]
            )
        ]
        console.log("Game: Quest Data Set")

        this.createQuest()

        this.playerLevel = 1;
        this.playerXP = 0;
        this.playerTotalXP = 0;
        console.log("Game: Player Stats Set")

        this.inventory = null;
        console.log("Game: Inventory Set")

        this.CategoryNames = ["All", "Materials", "Weaponry", "Alchemy"]
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
                this.inventory.addItem(this.Items[recipeName]);
                PlayAudio(chinkAudio);
            }
        };

        const div = document.createElement("div");
        const image = document.createElement("img");
        image.src = getImageURL(this.Items[recipeName].sprite);
        image.id = recipeName;

        addToolTipListener(container, this.Items[recipeName], 1);
    
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

        container.appendChild(div)
        container.appendChild(text);
        div.appendChild(image);
        list.appendChild(container);
    }

    createQuest() {
        this.Quests.forEach(questLine => {
            if (questLine.quests[questLine.currentQuest] == undefined) {
                return;
            }
            if (!questLine.quests[questLine.currentQuest].isCompleted) {
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
        for (let i = 0; i < document.getElementById("questList").children.length; i) {
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
        this.dcm += (attributes["DCM"] == undefined) ? 0 : attributes["DCM"] / 100;

        document.getElementById("PlayerStatsText").innerText = `Strength: ${Math.floor(10 * playerDMG) / 10}\nWeapon Strength: ${Math.floor(weaponDMG)}\nTotal Damage: ${Math.floor(10 * this.strength) / 10}\nDrop Chance Multi: ${Math.floor(10 * this.dcm) / 10}`
    }

    getXpReq(lvl = -1) {
        const req = Math.pow(Math.max(this.playerLevel, lvl), 3) * 10;
        return req;
    }

    setSlot(item, slotIMG, trait, audioSuccess, audioFail, funcHas, funcHasNot) {
        if (JSON.parse(item.attributes).Traits.includes(trait)) {
            this.inventory.hasAndRemoveItem(item.name);
            slotIMG.src = getImageURL(item.sprite);
    
            funcHas(item);
            PlayAudio(audioSuccess)
        } else {
            funcHasNot();
        }

        this.inventory.drawItems();
    }

    checkSmelter() {
        if (this.inventory.fuel == undefined || this.inventory.smelted == undefined) {
            return;
        }
        Object.entries(this.SmeltingRecipes).forEach(([recipeName, recipe]) => {
            if (this.Items[recipeName] == undefined) {
                return;
            }
            try {
                if (this.inventory.smelted[0].name == recipe[0][0].name) {
                    if (this.inventory.smelted[1] <= 0) {
                        this.inventory.smelted = undefined;
                    }
    
                    // Time to craft
                    this.inventory.smeltingTime = recipe[1];
                    this.inventory.smeltingProgress = 0;
                    this.inventory.canSmelt = false;
                    const interval = setInterval(() => {
                        document.getElementById("SmeltingBar").style.height = 100 * this.inventory.smeltingProgress / this.inventory.smeltingTime + "px";
                        this.inventory.smeltingProgress += 50 / 1000;
                        if (this.inventory.smeltingProgress > this.inventory.smeltingTime) {
                            clearInterval(interval);
                            this.inventory.smelted[1]--;
                            this.inventory.fuel[1]--;

                            this.inventory.addItem(this.Items[recipeName]);
                            this.inventory.drawItems();
                            this.inventory.canSmelt = true;
    
                            this.checkSmelter();
                        }
                    }, 50);
                    this.inventory.drawItems();
                }
            } catch (error) {
                // I got sick of this error :unamused:
            }
           
        });

        document.getElementById("SmelterFuelSlotImage")
    }

    getSmeltedResult() {
        if (this.inventory.smeltedResult != undefined) {
            this.inventory.addItem(this.inventory.smeltedResult);
            this.inventory.smeltedResult = undefined;
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

    updateItemTraits() {
        this.inventory.inventory.forEach(([Item, Count]) => {
            if (Item != undefined) {
                console.log(Item)
                let attr = JSON.parse(Item.attributes)
                attr["Traits"] = JSON.parse(this.Items[Item.name].attributes)["Traits"]
                Item.attributes = JSON.stringify(attr);
            }
        });
    }
}