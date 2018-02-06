// ES5
function square (x) {
   return x * x;
 };

 const double = function (x) {
   return x * 2;
 };

console.log(square(1));
console.log(double(1));

// ES6

const squareArrow = (x) => x * x;
const triple = (x) => x * 3;

console.log(squareArrow(5));
console.log(triple(5));

// challenge

const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("Mark Smith"));
