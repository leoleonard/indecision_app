
class Person  { // class - a capital letter 
 constructor(name = 'anonymous', age = 0) { // if there's no name - argmuent = 'anonymous'
    this.name = name;       // 'this' referes to the class instance
    this.age = age;
} // no comma!
 getGreeting() { // methods
    //  return 'Hi, I am ' + this.name + '!'; // old way
    return `Hi, I am ${this.name}.`; // using '` + $' we can add objects inside the string
 }
 getDescription() { // methods
    return `${this.name} is ${this.age} year(s) old.`
 }
}

 //subclass; extends - extends existing class
class Student extends Person {
 constructor(name, age, major) {
     super(name, age); // super refers to the parent class
    this.major = major;
 }
 hasMajor() {
     return !!this.major; // !! = flipped twice; !!"undefinied" => false
 }
 getDescription() { //overrading above function; if there is no description - do no show
     let description = super.getDescription(); // super - access parent function
     
     if (this.hasMajor()) {
        // description = description + ``; zapis skrocony ponizej
        description += ` Their major is ${this.major}.`;
     }
     
     return description;
 }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
// hasLocation() {
//     return !!this.homeLocation;
// }
getGreeting() {
    let greeting = super.getGreeting();
    
    if (this.homeLocation) {
        greeting += ` I'm visiting from ${this.homeLocation}.`
    }

    return greeting;
}
}


const me = new Traveler("Damian Leonard", 26, 'Poland');
// const me = new Student("Damian Juzyk", 26, 'Computer Science');
// console.log(me.getDescription());
// console.log(me);
// console.log(me.hasMajor());
console.log(me.getGreeting());

const other = new Traveler();
// console.log(other.getDescription()); // instance of person + function
// console.log(other);
// console.log(other.hasMajor());
console.log(other.getGreeting());