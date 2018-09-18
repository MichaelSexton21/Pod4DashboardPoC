var d = document, db = document.body;
var $grid;
function initGrid(){
 $grid = $('.grid').packery({
itemSelector: '.grid-item',
// columnWidth helps with drop positioning
columnWidth: 100
});

// make all grid-items draggable
$grid.find('.grid-item').each( function( i, gridItem ) {
var draggie = new Draggabilly( gridItem );
// bind drag events to Packery
$grid.packery( 'bindDraggabillyEvents', draggie );
});

}
function changeSize(id){
  t = d.getElementById(id);
if(t.classList.contains('grid-item--width2')){
  t.setAttribute('class', 'grid-item')
}else{
  t.setAttribute('class', "grid-item grid-item--width2")
}
$grid.packery('layout');
}


