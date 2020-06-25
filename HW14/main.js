$(window).on("load", () => {
  console.log("on load");
    $(".preloader").fadeOut(1000);
    $(".video-container").append(`<iframe
            width = "780"
            height = "380"
            src = "https://www.youtube.com/embed/M7lc1UVf-VE"
            frameborder = "0"
            allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe >`)
});
