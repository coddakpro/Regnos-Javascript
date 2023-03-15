// var x = 10;
// if(1){
//     let y = 20;
// }
// console.log(x, y);

// let vehicle = {
// wheel: 4,
// };
// let car = {
// seats: 5,
// __proto__: vehicle,
// };
// let bmw = {
//     logo: "bmw",
// seats: 5,
// __proto__: car,
// };

// console.log(vehicle, vehicle.__proto__);
// console.log(bmw, bmw.wheel);

class Emloyee {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }
}
(property); Emloyee(name, age, designation); 
Emloyee.prototype.name = "John";
Emloyee.prototype.age = 20;
Emloyee.prototype.designation = "Software Engineer";
Emloyee.prototype.toString = function () {
    if(this instanceof Emloyee) {
    Emloyee[Employee.counterName]++;
    }
    Employee.counterName = 0;

    // return "Name: " + this.name + ", Age: " + this.age + ", Designation: " + this.designation;
};

this.setAge = (newAge) => {
    console.log(`Age has been changed from ${this.age} to ${newAge}`);
    this.age = newAge;
};

console.log(new Emloyee("John", 20, "Software Engineer"));