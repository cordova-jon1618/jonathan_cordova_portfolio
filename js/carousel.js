// carousel.js

// $(document).ready(function() {
//     var multipleCardCarousel = document.querySelector("#carouselExampleControls");

//     function adjustCarousel() {
//         if (window.matchMedia("(min-width: 768px)").matches) {
//             var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//             var cardWidth = $(".carousel-item").width();
//             var scrollPosition = 0;

//             // Reset scroll position on resize
//             $(".carousel-inner").scrollLeft(0);

//             $("#carouselExampleControls .carousel-control-next").off("click").on("click", function () {
//                 if (scrollPosition < carouselWidth - cardWidth * 3) {
//                     scrollPosition += cardWidth;
//                     $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//                 }
//             });

//             $("#carouselExampleControls .carousel-control-prev").off("click").on("click", function () {
//                 if (scrollPosition > 0) {
//                     scrollPosition -= cardWidth;
//                     $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//                 }
//             });
//         } else {
//             $(multipleCardCarousel).addClass("slide");
//             $(".carousel-inner").scrollLeft(0); // Reset scroll position on smaller screens
//         }
//     }

//     // Initial call to set up the carousel
//     adjustCarousel();

//     // Adjust carousel on window resize
//     $(window).on('resize', function() {
//         adjustCarousel();
//     });
// });

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
