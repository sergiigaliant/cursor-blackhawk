$(window).on("load", () => {
  console.log("on load");
    $(".preloader").fadeOut(1000);
       
});
$(document).ready(function () {
    $('.review-slider').slick({
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right")
    });
});
