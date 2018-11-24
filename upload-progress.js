msg_textarea( 'upload-progress.js' );

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  let response = this.responseText.replace( /\n+$/, '' );
  msg_textarea( this.readyState+" "+this.status/*+" "+response.substr(1, 30)*/ );
//  if ( this.readyState == 4 && this.status == 200 ) {
//    msg_textarea( this.responseText );
//  }
};

msg_textarea( "onprogress" in xhttp);

xhttp.onprogress = function(e) {
  msg_textarea( e.lengthComputable+"Progress="+e.loaded+"/"+e.total );
}

//xhttp.add

xhttp.open( "GET", "http://schulte.lxht.de/cgi/slow.sh", true );
xhttp.send();
