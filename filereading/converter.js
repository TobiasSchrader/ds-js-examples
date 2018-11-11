

document.addEventListener("DOMContentLoaded", function() {
  // Falls neue Eingabe, neuer Aufruf der Auswahlfunktion
  document.getElementById('upload').addEventListener('change', dateiauswahl, false);
});

function dateiauswahl(evt) {
	let file = evt.target.files[0];
	let reader = new FileReader();
	reader.onload = function() {
		console.log("read")
		document.getElementById("output").innerHTML = reader.result;
	}
	reader.onerror = function() {
		console.log("Error: " + reader.Error);
	}
	reader.readAsText(file);
	}