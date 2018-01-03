window.onload = function() {


/* ES 2015 (More commonly referred to as ES6) introduced Arrow Functions into JavaScript. 
Arrow functions are a more concise syntax for writing function expressions. Arrow Functions have two main benefits: */

A shorter syntax then typical functions
No binding of this
function add2(num) {
	return num + 2;
}

console.log(add2(2));


const add3 = num => num +3;
console.log(add3(3));


};