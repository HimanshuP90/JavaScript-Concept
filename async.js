window.onload = function() {

// async function
async function fetchAsync () {
  // await response of fetch call
  let response = await fetch('https://api.github.com');
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

// trigger async function
// log response or catch error of fetch promise
fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))


/*
	1) Store 
	var todos = ['item1', 'item2', 'item3', 'item4'];

	2) Display
	console.log(todos);

	3) Add neww item
	todos.push('new item');

	4) Change item
	 i.e. change the first item
	todos[0] = 'changed item';

	5) Delete item
	i.e Deleting the first item
	todos.splice(0, 1);



*/


};