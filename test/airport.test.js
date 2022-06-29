let Airport = require('../src/airport.js')

describe('Airport', () => {
    test('should have property planes with empty array when initialised', () => {
        let airport = new Airport
        expect(airport.landedPlanes).toEqual([])
    })
})