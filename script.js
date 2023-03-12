$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scroll > 500){

            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");


        }

    })
    //toggle menu/navbar
 $('.scroll-up-btn').click(function(){
    $('html').animation({screenTop: 0});
 });



//typing animation scrp
var typed = new Typed(".typing",{
    strings: ["Tejas","Developer","Programmer","Freelancer!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

});