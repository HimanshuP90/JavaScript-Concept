// (function(){
  
//   var li = document.createElement('li');
//   var h4 = document.createElement('h4');
//   var list = document.getElementById('my-list');

//   li.appendChild(h4);
//   h4.textContent = "I am new element";
//   h4.style.color = 'blue';
//   list.appendChild(li);

//   console.log(li)

// })();

// function generate_table() {

// 	//Get the refrence of the body
// 	var body = document.getElementsByTagName('body')[0];

// 	//Creates a <table> element and  a <tbody> element
// 	var tbl = document.createElement("table");
// 	var tblBody = document.createElement("tbody");

// 	//Creating  all cells
// 	for (var i = 0; i < 1; i++) {

// 		//create a table row
// 		var row = document.createElement("tr");

// 		for (var j = 0; j < 4; j++) {
// 			var cell = document.createElement("td");
// 			var cellText = document.createTextNode(j);
// 			cell.appendChild(cellText);
// 			row.appendChild(cell);
// 		}
// 		tblBody.appendChild(row);
// 	}

// 	//put the <tbody> in <table>
// 	tbl.appendChild(tblBody);
// 	//append <table> into <body>
// 	body.appendChild(tbl);
// 	tbl.setAttribute("border", "2");
// 	tbl.style.backgroundColor = "cyan";


// }

(function(){

	var mainHeading = document.getElementById("main-heading");
	var header = document.getElementsByClassName("header")[0];

	mainHeading.addEventListener('click', function(){
		console.log("I was clicked ..!!");
	});

	header.addEventListener('click', function(){
		console.log("Parent element listener was clicked ..!!");
	}, true);

})();