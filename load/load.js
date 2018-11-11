window.onload = function() {
    console.log( "onload" );
}

let end = 1000000000;
console.log( `Verzoegerung durch Schleife bis ${end}...` );

for ( let i=0; i < end; i++ ) {
}

console.log( "Schleife beendet" );

document.addEventListener("DOMContentLoaded", function() {
    console.log( "Got DOMContentLoaded" );
});
