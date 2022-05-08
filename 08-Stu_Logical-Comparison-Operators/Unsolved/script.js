var a = "50";
var b = 50;
var c = 100;

// value of 0
var d = c % b; 

// value of 50
var e = c / 2;

// value of true
var expression1 = (b === e);
// value of false
var expression2 = (e < d);


console.log(d);

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b === e);
console.log(c > b);
console.log(d === 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2);
console.log(expression1 || expression2);
  
