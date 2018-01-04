(function(){

	function youSayGoodBye() {

		alert("Good Bye ..!!");

		function andISayHello() {
			alert("Hello ..!!");
		}

		return andISayHello;
	}

	var something = youSayGoodBye();
		something();

})(); 