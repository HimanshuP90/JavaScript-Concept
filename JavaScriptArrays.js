window.onload = function(){

	// link: https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
	var arr = [20, 10, 5, 10];
	console.log("Returns the minimum value in a given array: ", Math.min(...arr));
	console.log("Returns the maximum value in a given array: ", Math.max(...arr));
	console.log("Returns the sum of all values in a given array: ", arr.reduce(function(a,b) {return a+b}, 0));
	console.log("Returns the average of all values in any non-empty array: ", (arr.reduce(function(a,b) {return a+b}, 0))/(arr.length));
};


//Hack Reactor Challenge

// First, declare an array named myArray Great! 
var myArray = [];

// Now populate myArray with two strings.
myArray = ["first", "second"];

// Put your full name in the first string, and your Skype handle in the second.
myArray = ["Himanshu Pandey", "himanshup895"]

// Next, declare a function named cutName. It should take a string as an argument.
var cutName = function(str) {

}


// cutName should return an array by breaking up the input string into individual words.
// For example "Himanshu Pandey"
// should be returned as["Himanshu", "Pandey"] 

var cutName = function(str) {
    return str.split(" ");
}


console.log(cutName("Himanshu Pandey"));

// Make a new empty object literal named myData Add three key - value pairs to myData, by following these guidelines 
// fullName: call cutName on the name string stored in myArray
// skype: refer to your Skype handle in myArray
// github: If you have a github handle, enter it as a string.If not, set this to null

var myData = {
  fullName: cutName(myArray[0]),
     skype: myArray[1],
    github: myArray[2] || null

}

console.log(myData);