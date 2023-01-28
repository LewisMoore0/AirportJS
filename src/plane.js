class Plane {
    constructor(airport) {
        this.isLanded = true;
        this.airport = airport
    }

    land() {
       return this.isLanded == true ? 'Plane is already on the ground!' : this.isLanded = true;
    }
}

module.exports = Plane; 