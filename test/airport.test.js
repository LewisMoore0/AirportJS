let Airport = require('../src/airport.js')
let planeMock = () => { return {
    landed: true,
    airport: Airport
}}

describe('Airport', () => {
    test('should have property planes with empty array when initialised', () => {
        let airport = new Airport
        expect(airport.landedPlanes).toEqual([])
    })

    test('should add plane to landedPlanes when passed as argument to a new plane object' , () => {
        let airport = new Airport
        airport.landPlane(planeMock)
        console.log(airport, 'airport')
        expect(airport.landedPlanes[0]).toEqual(planeMock)
    })
})