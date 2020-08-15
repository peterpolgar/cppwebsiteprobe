var frame = document.getElementById("myFrame"),
frameDoc = frame.contentDocument || frame.contentWindow.document;
frameDoc.documentElement.innerHTML = "";

var coll = document.getElementsByClassName( "collapsible" );

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener( "click", function() {
    this.classList.toggle( "active" );
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      for (var j = 0; j < coll.length; j++) {
        var tmp = coll[j].nextElementSibling;
        if (tmp.style.maxHeight && tmp != content) {
          coll[j].classList.toggle( "active" );
          tmp.style.maxHeight = null;
          break;
        }
      }
    }
  });
}

var ifLog = true, ifAbc = false, ifQt = false;
document.getElementById("Logical").addEventListener("click", function(){
  if (ifAbc) {
    ifAbc = false;
    document.getElementById( "abcCont" ).style.display = "none";
    document.getElementById( "Abc" ).classList.toggle("thClicked");
  } else if( ifQt ){
    ifQt = false;
    document.getElementById( "qtCont" ).style.display = "none";
    document.getElementById( "Qt" ).classList.toggle("thClicked");
  }
  if( !ifLog ){ 
    document.getElementById( "logCont" ).style.display = "";
    document.getElementById( "Logical" ).classList.toggle("thClicked");
    ifLog = true;
  }
});
document.getElementById("Abc").addEventListener("click", function(){
  if (ifLog) {
    ifLog = false;
    document.getElementById( "logCont" ).style.display = "none";
    document.getElementById( "Logical" ).classList.toggle("thClicked");
  } else if( ifQt ){
    ifQt = false;
    document.getElementById( "qtCont" ).style.display = "none";
    document.getElementById( "Qt" ).classList.toggle("thClicked");
  }
  if( !ifAbc ){ 
    document.getElementById( "abcCont" ).style.display = "";
    document.getElementById( "Abc" ).classList.toggle("thClicked");
    ifAbc = true;
  }
});
document.getElementById("Qt").addEventListener("click", function(){
  if (ifAbc) {
    ifAbc = false;
    document.getElementById( "abcCont" ).style.display = "none";
    document.getElementById( "Abc" ).classList.toggle("thClicked");
  } else if( ifLog ){
    ifLog = false;
    document.getElementById( "logCont" ).style.display = "none";
    document.getElementById( "Logical" ).classList.toggle("thClicked");
  }
  if( !ifQt ){ 
    document.getElementById( "qtCont" ).style.display = "";
    document.getElementById( "Qt" ).classList.toggle("thClicked");
    ifQt = true;
  }
});
// ltable -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - 
var iflLog = true, iflAbc = false, iflQt = false;
document.getElementById("lLogical").addEventListener("click", function(){
  if (iflAbc) {
    iflAbc = false;
    document.getElementById( "lCAbc" ).style.display = "none";
    document.getElementById( "lAbc" ).classList.toggle("ltableClicked");
  } else if( iflQt ){
    iflQt = false;
    document.getElementById( "lCQt" ).style.display = "none";
    document.getElementById( "lQt" ).classList.toggle("ltableClicked");
  }
  if( !iflLog ){ 
    document.getElementById( "lCLog" ).style.display = "";
    document.getElementById( "lLogical" ).classList.toggle("ltableClicked");
    iflLog = true;
  }
});
document.getElementById("lAbc").addEventListener("click", function(){
  if (iflLog) {
    iflLog = false;
    document.getElementById( "lCLog" ).style.display = "none";
    document.getElementById( "lLogical" ).classList.toggle("ltableClicked");
  } else if( iflQt ){
    iflQt = false;
    document.getElementById( "lCQt" ).style.display = "none";
    document.getElementById( "lQt" ).classList.toggle("ltableClicked");
  }
  if( !iflAbc ){ 
    document.getElementById( "lCAbc" ).style.display = "";
    document.getElementById( "lAbc" ).classList.toggle("ltableClicked");
    iflAbc = true;
  }
});
document.getElementById("lQt").addEventListener("click", function(){
  if (iflAbc) {
    iflAbc = false;
    document.getElementById( "lCAbc" ).style.display = "none";
    document.getElementById( "lAbc" ).classList.toggle("ltableClicked");
  } else if( iflLog ){
    iflLog = false;
    document.getElementById( "lCLog" ).style.display = "none";
    document.getElementById( "lLogical" ).classList.toggle("ltableClicked");
  }
  if( !iflQt ){ 
    document.getElementById( "lCQt" ).style.display = "";
    document.getElementById( "lQt" ).classList.toggle("ltableClicked");
    iflQt = true;
  }
});
