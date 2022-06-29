class Plane {
    constructor() {
        this.isLanded = true;
    }

    land() {
       return this.isLanded == true ? 'Plane is already on the ground!' : this.isLanded = true;
    }
}

module.exports = Plane; 