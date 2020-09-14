$( function() {
  $( ".sortable" ).sortable({
    revert: true,
    axis: 'y'
  });
  $( "ul, li" ).disableSelection();
  $(".button").button(
      
  );
  $(".photo-grid img").draggable({
    revert: "invalid",
  });
  $(".trash").droppable({
    activeClass: "highlight",
    hoverClass: "highlight-accept",
    accept: ".photo-grid > img",
    drop:function(event, ui) {
      $(ui.draggable).attr("src", "images/boom.gif");
      setTimeout(() => { $(ui.draggable).remove(); }, 500);
    }
  });
} );
function rainbow() {
  $("ul li.sortable__red").removeClass("sortable__red");
  $("ul li").eq(0).addClass("sortable__red");
  $("ul li.sortable__orange").removeClass("sortable__orange");
  $("ul li").eq(1).addClass("sortable__orange");
  $("ul li.sortable__yellow").removeClass("sortable__yellow");
  $("ul li").eq(2).addClass("sortable__yellow");
  $("ul li.sortable__green").removeClass("sortable__green");
  $("ul li").eq(3).addClass("sortable__green");
  $("ul li.sortable__light-blue").removeClass("sortable__light-blue");
  $("ul li").eq(4).addClass("sortable__light-blue");
  $("ul li.sortable__blue").removeClass("sortable__blue");
  $("ul li").eq(5).addClass("sortable__blue");
  $("ul li.sortable__violet").removeClass("sortable__violet");
  $("ul li").eq(6).addClass("sortable__violet");
}
    