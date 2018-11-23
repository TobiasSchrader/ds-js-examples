"use strict";

class Eintrag {
	constructor(name) {
		this.name = name;
	}
	showName() {
	  for ( let key in this ) {
        if ( this[key] instanceof Eintrag ) {
          this[key].showName();
        } else if ( key === "name" ) {
        console.log( this[key] );
        }
	  }
    }
}
class Firma extends Eintrag {
	constructor(name, ort) {
		super(name);
		this.ort = ort;
	}
}
let martin = new Eintrag("Martin Schulte");
martin.firma = new Firma("Linuxhotel GmbH", "Essen");
martin.showName();


