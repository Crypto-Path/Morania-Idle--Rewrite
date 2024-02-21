class Area {
    constructor(sprite, name, monsters) {
        this.sprite = sprite;
        this.name = name;
        this.monsters = monsters;
    }

    getRandomMonster() {
        const totalWeight = this.monsters.reduce((acc, [_, weight]) => acc + weight, 0);
        const randomNum = Math.random() * totalWeight;
        
        let cumulativeWeight = 0;
        for (const [obj, weight] of this.monsters) {
            console.log(obj)
            cumulativeWeight += weight;
            
            if (randomNum <= cumulativeWeight) {
                return obj;
            }
        }
    }
}