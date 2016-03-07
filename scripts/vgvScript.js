function $(id){
	var element = document.getElementById(id);
	if(element == null)
		alert('Programmer error: ' + id + ' does not exist.');
	return element;
}

function nameValid(id){
	var userName = $(id).value.search(/([.*+?^=!:${}()|[\]\/\\])/);
	if(userName == 0)	
		alert("You can use only alphabets or numbers");
}

function passValid(id){
	var passLength = $(id).value.length;
	var passWord = $(id).value.search(/([a-z][A-Z][0-9])/);
	if(passLength < 6)
		alert("Password must be over 7 characters.");
	if(passWord < 0)
		//alert("Password must be included at least one lower case letter, upper case letter, and number");
		alert(passWord);
	
}

function passChecker(firstId, secondId){
	var firstPass = $(firstId).value;
	var secondPass = $(secondId).value;
	var check = firstPass.search(firstPass);
	if(check <= 0)
		alert("Password is not much");
	
	
}

function emailValid(id){
	var email = $(id).value.search(/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi);
	alert(email);
}

function rightClick(){
	var message="You cannot do right click";

	function clickIE() {
		if (document.all) {alert(message);return false;}
		}
	function clickNS(e) {
		if(document.layers||(document.getElementById&&!document.all)) {
			if (e.which==2||e.which==3) {
				alert(message);return false;}}
				}
		if (document.layers){
			document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;
		}else{
			document.onmouseup=clickNS;document.oncontextmenu=clickIE;
		}
		
		document.oncontextmenu=new Function("return false")
 
}


