// navbar 
$('body').scrollspy({
    target: ".navbar-nav",
    offset: 65
});


// Add smooth scrolling on all links inside the navbar
$(".navbar-nav a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        $(".navbar-collapse").collapse("hide");
    } // End if

});
// product section carousel js

$(document).ready(function () {

    $('.product-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    $('.testimonial-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

});


//   live style swicther


const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener(("click"), () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true")
        }
    })
}




// preloader section js
$(window).on("load", function () {
    $(".preloader").fadeOut('slow')
});

// wow js init 

new WOW().init();


// typed js 
new Typewriter('.typed', {
    strings: ['new', 'next', 'best seller', 'discount', ],
    autoStart: true,
    loop: true,

});