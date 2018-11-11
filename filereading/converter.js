

document.addEventListener("DOMContentLoaded", function() {
  // Falls neue Eingabe, neuer Aufruf der Auswahlfunktion
  document.getElementById('upload').addEventListener('change', dateiauswahl, false);
});

function dateiauswahl(evt) {
	let file = evt.target.files[0];
	let reader = new FileReader();
	reader.onload = function() {
		msg_textarea("file read");
		let content = XLSX.read(reader.result, {type: 'binary'});
		//document.getElementById("output").innerHTML = 
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
				msg_textarea("created new line");
				line=document.createElement("tr");
				currentLine=entryLine;
				tableElement.appendChild(line);
			}
			if (entryLine) {
				msg_textarea("added cell");
				cell = document.createElement("td");
				cell.innerHTML = table[entry].w;
				line.appendChild(cell);
			}
		});
	}
	
	function getLine(key) {
		msg_textarea(key);
		line=Number(key.replace(/\D/g, ""));
		msg_textarea(line);
		return line;
		
	}