class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("car is ready to drive");
        } else {
            return this.started = false;
            console.log("engine failure. Please see the dashboard for more information");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("Press the 'Start' button while stepping on the gas pedal.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " vehicle stopped.");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("need fuel.");
                this.stop();
            }
        } else {
            alert("Press the 'Start' button while stepping on the gas pedal.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Car or Truck");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Motorcycle");
        } else {
            console.log("Unknown type of machine");
        }
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}
