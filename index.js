let driverID = 0
let passengerID = 0
let tripID = 0
let store = { drivers: [], passengers: [], trips: [] };


class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverID
    store.drivers.push(this)
  }

  trips(){
    let x = []
    store.trips.forEach(
            function(trip) {
                if(this.id === trip.driverId){
                  x.push(trip)
                }


            }.bind(this)
        );
    return x
  }

  passengers(){
    let x = []
    store.trips.forEach(
            function(trip) {
                if(this.id === trip.driverId){
                  x.push(trip.passenger())
                }
            }.bind(this)
        );
    return x
  }

}

class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerID
    store.passengers.push(this)

  }
  trips(){
    let x = []
    store.trips.forEach(
            function(trip) {
                if(this.id === trip.passengerId){
                  x.push(trip)
                }
            }.bind(this)
        );
    return x


  }
  drivers(){
    let x = []
    store.trips.forEach(
            function(trip) {
                if(this.id === trip.passengerId){
                  x.push(trip.driver())
                }
            }.bind(this)
        );
    return x

  }



}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripID
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)

  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }

}
