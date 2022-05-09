//WRITE YOUR CODE BELOW
var customerOrder = {
    drink: 'coffee',
    sugar: '2',
    orderready: true,
}

console.log(customerOrder.drink, customerOrder.sugar)



// TODO: THIS IS BROKE -- SOLVE

if (customerOrder.orderready === true) {
    console.log('Ready for pickup.');
} 
else {
if (customerOrder.orderready !== true) {
    console.log('Order in queue.');
}
}


// for (var key in customerOrder) {
//     console.log(customerOrder[key])
// }