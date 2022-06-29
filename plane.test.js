let Plane = require('./plane.js')

describe('Plane', () => {
    test('should be instance of class', () => {
        let plane = new Plane
        expect(plane).toBeInstanceOf(Plane)
    })
})