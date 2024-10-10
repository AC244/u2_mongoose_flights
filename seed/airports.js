const db = require('../db') 
const Airport = require('../models')

const main = async () => {
    const airports = [
        {
            name: "John F. Kennedy International Airport",
            location: "New York, NY",
            code: "JFK"
        },
        {
            name: "Los Angeles International Airport",
            location: "Los Angeles, CA",
            code: "LAX"
        },
        {
            name: "Chicago O'Hare International Airport",
            location: "Chicago, IL",
            code: "ORD"
        },
        {
            name: "Dallas/Fort Worth International Airport",
            location: "Dallas, TX",
            code: "DFW"
        }
    ]

    
    await Airport.deleteMany({})

   
    const insertedAirports = await Airport.insertMany(airports)
    
    return insertedAirports
}

module.exports = main