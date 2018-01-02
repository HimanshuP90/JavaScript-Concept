The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
It is common to use the term "call a function" instead of "invoke a function".


In JavaScript, the thing called this, is the object that "owns" the current code.
example:
	function foo() {
		console.log("Hello");
	}

	foo();

When a function is called without an owner object, the value of this becomes the global object.
example:
	var myObj = function foo() {
		firstName: "Himanshu",
		lastName: "Pandey"
	}

	myObj.foo();


Invoking a Function as a Method
Invoking a Function with a Function Constructor
	A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.


call() takes any function arguments separately.
apply() takes any function arguments as an array.

typeof:	Returns the type of a variable
instanceof:	Returns true if an object is an instance of an object type

--------Primitive data type----------
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined
null

--------Non-primitive (reference) data type---------------

object
array
regex


There are 3 ways to create object in JavaScript.

By object literal
By creating instance of Object
By Object Constructor

ex·plic·it·ly
In a clear and detailed manner, leaving no room for confusion or doubt.

---------------

Undefined value: A value that is not defined and has no keyword is known as undefined value. For example:

int number;//Here, number has undefined value.  

---------------
Null value: A value that is explicitly specified by the keyword "null" is known as null value. For example:

String str=null;//Here, str has a null value.  


________________________________________
1) slice(startIndex, endIndex) : extracts a part of a string and returns the extracted part in a new string.
	example: str = "Apple, Banana, Kiwi";
			 str.slice(7,13) //Banana
2) substring() is similar to slice().
	The difference is that substring() cannot accept negative indexes.
		str.substring(7,13) //Banana

3) substr() is similar to slice().
	The difference is that the second parameter specifies the length of the extracted part.

4) concat()
 	text1 = "Hello";
	"Hello"
	text2 = "Himanahu";
	"Himanahu"
	text1.concat("", text2)
	"HelloHimanahu"
____________________________________________________________


try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
} 
finally {
    Block of code to be executed regardless of the try / catch result
}


----------------------------------------------------------
Error Name		Description
----------------------------------------------------------
EvalError		An error has occurred in the eval() function
RangeError		A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError		A syntax error has occurred
TypeError		A type error has occurred
URIError		An error in encodeURI() has occurred

---------------------------------------------------------------------------------

How to speed up your JavaScript code.

1)  Evaluate Local Variables
2)  Create shortcut codes to speed up coding
3) 	Manipulate element fragments before adding them to DOM
4) 	Save bytes by using Minification
5)  Don’t use nested loops if not required
6) 	Cache objects to increase performance
7) 	Use a .js file to cache scripts
8) 	Place JavaScript at the bottom of the page
9)	Use jQuery as a framework
10) Implement Event Delegation
11) 


---------------------------------------------------------------------------------

To remove an element of an array at an index i:

array.splice(i, 1);
If you want to remove every element with value number from the array:

for(var i = array.length - 1; i >= 0; i--) {
    if(array[i] === number) {
       array.splice(i, 1);
    }
}
