var inputFields = document.theform.getElementsByTagName("input");

// IE bug fix - IE doesnt recognise HTML5 attributes
var  validationInfo = {
	"myname" : {
		"pattern" : "[A-Za-z ]+, [A-Za-z ]+",
		"placeholder" : "Last Name, First" },

	"mytelephone" : {
		"pattern" : "\\d{3}[\\-]\\d{3}[\\-]\\d{4}",
		"placeholder" : "xxx-xxx-xxxx" }
};

for (key in inputFields) {

	var myField = inputFields[key];
	var myError = document.getElementById('formerror');

	myField.onchange = function() {

		if (Modernizr.input.pattern) { // using modernizr
			var myPattern = this.pattern;
			var myPlaceholder = this.placeholder;
		} else {
			var myPattern = validationInfo[this.name].pattern; // Using the object
			var myPlaceholder = validationInfo[this.name].placeholder;
		}

		var isValid = this.value.search(myPattern) >= 0;

		if (!(isValid)) {
			myError.innerHTML = "Input does not match expected pattern. " + myPlaceholder;
		} else { //pattern not valid
			myError.innerHTML = "";
		} //pattern is valid

	} // myField has changed



} // inputFields