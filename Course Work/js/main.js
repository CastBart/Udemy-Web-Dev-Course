$(document).ready(function(){

    let el = document.getElementById("text");

    $(document).on("contextmenu", function () {
        return false;
    });


    $(document).on("mousedown", function (event) {
        event.stopPropagation();
        
        if(event.which == 3){
            $("#context").css({
                top: event.pageY,
                left: event.pageX
            });

            $("#context").fadeIn();
            return false;
        }
        $("#context").fadeOut();

    });


    $("[data-trigger='dropdown']").on("mouseenter", function(){
        let submenu = $(this).parent().find(".submenu");
        submenu.fadeIn(300);

        $(".profile-menu").on("mouseleave", ()=>{
            submenu.fadeOut(300);
        })
    });




    $("#append, #prepend, #replace").on("click", (event)=>{
        event.preventDefault();
        
        let element = $(event.currentTarget);
        let action = element.attr("id");
        let content = $(".text").val();
        $()

        if(action == "append"){
            console.log("Appending",content);
            $("#main").append(content);
        }else if(action == "prepend"){
            console.log("Prepending");
            $("#main").prepend(content);
        }else if(action == "replace"){
            console.log("Replacing");
            $("#main").html(content);
        }

        $(".text").val("");
    });
    
});
