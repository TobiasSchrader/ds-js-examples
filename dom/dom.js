function msg2(msg) {
    let destination = document.getElementById( "msg_textarea" );
    if ( !destination ) {
        destination = document.createElement( "textarea" );
        destination.id = "msg_textarea";
        destination.cols = 120;
        destination.rows = 20;
        document.body.appendChild( destination );
    }
    destination.value = destination.value + msg + "\n";
    destination.setSelectionRange( destination.textLength, destination.textLength );
}

function textify_structure( element, indent ) {
    let retval = '';
    let nodeType = element.nodeType;
    retval += indent+element.nodeName+" "+element.nodeType;
    if ( nodeType === 3 || nodeType === 8 ) {
	retval += ": "+element.nodeValue+"\n";
    } else {
	let childNodes = element.childNodes;
	retval += "\n";
	for ( let i = 0; i < childNodes.length; i++ ) {
	    retval += textify_structure( childNodes[i], indent+"  " );
	}	    
    }
    return retval;
}

window.onload = function() {
    let msg = textify_structure( document, '' );
    msg2( msg );
}
