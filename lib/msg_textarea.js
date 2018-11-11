function msg_textarea(msg) {
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
