var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift ('Canis Major');
console.log(constellations)

planets.pop ('Venus')
console.log (planets)

var galaxy = constellations.concat(planets)
console.log (galaxy)

var upperCase = star.toUpperCase()
console.log(upperCase)



// initialize array
var arr = ["Hi", "Hello", "Bonjour", "Hola"];

// append multiple values to the array
arr.push("Salut", "Hey");

console.log(arr)


for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }