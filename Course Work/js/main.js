$(document).ready(function(){


    $("[data-trigger='dropdown']").on("mouseenter", function(){
        let submenu = $(this).parent().find(".submenu");
        submenu.fadeIn(300);

        $(".profile-menu").on("mouseleave", ()=>{
            submenu.fadeOut(300);
        })
    });



    
});
