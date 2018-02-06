__________________
indexOf(start, end); // start including and end excluding
toString(); // convert number to string 
split(); 
join();
__________________

var browser = 'Mozilla';
browser.length; //7

browser.indexOf('Mozilla'); //0


String to Array conversion
--------------------------
var myStringData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
myStringData; //"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

var myArrayData = myStringData.split(',');
myArrayData; //(6) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]


Array to String Conversion
-------------------------------------
var againMyStringData = myArrayData.toString();
againMyStringData; // "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"