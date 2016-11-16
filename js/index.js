
$(".arrow").click(function() {
   $('html,body').animate({
       scrollTop: $("#about").offset().top},
       1000);
});

$(".contact-link").click(function() {
   $('html,body').animate({
       scrollTop: $("#contact").offset().top},
       1500);
});