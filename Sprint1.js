What are Template Literals


const str1 = 'Hello JavaScript'; // using  single quotes

const str2 = "Hello JavaScript"; // using double quotes

const str3 = `Hello JavaScript`; // using back-tricks


Don't get too confused though. A template literal is still a String. But by using the back-tricks and writing our strings as template literal we can do some really cool stuff!!.

1: String Conctenation 

	var mySelf = {
		fName: 'Himanshu',
		lName: 'Pandey',
	};


	Explaination: We have an object, mySelf. Our mySelf object has two properties, fName and lName.
	We wanna to console along with some text.

	console.log('Hello, I\'m ' + mySelf.fName + " " +  mySelf.lName + '! Call me "' + mySelf.lName + '" !!.');
	O/p: Hello,  I'm  Himanshu Pandey! Call me "Pandey" !!


	using Template Literals:

	console.log(`Hello,  I'm  ${mySelf.fName} ${mySelf.lName}! Call me "${mySelf.lName}" !!`);
	o/p: Hello,  I'm  Himanshu Pandey! Call me "Pandey" !!
