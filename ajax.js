msg_textarea( 'ajax.js' );

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  let response = this.responseText.replace( /\n+$/, '' );
  msg_textarea( this.readyState+" "+this.status+" "+response );
//  if ( this.readyState == 4 && this.status == 200 ) {
//    msg_textarea( this.responseText );
//  }
};

xhttp.open( "GET", "http://schulte.lxht.de/cgi/person.sh?7", true );
xhttp.send();
