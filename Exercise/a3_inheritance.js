"use strict";

function Mensch(name) {
	this.name = name;
	this.setFirma = function(firma) {
		this._firma = firma;
	}
}
	
function Firma (name, ort) {
	this.name=name;
	this.ort = ort;
	this.visit = function() {
	console.log(`Come to ${this.ort}!`)
	};
}
let linuxhotel = new Firma("Linuxhotel GmbH", "Essen");
let ingo = new Mensch("Ingo Wichmann");
linuxhotel.geschaeftsfuehrer = ingo;
linuxhotel.visit();
let martin = new Mensch("Martin Schulte");
martin.setFirma(linuxhotel);
show_name(martin);


function show_name( obj ) {
  for ( let key in obj ) {
    if ( typeof obj[key] === "object" ) {
      show_name( obj[key] );
    } else if ( key === "name" ) {
      console.log( obj[key] );
    }
  }
}