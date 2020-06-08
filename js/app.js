$(window).on("load",function(){
  $(".loader-wrapper").fadeOut(1000)
});




/*import $ from "jquery";*/
        
        /* Header animation -- titul-bar */
        
        var object1=$('.image1');
        var object2=$('.image2');
        var object3=$('.image3');
        var object4=$('.image4');

        var layer=$('#layer-home');

        layer.mousemove(function(e){
           var valueX=(e.pageX * -1 / 12);
           var valueY=(e.pageY * -1 / 12);

            object1.css({
                'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
            });
        });

        layer.mousemove(function(e){
           var valueX=(e.pageX * -1 / 15);
           var valueY=(e.pageY * -1 / 20);

            object2.css({
                'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
            });
        });

        layer.mousemove(function(e){
           var valueX=(e.pageX * -1 / 15);
           var valueY=(e.pageY * -1 / 15);

            object3.css({
                'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
            });
        });

         layer.mousemove(function(e){
           var valueX=(e.pageX * -1 / 15);
           var valueY=(e.pageY * -1 / 15);

            object4.css({
                'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
            });
        });

        /* slidebar partners */

    

    
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}



/* MOBILE MENU */

var menuButton = $('.menu-toggle');
    fullMenu = $('.full-menu');

menuButton.on('click', function() {
    fullMenu.toggleClass('full-menu--open');
});







  
