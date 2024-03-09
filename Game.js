class Game {
    constructor() {
        console.log("Game: Initializing Game Data")
        this.strength = 1;
        this.dcm = 1; // Drop Chance Multiplier
        this.xpm = 1; //
        this.totalAttacks = 0;
        this.monstersDefeated = 0;

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
            "Sword-Bone" : new Item("Sword_Bone", "Bone Sword", "A sword fashioned from bone, its primitive yet sturdy design reflecting the resourcefulness of its creator, offering a formidable weapon with a haunting aesthetic.","{\"Traits\":[\"Equipable\"],\"Damage\":12,\"XPM\":100}"),

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
            "Alchemy" : ["Aura"],
            "Alphabetical" : []
        }
        console.log("Game: Category Data Set")

        this.Monsters = {
            "Slime-Green-Small" : new Monster("Monster_Slime_Small_Green", "Small Green Slime", 10, 0, [ new DropChance(this.Items["Slime-Green"], 0.12, 4), new DropChance(this.Items["Slime-Sword-Green"], 0.00001, 1)], "A diminutive green slime, commonly found roaming the verdant plains, its gelatinous form pulsating with youthful energy as it traverses the grassy terrain, occasionally posing a minor threat to unsuspecting travelers."),
            "Slime-Yellow-Small" :new Monster("Monster_Slime_Small_Yellow", "Small Yellow Slime", 10, 0, [ new DropChance(this.Items["Slime-Yellow"], 0.12, 3), new DropChance(this.Items["Slime-Sword-Yellow"], 0.00001, 1)], "A small yellow slime, its electrifying aura crackling with energy as it navigates the landscape, often found in open fields or near sources of power, presenting a mild hazard to those who cross its path."),
            "Slime-Blue-Small" :new Monster("Monster_Slime_Small_Blue", "Small Blue Slime", 10, 0, [ new DropChance(this.Items["Slime-Blue"], 0.12, 2), new DropChance(this.Items["Slime-Sword-Blue"], 0.00001, 1)], "A small blue slime, its watery form undulating with fluid grace as it moves through its aquatic habitat, commonly found near bodies of water or in damp environments, where it poses a minor threat to curious explorers."),
            "Slime-Red-Small" :new Monster("Monster_Slime_Small_Red", "Small Red Slime", 10, 0, [ new DropChance(this.Items["Slime-Red"], 0.12, 1), new DropChance(this.Items["Slime-Sword-Red"], 0.00001, 1)], "A small red slime, despite its fiery appearance, shares the same diminutive size and strength as its counterparts in green, yellow, and blue. Found commonly in various terrains, it presents a minor challenge to adventurers due to its gelatinous nature rather than any inherent strength."),
            "Slime-Green" : new Monster("Monster_Slime_Green", "Green Slime", 100, 5, [ new DropChance(this.Items["Slime-Green"], 0.14, 8), new DropChance(this.Items["Slime-Sword-Yellow"], 0.00002, 1)], "A green slime, native to the medium plains, its gelatinous form blending with the grasses and shrubs of its habitat as it traverses the landscape, occasionally posing a mild nuisance to travelers and adventurers passing through the area." ),
            "Slime-Yellow" :new Monster("Monster_Slime_Yellow", "Yellow Slime", 100, 5, [ new DropChance(this.Items["Slime-Yellow"], 0.14, 6), new DropChance(this.Items["Slime-Sword-Green"], 0.00002, 1)], "A yellow slime, commonly found inhabiting the medium plains, its gelatinous body tinged with a vibrant hue of yellow, crackling with latent energy. As it roams the grassy expanses, its electric aura presents a subtle yet noticeable hazard to those who stray too close."),
            "Slime-Blue" :new Monster("Monster_Slime_Blue", "Blue Slime", 100, 5, [ new DropChance(this.Items["Slime-Blue"], 0.14, 4), new DropChance(this.Items["Slime-Sword-Blue"], 0.00002, 1)], "A blue slime, native to the medium plains, its fluid form gliding effortlessly through the terrain, leaving behind a glistening trail of moisture. With each undulating movement, it emanates a calming aura, inviting travelers to approach cautiously despite its potential for minor inconvenience."),
            "Slime-Red" :new Monster("Monster_Slime_Red", "Red Slime", 100, 5, [ new DropChance(this.Items["Slime-Red"], 0.14, 2), new DropChance(this.Items["Slime-Sword-Red"], 0.00002, 1)], "A red slime, seldom seen but occasionally encountered in the medium plains, its fiery demeanor contrasting with the tranquil surroundings. While its appearance may evoke thoughts of danger, this small creature's strength matches that of its counterparts, presenting little more than a passing distraction to those journeying through the grasslands."),
            "Slime-Green-Large" : new Monster("Monster_Slime_Large_Green", "Large Green Slime", 300, 10, [ new DropChance(this.Items["Slime-Green"], 0.16, 12), new DropChance(this.Items["Slime-Sword-Yellow"], 0.00003, 1)], "A formidable presence in the large plains, the large green slime commands attention with its imposing size and vibrant hue. Its gelatinous form undulates across the grassy expanse, leaving a trail of slick residue in its wake. Travelers beware, for this creature poses a greater threat than its smaller kin, capable of engulfing unwary adventurers who underestimate its strength."),
            "Slime-Yellow-Large" :new Monster("Monster_Slime_Large_Yellow", "Large Yellow Slime", 300, 10, [ new DropChance(this.Items["Slime-Yellow"], 0.16, 9), new DropChance(this.Items["Slime-Sword-Green"], 0.00003, 1)], "In the vast expanses of the large plains, the large yellow slime reigns supreme, its electrifying aura crackling with potent energy. Towering over its smaller counterparts, it moves with a slow but deliberate pace, its imposing form serving as a warning to all who dare to cross its path. Approach with caution, for a single touch from this creature could result in a shocking outcome."),
            "Slime-Blue-Large" :new Monster("Monster_Slime_Large_Blue", "Large Blue Slime", 300, 10, [ new DropChance(this.Items["Slime-Blue"], 0.16, 6), new DropChance(this.Items["Slime-Sword-Blue"], 0.00003, 1)], "Amidst the endless grasslands of the large plains, the large blue slime drifts with an ethereal grace, its fluid form shimmering with an otherworldly glow. Unlike its smaller brethren, this creature possesses a tranquil aura, luring unsuspecting travelers into a false sense of security. Yet, beneath its serene exterior lies a potential threat, as its size grants it the ability to engulf even the most vigilant adventurers."),
            "Slime-Red-Large" :new Monster("Monster_Slime_Large_Red", "Large Red Slime", 300, 10, [ new DropChance(this.Items["Slime-Red"], 0.16, 3), new DropChance(this.Items["Slime-Sword-Red"], 0.00003, 1)], "Rarely glimpsed but feared by those who traverse the large plains, the large red slime embodies the fiery essence of its surroundings. Its crimson form stands out against the backdrop of greenery, a beacon of danger warning all who approach. With each lumbering movement, it leaves behind scorch marks on the earth, a testament to its formidable strength and potential for destruction."),
            "Slime-Green-Massive" : new Monster("Monster_Slime_Massive_Green", "Massive Green Slime", 900, 15, [ new DropChance(this.Items["Slime-Green"], 0.18, 16), new DropChance(this.Items["Slime-Sword-Yellow"], 0.00004, 1)], "Dominating the expansive landscape of the massive plains, the massive green slime looms like a colossal behemoth, its gelatinous bulk dwarfing all who dare to approach. With each ponderous movement, it leaves behind a trail of destruction, its sheer size and strength capable of engulfing entire swathes of terrain. Travelers beware, for confronting this gargantuan creature requires courage and cunning in equal measure."),
            "Slime-Yellow-Massive" :new Monster("Monster_Slime_Massive_Yellow", "Massive Yellow Slime", 900, 15, [ new DropChance(this.Items["Slime-Yellow"], 0.18, 12), new DropChance(this.Items["Slime-Sword-Green"], 0.00004, 1)], "In the vast and sprawling expanse of the massive plains, the massive yellow slime reigns supreme, its towering form crackling with untamed energy. With each electrifying pulse, it sends shockwaves rippling through the surrounding landscape, a potent reminder of its immense power. Those who encounter this colossal creature would be wise to tread carefully, lest they become ensnared in its electrifying grasp."),
            "Slime-Blue-Massive" :new Monster("Monster_Slime_Massive_Blue", "Massive Blue Slime", 900, 15, [ new DropChance(this.Items["Slime-Blue"], 0.18, 8), new DropChance(this.Items["Slime-Sword-Blue"], 0.00004, 1)], "Amidst the boundless horizons of the massive plains, the massive blue slime drifts like a majestic apparition, its ethereal form casting a shimmering glow across the landscape. Unlike its smaller counterparts, this colossal creature exudes an aura of serenity, inviting travelers to approach with cautious curiosity. Yet, beneath its tranquil exterior lies a formidable adversary, capable of enveloping even the most seasoned adventurers in its watery embrace."),
            "Slime-Red-Massive" :new Monster("Monster_Slime_Massive_Red", "Massive Red Slime", 900, 15, [ new DropChance(this.Items["Slime-Red"], 0.18, 4), new DropChance(this.Items["Slime-Sword-Red"], 0.00004, 1)], "Rare and fearsome, the massive red slime prowls the vast expanses of the massive plains, its fiery presence casting a crimson glow over the land. Towering over the landscape like a living inferno, it leaves a trail of scorching devastation in its wake, its immense size and ferocious demeanor striking fear into the hearts of all who encounter it. To face this colossal creature is to confront the very essence of primal fury and elemental chaos."),

            "Plant-Flower-Murderous" :new Monster("Monster_Flower_Murderous", "Murderous Flower", 1200, 20, [new DropChance(this.Items["Slime-Green"], 0.2, 2), new DropChance(this.Items["Slime-Yellow"], 0.2, 2), new DropChance(this.Items["Slime-Blue"], 0.2, 2), new DropChance(this.Items["Slime-Red"], 0.2, 2), new DropChance(this.Items["Aura"], 0.01, 1), new DropChance(this.Items["Slime-Sword-Green"], 0.00001, 1), new DropChance(this.Items["Slime-Sword-Yellow"], 0.00001, 1), new DropChance(this.Items["Slime-Sword-Blue"], 0.00001, 1), new DropChance(this.Items["Slime-Sword-Red"], 0.00001, 1)], "This carnivorous plant species, often found lurking near forest entrances and within forest meadows, bears a striking resemblance to a large sunflower. Despite its innocent appearance, it harbors a deadly threat, equipped with razor-sharp teeth capable of consuming prey, including humans. Caution is advised when navigating forested areas inhabited by these predatory flora."),
            "Goblin-Villager" :new Monster("Monster_Goblin_Villager", "Goblin Villager", 1500, 20, [ new DropChance(this.Items["Bone"], 0.1, 1), new DropChance(this.Items["Rock"], 0.01, 3), new DropChance(this.Items["Copper"], 0.001, 2), new DropChance(this.Items["Iron"], 0.0001, 1)], "Found within secluded forest settlements or hidden underground caverns, the Goblin Villager is a member of the goblin race. Despite their smaller stature compared to their warrior brethren, they exhibit hostility towards outsiders, making encounters with them potentially dangerous."),
            "Goblin-Scout" :new Monster("Monster_Goblin_Scout", "Goblin Scout", 1800, 20, [ new DropChance(this.Items["Bone"], 0.1, 1), new DropChance(this.Items["Copper"], 0.01, 3), new DropChance(this.Items["Iron"], 0.001, 2), new DropChance(this.Items["Silver"], 0.0001, 1)], "Goblin Scouts, commonly encountered patrolling the outskirts of goblin territories or lurking in dense forests, serve as the eyes and ears of their warlike kin. Agile and cunning, they are skilled at detecting intruders and reporting back to their tribes. Armed with crude weapons and always on the lookout for potential threats, encounters with Goblin Scouts are typically met with aggression and hostility."),
            "Goblin-Warrior" :new Monster("Monster_Goblin_Warrior", "Goblin Warrior", 2500, 25, [ new DropChance(this.Items["Bone"], 0.1, 2), new DropChance(this.Items["Copper"], 0.02, 4), new DropChance(this.Items["Iron"], 0.003, 3), new DropChance(this.Items["Silver"], 0.0003, 2)], "Goblin Warriors, stalwart members of goblin tribes, are often encountered guarding their territories or raiding nearby settlements. Armed with crude weapons and fueled by their aggressive nature, they pose a significant threat to travelers and adventurers alike. Fearless in battle and fiercely loyal to their tribe, Goblin Warriors will stop at nothing to defend their territory and uphold their dominance in the region."),
            "Goblin-Guard" :new Monster("Monster_Goblin_Guard", "Goblin Guard", 3000, 30, [ new DropChance(this.Items["Bone"], 0.1, 2), new DropChance(this.Items["Iron"], 0.01, 3), new DropChance(this.Items["Silver"], 0.001, 2), new DropChance(this.Items["Jade"], 0.0001, 1)], "Goblin Guards, stationed at key points within goblin strongholds or patrolling the perimeter of their territories, are formidable sentinels tasked with maintaining order and security. Armed with crude yet effective weaponry and armored in scavenged materials, they stand ready to repel intruders and defend their kin at all costs. Hostile and vigilant, encounters with Goblin Guards often result in swift and aggressive confrontations."),
            "Goblin-Knight" :new Monster("Monster_Goblin_Knight", "Goblin Knight", 4000, 35, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Iron"], 0.05, 5), new DropChance(this.Items["Silver"], 0.01, 3), new DropChance(this.Items["Jade"], 0.001, 2)], "Goblin Knights, elite warriors among goblin tribes, are distinguished by their superior combat skills and formidable armor. Clad in makeshift plate mail and wielding crude but deadly weapons, they serve as champions of their kin, leading charges into battle and defending their territory with unwavering ferocity. Encounters with Goblin Knights are rare but perilous, as these skilled fighters pose a significant threat to even the most seasoned adventurers."),
            "Goblin-Knight-Royal" :new Monster("Monster_Goblin_RoyalKnight", "Royal Goblin Knight", 5000, 40, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Iron"], 0.1, 7), new DropChance(this.Items["Silver"], 0.05, 5), new DropChance(this.Items["Jade"], 0.00015, 2)], "Goblin Royal Knights, revered champions of goblin society, are elite warriors handpicked by goblin lords to serve as their personal guards and enforcers. Clad in ornate armor adorned with symbols of their tribe's authority, they wield weapons of superior craftsmanship and are skilled in both offense and defense. Encounters with Goblin Royal Knights are rare and highly dangerous, as they are fiercely loyal to their leaders and will stop at nothing to protect them and their realm."),
            "Goblin-King" :new Monster("Monster_Goblin_King", "Goblin King", 10000, 50, [ new DropChance(this.Items["Bone"], 0.1, 4), new DropChance(this.Items["Echo-Stone"], 0.05, 3)], "Goblin King, the epitome of sloth and indulgence, reigns over his domain with a lazy but iron fist. Residing within the opulent chambers of his underground palace, adorned with stolen riches and trinkets, he is the embodiment of gluttony and excess. Despite his corpulent frame and lack of physical prowess, he wields immense authority over his subjects, ruling through intimidation and manipulation rather than strength.\n\nSurrounded by a retinue of sycophantic advisors and lackeys, the Goblin King spends his days feasting on lavish banquets and indulging in idle pleasures, while his kingdom teeters on the brink of collapse. Despite his inherent laziness, he is not to be underestimated, as his cunning mind and ruthless ambition allow him to maintain control over his realm with ruthless efficiency.\n\nEncounters with the Goblin King are rare and fraught with danger, as his insatiable greed and lust for power drive him to eliminate any threats to his rule, be they real or imagined. Those who dare to challenge his authority must be prepared to face not only his formidable guards and minions but also his cunning intellect and Machiavellian schemes."),
            "Goblin-Queen" :new Monster("Monster_Goblin_Queen", "Goblin Queen", 10000, 50, [ new DropChance(this.Items["Bone"], 0.1, 3), new DropChance(this.Items["Echo-Stone"], 0.05, 3)], "Goblin Queen, a figure of cunning and ambition, presides over her domain with a regal grace tempered by ruthless pragmatism. Though not as ostentatious as her male counterpart, she commands respect and fear among her subjects through a combination of intelligence, charisma, and sheer force of will.\n            Residing within the heart of her labyrinthine fortress, she holds court with a steady hand, navigating the complex web of goblin politics and alliances with ease. Unlike the Goblin King, she eschews the trappings of excess and indulgence, preferring instead to focus her energies on maintaining the stability and prosperity of her realm.\n\n            Despite her outward appearance of composure, the Goblin Queen is not to be underestimated. Beneath her calm demeanor lies a keen mind and a fierce determination to protect her people and secure her power. Encounters with her are rare and fraught with peril, as she is not afraid to employ any means necessary to ensure the continued survival and dominance of her kingdom."),
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
            new Area("Icon_Area_Forest_Entrance", "Forest Entrance", [[this.Monsters["Plant-Flower-Murderous"], 0.66],[this.Monsters["Goblin-Villager"], 0.20],[this.Monsters["Goblin-Scout"], 0.12]]),
            new Area("Icon_Area_Forest_Entrance", "Forest Meadows", [[this.Monsters["Goblin-Villager"], 0.33],[this.Monsters["Goblin-Scout"], 0.33],[this.Monsters["Plant-Flower-Murderous"], 0.33]]),
            new Area("Icon_Area_Forest_Entrance", "Forest Path", [[this.Monsters["Goblin-Villager"], 0.33],[this.Monsters["Goblin-Scout"], 0.33],[this.Monsters["Goblin-Warrior"], 0.33]]),
            new Area("Icon_Area_Forest_Entrance", "Goblin Fortress Entrance", [[this.Monsters["Goblin-Scout"], 0.33],[this.Monsters["Goblin-Warrior"], 0.33],[this.Monsters["Goblin-Guard"], 0.33]]),
            new Area("Icon_Area_Forest_Entrance", "Goblin Fortress City", [[this.Monsters["Goblin-Warrior"], 0.33],[this.Monsters["Goblin-Guard"], 0.33],[this.Monsters["Goblin-Knight"], 0.33]]),
            new Area("Icon_Area_Forest_Entrance", "Goblin Fortress Tower", [[this.Monsters["Goblin-Guard"], 0.33],[this.Monsters["Goblin-Knight"], 0.33],[this.Monsters["Goblin-Knight-Royal"], 0.33]]),
            new Area("Icon_Area_Forest_Entrance", "Goblin Fortress Throne Room", [[this.Monsters["Goblin-King"], 0.5],[this.Monsters["Goblin-Queen"], 0.5]]),
        ]
        console.log("Game: Area Data Set")

        this.Quests = [
            new QuestLine("Small Slime Hunting", [
                    new Quest("Small Slime Hunt I", "Residents report an increase in small slime sightings near the town. Investigate and eliminate the threat to ensure the safety of the townsfolk.", "{\"slain\":[[\"Slime-Green-Small\", 100],[\"Slime-Yellow-Small\", 100],[\"Slime-Red-Small\", 100],[\"Slime-Blue-Small\", 100]],\"reward\":{\"xp\" : 1000,\"items\" : [[\"Rock\", 6]]}}"),
                    new Quest("Small Slime Hunt II", "The discovery of a goblin village deeper within the forest has escalated the urgency of the situation. Reports indicate the presence of formidable goblin warriors and vigilant guards, suggesting that the goblin threat is more organized and dangerous than initially feared. It is imperative to investigate the goblin stronghold and neutralize the threat before they can launch an attack on the nearby settlements.", "{\"slain\":[[\"Slime-Green-Small\", 1000],[\"Slime-Yellow-Small\", 1000],[\"Slime-Red-Small\", 1000],[\"Slime-Blue-Small\", 1000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}"),
                    new Quest("Small Slime Hunt III", "Following the eradication of the slime den, reports indicate a hidden chamber harboring a colossal slime nest. Your mission is to venture into the depths, confront the monstrous slime creatures within, and eliminate the threat to the town's safety.", "{\"slain\":[[\"Slime-Green-Small\", 10000],[\"Slime-Yellow-Small\", 10000],[\"Slime-Red-Small\", 10000],[\"Slime-Blue-Small\", 10000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}"),
                    new Quest("Small Slime Hunt IV", "Having cleared the titan slime nest, reports reveal a deeper, more expansive cavern network beneath the town, housing a colossal slime nest. Your task is to navigate the labyrinthine depths, confront the hulking slime guardians, and purge the nest of its monstrous inhabitants to safeguard the town's well-being. Prepare for a perilous journey fraught with danger and uncertainty.", "{\"slain\":[[\"Slime-Green-Small\", 100000],[\"Slime-Yellow-Small\", 100000],[\"Slime-Red-Small\", 100000],[\"Slime-Blue-Small\", 100000]],\"reward\":{\"xp\" : 5000,\"items\" : [[\"Copper\", 6]]}}")
                ]
            ),
            new QuestLine("Goblin Hunt", [
                    new Quest("Goblin Hunt I", "Recent reports from scouts have revealed the presence of goblins lurking within the depths of the forest, posing a potential threat to nearby communities. The discovery has stirred fear among the villagers, who fear an imminent attack. As tensions rise, urgent action is needed to assess the goblin threat and eliminate any immediate danger they may pose.", "{\"slain\":[[\"Goblin-Villager\", 15],[\"Goblin-Scout\", 10]],\"reward\":{\"xp\" : 20000,\"items\" : [[\"Iron\", 3]]}}"),
                    new Quest("Goblin Hunt II", "Reports confirm a hidden slime den as the source of the infestation. Your mission is to locate and eliminate the creatures within, ensuring the safety of the town from further slime encroachment.", "{\"slain\":[[\"Slime-Green-Small\", 1000],[\"Goblin-Warrior\", 35],[\"Goblin-Guard\", 25]],\"reward\":{\"xp\" : 50000,\"items\" : [[\"Silver\", 3]]}}"),
                    new Quest("Goblin Hunt III", "Recent reconnaissance efforts have unveiled the existence of a formidable goblin fortress deep within the heart of the forest. Reports indicate the presence of elite Goblin Knights and Royal Knights within its walls, signifying a significant escalation in the goblin threat. With the safety of the nearby settlements hanging in the balance, it is imperative to infiltrate the goblin fortress, confront their elite forces, and dismantle their stronghold before they can launch a devastating assault.", "{\"slain\":[[\"Goblin-Knight\", 50],[\"Goblin-Knight-Royal\", 40],[\"Slime-Red-Small\", 10000]],\"reward\":{\"xp\" : 125000,\"items\" : [[\"Jade\", 3]]}}"),
                    new Quest("Goblin Hunt IV", "The revelation of a Goblin King and Goblin Queen ruling over the goblin forces from their throne room within the fortress has sent shockwaves throughout the land. Their tyrannical rule threatens the stability of the entire region, and their command over the goblin armies poses an existential threat to all nearby settlements. The time has come to end their reign of terror once and for all by infiltrating their throne room, confronting the Goblin King and Queen, and bringing about the downfall of their oppressive monarchy.", "{\"slain\":[[\"Goblin-King\", 1],[\"Goblin-Queen\", 1]],\"reward\":{\"xp\" : 2000000,\"items\" : [[\"Gold\", 3]]}}")
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

        this.CategoryNames = ["All", "Materials", "Weaponry", "Alchemy", "Alphabetical"]
        this.genCraftingMenu(this.CategoryNames[0])
        this.nextCategory();

        this.currentArea = 0
        this.gotoArea(0)
        this.newMonster();
        console.log("Game: Current Monster Set")
        console.log("Game: Initialized Game Data")

        this.genBestiary();

        this.obtainedAchievements = [];
        this.Achievements = [
            new Achievement("Rank FFF Quester", "Complete every quest in at least one questline", () => {
                const questCount = this.Quests.length;
                for (let i = 0; i < questCount; i++) {
                    const questLine = this.Quests[i];
                    if (questLine.currentQuest == questLine.quests.length) {
                        return true;
                    }
                }
            }),
            new Achievement("Rank FF Quester", "Complete every quest in at least 5 questline", () => {
                const questCount = this.Quests.length;
                let count = 0;
                for (let i = 0; i < questCount; i++) {
                    const questLine = this.Quests[i];
                    if (questLine.currentQuest == questLine.quests.length) {
                        count++;
                    }
                }
                if (count >= 3) {
                    return true;
                }
            }),
            new Achievement("Rank F Quester", "Complete every quest in at least 5 questline", () => {
                const questCount = this.Quests.length;
                let count = 0;
                for (let i = 0; i < questCount; i++) {
                    const questLine = this.Quests[i];
                    if (questLine.currentQuest == questLine.quests.length) {
                        count++;
                    }
                }
                if (count >= 5) {
                    return true;
                }
            }),
            new Achievement("Weapon Collector: Generic", "Have one of every standard non-metal weapon in the game (This excludes: Slime Sword II to True Slime Sword)",  () => {
                if (this.inventory != null) {
                    return this.inventory.hasItems([["Stick",1], ["Wooden Sword",1], ["Green Slime Sword",1], ["Yellow Slime Sword",1], ["Blue Slime Sword",1], ["Red Slime Sword",1], ["Slime Sword",1], ["Bone Sword",1], ["Stone  Sword",1], ["Grass Sword",1]]);
                }
            }),
            new Achievement("Weapon Collector: Metallic", "Have one of every standard metal / jewel weapon in the game",  () => {
                if (this.inventory != null) {
                    return this.inventory.hasItems([["Copper Sword",1], ["Iron Sword",1], ["Silver Sword",1], ["Jade Sword",1], ["Gold Sword",1]]);
                }
            }),
            new Achievement("Weapon Collector: Hoarder", "Have one of every standard weapon in the game (This excludes: Slime Sword II to True Slime Sword)",  () => {
                if (this.inventory != null) {
                    return this.inventory.hasItems([["Stick",1], ["Wooden Sword",1], ["Green Slime Sword",1], ["Yellow Slime Sword",1], ["Blue Slime Sword",1], ["Red Slime Sword",1], ["Slime Sword",1], ["Bone Sword",1], ["Stone  Sword",1], ["Grass Sword",1], ["Copper Sword",1], ["Iron Sword",1], ["Silver Sword",1], ["Jade Sword",1], ["Gold Sword",1]]);
                }
            }),
            new Achievement("The Slimer", "Obtain the Slime Sword",  () => {
                if (this.inventory != null) {
                    if (this.inventory.hasItem("Slime Sword")) {
                        return true;
                    }
                }
            }),
            new Achievement("The True Slimer", "Obtain the True Slime Sword",  () => {
                if (this.inventory != null) {
                    if (this.inventory.hasItem("True Slime Sword")) {
                        return true;
                    }
                }
            }),
            new Achievement("Goblin Slayer", "Defeat the Goblin King and Queen",  () => {
                if (this.Monsters != null) {
                    if (this.Monsters["Goblin-King"].deaths > 0 && this.Monsters["Goblin-Queen"].deaths > 0) {
                        return true;
                    }
                }
            }),
        ];
        this.updateAchievements();
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
        if (this.currentMonster) {
            if (this.currentMonster.def > this.playerLevel) {
                createNotification(`You are too weak for this area.\nRequired Level: ${this.currentMonster.def}\nYour Level: ${this.playerLevel}`);
                this.previousArea();
                return;
            }
            this.currentMonster = this.getNewMonster();
            return;
        }
    }

    getNewMonster() {
        let mon = this.area.getRandomMonster()

        let currentMonster = undefined
        try {
            currentMonster = mon.clone();
        } catch (error) {
            console.error(mon)
            currentMonster = this.Monsters["Slime-Green"]
        }
        hitBoxImage.src = getImageURL(currentMonster.sprite);

        return currentMonster;
    }

    attackMonster() {
        this.totalAttacks++;
        let def = game.currentMonster.def >= 1 ? Math.max(((game.currentMonster.def / 5) * (1 - (this.playerLevel / (2 * game.currentMonster.def)))), 1) : 1;
        game.currentMonster.hp -= game.strength / def;
        
        if (game.currentMonster.hp <= 0) {
            this.monstersDefeated++;

            const items = game.currentMonster.getDrops(game.dcm);
            const xp = Math.ceil(Math.log10((items.length + 1) * game.currentMonster.maxHp) * (1 + game.currentMonster.def)) * this.xpm;
            this.inventory.addItems(items);
            this.gainXP(xp);

            let itemsText = "";

            items.forEach(item => {
                itemsText += `+${item.name}\n`
            })
            
            Object.entries(this.Monsters).forEach(([id, monster]) => {
                if (monster.name == this.currentMonster.name) {
                    monster.deaths++;
                    monster.xp += xp;
                }
            });
            createPopup(`+${Math.ceil(xp)}xp\n${itemsText}`)
            
            game.newMonster()
        }
    }

    genBestiary() {
        Object.entries(this.Monsters).forEach(([MonsterID, Monster]) => {
            this.genBeast(Monster.sprite, Monster.name, MonsterID, Monster.description, {"HP": Monster.maxHp, "DEF": Monster.def, "Deaths": Monster.deaths, "XP": Monster.xp, "DROPS": Monster.drops})
            console.log(Monster.deaths)
        })
    }

    genBeast(icon, name, id, desc, stats) {
        const list = document.getElementById("BeastList")

        const container = document.createElement("div");
        container.classList.add("BeastContainer")

        const img = document.createElement("img");
        img.src = (stats["Deaths"] > 0) ? getImageURL(icon) : getImageURL("default");

        container.appendChild(img);
        list.appendChild(container);

        container.onclick = () => {
            const _name = document.getElementById("BestiaryName");
            const _desc =  document.getElementById("BestiaryDescription");
            const _hp = document.getElementById("BestiaryHP");
            const _def =  document.getElementById("BestiaryDef");
            const _deaths =  document.getElementById("BestiaryDeaths");
            const _dropsList =  document.getElementById("BestiaryDrops");

            _name.innerText = (stats["Deaths"] >= 33) ? name : "?????";
            _desc.innerText = (stats["Deaths"] >= 66) ? ("[" + id + "]\n\n" + desc) : "???????"
            _hp.innerText = (stats["Deaths"] >= 10) ? stats["HP"] : "???";
            _def.innerText = (stats["Deaths"] >= 2) ? stats["DEF"] : "???";
            _deaths.innerText = stats["Deaths"] + ` (${stats["XP"]}xp)`;

            _dropsList.innerHTML = "";
            
            let reqDeaths = 1
            let multi = 100

            stats["DROPS"].forEach(drop => {
                console.log(drop)
                const text = document.createElement("p");
                text.innerText = `${(multi * Math.pow(reqDeaths, 2) < stats["Deaths"]) ? drop.item.name : "???"} (x${(multi * Math.pow(reqDeaths, 3) < stats["Deaths"]) ? drop.max : "?"}): ${(multi * Math.pow(reqDeaths, 4) < stats["Deaths"]) ? drop.chance * 100 : "??"}%`;
                reqDeaths++;

                _dropsList.appendChild(text);
            });
        }
    }

    resetBestiary() {
        document.getElementById("BeastList").innerHTML = "";
        this.genBestiary();
    }

    toggleBestiary() {
        const beastList = document.getElementById("Bestiary");
        beastList.classList.toggle("Locked");
        this.resetBestiary()
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
        } else if (Category == "Alphabetical") {
            const sortedRecipes = Object.keys(this.Recipes).sort((a, b) => {
                const nameA = this.Items[a].name.toUpperCase();
                const nameB = this.Items[b].name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            sortedRecipes.forEach(recipeName => {
                if (this.Items[recipeName] == undefined) {
                    return;
                }
                this.CreateRecipe([recipeName, this.Recipes[recipeName]]);
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
        let _count = parseInt(document.getElementById("bulkCraft").value);
        if (isNaN(_count)) {
            _count = 1;
        }
        container.classList.add("Craft");
        container.onclick = () => {
            const recipe = recipeItems.map(innerArray => {
                const [object, count] = innerArray;
                return [object.name, count * _count];
            })
            if (this.inventory.hasAndRemoveItems(recipe)) {
                this.inventory.addItem(this.Items[recipeName], _count);
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
                const formattedItem = `${name} (x${quantity * _count})`;
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
        
        const RecipeList = `[${this.Items[recipeName].name + `(x${_count})`}]<br>-${formattedList.join('<br>-')}`;

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

    updateAchievements() {
        const list = document.getElementById("achievementList");
        list.innerHTML = ""; // Clear previous achievements
    
        this.Achievements.forEach(achievement => {
            const item = document.createElement("div");
            item.classList.add("achievement");
            if (achievement.checkCompletion() || this.obtainedAchievements.includes(achievement.title)) {
                item.classList.add("completed");
                if (this.obtainedAchievements.length != undefined) {
                    if (!this.obtainedAchievements.includes(achievement.title)) {
                        this.obtainedAchievements.push(achievement.title);
                    }
                }
            }
            item.innerHTML = `
                <h2>${achievement.title}</h2>
            `;
            document.getElementById("ttip").innerText = achievement.description;
            item.setAttribute("data-description", achievement.description); // Set description as data attribute
            item.addEventListener("mouseover", this.showTooltip.bind(this)); // Show tooltip on mouseover
            item.addEventListener("mouseout", this.hideTooltip.bind(this)); // Hide tooltip on mouseout
            list.appendChild(item);
        });
    }
    
    showTooltip(event) {
        const tooltip = document.getElementById("ttip");
        tooltip.textContent = event.target.getAttribute("data-description");
        tooltip.style.display = "block";
        tooltip.style.left = `${event.clientX}px`;
        tooltip.style.top = `${event.clientY}px`;
        document.addEventListener("mousemove", this.updateTooltipPosition);
    }

    updateTooltipPosition(event) {
        const tooltip = document.getElementById("ttip");
        tooltip.style.left = `${event.clientX + 10}px`; // Add 10px offset to prevent overlap
        tooltip.style.top = `${event.clientY + 10}px`; // Add 10px offset to prevent overlap
    }
    
    hideTooltip() {
        const tooltip = document.getElementById("ttip");
        tooltip.style.display = "none";
        document.removeEventListener("mousemove", this.updateTooltipPosition);
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
        let lim = 10;
        let cur = 1;
        while (this.playerXP >= this.getXpReq() && cur < lim) {
            cur++;
            this.levelUp()
        }
        if (cur >= lim) {
            let count = lim;
            const timer = setInterval(() => {
                if (this.playerXP >= this.getXpReq()) {
                    this.levelUp(false);
                    count++;
                } else {
                    clearInterval(timer)
                    createNotification("You've leveled up! (x" + count + ")")
                }
            }, 16);
        }
    }

    levelUp(showNotification = true) {
        const req = this.getXpReq()
        this.playerXP -= req;
        this.playerLevel++;
        if (showNotification)
            createNotification("You've leveled up!")

        const p = 100 * this.playerXP / this.getXpReq();
        document.getElementById("XPBar").style.width = 100 * this.playerXP / this.getXpReq() + "%";
        document.getElementById("XPProgress").innerText = `[${this.playerLevel}] ${this.playerXP} / ${this.getXpReq()} (${Math.floor(p)}%)`;

        this.updateStats();
    }

    updateStats() {
        const attributes = (this.inventory.equipped != undefined) ? JSON.parse(this.inventory.equipped.attributes) :{"Traits":["Material", "Equipable"],"Damage":0,"DCM":0} ;
        const weaponDMG =  attributes["Damage"];
        const playerDMG = Math.max(1 * Math.sqrt(this.playerLevel / 2), 1) + this.playerLevel / 10;
        this.strength = Math.sqrt(Math.pow(playerDMG, 2) + Math.pow(((this.inventory.equipped != undefined) ? 1 + weaponDMG : 1), 2));
        this.dcm = 1;
        this.dcm += (attributes["DCM"] == undefined) ? 0 : attributes["DCM"] / 100;
        this.xpm = 1;
        this.xpm += (attributes["XPM"] == undefined) ? 0 : attributes["XPM"] / 100;

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
                let attr = JSON.parse(Item.attributes)
                attr["Traits"] = JSON.parse(this.Items[this.getItem(Item.name)].attributes)["Traits"]
                Item.attributes = JSON.stringify(attr);
            }
        });
    }
}