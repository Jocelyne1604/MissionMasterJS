//global scope

let x = "hello!";

function doMath() {
  //child scope access global scope
  console.log(x);
  //local scope replaces global scope value only inside of the function
  let x = 40;
}

//Guess what this function will print out without running it
let num = 8;
function doMath() {
  num += 1;
  if (num % 5 == 0) {
    return true;
  }
  return false;
}

num += 1;
console.log(doMath()); //true

//Guess what this function will print out without running it
function hi() {
  let name = "Rusty";
  console.log(name);
}

function bye() {
  console.log(name);
}

console.log(hi());
console.log(bye());
