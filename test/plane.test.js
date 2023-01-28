let Plane = require('../src/plane.js')
let airportMock = jest.mock('../src/airport.js', () => {
    return jest.fn(() => { 
        {
            landedPlanes: []
        }
    })
})

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
        plane.land();
        expect(plane.isLanded).toBe(true)
    })

    test('throw an error if plane is already landed', () => {
        let plane = new Plane
        expect(plane.land()).toEqual('Plane is already on the ground!')
    }) 

    test('by default, a plane is landed in an airport upon initialisation', () => {
        let plane = new Plane(airportMock);
        expect(plane.airport).toEqual(airportMock)
    })
})