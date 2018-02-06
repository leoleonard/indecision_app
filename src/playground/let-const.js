var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Timon";
nameLet = "Julio";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);


function getPetName() {
  var petName = "Hal";
  return PetName;
}


// block scoping

const fullName = "Andrew Mead";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName); // let and constant are not availeable outside
