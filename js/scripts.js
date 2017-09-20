(function() {

var button2 = document.querySelector("nav button:last-of-type");

	button2.addEventListener("click", function() {

		var dsOdd = document.querySelectorAll("div div:nth-of-type(odd)");
		var dsEven = document.querySelectorAll("div div:nth-of-type(even)");

		for (var i =0; i<dsOdd.length; i++) {

			dsOdd[i].style.animationDelay = (4 * i) + "s"  ;
			dsEven[i].style.animationDelay = (4 * i) + "s"  ;

		}



	}, false);



	var button1 = document.querySelector("nav button:first-of-type");

	button1.addEventListener("click", function() {

		var ds = document.querySelectorAll("div div");

		for (var i =0; i<ds.length; i++) {

			ds[i].style.animationDelay = (2.5 * i) + "s"  ;

		}



	}, false);


})();
