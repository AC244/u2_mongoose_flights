const db = require('./db')
const { Flight, Airport } = require('./models')

const findFlight = async () => {
  const flight = await Flight.findOne().populate('departingAirport arrivalAirport')
  console.log(flight)
}

const createFlight = async () => {
  const departingAirport = await Airport.findOne()
  const arrivalAirport = await Airport.findOne()

  let flight = await Flight.create({
    airline: 'Southwest Airlines',
    flightNumber: 101,
    price: 150,
    numberOfSeats: 160,
    departingAirport: departingAirport._id,
    arrivalAirport: arrivalAirport._id,
    departureDateTime: new Date('2024-10-05T12:00:00')
  })
  console.log(flight)
}

const updateFlight = async () => {
  const updated = await Flight.updateOne(
    { flightNumber: 101 },
    { price: 200 }
  )
  console.log(updated)
}

const deleteFlight = async () => {
  const deleted = await Flight.deleteOne({ flightNumber: 101 })
  console.log(deleted)
}

async function main() {
  try {
    await findFlight()
    // await createFlight()
    // await updateFlight()
    // await deleteFlight()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()
