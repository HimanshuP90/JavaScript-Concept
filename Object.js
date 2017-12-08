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

function Bicyle(cadence, speed, gear) {
// 	var this = {};
	this.cadence = cadence;
	this.speed = speed;
	this.gear = gear;
// 	return this;
	
}

var bicyle1 = creatBicyle(50, 20, 4); //regular functions
var bicyle3 = new Bicyle(510, 120, 43); // constructors mode

console.log(bicyle3)
Bicyle {cadence: 510, speed: 120, gear: 43}


------------------------------------------------the different ways you can call a function in JavaScript. There are four different ways!--


function foo() {
	console.log("Hello");
}

foo(); // Method #1


var obj = {};

obj.foo = function foo() {
	console.log("Hello");
};

obj.foo(); //  Method #2

new foo(); //  Method #3

           // Method #4

===================There are two default arguments to every funtion call i) arguments ii) this ===================================

-------------------------------------------------------------------------------
Global object itself depends on the runtime environmnent you're using 
1) If you're running JavaScript on browser the global object is a window object, which represents the window or tab i.e. actually
	running the JavaScript code.
2) If you're running it in node.js there is an object called global, which is the global object.	
-------------------------------------------------------------------------------

____________________________________________________Refer to Global  Object__________________________
function foo() {
	console.log("Hello");
	console.log(this); // this refer global object i.e. window
}

foo(); // Method #1
//window in chrome
// global in nodejs

____________________________________________Calling a function in the context of an object  this refer to that object whose property you're calling _______________________
var obj = {};

obj.foo = function foo() {
	console.log("Hello");
	console.log(this); //this refer instance of Obj
};

obj.foo(); //  Method #2 i.e. I'm calling in the context




VM5706:5 Hello
VM5706:6 {foo: ƒ}foo: ƒ foo()__proto__: Object
undefined

var obj = {"props": "This is the object itself"};

obj.foo = function foo() {
	console.log("Hello");
	console.log(this); //instance of Obj
};

obj.foo(); //  Method #2


O/p:

Hello
{props: "This is the object itself", foo: ƒ}

___________________When you're calling using a new keyword that this refer to the newly created object ________________________________________________

function foo() {
	//var this = {};
	console.log("Hello");
	console.log(this);
	// return this;
}


new foo(); //  Method #3, I.e. When I'm calling using new Keyword then in function two line implicitly added in beginning i.e. var this = {} and end of the code return this;

O/p: 
Hello
foo {}


---------------------------------------------------------------------------------



function Bicyle(cadence, speed, gear, tirePressure) {
	this.cadence = cadence;
	this.speed = speed;
	this.gear = gear;
	this.tirePressure = tirePressure;
	this.inflateTires = function() {
		this.tirePressure += 3;
	}
}

//Calling the function in contructor mode
var bicyle4 = new Bicyle(50, 20, 4, 25);
bicyle4.inflateTires();

var bicyle5 = new Bicyle(50, 20, 4, 30);
bicyle5.inflateTires();

