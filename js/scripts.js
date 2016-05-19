console.log ("enter Door number to retrieve the prize");

function askfordoornumber(){
	var doornumber = prompt("Enter a door number to retrieve the prize");

	switch( doornumber ){
		case "3":
			console.log("You just won a house");
			document.getElementById("displayPad").innerHTML = "You just won a house";
			break;

		case "1":
			console.log("You just won a trip to Hawaii");
			document.getElementById("displayPad").innerHTML = "You just won a trip to Hawaii";
			break;

		case "2":
			console.log("You just won a car");
			document.getElementById("displayPad").innerHTML = "You just won a car";
			break;

		default:
			console.log( "Hi "+ doornumber + ".You are not w winner")
			document.getElementById("displayPad").innerHTML = "Hi "+ userName + ". Nice to meet you";
			break;
	}
}

askfordoornumber(); 