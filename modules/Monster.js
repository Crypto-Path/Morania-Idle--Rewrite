class Monster {
    constructor(sprite, name, hp, def, drops, description) {
        this.sprite = sprite;
        this.name = name;
        this.maxHp = hp
        this.hp = hp;
        this.def = def;
        this.drops = drops;
        this.description = description;

        this.deaths = 0;
    }

    getDrops(dcm) {
        let successfulDrops = [];
        this.drops.forEach(drop => {
            for (let i = 0; i < drop.max; i++) {
                if (Math.random() < drop.chance * dcm) {
                    successfulDrops.push(drop.item);
                }
            }
        });
        return successfulDrops
    }

    clone() {
        return new Monster(this.sprite, this.name, this.hp, this.def, this.drops)
    }
}