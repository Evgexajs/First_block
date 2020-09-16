$( function() {
  $( "#tabs" ).tabs();
  $( "#tabs a" ).click( function() {
    var info = $(this).attr("href")+ ".content__text";
    $('.content__text').hide("fast", loadContent)
    function loadContent() {
      $('.content__text').load(info, "", function() {
        $('.content__text').show("normal")
      })
    }
  })
} );
