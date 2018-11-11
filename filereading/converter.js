

document.addEventListener("DOMContentLoaded", function() {
  // Falls neue Eingabe, neuer Aufruf der Auswahlfunktion
  document.getElementById('upload').addEventListener('change', dateiauswahl, false);
});

function dateiauswahl(evt) {
	let file = evt.target.files[0];
	console.log(file);
	document.getElementById("output").innerHTML = file.name;
console.log(file);}