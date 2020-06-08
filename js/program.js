
  $( document ).ready(function() {
    console.log( "document loaded" );
});

    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut(2000)
            console.log("YEAAH");
});
  

        var bigScene = $(".big-scene");
            smallScene = $(".small-scene"); 
            pos = bigScene.position();
             	
         $(window).scroll(function() {

        var windowpos = $(window).scrollTop();

        if (windowpos >= pos.top & windowpos <= 1000) {
          bigScene.addClass("program-scene-scroll"), 
          smallScene.addClass("program-scene-scroll1");        
        } else {
          bigScene.removeClass("program-scene-scroll"),
          smallScene.removeClass("program-scene-scroll1");
        }
        
    });



    /* Button-change-program */

    var programButton1 = $('.button-date1');
        programButton2 = $('.button-date2');

        program1 = $('.program-table1');
        program2 = $('.program-table2');


        program2.hide();
            $("#button2").click(function() {
                program2.fadeIn("slow", function() {
                });
        });

        $("#button2").click(function() {
            program1.fadeOut("slow", function() {

            });
        });


        $("#button1").click(function() {
            program2.fadeOut("slow", function() {
                program1.fadeIn("slow")
            });
        });

/* MOBILE MENU */

var menuButton = $('.menu-toggle');
    fullMenu = $('.full-menu');

menuButton.on('click', function() {
    fullMenu.toggleClass('full-menu--open');
});
