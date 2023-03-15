let vehicle = {
    wheel: 4,
};
let car = {
    seats: 5,
     __proto__: vehicle, 
};
let bmw = {
    logo: "BMW",
    __proto__: car,
}


console.log(vehicle, vehicle.__proto__);
console.log(car, car.__proto__);
console.log(car, bmw.wheel);


function Emloyee(_name, _age, _designation) {
    this.name = _name;
    this.age = _age;
    this.designation = _designation;
    this.fullname = _name + " " + _age + " " + _designation;

    this.setAge = (newAge) => {
console.log(`Age has been changed from ${this.age} to ${newAge}`);
        this.age = newAge;
    };
this.role = "user"
}

Employee.prototype.lol = "haha";

let employee = new Emloyee("John", 20, "CEO");
let Emloyee = new Emloyee("Jesus", 20, "Manager");
console.log(employee1.age);
employee1.setAge(43);
console.log(employee1.age);
console.log(employee2.age);
console.log(employee2.lol);

let empl = new Emloyee("Jesus", 20, "Manager");



