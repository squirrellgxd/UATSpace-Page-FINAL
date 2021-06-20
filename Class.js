class SpaceVehicle {
    //constructor (this is where the states go)
    constructor (velocity, name, numOfAstronauts) {
        this.velocity  = velocity;
        this.name = name;
        this.numOfAstronauts = numOfAstronauts;
    }

    //methods go here
    launch() {
        alert(this.name + " are lifting off!");
    }

    addAstronauts(peopleAdd) {
        this.numOfAstronauts = this.numOfAstronauts + peopleAdd;
        return this.numOfAstronauts;
    }

    displayMissionParameters() {
        alert(this.name + " is traveling at " + this.velocity + " mi/hr, and contains " + this.numOfAstronauts + " astronauts.");
    }

    accelerate(rate, time) {
        this.velocity = (rate * time) + this.velocity;
        return this.velocity;
    }
}