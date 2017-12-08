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