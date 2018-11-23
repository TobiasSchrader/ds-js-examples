"use strict";

let o = { name: "Martin Schulte",
          firma: {
            name: "Linuxhotel GmbH",
            ort: "Essen",
            geschaeftsfuehrer: {
              name: "Ingo Wichmann"
            }
          },
          verein: null,
        };

function show_name( obj ) {
  for ( let key in obj ) {
//    console.log( obj[key]+" "+typeof obj[key] );
    if ( typeof obj[key] === "object" ) {
      show_name( obj[key] );
    } else if ( key === "name" ) {
      console.log( obj[key] );
    }
  }
}