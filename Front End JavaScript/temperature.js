function HyperTextMarkupLanguage() {
	if(document.getElementById("temperature_input_value").value == '' && 
	   document.getElementById('fahrenheit_option').checked == false && 
	   document.getElementById('celsius_option').checked == false) {
        document.getElementById("converted_temperature").innerHTML = "Please enter a temperature value and select a temperature option!";
    }
	else if(isNaN(document.getElementById("temperature_input_value").value) && 
		document.getElementById('fahrenheit_option').checked == false && 
		document.getElementById('celsius_option').checked == false) {
         document.getElementById("converted_temperature").innerHTML = "Please enter a valid number and select a temperature option!";
    }
	else if(document.getElementById('fahrenheit_option').checked == false && 
		document.getElementById('celsius_option').checked == false) {
        document.getElementById("converted_temperature").innerHTML = "Please select a temperature option!";
    }
    else if(document.getElementById('fahrenheit_option').checked) {
        const degree_usa = document.getElementById("temperature_input_value").value;
		if(isNaN(degree_usa)) {
			document.getElementById("converted_temperature").innerHTML = "Value entered is not a number!"
		}
		else if(degree_usa == ''){
			document.getElementById("converted_temperature").innerHTML = "Enter a temperature value!";
		}
		else{
			const formula_f = (degree_usa - 32) * 5/9;
			const math_converter = Math.floor(formula_f * 100) / 100;
			document.getElementById("converted_temperature").innerHTML = degree_usa + " F = " + math_converter + " C";
		}
	}   
	else if(document.getElementById('celsius_option').checked) {	
        const degree_foreign = document.getElementById("temperature_input_value").value;
		if(isNaN(degree_foreign)) {
			document.getElementById("converted_temperature").innerHTML = "Value entered is not a number!"
		}
		else if(degree_foreign == ''){
			document.getElementById("converted_temperature").innerHTML = "Enter a temperature value!";
		}
		else{
			const formula_c = (degree_foreign * (9/5)) + 32;
			const math_converter2 = Math.floor(formula_c * 100) / 100;
			document.getElementById("converted_temperature").innerHTML = degree_foreign + " C = " + math_converter2 + " F";
		}
	}
}
