$(document).ready(function(){
    console.log("aaaaaaaaaaaaa");
    var owl = $('.owl-carousel'); 
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});

