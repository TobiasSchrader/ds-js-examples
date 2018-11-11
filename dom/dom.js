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
