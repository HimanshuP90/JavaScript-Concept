//Create an Object inline
//var myObj = {}

var myObj = {
	"foo": "value",
	"age": 30,
	"address": {
		"street": "123 JS",
		"city": "JS",
		"pincode": 12345
	}
};
undefined
myObj
{foo: "value", age: 30, address: {…}}
address
:
{street: "123 JS", city: "JS", pincode: 12345}
age
:
30
foo
:
"value"
__proto__
:
Object



------------------------Creating Simmple Employee Object----------------------

var emp1 = {};
emp1.firstName = "Michael";
emp1.lastName = "Scott";
emp1.gender = "M";
emp1.designation = "Regional Manager";

var emp2 = {};
emp2.firstName = "Dwight";
emp2.lastName = "Schrute";
emp2.gender = "M";
emp2.designation = "Assistant to the Regional Manager";


function createEmployeeObject(firstName, lastName, gender, designation) {
    var newObject = {};
	    newObject.firstName = firstName;
	    newObject.lastName = lastName;
	    newObject.gender = gender;
	    newObject.designation = designation;
	return newObject;
}

var emp3 = createEmployeeObject("Jim", "Halpreet", "M", "Sales Manager");

console.log(emp1);
{firstName: "Michael", lastName: "Scott", gender: "M", designation: "Regional Manager"}

console.log(emp2);
{firstName: "Dwight", lastName: "Schrute", gender: "M", designation: "Assistant to the Regional Manager"}

console.log(emp3);
{firstName: "Jim", lastName: "Halpreet", gender: "M", designation: "Sales Manager"}



//Constructors are basically functions which let you populate the object that you need to create every time you need to create a new object you, user some kind of a new keyword and call a function and that function the object gets everything ready and then returns the provide object to you

function createEmployeeObject(firstName,lastName, gender,designation) {
//     var this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
// 	return this;
}

var emp3 = new createEmployeeObject("Jim", "Halpreet", "M", "Sales Manager");

console.log(emp3);
createEmployeeObject {firstName: "Jim", lastName: "Halpreet", gender: "M", designation: "Sales Manager"}
designation
:
"Sales Manager"
firstName
:
"Jim"
gender
:
"M"
lastName
:
"Halpreet"
__proto__
:
Object


-----------------------Difference between regular functions and constructors------------------------------


var bicyle = {
	"cadence": 50,
	"speed": 20,
	"gear": 4
};

function creatBicyle(cadence, speed, gear) {
	var newBicyle = {};
	newBicyle.cadence = cadence;
	newBicyle.speed = speed;
	newBicyle.gear = gear;
	return newBicyle;
}

function bicyleConstructor(cadence, speed, gear) {
// 	var this = {};
	this.cadence = cadence;
	this.speed = speed;
	this.gear = gear;
// 	return this;
	
}

var bicyle1 = creatBicyle(50, 20, 4); //regular functions
var bicyle3 = new bicyleConstructor(510, 120, 43); // constructors mode

console.log(bicyle3)
bicyleConstructor {cadence: 510, speed: 120, gear: 43}