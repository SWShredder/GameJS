class GameObject {
    position;
    graphics;
    size;
    constructor(size, position) {
        if (size === undefined) {
            this.size = new Vector2(0, 0);
        }
        else {
            this.size = size;
        }
        if (position === undefined) {
            this.position = new Vector2(0, 0);
        } 
        else {
            this.position = position;
        }
    }
}

class Vector2 {
    #x;
    #y;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}