"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById( "btn_getPos" );
    let xPos = document.getElementById( "xPos" );
    xPos.innerHTML = "START";
    let yPos = document.getElementById( "yPos" );
    yPos.innerHTML = "START";
    console.log( button );
    button.addEventListener( "click", function() {
	msg_textarea( window.pageXOffset+","+window.pageYOffset );
	msg_textarea( xPos );
	msg_textarea( yPos );
	xPos.innerHTML = window.pageXOffset;
	yPos.innerHTML = window.pageYOffset;
	window.pageXOffset = 20;
	window.pageYOffset = 20;
    });
    console.log( xPos );
    console.log( yPos );
});
