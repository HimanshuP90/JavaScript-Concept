// Spread Operator:

The Spread Syntax (…)

#) It allows an iterable to expand in places where 0+ arguments are expected.

1) Inserting Arrays:

var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];
console.log(arr); // [1, 2, [3, 4], 5, 6];

Above, we’ve created an array named mid. We then create a second array which contains our mid array. Finally, we log out the result. What do you expect arr to pring? Click run above to see what happens. Here is the output:


By inserting the mid array into the arr array, we’ve ended up with an array within an array. That’s fine if that was the goal, but what if want only a single array with the values of 1 through 6? To accomplish this, we can use the spread syntax! Remember, the spread syntax allows the elements of our array to expand.


var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr); // [1,2,3,4,5,6]