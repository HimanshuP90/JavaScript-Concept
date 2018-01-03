window.onload = function(){

	// link: https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
	var arr = [20, 10, 5, 10];
	console.log("Returns the minimum value in a given array: ", Math.min(...arr));
	console.log("Returns the maximum value in a given array: ", Math.max(...arr));
	console.log("Returns the sum of all values in a given array: ", arr.reduce(function(a,b) {return a+b}, 0));
	console.log("Returns the average of all values in any non-empty array: ", (arr.reduce(function(a,b) {return a+b}, 0))/(arr.length));
};