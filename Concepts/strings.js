(function(){

	// var text = "this is some text";
	// var moreText = 'I am in single quotes!';

	// alert("this is some more text");

	//------Combining Strings--------
	// var stringA = "I am a simple string.";	
	// var stringB = "I am a simple string, too!.";

	// alert(stringA + " " + stringB);

	// var textA = "Please"; //literal
	// var textB = new String("stop!"); //object
	// alert(textA + " make it " + textB);

	// If you hate dealing with the + operator, you can use
	// concat method

	// var foo = "I really";
	// var blah = "why anybody would";
	// var blarg = "do this";

	// var result = foo.concat(" don't know", " ", blah, " ", blarg);
	// alert(result);

	//Index Postions

	// var vowels = "aeiou";

	// 	// a e i o u
	// 	// 0 1 2 3 4 //character index positons 
	// 	alert(vowels[4]); // accessing string characters
	// 	alert(vowels.charAt(4));

	// 	for ( var  i = 0; i < vowels.length; i++) {
	// 		alert(vowels[i]);
	// 	}


	// ---------Creating Substrings---------
	// var theBigString = "Pulp Fiction is an awesomme movie!";
	// var sliceEx = theBigString.slice(0, 12);
	// var substrEx = theBigString.substr(0, 4);
	// alert(sliceEx); //Pulp Fiction
	// alert(substrEx); //Pulp

	//---------Spliting Strings-----------
	// var days = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"];
	// var splitWords = days.split(",");
	// console.log(splitWords[6]);

	//Finding Something inside a string using indexOf();

	// var pharse = "There are 3 little pigs";
	// var regexp = /[0-9]/;
	// var numbers = pharse.match(regexp);
	// alert(numbers);


// Finding Elements in the DOM
// querySelector
// querySelectorAll


// var main = document.querySelector("body #main");
// alert(main);

//querySelector is more flexible. It can find elements by ID value, tag name, class value, or a combination of all three like you would see in CSS. The getElementById method only allows you to find an element by the ID value. One additional nuance is performance. The querySelector approach is a bit slower than getElementById. The difference is very minor, but for certain performance-intensive scenarios, that might be important :-)﻿

// var theDropDown = document.getElementById("#dropDown");
// console.log(theDropDown)
// theDropDown.classList.add("dissableMenu");

})();