$( function() {
  $( ".content__container a" ).button();
  $( ".content__container a" ).click( function( event ) {
    var href = $(".content__container a").attr('href');  
    $.ajax({
      url: href,
      }).done(function (html) {
        $('.content__text').empty().append(html);
      });
  } );
} );
