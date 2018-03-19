function start( e ){
	e.dataTransfer.effectAllowed="move";
	e.dataTransfer.setData( "Data", e.target.getAttribute( "id" ) );
	e.dataTransfer.setDragImage( e.target, 0, 0 );
	return true;
}
function enter( e ){
	return true;
}
function over( e ){
	var iddraggable = e.dataTransfer.getData( "Data" );
	var id = e.target.getAttribute( "id" );
	if ( id == "target1" )
		return false; // false -> drop ok, true -> drop no.
	if ( id == "target2" && iddraggable == "draggable3" )
		return false;
	else if ( id == "target3" && 
       ( iddraggable == "draggable1" || iddraggable == "draggable2" ) )
		return false;
 	else
		return true;
}
function drop( e ){
	var iddraggable = e.dataTransfer.getData( "Data" );
	e.target.appendChild( document.getElementById( iddraggable ) );
	e.stopPropagation();
	return false;
}
function end( e ){
	e.dataTransfer.clearData( "Data" );
	return true;
}

