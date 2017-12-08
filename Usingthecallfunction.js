
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


