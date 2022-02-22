$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-button').addClass("show");
        }
        else{
            $('.scroll-up-button').removeClass("show");
        }
    });


// typing animation script
var typed =new Typed(".typing", {
    strings: ["Programmer"  ,"Front-end developer","Back-end developer","FreeLancer" ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

var typed =new Typed(".typing2", {
    strings: ["Programmer"  ,"Front-end developer","Back-end developer","FreeLancer" ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

// scrollupscript
$('.scroll-up-button').click(function(){
    $('html').animate({scrollTop: 0})
});

    // toggle menu btn , navbar script
    $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
    //    for cross of menu btn
       $('.menu-btn i').toggleClass("active");
    });
     
});