class Area {
    constructor(sprite, name, monsters) {
        this.sprite = sprite;
        this.name = name;
        this.monsters = monsters;
    }

    // getRandomMonster() {
    //     const totalWeight = this.monsters.reduce((acc, [item, weight]) => acc + weight, 0);
    //     let randomNum = Math.random() * totalWeight;
    
    //     for (const [item, weight] of this.monsters) {
    //         if (randomNum < weight) {
    //             return item;
    //         }
    //         randomNum -= weight;
    //     }
    // }

    getRandomMonster() {
        const values = this.monsters;
        let i, pickedValue,
                randomNr = Math.random(),
                threshold = 0;
    
        for (i = 0; i < values.length; i++) {
            if (values[i].probability === '*') {
                continue;
            }
    
            threshold += values[i][1];
            if (threshold > randomNr) {
                    pickedValue = values[i][0];
                    break;
            }
    
            if (!pickedValue) {
                //nothing found based on probability value, so pick element marked with wildcard
                pickedValue = values.filter((value) => value[1] === '*');
            }
        }
    
        return pickedValue;
    }
}