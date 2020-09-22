$( function() { 
    $("#button").button();
    $(".form__main").validate({
        submitHandler: function(){
            sendAjaxForm();
            return false; 
       }
    });
    function sendAjaxForm(){
        $.ajax({
            url: 'index.php',
            method: 'POST',
            data: $(".form__main").serialize(),
            success: function(data){
                alert(data);
            }
        });
    };
} );