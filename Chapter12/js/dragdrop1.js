window.addEventListener('load', setup, false);
function setup(){
    var foo = document.getElementById('foo');
    foo.addEventListener('dragstart', function(evt){
        evt.dataTransfer.setData("Text", this.id);
    }, false);
    var bar = document.getElementsByClassName('bar');
    for(var i = 0 ; i < bar.length ; i++){
        bar[i].addEventListener('drop', function(evt){
            evt.preventDefault();
            var id = evt.dataTransfer.getData("Text");
            var elem = document.getElementById(id);
            elem.parentNode.removeChild(elem);
            this.appendChild(elem);
        }, false);
        bar[i].addEventListener('dragover', function(evt){
            evt.preventDefault();
        }, false);
    }
}