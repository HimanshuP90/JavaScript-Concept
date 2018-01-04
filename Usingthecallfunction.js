
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
var bicyle1 = new Bicyle(50, 20, 4, 25);
bicyle4.inflateTires();

var bicyle2 = new Bicyle(50, 20, 4, 30);
bicyle5.inflateTires();


function Mechanic(name) {
	this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTires = bicyle4.inflateTires;


bicyle1
Bicyle {cadence: 50, speed: 20, gear: 4, tirePressure: 25, inflateTires: ƒ}

bicyle2
Bicyle {cadence: 50, speed: 20, gear: 4, tirePressure: 30, inflateTires: ƒ}

mike
Mechanic {name: "Mike", inflateTires: ƒ}

mike.inflateTires
ƒ () {
		this.tirePressure += 3;
	}


mike.inflateTires.call(bicyle1) // bind with bicyle1 using call funtion i.e. Method #4 of function call using .call()
undefined

bicyle1
Bicyle {cadence: 50, speed: 20, gear: 4, tirePressure: 28, inflateTires: ƒ}

bicyle2
Bicyle {cadence: 50, speed: 20, gear: 4, tirePressure: 30, inflateTires: ƒ}

mike.inflateTires.call(bicyle2) // bind with bicyle2 using call funtion
undefined

bicyle2
Bicyle {cadence: 50, speed: 20, gear: 4, tirePressure: 33, inflateTires: ƒ}


----------------------------------------Introduction of prototype---------------------
When create function then two object created for every function 
1) function name
1) Object prototype

But when u call usifg new keyword like i.e. new foo(), then also create new __proto__



function foo() {}
undefined

foo.prototype
Object { … }

var newFooObj = new foo();
undefined

newFooObj
Object {  }

foo.prototype.test = "This is the prototype object of foo";
"This is the prototype object of foo"

foo.prototype.test
"This is the prototype object of foo"

newFooObj.__proto__.test
"This is the prototype object of foo"

foo.prototype === newFooObj.__proto__
true


----------Play Pranks with prototype-----------

function Employee(name) {
 this.name = name;
}

var emp1 = new Employee("Jim");
emp1
Object { name: "Jim" }

var emp2 = new Employee("Pam");
emp2
Object { name: "Pam" }

Employee.prototype
Object { … }

Employee.prototype.playPranks =  function() { console.log("Prank played !");};

function Employee.prototype.playPranks();

Employee.prototype.playPranks()
Prank played ! debugger eval code:1:47
undefined

emp1.playPranks()
Prank played ! debugger eval code:1:47
undefined

emp2.playPranks()
Prank played ! debugger eval code:1:47
undefined
