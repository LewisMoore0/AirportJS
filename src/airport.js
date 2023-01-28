class Airport {
    constructor() {
        this.landedPlanes = [] 
    }

    landPlane(plane) {
        this.landedPlanes.push(plane)
    }
}

module.exports = Airport;