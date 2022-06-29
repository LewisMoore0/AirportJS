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

    test('land function should set isLanded to true', () => {
        let plane = new Plane
        plane.isLanded = false;
        console.log(plane.isLanded, 'XXXXXXXX')
        plane.land();
        expect(plane.isLanded).toBe(true)
    })

    test('throw an error if plane is already landed', () => {
        let plane = new Plane
        expect(plane.land()).toEqual('Plane is already on the ground!')
    }) 
})