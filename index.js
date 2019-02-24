let store = { drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let routeId = 0

class Driver {
    constructor(name) {
        this.id = ++driverId
        this.name = name

        store.drivers.push(this)
    }

    trips() {
        return store.trips.filter(trip => {
                return trip.driverId == this.id
        })
    }
    
    passengers() {
        return this.trips().map(trip => {
            return trip.passenger()
        })
    }
}


class Passenger {
    constructor(name) {
        this.id = ++passengerId
        this.name = name

        store.passengers.push(this)
    }

    trips() {
        return store.trips.filter(trip => {
            return trip.passengerId == this.id
        })
    }

    drivers() {
        return this.trips().map(trip => {
            return trip.driver()
        })
    }
}

class Trip {
    constructor(driverId, passengerId){
        this.driverId = driverId 
        this.passengerId = passengerId
        this.id = ++routeId

        store.trips.push(this)
    }

    driver() {
        return store.drivers.find( driver => {
            return this.driverId === driver.id
        })
    }

    passenger() {
        return store.passengers.find(passenger => {
            return this.passengerId === passenger.id
        })
    }
}