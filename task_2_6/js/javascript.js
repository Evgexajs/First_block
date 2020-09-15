$( function() {
    $( "input[type=submit]" ).button();
    $( ".home" ).click( function( event ) {
        event.preventDefault();
        $.ajax({
            url: "../index.html",
            type: "GET",
            success: function(html) {
                $(".content__text").html(html);
            }
        });
    } );
    $( ".about" ).click( function( event ) {
        event.preventDefault();
        $.ajax({
            url: "../about.html",
            type: "GET",
            success: function(html) {
                $(".content__text").html(html);
            }
        });
    } );
    $( ".contact" ).click( function( event ) {
        event.preventDefault();
        $.ajax({
            url: "../contact.html",
            type: "GET",
            success: function(html) {
                $(".content__text").html(html);
            }
        });
    } );
} );
  