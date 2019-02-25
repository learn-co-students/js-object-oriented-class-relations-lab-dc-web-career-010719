let store = {drivers: [], passengers: [], trips: []}

let DriverID = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++DriverID
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter (function(trip) {
      return trip.driverId === this.id
    }.bind(this))
  }

  passengers() {
    return this.trips().map(trip => trip.passenger())
  }

}

let PassengerID = 0

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++PassengerID
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter (function(trip) {
      return trip.passengerId === this.id
    }.bind(this))
  }

  drivers() {
    return this.trips().map(trip => trip.driver())
  }

}

let TripID = 0

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++TripID
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find (function(driver) {
      return driver.id === this.driverId
    }.bind(this))
  }

  passenger() {
    return store.passengers.find (function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }

}
