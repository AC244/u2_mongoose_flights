const db = require('../db')
const { Flight, Airport } = require('../models')

const seedFlights = async () => {
    const airports = await Airport.find()
    
    const flights = [
        {
            airline: "American Airlines",
            flightNumber: 123,
            price: 200,
            numberOfSeats: 150,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[1]._id,
            departureDateTime: new Date('2023-10-01T10:00:00')
        },
        {
            airline: "Delta Airlines",
            flightNumber: 456,
            price: 250,
            numberOfSeats: 180,
            departingAirport: airports[1]._id,
            arrivalAirport: airports[2]._id,
            departureDateTime: new Date('2023-10-02T15:30:00')
        },
        {
            airline: "United Airlines",
            flightNumber: 789,
            price: 300,
            numberOfSeats: 200,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: new Date('2023-10-03T09:00:00')
        },
        {
            airline: "Southwest Airlines",
            flightNumber: 101,
            price: 150,
            numberOfSeats: 160,
            departingAirport: airports[0]._id,
            arrivalAirport: airports[3]._id,
            departureDateTime: new Date('2023-10-04T12:00:00')
        },
        {
            airline: "JetBlue Airways",
            flightNumber: 202,
            price: 180,
            numberOfSeats: 140,
            departingAirport: airports[1]._id,
            arrivalAirport: airports[0]._id,
            departureDateTime: new Date('2023-10-05T08:30:00')
        },
        {
            airline: "Spirit Airlines",
            flightNumber: 303,
            price: 90,
            numberOfSeats: 120,
            departingAirport: airports[3]._id,
            arrivalAirport: airports[2]._id,
            departureDateTime: new Date('2023-10-06T16:45:00')
        },
        {
            airline: "Alaska Airlines",
            flightNumber: 404,
            price: 220,
            numberOfSeats: 160,
            departingAirport: airports[2]._id,
            arrivalAirport: airports[0]._id,
            departureDateTime: new Date('2023-10-07T11:15:00')
        }
    ]

    await Flight.deleteMany({})
    const insertedFlights = await Flight.insertMany(flights)
    console.log('Flights seeded:', insertedFlights)
}

db.once('open', seedFlights)
