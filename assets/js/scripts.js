/*-----------------------------------------------------------------------------------

    Theme Name: Harvi
  
    Description: Harvi International provides end-to-end global trading, sourcing, and supply chain solutions, helping businesses connect with reliable partners worldwide.
    Author: Harvi
    Author URI: 
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function() {

    "use strict";


    var wind = $(window);


    /* =============================================================================
    -----------------------------  Smooth Scroll nav   -----------------------------
    ============================================================================= */


    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -75 // offste (in px) for fixed top navigation
    });


    /* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

    // Open only the hovered dropdown (prevents all menus opening together)
    $('.navbar .dropdown').hover(function() {
        const $dropdown = $(this);
        $dropdown.addClass('show');
        $dropdown.children('.dropdown-menu').addClass('show');
    }, function() {
        const $dropdown = $(this);
        $dropdown.removeClass('show');
        $dropdown.children('.dropdown-menu').removeClass('show');
    });

    // Handle nested dropdowns on hover independently
    $('.navbar .dropdown-menu .dropdown').hover(function() {
        const $dropdown = $(this);
        $dropdown.addClass('show');
        $dropdown.children('.dropdown-menu').addClass('show');
    }, function() {
        const $dropdown = $(this);
        $dropdown.removeClass('show');
        $dropdown.children('.dropdown-menu').removeClass('show');
    });

    $('.navbar .dropdown-item').hover(function() {
        $(this).find('.dropdown-side').addClass('show');
    }, function() {
        $(this).find('.dropdown-side').removeClass('show')
    });

    $(".navbar .search-form").on("click", ".search-icon", function() {

        $(".navbar .search-form").toggleClass("open");

        if ($(".navbar .search-form").hasClass('open')) {

            $(".search-form .close-search").slideDown();

        } else {

            $(".search-form .close-search").slideUp();
        }
    });

    $(".navbar").on("click", ".navbar-toggler", function() {

        $(".navbar .navbar-collapse").toggleClass("show");
    });

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-light.png');
        }
    });

    function noScroll() {
        window.scrollTo(0, 0);
    }

    $('.navbar .menu-icon').on('click', function() {

        $('.hamenu').addClass("open");

        $('.hamenu').animate({
            left: 0
        });

    });

    $('.hamenu .close-menu, .one-scroll .menu-links .main-menu > li').on('click', function() {

        $('.hamenu').removeClass("open").delay(300).animate({
            left: "-100%"
        });
        $('.hamenu .menu-links .main-menu .dmenu, .hamenu .menu-links .main-menu .sub-dmenu').removeClass("dopen");
        $('.hamenu .menu-links .main-menu .sub-menu, .hamenu .menu-links .main-menu .sub-menu2').slideUp();

    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function() {
        $(this).removeClass('hoverd').siblings().addClass('hoverd');
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function() {
        $(this).removeClass('hoverd').siblings().removeClass('hoverd');
    });


    $('.main-menu > li .dmenu').on('click', function() {
        $(this).parent().parent().find(".sub-menu").toggleClass("sub-open").slideToggle();
        $(this).toggleClass("dopen");
    });

    $('.sub-menu > ul > li .sub-dmenu').on('click', function() {
        $(this).parent().parent().find(".sub-menu2").toggleClass("sub-open").slideToggle();
        $(this).toggleClass("dopen");
    });

    /* =============================================================================
    ------------------------------  Parallax Swiper   ------------------------------
    ============================================================================= */


    var parallaxShowCase;
    var parallaxShowCaseOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        mousewheel: true,
        loop: true,

        on: {
            init: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function() {
                this.update();
            }
        },

        pagination: {
            el: '.showcase-full .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.showcase-full .swiper-button-next',
            prevEl: '.showcase-full .swiper-button-prev'
        }
    };
    parallaxShowCase = new Swiper('.showcase-full .parallax-slider-full', parallaxShowCaseOptions);


    /* =============================================================================
    ------------------------------  Swiper slider   -----------------------------
    ============================================================================= */

    var testim1 = new Swiper(".testimonials-ds .testim-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".testimonials-ds .swiper-pagination",
            clickable: true,
        },
    });

    var testim2 = new Swiper(".testim-style2 .testim-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".testim-style2 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    var testim3 = new Swiper(".testim-style3 .testim-swiper", {
        effect: "cards",
        grabCursor: true,
        navigation: {
            nextEl: '.testim-style3 .swiper-button-next',
            prevEl: '.testim-style3 .swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        }
    });

    var swiper = new Swiper('.blog-style1 .swiper-container , .blog-style2 .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1500,
        pagination: {
            el: ".blog-style1 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.blog-style1 .swiper-button-next',
            prevEl: '.blog-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // thumb slider
    var portfolioThumbSlider = new Swiper('.testim-style1 .thumb-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 2000,
        // watchSlidesProgress: true,
        navigation: {
            nextEl: '.testim-style1 .swiper-button-next',
            prevEl: '.testim-style1 .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        mousewheel: false,
        keyboard: true,
        loop: true,
        allowTouchMove: false,
        a11y: false,
    });

    // main slider
    var portfolioMainSlider = new Swiper('.testim-style1 .main-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 2000,
        pagination: {
            el: '.testim-style1 .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.testim-style1 .swiper-button-next',
            prevEl: '.testim-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: true,
        // thumbs: {
        //     swiper: portfolioThumbSlider
        // },
        allowTouchMove: false,
        a11y: false,
    });


    var swiper = new Swiper(".hero-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        loopedSlides: 8,
        coverflowEffect: {
            rotate: 80,
            depth: -100,
            modifier: .2,
            scale: 1.2,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    /* =============================================================================
    ------------------------------  Interactive work   -----------------------------
    ============================================================================= */

    $('.inter-links-center .links-text li').on('mouseenter', function() {
        var tab_id = $(this).attr('data-tab');
        $('.links-text li').removeClass('current');
        $(this).addClass('current');

        $('.links-img .img').removeClass('current');
        $("#" + tab_id).addClass('current');

        if ($(this).hasClass('current')) {
            return false;
        }
    });

    $('.inter-links-center .links-text li').on('mouseleave', function() {
        $('.links-text li').removeClass('current');
        $('.links-img .img').removeClass('current');
    });


    $('.inter-links-center .links-text li').on('mouseenter', function() {
        $(this).removeClass('no-active').siblings().addClass('no-active');
    });

    $('.inter-links-center .links-text li').on('mouseleave', function() {
        $('.inter-links-center .links-text li').removeClass('no-active');
    });


    /* =============================================================================
    ------------------------------  Interactive work   -----------------------------
    ============================================================================= */

    $('.inter-fixed-text .links-img .img').on('mouseenter', function() {
        var tab_id = $(this).attr('data-tab');
        $('.links-img .img').removeClass('current');
        $(this).addClass('current');

        $('.links-text li').removeClass('current');
        $("#" + tab_id).addClass('current');

        if ($(this).hasClass('current')) {
            return false;
        }
    });

    $('.inter-fixed-text .links-img .img').on('mouseleave', function() {
        $('.links-text li').removeClass('current');
        $('.links-img .img').removeClass('current');
    });



    /* =============================================================================
   ------------------------------  Cards   ------------------------------
   ============================================================================= */

    $(function() {
        var width = $(window).width();
        if (width > 991) {

            "use strict";

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services-style4 .sec-head",
                    start: "center center",
                    endTrigger: ".services-style4",
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false
                }
            });

            $(function() {
                let cards = gsap.utils.toArray(".cards .card-item");

                let stickDistance = 0;

                let firstCardST = ScrollTrigger.create({
                    trigger: cards[0],
                    start: "center center"
                });

                let lastCardST = ScrollTrigger.create({
                    trigger: cards[cards.length - 1],
                    start: "center center"
                });

                cards.forEach((card, index) => {
                    var scale = 1 - (cards.length - index) * 0;
                    let scaleDown = gsap.to(card, {
                        scale: scale,
                        'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"'
                    });

                    ScrollTrigger.create({
                        trigger: card,
                        start: "center center",
                        end: () => lastCardST.start + stickDistance,
                        pin: true,
                        pinSpacing: false,
                        ease: "none",
                        animation: scaleDown,
                        toggleActions: "restart none none reverse"
                    });
                });
            });

        }
    });


    /* =============================================================================
   ------------------------------  Portfolio Skew   ------------------------------
   ============================================================================= */

    $(function() {
        gsap.utils
            .toArray(".portfolio-style2 .portfolio-slider .item")
            .forEach((item) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom+=150% center",
                        scrub: true,
                    },
                });

                tl.from(item, {
                        translateY: "0",
                        rotateX: "-50deg",
                        scale: 0.9,
                        // ease: "power1.inOut"
                        ease: "linear",
                    })
                    .to(item, {
                        translateY: "0",
                        rotateX: "50deg",
                        scale: 0.9,
                        // ease: "power1.inOut"
                        ease: "linear",
                    });
            });

        let a = gsap.timeline({
            scrollTrigger: {
                trigger: ".portfolio-style2",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: ".portfolio-style2 .lg-title",
            },
        });
    });


    /* =============================================================================
   ------------------------------  Data Background   ------------------------------
   ============================================================================= */

    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx) {

        if ($(this).attr("data-background")) {
            var bgPath = $(this).data("background");
            $(this).css("background-image", 'url("' + bgPath + '")');
        }
    });

    var pageSectionColor = $(".bg-solid-color, section");
    pageSectionColor.each(function(indx) {

        var color = $(this).attr("data-solid-color");

        if ($(this).attr("data-solid-color")) {
            $(this).css("background-color", color);
        }
    });


    /* =============================================================================
   ------------------------------  Works Fixed head   ------------------------------
   ============================================================================= */

    let a = gsap.timeline({
            scrollTrigger: {
                trigger: ".fix-title-sec",
                start: "top center",
                end: "bottom bottom",
                scrub: true,
                pin: ".fix-title-sec .sec-head-crev",
            },
        })

        .to(".fix-title-sec .sec-head-crev", {
            scale: 1.3,
            opacity: 0,
            ease: 'Linear.easeNone'
        });

    /* =============================================================================
    -----------------------------------  Tabs  -------------------------------------
    ============================================================================= */

    $('#tabs .tab-links').on('click', '.item-link', function() {

        var tab_id = $(this).attr('data-tab');

        $('#tabs .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').hide();
        $("#" + tab_id).show();

    });

    $('#tabs-fade .tab-links').on('click', '.item-link', function() {

        var tab2_id = $(this).attr('data-tab');

        $('#tabs-fade .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').fadeOut();
        $("#" + tab2_id).fadeIn();

    });

    /* ===============================  Accordion Side  =============================== */

    $(".portfolio-crev .item, .portfolio-elegant .item").hover(
        function() {
            $(this).addClass("active");
        },
        function() {
            $(this).removeClass("active");
        }
    );


    /* =============================================================================
    --------------------------------  Accordion  -----------------------------------
    ============================================================================= */

    $(".accordion").on("click", ".title", function() {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(".accordion").on("click", ".accordion-item", function() {

        $(".accordion .accordion-item").removeClass("active");
        $(this).addClass("active");

    });


    /* =============================================================================
    ---------------------------------  Tolltip  ------------------------------------
    ============================================================================= */

    $('[data-tooltip-tit]').hover(function() {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn();
    }, function() {
        $('.div-tooltip-tit').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-tit').css({
            top: e.pageY + 10,
            left: e.pageX + 20
        })
    });

    $('[data-tooltip-sub]').hover(function() {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn();
    }, function() {
        $('.div-tooltip-sub').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-sub').css({
            top: e.pageY + (-20),
            left: e.pageX + 30
        })
    });


    /* =============================================================================
    -------------------------------  Progress Bar  ---------------------------------
    ============================================================================= */

    wind.on('scroll', function() {
        $(".skill-progress .progres").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

    /* =============================================================================
    ------------------------------  Parallax Items   -----------------------------
    ============================================================================= */

    // Get the target elements
    const parallaxTargets = document.querySelectorAll('.parallax');

    // Get the mouse position
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Update the target elements' position on each animation frame
    let rafId = null;

    function updateParallax() {
        // Loop through each target element
        parallaxTargets.forEach(target => {
            // Get the target's speed
            let speed = target.dataset.speed;

            // Calculate the new position based on the mouse position and speed
            let x = (window.innerWidth / 2 - mouseX) * speed;
            let y = (window.innerHeight / 2 - mouseY) * speed;
            target.style.transform = `translate3d(${x / 10}rem, ${y / 10}rem, 0)`;
        });

        // Schedule the next animation frame
        rafId = requestAnimationFrame(updateParallax);
    }

    // Start the parallax animation
    updateParallax();


    /* =============================================================================
    -----------------------------  Trigger Plugins  --------------------------------
    ============================================================================= */


    /* ========== Sticky ========== */

    $(".sticky-item").stick_in_parent();


    /* ========== YouTubePopUp ========== */

    $("a.vid").YouTubePopUp();


    /* ========== parallaxie ========== */

    $('.parallaxie').parallaxie({
        speed: 0.8,
        size: "cover"
    });


    /* ========== paroller ========== */

    $('.my-paroller').paroller();


    /* ========== magnificPopup ========== */

    $('.popup-img , .gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* =========== justifiedGallery =========== */

    $('.justified-gallery').justifiedGallery({
        rowHeight: 400,
        lastRow: 'nojustify',
        margins: 15
    });


    /* =========== hover3d =========== */

    $(".hover3d").hover3d({
        selector: ".hover3d-child",
        invert: true
    });


    /* ===========  Splitting  =========== */

    Splitting();

});


/* =============================================================================
-----------------------------  cursor Animation  -----------------------------
============================================================================= */

(function() {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function(e) {
        const hoverAnim = this.querySelector('.hover-anim');
        const {
            offsetX: x,
            offsetY: y
        } = e, {
            offsetWidth: width,
            offsetHeight: height
        } = this,
        move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
    const editCursor = e => {
        const {
            clientX: x,
            clientY: y
        } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    $("a, .cursor-pointer").hover(
        function() {
            $(".cursor").addClass("cursor-active");
        },
        function() {
            $(".cursor").removeClass("cursor-active");
        }
    );


    /* =============================================================================
    -----------------------------  Text Animation  -----------------------------
    ============================================================================= */


    let elements = document.querySelectorAll(".rolling-text");

    elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });
})();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(window).on("load", function() {


    /* =============================================================================
    ---------------------------------  Preloader  ----------------------------------
    ============================================================================= */

    var body = $('body');
    body.addClass('loaded');
    setTimeout(function() {
        body.removeClass('loaded');
    }, 1500);


    /* =============================================================================
    ------------------------------  Parallax image  --------------------------------
    ============================================================================= */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.2
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.2
    });


    /* =============================================================================
    -----------------------------  isotope Masonery   ------------------------------
    ============================================================================= */

    $('.gallery').isotope({
        itemSelector: '.items'
    });

    // isotope
    $('.gallery2').isotope({
        // options
        itemSelector: '.items',
        masonry: {
            // use element for option
            columnWidth: '.width2'
        }
    });

    var $gallery = $('.gallery , .gallery2').isotope();

    $('.filtering').on('click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });

    $('.filtering').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* =============================================================================
    -----------------------------  Contact Valdition   -----------------------------
    ============================================================================= */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function() {

    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

});


/* =============================================================================
-------------------------------  Wow Animation   -------------------------------
============================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(function() {


    "use strict";

    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: {
            d: curve
        },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: {
            d: flat
        },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header", {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container", {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );

});


$(function() {
    var width = $(window).width();
    if (width < 991) {

        "use strict";

        $(".navbar .navbar-nav").on("click", ".nav-link", function() {

            $(".navbar .navbar-nav .dropdown .dropdown-menu").removeClass("show");

            $(this).parent().find(".dropdown-menu").addClass("show");
        });
    }
});

/* =============================================================================
-----------------------------  Tiles Calculator  -----------------------------
============================================================================= */

$(document).ready(function() {
    "use strict";

    const form = document.getElementById('tileCalcForm');
    if (!form) return;

    const roomLength = document.getElementById('roomLength');
    const roomWidth = document.getElementById('roomWidth');
    const tileSize = document.getElementById('tileSize');
    const tileLength = document.getElementById('tileLength');
    const tileWidth = document.getElementById('tileWidth');
    const wastage = document.getElementById('wastage');
    const tilesPerBox = document.getElementById('tilesPerBox');
    const resetBtn = document.getElementById('resetCalc');

    const roomAreaSqftEl = document.getElementById('roomAreaSqft');
    const roomAreaSqmEl = document.getElementById('roomAreaSqm');
    const tileAreaSqftEl = document.getElementById('tileAreaSqft');
    const tileAreaSqmEl = document.getElementById('tileAreaSqm');
    const tilesNeededEl = document.getElementById('tilesNeeded');
    const boxesNeededEl = document.getElementById('boxesNeeded');

    const customSizeGroup = document.querySelectorAll('.custom-size');

    const toNumber = (val) => {
        const n = parseFloat(val);
        return isNaN(n) ? 0 : Math.max(0, n);
    };

    const formatNumber = (num, decimals = 2) => {
        if (!isFinite(num)) return '0';
        return num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    };

    const setTileInputsFromSelect = () => {
        if (!tileSize) return;
        const selected = tileSize.options[tileSize.selectedIndex];
        const isCustom = selected && selected.value === 'custom';
        customSizeGroup.forEach(el => {
            el.style.display = isCustom ? 'block' : 'none';
        });

        if (!isCustom && selected) {
            const l = selected.getAttribute('data-l');
            const w = selected.getAttribute('data-w');
            if (tileLength && l) tileLength.value = l;
            if (tileWidth && w) tileWidth.value = w;
        }
    };

    function calculate() {
        const rl = toNumber(roomLength.value);
        const rw = toNumber(roomWidth.value);
        const tlmm = toNumber(tileLength.value);
        const twmm = toNumber(tileWidth.value);
        const wastePercent = toNumber(wastage.value);
        const tpb = toNumber(tilesPerBox.value);

        // Convert room to sqft
        const roomAreaSqft = rl * rw;
        const roomAreaSqm = roomAreaSqft * 0.092903;

        // Convert tile mm to feet then sqft
        const mmToFt = 1 / 304.8;
        const tileAreaSqft = (tlmm * mmToFt) * (twmm * mmToFt);
        const tileAreaSqm = tileAreaSqft * 0.092903;

        let tilesNeeded = 0;
        if (tileAreaSqft > 0 && roomAreaSqft > 0) {
            const baseTiles = roomAreaSqft / tileAreaSqft;
            tilesNeeded = Math.ceil(baseTiles * (1 + wastePercent / 100));
        }

        const boxesNeeded = (tpb > 0 && tilesNeeded > 0) ? Math.ceil(tilesNeeded / tpb) : 0;

        roomAreaSqftEl.textContent = `${formatNumber(roomAreaSqft)} sqft`;
        roomAreaSqmEl.textContent = `${formatNumber(roomAreaSqm)} sqm`;
        tileAreaSqftEl.textContent = tileAreaSqft > 0 ? `${formatNumber(tileAreaSqft)} sqft` : '0 sqft';
        tileAreaSqmEl.textContent = tileAreaSqm > 0 ? `${formatNumber(tileAreaSqm)} sqm` : '0 sqm';
        tilesNeededEl.textContent = tilesNeeded ? tilesNeeded.toLocaleString() : '0';
        boxesNeededEl.textContent = boxesNeeded ? boxesNeeded.toLocaleString() : '0';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculate();
    });

    [roomLength, roomWidth, tileLength, tileWidth, wastage, tilesPerBox].forEach((input) => {
        if (input) input.addEventListener('input', calculate);
    });

    if (tileSize) {
        tileSize.addEventListener('change', function() {
            setTileInputsFromSelect();
            calculate();
        });
        setTileInputsFromSelect();
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            form.reset();
            setTileInputsFromSelect();
            calculate();
        });
    }

    // Initial calculation
    calculate();
});

/* =============================================================================
-----------------------------  Typing Text Animation  -----------------------------
============================================================================= */

$(document).ready(function() {
    "use strict";

    function typeWriter(element, strings, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        let currentStringIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let text = '';

        function type() {
            const currentString = strings[currentStringIndex];
            
            if (isDeleting) {
                // Delete characters
                text = currentString.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                
                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentStringIndex = (currentStringIndex + 1) % strings.length;
                    setTimeout(type, pauseTime);
                    return;
                }
            } else {
                // Type characters
                text = currentString.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                
                if (currentCharIndex === currentString.length) {
                    isDeleting = true;
                    setTimeout(type, pauseTime);
                    return;
                }
            }
            
            element.textContent = text;
            setTimeout(type, isDeleting ? deleteSpeed : speed);
        }

        type();
    }

    // Initialize typing animation for all elements with typing-text class
    $('.typing-text').each(function() {
        const element = this;
        const strings = $(this).data('strings');
        
        if (strings && strings.length > 0) {
            // Clear the initial content
            $(this).text('');
            
            // Start typing animation
            typeWriter(element, strings, 100, 50, 2000);
        }
    });

    // Country Slider
    if ($('.country-slider').length) {
        var countrySlider = new Swiper('.country-slider', {
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: '.country-slider-next',
                prevEl: '.country-slider-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            },
        });
    }
});