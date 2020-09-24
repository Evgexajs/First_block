$( function() {
    $(".todo-list__text").on("keyup", function(e){
        if(e.keyCode == 13 && $(".todo-list__text").val() != "")
        {
            var task = $("<div class='todo-list__task'></div>").text($(".todo-list__text").val());
            var del = $("<img id='delete' src='image/bdelete.png'>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    p.remove();
                })
            });
            var check = $("<img src='image/check.png'>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".todo-list__completed").append(p);
                    p.fadeIn();
                })
                $(this).remove();
            });
            task.append(del, check);
            $(".todo-list__not-completed").append(task);

            $(".todo-list__text").val("");
        }
    });

} );