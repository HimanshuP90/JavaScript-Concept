// (function(){

// 	function youSayGoodBye() {

// 		alert("Good Bye ..!!");

// 		// A self containned inner function
// 		function andISayHello() {
// 			alert("Hello ..!!");
// 		}

// 		return andISayHello;
// 	}

// 	var something = youSayGoodBye();
// 		something();

// })(); 


//A more realistic example

(function(){

	function stopWatch() {
		var startTime = Date.now();
		alert("startTime:" +  startTime);

		function getDelay() {
			var elapsedTime = Date.now() - startTime;
			alert("elapsedTime: " + elapsedTime);
		}

		return getDelay;
	}

	var timer = stopWatch();

	//do something that takes some time

	for (var i = 0; i < 1000000; i++) {
		var foo = Math.random() *10000;
	}

	//invoke the returned function 
	timer();

})();


// The JavaScript runtime keeps track of all of your variables,
// memory usage, references, and so on. It's clever like that!.

// When it detects that an inner function relies on 
// variables stored by an outer function, it ensures
// those variables are available even if the outer 
// function goes away.

// i.e. startTime in outer function 

// that's clousre !!!


// ^^ clousre = function + outer context ^^

// i.e. function = usually created/ returned by 
// 				another function
// i.e. outer context = variables this function relies on

