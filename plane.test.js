let Plane = require('./plane.js')

describe('Plane', () => {
    test('should be instance of class', () => {
        let plane = new Plane
        expect(plane).toBeInstanceOf(Plane)
    })

    test('should have isLanded property true by default', () => {
        let plane = new Plane
        expect(plane.isLanded).toBe(true)
    })
})