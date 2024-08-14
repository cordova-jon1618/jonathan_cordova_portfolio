// carousel.js

// var multipleCardCarousel = document.querySelector("#carouselExampleControls");
// if (window.matchMedia("(min-width: 768px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false,
//     });
//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition = 0;
//     $("#carouselExampleControls .carousel-control-next").on("click", function () {
//         if (scrollPosition < carouselWidth - cardWidth * 3) {
//             scrollPosition += cardWidth * 3; // Moves three cards
//             $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//         }
//     });
//     $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//         if (scrollPosition > 0) {
//             scrollPosition -= cardWidth * 3; // Moves back three cards
//             $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//         }
//     });
// } else {
//     $(multipleCardCarousel).addClass("slide");
// }
$(document).ready(function() {
    var multipleCardCarousel = document.querySelector("#carouselExampleControls");
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;

        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 3) {
                scrollPosition += cardWidth;
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });

        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }
});
