var f = false;
function initGrid(){
    $grid = $('.grid')
    $grid.packery({
   itemSelector: '.grid-sizer',
   // columnWidth helps with drop positioning
   columnWidth: $grid.find('.col-sm')[0],
   percentPosition: true
   });
   
   // make all grid-items draggable
   $grid.find('.grid-sizer').each( function( i, gridItem ) {
   var draggie = new Draggabilly( gridItem );
   // bind drag events to Packery
   $grid.packery( 'bindDraggabillyEvents', draggie );
   });
}

   var d=document,db=document.body;

 function changeState(id,state){ //DOM ID, boolean
    t = d.getElementById(id);
    if(state){
        t.setAttribute("class", "alert alert-success");
        t.innerHTML = "Connected"
    }else{
        t.setAttribute("class", "alert alert-danger");
        t.innerHTML = "Disconnected"
    }
 }

  
  window.setInterval(function(){
      if(f){
         changeState("connectID", true);
         changeState("napConnect", false);
         changeState("bmsConnect", true);
         changeState("rmsConnect", false);
         f = !f;
 
      }else{
          changeState("connectID", false);
          changeState("napConnect", true);
          changeState("bmsConnect", false);
          changeState("rmsConnect", true);
         f = !f;
      }
  },1500);
