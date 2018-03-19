function allowDrop(evt) {
	evt.preventDefault();
}
function drag(evt){
	evt.dataTransfer.setData("Text", evt.target.id);
}
function drop(evt){
	evt.preventDefault();
	var data = evt.dataTransfer.getData("Text");
	evt.target.appendChild(document.getElementById(data));
}