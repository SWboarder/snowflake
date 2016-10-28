window.addEventListener("load", addHandlers, false);

function addHandlers(){
	var body = document.getElementById("body");
	body.style.height = window.innerHeight + "px";
	body.style.width = window.innerWidth + "px";
	window.onresize = getNewDims;
}

function getNewDims(){
	var body = document.getElementById("body");
	body.style.height = window.innerHeight + "px";
	body.style.width = window.innerWidth + "px";	
}