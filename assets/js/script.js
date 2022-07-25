$(document).ready(function(){
    // Mobile Menu
    $('.mobile-menu a').click(function(){
        $('.header-area').slideToggle()
    });
    // Tag Canvas
    $('#myCanvas').tagcanvas({
        textColour : '#08fdd8',
        outlineThickness : 0.5,
        outlineColour : '#fe0853',
        maxSpeed : 0.06,
        freezeActive:true,
        shuffleTags:true,
        shape:'sphere',
        zoom:0.9,
        noSelect:true,
        textFont:null,
        pinchZoom:true,
        freezeDecel:true,
        fadeIn:1000,
        initial: [0.3,-0.1],
        depth : 0.8
    });
    // Banner lightmouse
    // $('.banner-area').lightMouse({
    //     couleur:'#08fdd8',
    //     largeur:20,
    //     hauteur:20
    // });
    // AOS Animation
        AOS.init();
    // Progressbar
    $('.skills').rProgressbar({
        percentage: 95,
        fillBackgroundColor: '#08fdd8',
        backgroundColor: '#fff',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });
    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#08fdd8'
    });
    $('.bootstrap').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#08fdd8'
    });
    $('.javascript').rProgressbar({
        percentage: 87,
        fillBackgroundColor: '#08fdd8'
    });
    $('.jquery').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#08fdd8'
    });
    // Recent Work Gallery
    var mixer = mixitup('.work-gallery');
    var mixer = mixitup(containerEI,{
        load :{
            filter: '.all'
        }
    });
    // Clint Satisfied Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots: false,
        items: 3,
        margin: 20,
        autoplayTimeout: 3000,
        center: true,
        responsive: {
            0 : {
                items:1
            },
            480 : {
                items:1
            },
            800 : {
                items:3
            }  
        }    
    });
    // MOuse 
   
});
var cursor = document.getElementById("cursor");

document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
};