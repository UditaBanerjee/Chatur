function func() {
	var input = document.getElementById("input").value;
	var result = 0;
	var opt1 = document.getElementById("from").value;
	var opt2 = document.getElementById("to").value;
	if (opt1 == 1) {
		var re = /[0-1]/g;
		if(re.test(input)) {

			if (opt2 == 2) {
				result = parseInt(input,2).toString(8);
			}
			else if (opt2 == 3) {
				result = parseInt(input,2).toString(10);
			}
			else if (opt2 == 4) {
				result = parseInt(input,2).toString(16);
			}
			else {
				result = input;
			}
			re.lastIndex = 0;
		}
		else {
			window.alert("Binary digits must be in range 0-1");
		}
	}
	if (opt1 == 2) {

		var re = /[0-7]/g;
		if(re.test(input)) {

			if (opt2 == 1) {
				result = parseInt(input,8).toString(2);
			}
			else if (opt2 == 3) {
				result = parseInt(input,8).toString(10);
			}
			else if (opt2 == 4) {
				result = parseInt(input,8).toString(16);
			}
			else {
				result = input;
			}
		}
		else {
			window.alert("Octal digits must be in range 0-7");
		}
	}
	if (opt1 == 3) {

		var re = /[0-9]/g;
		if(re.test(input)) {

			if (opt2 == 1) {
				result = parseInt(input,10).toString(2);

			}
			else if (opt2 == 2) {
				result = parseInt(input,10).toString(8);
			}
			else if (opt2 == 4) {
				result = parseInt(input,10).toString(16);
			}
			else {
				result = input;
			}
		}
		else {
			window.alert("Decimal digits must be in range 0-9");
		}
	}
	if (opt1 == 4) {

		var re = /[0-9A-Fa-f]/g;
		if(re.test(input)) {

			if (opt2 == 1) {
				result = parseInt(input,16).toString(2);
			}
			else if (opt2 == 2) {
				result = parseInt(input,16).toString(8);
			}
			else if (opt2 == 3) {
				result = parseInt(input,16).toString(10);
			}
			else {
				result = input;
			}
		}
		else {
			window.alert("Hexadecimal digits must be in range 0-9 & A-F or a-f");
		}
	}
	document.getElementById("output").innerHTML = result;
}