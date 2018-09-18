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
function addGridItem(size){
  var targetClass;
  var temp = document.createElement("div");
  /*
  0 = Small
  1 = Width 2
  2 = Height 2
  3 = Large
  */
 switch(size){
   case 0:
      targetClass = "";
      console.log("In SC")
      break;
  case 1:
      targetClass = "grid-item--width2";
      break;
  case 2:
      targetClass = "grid-item--height2";
      break;
  case 3:
      targetClass = "grid-item--large";
      break;
  default:
      targetClass = "";
    }
  temp.setAttribute("class", "grid-item"+" "+targetClass);
  var $item = $(temp);
  d.getElementById("mainGrid").appendChild(temp);
  $grid.append($item).packery('appended', $item)
  $item.each(makeEachDraggable)
}
//Tbh not sure what this does, I got it from a demo and I need it work 
function makeEachDraggable(i, itemElem){
  var draggie = new Draggabilly(itemElem);
  $grid.packery('bindDraggabillyEvents', draggie);
}

$('.grid-item').dblclick(function(){
  $grid.packery( 'remove', event.currentTarget )
  // layout remaining item elements
  .packery('layout');
})
