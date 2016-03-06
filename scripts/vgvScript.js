function $(id){
	var element = document.getElementById(id);
	if(element == null)
		alert('Programmer error: ' + id + ' does not exist.');
	//return element;
	alert(element);
}

