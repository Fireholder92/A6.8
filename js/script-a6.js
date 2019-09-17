let widthProgress = document.querySelector("#progressbar");
let width = 0;


function add1percent() {
	width = width + 1;
	widthProgress.style.width = width + "%";
}	

function add3percent() {
	width = width + 3;
	widthProgress.style.width = width + "%";
}	

function add7percent() {
	width = width + 7;
	widthProgress.style.width = width + "%";
}	

function init() {
	$("#button1").click(add1percent);
	$("#button3").click(add3percent);
	$("#button7").click(add7percent);
}

$(document).ready(init);