let car = {
    make: 'Toyota',
    model: 'Supra',
    year: 1992,
    color: 'red',
    milage: 100000,
    driveToWork: function() {
        console.log(this.milage + 33, `:Milage after driving to work`) 
    },
    driveAroundTheWorld: function() {
        console.log(this.milage + 204000, `:Milage after driving around the world`) 
    },
    runErrands: function() {
        console.log(this.milage + 30, `:Milage after running errands`)
    }
}

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();
