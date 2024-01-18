let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
//type of vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //method to honk, returns the string "Beep."
  honk() {
    return "Beep";
  }
  //method to convert the vehicle information to a string
  toString() {
    return "The vehicle is a ${this.make} ${this.model} ${this.year}.";
  }
}

// cars are a type of vechile with 4 wheels
// let myFirstCar = new Car("Toyota", "Corolla", 2005);
// myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// myFirstCar.honk();     // "Beep."
// myFirstCar.numWheels;  // 4

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

//cars are a type of vechile with 2 wheels
class Motercycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!";
  }
}
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry,we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
