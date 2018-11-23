"use strict";

let martin = { name: "Martin Schulte",
          firma: {
            name: "Linuxhotel GmbH",
            ort: "Essen",
            geschaeftsfuehrer: {
              name: "Ingo Wichmann"
            }
          },
          verein: null,
        show_name: function(obj) {
			for ( let key in obj ) {
				if ( typeof obj[key] === "object" ) {
					this.show_name( obj[key] );
				} else if ( key === "name" ) {
					console.log( obj[key] );
			}
			}
		},
		setVerein: function(name, ort) {
			this.verein = {name: name, ort:ort};
		},		
}
martin.show_name(martin);
martin.setVerein("GUUG","Essen");
martin.show_name(martin);