

document.addEventListener("DOMContentLoaded", function() {
  // Falls neue Eingabe, neuer Aufruf der Auswahlfunktion
  document.getElementById('upload').addEventListener('change', dateiauswahl, false);
});

function dateiauswahl(evt) {
	let file = evt.target.files[0];
	let reader = new FileReader();
	reader.onload = function() {
		console.log("read");
		let content = XLSX.read(reader.result, {type: 'binary'});
		document.getElementById("output").innerHTML = JSON.stringify(content);
	}
	reader.readAsBinaryString(file);
	}