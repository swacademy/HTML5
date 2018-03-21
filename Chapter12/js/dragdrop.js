window.addEventListener('load', setup, false);
function setup(){
    var foo = document.getElementById('foo');
    foo.addEventListener('dragstart', function(evt){
        evt.dataTransfer.setData("Text", this.id);
    }, false);
    var bar = document.getElementById('bar');
    bar.addEventListener('drop', function(evt){
        evt.preventDefault();
        var id = evt.dataTransfer.getData("Text");
        var elem = document.getElementById(id);
        elem.parentNode.removeChild(elem);
        this.appendChild(elem);
    }, false);
    bar.addEventListener('dragover', function(evt){
        evt.preventDefault();
    }, false);
}