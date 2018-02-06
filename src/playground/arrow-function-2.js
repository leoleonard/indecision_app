// argument object (access argument wont work)

const add = (a, b) => {
  // console.log(arguments); = no functional!
  return a + b;
};

console.log(add(65, 1, 1001));


// this keywork - no longer bound

const user = {
 name: "Damian",
 cities: ["Wroclaw", "Dubai", "London"],
 printPlacesLived() {
   return this.cities.map((city) => this.name + ' has lived in ' + city);
 }
};

console.log(user.printPlacesLived());

// challenge
// array of numbers
// multiplyBy - single number
// multiply - return a new array with multiplied numbers


const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,

  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy
      )}
};

console.log(multiplier.multiply());
