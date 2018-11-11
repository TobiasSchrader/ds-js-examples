

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
		//document.getElementById("output").innerHTML = 
		console.log(JSON.stringify(content));
		display(content);
	}
	reader.readAsBinaryString(file);
	}
	
	function display(tableObject) {
		tableElement=document.getElementById("output");
		tableElement.innerHTML="";
		let currentLine=0;
		let line;
		let table = tableObject.Sheets.Tabelle1;
		Object.keys(table).forEach( function(entry) {
			let entryLine=getLine(entry);
			if (entryLine > currentLine) {
				console.log("created new line");
				line=document.createElement("tr");
				console.log(typeof(line));
				currentLine=entryLine;
				tableElement.appendChild(line);
			}
			if (entryLine) {
				console.log("added cell");
				cell = document.createElement("td");
				cell.innerHTML = table[entry].w;
				console.log(typeof(line));
				line.appendChild(cell);
			}
		});
	}
	
	function getLine(key) {
		console.log(key);
		line=Number(key.replace(/\D/g, ""));
		console.log(line);
		return line;
		
	}