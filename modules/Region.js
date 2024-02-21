class Region {
    
    /* REGION */ /*
        @sprite: Area icon, besides name on location list
        @name: name of area
        @monsters: monsters, which can be found in this area
        @shop: items, which can be purchased in this area
        @min: minimum level to go to this area
    */
    constructor(sprite, name, areas, shop, min) {
        this.sprite = sprite;
        this.name = name;
        this.areas = areas;
        this.shop = shop;
        this.min = min;
    }
}