// Header Component - Injects navbar into all pages
(function () {
    'use strict';

    // Add CSS for nested dropdown menus
    if (!$('#header-submenu-styles').length) {
        $('head').append(`
            <style id="header-submenu-styles">
                .dropdown-submenu {
                    position: relative;
                }
                .dropdown-submenu > .dropdown-menu {
                    top: 0;
                    left: 100%;
                    margin-top: -1px;
                    margin-left: 0;
                    min-width: 200px;
                }
                .dropdown-submenu:hover > .dropdown-menu {
                    display: block;
                }
                .dropdown-submenu > a:after {
                    display: block;
                    content: " ";
                    float: right;
                    width: 0;
                    height: 0;
                    border-color: transparent;
                    border-style: solid;
                    border-width: 5px 0 5px 5px;
                    border-left-color: #ccc;
                    margin-top: 5px;
                    margin-right: -10px;
                }
                @media (max-width: 991px) {
                    .dropdown-submenu > .dropdown-menu {
                        position: static;
                        float: none;
                        width: auto;
                        margin-top: 0;
                        background-color: #f8f9fa;
                        border: 0;
                        box-shadow: none;
                    }
                }
            </style>
        `);
    }

    // Wait for DOM to be ready
    $(document).ready(function () {
        // Find where to insert the header (before smooth-wrapper or after progress-wrap)
        var headerHTML = `
    <!-- ==================== Start Navbar ==================== -->

    <nav class="navbar navbar-expand-lg blur">
        <div class="container o-hidden">

            <!-- Logo -->
            <a class="logo w-150px" href="index.html">
                <img src="assets/imgs/logos/logo-black.png" alt="logo">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 640 640" style="width: 24px; height: 24px;">
                        <path d="M544 128C544 110.3 529.7 96 512 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128zM544 384C544 366.3 529.7 352 512 352L128 352C110.3 352 96 366.3 96 384C96 401.7 110.3 416 128 416L512 416C529.7 416 544 401.7 544 384zM96 256C96 273.7 110.3 288 128 288L512 288C529.7 288 544 273.7 544 256C544 238.3 529.7 224 512 224L128 224C110.3 224 96 238.3 96 256zM544 512C544 494.3 529.7 480 512 480L128 480C110.3 480 96 494.3 96 512C96 529.7 110.3 544 128 544L512 544C529.7 544 544 529.7 544 512z"/>
                    </svg>
                </span>
            </button>

            <!-- navbar links -->
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html"><span class="rolling-text">Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html"><span class="rolling-text">About</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Product</span></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false">Porcelain Tiles</a>
                               <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="60x60.html">60x60</a></li>
                                    <li><a class="dropdown-item" href="60x120.html">60x120</a></li>
                                    <li><a class="dropdown-item" href="20x120.html">20x120</a></li>
                                    <li><a class="dropdown-item" href="80x80.html">80x80</a></li>
                                    <li><a class="dropdown-item" href="80x160.html">80x160</a></li>
                                    <li><a class="dropdown-item" href="100x100.html">100x100</a></li>
                                    <li><a class="dropdown-item" href="120x120.html">120x120</a></li>
                                </ul>

                            </li>
                            <li class="dropdown-submenu">
                                <a class="dropdown-item dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false">Porcelain Slabs</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="80x240.html">80x240 – 15mm</a></li>
                                    <li><a class="dropdown-item" href="80x320.html">80x320 – 15mm</a></li>
                                    <li><a class="dropdown-item" href="1200x2400.html">1200x2400</a></li>
                                    <li><a class="dropdown-item" href="1200x2800.html">1200x2800</a></li>
                                </ul>
                            </li>
                           
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="export.html"><span class="rolling-text">Export</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="catalogue.html"><span class="rolling-text">Catalogue</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact-us.html"><span class="rolling-text">Contact</span></a>
                    </li>
                </ul>
            </div>

            <div class="contact-button">
                <a href="contact-us.html" class="butn border-radius-5px">
                    <span class="text">Let's contact</span>
                </a>
            </div>
        </div>
    </nav>

    <!-- ==================== End Navbar ==================== -->
        `;

        // Insert header before smooth-wrapper or after progress-wrap
        var $target = $('.progress-wrap');
        if ($target.length) {
            $target.after(headerHTML);
        } else {
            // Fallback: insert before smooth-wrapper
            var $smoothWrapper = $('#smooth-wrapper');
            if ($smoothWrapper.length) {
                $smoothWrapper.before(headerHTML);
            } else {
                // Last fallback: insert at the beginning of body
                $('body').append(headerHTML);
            }
        }

        // Handle nested dropdown menus (submenu support)
        $('.dropdown-submenu > a').on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            var submenu = $(this).next('ul');
            var parent = $(this).parent();

            // Close other submenus
            $('.dropdown-submenu').not(parent).find('ul').removeClass('show');

            // Toggle current submenu
            submenu.toggleClass('show');
        });

        // Close submenus when clicking outside
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.dropdown-submenu').length) {
                $('.dropdown-submenu ul').removeClass('show');
            }
        });
    });
})();

