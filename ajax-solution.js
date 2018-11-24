"use strict"
msg_textarea( 'ajax.js' );
let currentLine=0; //first line to show,
let line;
let tableArray= [];
initialize();


function initialize() {
	for (let i=0; i<4; i++) {
		requestLine(i,function(line) {
			let array = line.split(";");
			tableArray[array[1]]=array.slice(1);
			writeTable(tableArray);
		});
	}
}

function scrollDown() {
	currentLine++;
	msg_textarea(currentLine);
	requestLine(currentLine+3, function(line) {
		let array = line.split(";");
		for (let i=1;i<4;i++) tableArray[i-1]=tableArray[i];
		tableArray[3]=array.slice(1);
		writeTable(tableArray);
	});
}
function scrollUp() {
	if (currentLine > 0) {
	currentLine=currentLine-1;
	msg_textarea(currentLine);
	requestLine(currentLine, function(line) {
		let array = line.split(";");
		for (let i=3;i>0;i--) tableArray[i]=tableArray[i-1];
		tableArray[0]=array.slice(1);
		writeTable(tableArray);
	});
	} else msg_textarea("Top of the list reached");
}

function randomScroll() {
	msg_textarea("Random Movement:");
	let n =8*Math.random();
	for (let i=0; i<n; i++) {
		if (Math.random() > 0.5) scrollDown();
		else scrollUp();
	}
}

function requestLine(line, callback) {

	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		let response = this.responseText.replace( /\n+$/, '' );
		//msg_textarea( this.readyState+" "+this.status+" "+response );
		if (this.readyState == "4" && this.status == "200") {
			callback(response);
		};
	};

	xhttp.open( "GET", "http://schulte.lxht.de/cgi/person.sh?"+line, true );
	xhttp.send();
}
function writeTable(array) {
	let table = document.getElementById("table");
	table.innerHTML ="";
	for (let sub of tableArray) {
		let row = document.createElement("tr");
		for (let entry of sub) {
			let cell = document.createElement("td")
			cell.innerHTML =entry;
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	console.dir(tableArray);
	
}