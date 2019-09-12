//understand the code without runing it
//What will this code return?

function test(x, y) {
  return y - x;
}

console.log(test(10, 40));

function test2(x) {
  return x * 2;
  console.log(x);
  return x / 2;
}

console.log(test2(40));

//practice if statement and modulo
function isEven(x) {
  return x % 2 === 0;
}

console.log(isEven(4)); //true
console.log(isEven(21)); //false
console.log(isEven(68)); //true
console.log(isEven(333)); //false

//practice factorial()
function factorial(x) {
  let result = 1;
  for (let i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); //120
console.log(factorial(2)); //2
console.log(factorial(10)); //3628800
console.log(factorial(0)); //1

//practice kebabToSnake()
function kebabToSnake(text) {
  let string = text.replace(/-/g, "_");
  return string;
}

console.log(kebabToSnake("Hello-world")); //'hello_world'
console.log(kebabToSnake("dogs-are-awesome")); //'dogs_are_awesome
console.log(kebabToSnake("blah")); //'blah'
