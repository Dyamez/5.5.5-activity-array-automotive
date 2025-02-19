//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
            this.maxPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduledService = false;
    }

checkService() {
    if(this.mileage > 3000) {
        this.scheduleService = true;
        return this.scheduleService;
    }
}
start() {
    if(this.fuel > 0) {
        console.log(' Happy Travels, Drive safely.')
        return this.begin = true;
    }
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + ' ' + this.make + ' this vehicle is overloaded.'); 
        } } else { 
            console.log(this.model + ' ' + this.make + ' is ready to go');
        }
    }


}

class Truck extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
            this.maxPassenger = 5;
            this.passenger = 4;
            this.numberOfWheels = 4;
            this.maximumSpeed = 210;
            this.fuel = 90;
            this.scheduledService = false;
    }
    checkService() {
        if(this.mileage > 6000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
    start() {
        if(this.fuel > 0) {
            console.log('Monster Truck, Engaged!')
            return this.begin = true;
        }
    }
    
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + ' ' + this.make + ' F150 is overloaded.'); 
            } } else { 
                console.log(this.model + ' ' + this.make + ' is locked in and ready for an Adventure.');
            }
        }
    
    
    }


let myClunker = new Car('mercury', 'A28 Sedan', '2077', 'Raptured Purple', 101000)
let myMonsterTruck = new Truck('ford', 'f150', '2023', 'grey', '55000')

myClunker.start()
myClunker.loadPassenger(5)
myClunker.stop()
myClunker.checkService()

console.log(myClunker)

myMonsterTruck.start()
myMonsterTruck.loadPassenger()
myMonsterTruck.checkService()

console.log(myMonsterTruck)






//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
