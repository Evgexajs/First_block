
  $( function() {
    $( "#datepicker" ).datepicker({
      });
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
    .datepicker({
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
    var availableTags = [
      "2021 Polygon Siskiu D5 - 27.5inch Dual Suspension Mountain Bike",
      "2020 Polygon Path 3 Urban...",
      "2019 Polygon Strattos S2....",
      "Polygon Sierra Oosten - 26..",
      "2021 Polygon Siskiu T7 Bike",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags,
      width: 100,

    });
    $(".page__slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
    });
  } );