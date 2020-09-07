$( function() {
    $( "#datepicker" ).datepicker({
      });
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
    .datepicker({
        numberOfMonths: 3,
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim: "blind",
        changeMonth: true,
        changeYear: true, 
        showButtonPanel: true,
        showOn: "both",
        buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        buttonImageOnly: true,
        buttonText: "Select date"
    })
    .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
    }),
    to = $( "#to" ).datepicker({
    defaultDate: "+1w",
    numberOfMonths: 3,
    showOtherMonths: true,
    selectOtherMonths: true,
    showAnim: "blind",
    changeMonth: true,
    changeYear: true, 
    showButtonPanel: true,
    showOn: "both",
    buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly: true,
    buttonText: "Select date"
    })
    .on( "change", function() {
    from.datepicker( "option", "maxDate", getDate( this ) );
    });

    function getDate( element ) {
        var date;
        try {
        date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
        date = null;
        }

        return date;
    }
});