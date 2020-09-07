$( function() {
    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#dialog" ).dialog({
    autoOpen: false,
    modal: true,
    width: 450,
    buttons: [
        {
            text: "Yes",
            click: function() {
                $( this ).dialog( "close" );
            }
        },
        {
            text: "No",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
        ],
        open: function(event,ui) {
            $('.ui-widget-overlay').bind('click', function(event,ui) {         
                $('#dialog').dialog('close');
            });
        }
    });
});