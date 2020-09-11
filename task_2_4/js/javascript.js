$( function() {
    $( "#datepicker" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim: "blind",
        changeMonth: true,
        changeYear: true, 
        showButtonPanel: true,
        buttonImageOnly: true,
    });
    $( '#meal' ).selectmenu();
    $("#bags").controlgroup();
    $("#seat").controlgroup();
    $(".button").button();
} );