// Footer Component - Injects footer into all pages
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    $(document).ready(function() {
        var footerHTML = `
                <!-- ==================== Start Footer ==================== -->

                <footer class="pb-50px">
                    <div class="container line-top border-color-transparent-white-light pt-80px">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-50px">
                                <div class="footer-section">
                                    
                                    <div class="footer-links">
                                        <div class="row">
                                            <div class="col-6">
                                            <h6 class="fs-18 mb-30px text-uppercase">Main Pages</h6>
                                                <p class="mb-10px"><a href="index.html" class="fs-14">Home</a></p>
                                                <p class="mb-10px"><a href="about.html" class="fs-14">About Us</a></p>
                                                <p class="mb-10px"><a href="catalogue.html" class="fs-14">Catalogue</a></p>
                                                <p class="mb-10px"><a href="export.html" class="fs-14">Export</a></p>
                                                <p class=""><a href="contact-us.html" class="fs-14">Contact Us</a></p>
                                            </div>
                                            <div class="col-6">
                                                <h6 class="fs-18 mb-30px text-uppercase">Utility Pages</h6>
                                                <p class="mb-10px"><a href="packing-details.html" class="fs-14">Packing Details</a></p>
                                                <p class="mb-10px"><a href="technical-specifications.html" class="fs-14">Technical Specifications</a></p>
                                                <p class="mb-10px"><a href="tiles-calculate.html" class="fs-14">Tiles Calculate</a></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-50px">
                                <div class="footer-section">
                                    <h6 class="fs-18 mb-30px text-uppercase">Address</h6>
                                    <p class="mb-20px fs-14">
                                        Opp Khokhara Hanuman <br>Temple, Bela-Bharatnagar<br> Road, Morbi, India, Gujarat
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-50px">
                                <div class="footer-section">
                                    <h6 class="fs-18 mb-30px text-uppercase">Contact Us</h6>
                                    <div class="footer-contact-item mb-20px">
                                        <div class="d-flex align-items-center">
                                            <div class="footer-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor">
                                                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
                                                </svg>
                                            </div>
                                            <a href="tel:9726322400" class="ml-15px fs-14">+91 97263 22400</a>
                                        </div>
                                    </div>
                                    <div class="footer-contact-item mb-20px">
                                        <div class="d-flex align-items-center">
                                            <div class="footer-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor">
                                                    <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/>
                                                </svg>
                                            </div>
                                            <a href="mailto:harviinternational25@gmail.com" class="ml-15px fs-14">harviinternational25@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 mb-50px">
                                <div class="footer-section">
                                    <h6 class="fs-18 mb-30px text-uppercase">Follow Us</h6>
                                    <div class="social-icon-circle">
                                        <a href="https://www.facebook.com/profile.php?id=100092514046858" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor">
                                                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/harvi_internationaltiles/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor">
                                                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
                                            </svg>
                                        </a>
                                        <a href="tel:9726322400" target="_blank" rel="noopener noreferrer" aria-label="Phone">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor">
                                                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
                                                </svg>
                                        </a>
                                        <a href="mailto:harviinternational25@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill="currentColor">
                                                    <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/>
                                                </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-50px">
                            <div class="col-lg-12">
                                <div class="text-align-center">
                                    <p class="fs-14">© 2025 Harvi International. All Right Reserved By <span class="golden-yellow">  <a href="https://cypersoft.com" target="_blank" rel="noopener noreferrer" aria-label="Cypersoft"> Cypersoft </a> </span></p>
                                </div>
                            </div>
                        </div>
                </footer>

                <!-- ==================== End Footer ==================== -->
        `;
        
        // Insert footer before closing main tag or before closing smooth-content
        var $main = $('main');
        if ($main.length) {
            $main.append(footerHTML);
        } else {
            // Fallback: insert before closing smooth-content
            var $smoothContent = $('#smooth-content');
            if ($smoothContent.length) {
                $smoothContent.append(footerHTML);
            } else {
                // Last fallback: insert before closing body
                $('body').append(footerHTML);
            }
        }
    });
})();

