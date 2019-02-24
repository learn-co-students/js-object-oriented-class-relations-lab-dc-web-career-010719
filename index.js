let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(trip => trip.driverId === this.id);
  }
  passengers() {
    // debugger;
    return store.passengers.filter(
      passenger => passenger.tripId === this.tripId
    );
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }
  drivers() {
    // debugger;
    return store.drivers.filter(driver => driver.tripId === this.tripId);
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  // Example of how to use .bind to set this
  driver() {
    return store.drivers.find(
      function(el) {
        return el.id === this.driverId;
      }.bind(this)
    );
  }

  // Example of how to use arrow functions to maintain this
  passenger() {
    return store.passengers.find(el => el.id === this.passengerId);
  }
}
