//Set interval
function sing() {
  console.log("twinkle twinkle...");
  console.log("how I wonder...");
}

console.log(sing());

setInterval(sing, 1000);

setInterval(function() {
  console.log("I am an anonymous function");
}, 1000);
