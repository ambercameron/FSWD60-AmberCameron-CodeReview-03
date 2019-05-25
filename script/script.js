document.getElementById("button").onclick = function() { calculateInsurance()};

function calculateInsurance(){
	var selected = document.getElementById("country").selectedIndex;

	if ((document.getElementById("horsepower").value.length == 0) || (document.getElementById("age").value.length == 0) || (document.getElementById("name").value.length == 0)){
	document.getElementById("quoteResult").innerHTML = "Please complete all fields to receive your quote"
		return false;
	}

	else if (document.getElementById("country").options[document.getElementById("country").selectedIndex].text == "Austria"){
			var costoutput = (document.getElementById("horsepower").value*100/document.getElementById("age").value+50);
		}

	else if (document.getElementById("country").options[document.getElementById("country").selectedIndex].text == "Hungary"){
			var costoutput = (document.getElementById("horsepower").value*120/document.getElementById("age").value+100);
		}

	else if (document.getElementById("country").options[document.getElementById("country").selectedIndex].text == "Greece"){
			var costoutput = (document.getElementById("horsepower").value*150/document.getElementById("age").value+50);
		}


	document.getElementById("quoteResult").innerHTML = document.getElementById("name").value + ", your insurance costs €" + costoutput.toFixed(2)
}
