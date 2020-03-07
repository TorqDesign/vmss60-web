<template>
    <div id="main">
        <Navbar ref="navbar" @navTo="navTo" @navDir="navDir" navmode="front" arrow></Navbar>
       <client-only>
            <full-page ref="fullpage" id="fullpage" :options="options">
                <div class="hero-background full-page section" id="top"
                     v-waypoint="{ active: true, callback: toggleArrowDirTop, options: intersectionOptions }"
                     data-anchor="home">
                    <img src="https://static.vmss60.com/bigmlogo.png" alt="logo" class="img-fluid d-none d-xl-block" style="width: 150px; position: absolute; top: 5em; left: 14em">
                    <img src="https://static.vmss60.com/masseycrest.svg" alt="logo" class="img-fluid d-none d-xl-block" style="width: 150px; position: absolute; top: 5em; right: 14em">
                    <div class="hero">
                        <h1>VMSS 60th Reunion</h1>
                        <h6>October 9th &amp; 10th / 2020</h6>
                        <p>(To be held at Vincent Massey S.S. &amp; Caboto Club)</p>
                        <p>Page views: {{this.counter}}</p>
                        <div class="d-none d-sm-block">
                            <client-only>
                                <flip-countdown deadline="2020-10-09 00:00:00"
                                            style="text-align: left; margin: 0; padding: 0"></flip-countdown>
                            </client-only>
                            
                        </div>
                        <div class="d-block d-sm-none">
                            <countdown :time="this.time" tag="p">
                                <template slot-scope="props"><p style="font-weight: bold; font-size: 1.2em">Countdown: {{ props.days }} days, {{ props.hours }} hours, {{
                                    props.minutes }} minutes, {{ props.seconds }} seconds.</p>
                                </template>
                            </countdown>
                        </div>
                        <!-- Begin Mailchimp Signup Form -->
                        <style type="text/css">
                            #mc_embed_signup{background:none; clear:left; font-family: "Open Sans", sans-serif; width:100%;}
                            #mc_embed_signup form {text-align: left}
                            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                        </style>
                        <div id="mc_embed_signup">
                            <form action="https://gmail.us20.list-manage.com/subscribe/post?u=c259260007eff16ec9e630d39&amp;id=7fcb56d7d3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <label for="mce-EMAIL">Subscribe For Updates!</label>
                                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required>
                                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c259260007eff16ec9e630d39_7fcb56d7d3" tabindex="-1" value=""></div>
                                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                </div>
                            </form>
                        </div>
    
                        <!--End mc_embed_signup-->


                    </div>
                </div>
                <div class="mustang-container d-none d-md-block">
                    <svg
                            xmlns:dc="http://purl.org/dc/elements/1.1/"
                            xmlns:cc="http://creativecommons.org/ns#"
                            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                            xmlns:svg="http://www.w3.org/2000/svg"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                            width="30vw"
                            height="100vh"
                            viewBox="0 0 210 297"
                            version="1.1"
                            id="svg8"
                            inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
                            sodipodi:docname="mustang.svg">
                        <defs
                                id="defs2"/>
                        <sodipodi:namedview
                                id="base"
                                pagecolor="#ffffff"
                                bordercolor="#666666"
                                borderopacity="1.0"
                                inkscape:pageopacity="0.0"
                                inkscape:pageshadow="2"
                                inkscape:zoom="0.88688938"
                                inkscape:cx="563.49018"
                                inkscape:cy="505.99223"
                                inkscape:document-units="mm"
                                inkscape:current-layer="layer1"
                                showgrid="false"
                                inkscape:window-width="3840"
                                inkscape:window-height="2066"
                                inkscape:window-x="-11"
                                inkscape:window-y="-11"
                                inkscape:window-maximized="1"/>
                        <metadata
                                id="metadata5">
                            <rdf:RDF>
                                <cc:Work
                                        rdf:about="">
                                    <dc:format>image/svg+xml</dc:format>
                                    <dc:type
                                            rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                                    <dc:title></dc:title>
                                </cc:Work>
                            </rdf:RDF>
                        </metadata>
                        <g
                                inkscape:label="Layer 1"
                                inkscape:groupmode="layer"
                                id="layer1">
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 72.691831,14.153236 -0.39863,8.298579 -7.574,2.31272 -7.441117,6.121909 -3.853442,6.530037 -10.497307,9.522968 -3.986336,3.809186 0.531511,8.978794 2.65756,2.040635 4.916474,1.632509 4.650694,-1.904592 0.531513,-2.448763 12.49045,-2.720847 6.112351,-0.272085 -2.391784,11.699641 -6.112351,18.637801 -11.826073,12.379781 -1.993154,8.978811 1.461649,12.65201 -7.839769,5.0336 -11.294625,2.8569 -9.168576,1.08834 -5.18224,5.98586 -2.923315,10.88339 -6.378138,11.29151 -0.1328783,6.25795 -2.3918023,10.06713 -0.797267,8.70672 5.0493581,0.27207 6.7767735,-5.84981 -0.797267,-6.80212 -1.86029,-2.04063 -0.398635,-3.26502 4.384972,-4.21731 -1.195901,-5.03357 8.238433,-16.18904 5.447994,-0.9523 11.427501,0.54418 -4.650726,1.76854 -4.517849,5.30566 0.265756,5.03356 -1.594535,12.5159 -2.258926,8.57067 0.66439,6.66607 0.531511,8.0265 1.063025,4.08127 0.265754,6.80212 4.51785,-2.72085 4.51785,-6.12191 -2.524682,-4.08127 -2.52468,-1.36042 0.66439,-4.4894 2.524679,-4.08127 -0.664389,-7.21024 1.860292,-15.23674 6.112376,-3.80919 20.064461,-2.85689 15.812378,17.41342 16.343894,11.5636 17.672814,8.84276 -1.86029,15.10069 10.09873,31.1537 4.91648,6.66608 -1.46166,18.50176 -5.31511,8.97879 -7.97268,7.89046 11.95901,0.68021 6.77677,-3.26502 -1.46165,-5.44169 10.36448,-18.09363 -4.2521,-24.21554 7.44117,-13.74028 5.71374,3.80919 17.53989,31.69786 0.79727,10.06713 -2.79044,16.18905 -10.2316,12.2438 19.2673,0.81625 -0.66439,-17.82154 3.45483,-12.10776 0.66438,-14.28445 -10.09871,-28.5689 7.30828,17.41343 5.31512,-0.81626 -11.69326,-15.91695 17.00838,14.28444 -1.86029,-8.57067 20.19744,-23.26323 3.85346,-17.27738 -6.90964,-10.06714 -16.87551,-7.48233 -11.95901,6.12191 -19.13442,-19.45406 -21.12759,-9.38692 -15.14809,-16.59722 -3.45482,-12.37991 3.98634,-24.623608 -4.11922,-14.828616 6.77677,14.556532 2.65756,-19.454055 -6.37814,-16.869253 -16.0783,-8.298587 -18.735674,-14.148411 c 0,0 2.923297,-8.978791 2.258909,-8.978791 -0.664386,0 -7.441117,8.298579 -7.441117,8.298579 z"
                                    id="path3726"
                                    class="mustang-animate mustang-outline"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 58.473975,33.879377 6.643865,-3.809188 2.524667,2.720848 -3.587686,3.128976 z"
                                    id="path3728"
                                    class="mustang-animate mustang-eye"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 72.293201,22.451815 4.164282,8.22131 2.53688,7.503328 -2.889693,24.221025 -5.273118,-6.343188 -4.991358,-9.41254 12.872287,-8.657686 -10.937099,-1.791962 -8.700196,10.353451 -5.650544,-9.129069 -5.624452,12.976928 -6.107315,1.635339 -2.220365,7.698682 2.65756,2.040635 4.916474,1.632509 -1.97115,-7.812556 2.818751,-5.098412 4.334606,8.557613 12.49045,-2.720847 -16.731093,-5.644373 11.087078,-4.136449 5.644015,9.780822 1.214945,-9.780822 z"
                                    id="path3732"
                                    inkscape:connector-curvature="0"
                                    class="mustang-animate mustang-face"
                                    sodipodi:nodetypes="cccccccccccccccccccccccc"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 81.594606,22.859942 13.372669,18.490996 6.295225,15.006651 3.10066,14.910452 -0.28188,14.140881 9.40399,21.117018 -4.23622,-22.559965 8.22256,-2.063643 -13.10845,-11.403861 10.99323,-18.373526 -15.02611,-15.116592 z"
                                    id="path3738"
                                    class="mustang-animate mustang-mane"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 76.412398,22.17973 0.04508,8.493395 5.137123,-7.813183 3.319131,10.314292 -5.919373,5.002219 10.053536,6.733757 -4.416043,-12.505548 10.335419,8.946276 -6.013328,3.366878 3.758329,29.147531 -5.825412,7.407128 -10.78219,-18.874997 -5.048337,22.54164 -8.728925,1.45261 -5.601184,22.296692 21.51646,-0.76958 L 71.056333,84.939118 86.792892,81.36867 104.08127,85.408922 92.900184,73.961542 101.26249,56.357589 94.967267,41.350938 81.594597,22.859942 Z"
                                    id="path3740"
                                    class="mustang-animate mustang-neck"
                                    inkscape:connector-curvature="0"
                                    sodipodi:nodetypes="cccccccccccccccccccccccc"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 86.792892,81.36867 -8.550208,26.55017 25.838586,-22.509918 -3.47649,22.028938 12.88049,-0.91192 -22.276324,26.59648 -12.966262,-25.20358 -13.999784,18.75842 -7.516676,-17.98884 -6.756385,11.71391 14.367016,6.17873 16.254791,18.66212 -15.340932,0.59911 -1.289694,-18.87644 -19.731254,10.8702 5.740073,-17.43372 -7.839769,5.0336 -12.623404,13.06007 1.328777,-10.20317 -6.776773,11.15547 -2.391801,-10.06713 0.184558,14.29468 -5.366801,-8.30882 -2.923315,10.88339 8.290116,-2.57457 -6.031188,11.96149 -2.258928,-9.38692 2.923315,-10.88339 5.182241,-5.98586 9.168573,-1.08834 11.294628,-2.8569 7.839771,-5.0336 6.756385,-11.71391 21.51646,-0.76958 z"
                                    id="path3742"
                                    class="mustang-animate mustang-chest"
                                    inkscape:connector-curvature="0"
                                    sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccc"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 65.250714,145.84229 -21.020948,-8.00624 -3.295601,1.20413 4.252088,9.659 -13.420661,-2.5848 7.308285,6.39399 -8.637064,11.15547 6.77677,4.08127 -9.035696,4.4894 7.175406,6.80211 2.524679,-4.08127 -0.664389,-7.21024 1.860294,-15.23674 6.112376,-3.80919 z"
                                    id="path3744"
                                    class="mustang-animate mustang-leftleg"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 91.208946,133.12242 -10.6173,12.12076 0.471446,18.01253 24.521538,3.43928 -3.38254,-46.17434 14.738,-1.6148 -11.54337,47.88534 26.69146,-31.28812 19.34842,26.47829 20.91359,2.36269 3.13989,24.37993 -7.52486,21.19425 -18.03196,-5.32183 25.46286,-15.19904 -24.05348,-27.60839 -1.40938,42.61503 -5.62031,3.4736 -8.47352,-31.17818 8.26838,-24.91488 -38.61714,15.00665 z"
                                    id="path3746"
                                    class="mustang-animate mustang-torso"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 135.83943,176.69942 -14.28176,-16.161 -6.47787,23.12365 24.42402,7.85161 -21.14074,22.41377 18.5087,7.69043 -8.63706,14.96466 -4.91648,-6.66608 -10.09873,-31.1537 1.86029,-15.10069 z"
                                    id="path3748"
                                    class="mustang-animate mustang-rightbottomleg"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 135.83943,176.69942 14.56363,11.73597 24.99306,0.96197 -7.4309,20.52087 -11.83067,12.47451 19.6374,9.52346 -8.20537,11.46845 9.83297,9.38693 0.66438,-14.28445 -2.10406,-6.47474 -7.99465,-22.09416 -17.93853,1.76856 -0.0934,-7.09039 z"
                                    id="path3750"
                                    class="mustang-animate mustang-leftbottomleg"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 102.20209,120.52065 -1.59731,-13.08279 -22.362097,0.48098 z"
                                    id="path66"
                                    class="mustang-animate mustang-fixpentagon"
                                    inkscape:connector-curvature="0"/>
                            <path
                                    style="fill:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                                    d="m 113.35239,67.073716 2.004,-14.948771 z"
                                    id="path68"
                                    class="mustang-animate mustang-fixmane"
                                    inkscape:connector-curvature="0"/>
                        </g>
                    </svg>
                </div>
                <div class="full-page section" id="full-page-1" data-anchor="welcome">
                    <div id="full-page-1-text">
                        <h1>Welcoming <br><span class="emphasis-span">60 years</span><br> of alumni</h1>
                        <p>We are excited to invite back sixty years of proud Massey alumni for a weekend of fun and
                            enjoyment. VMSS 60 has
                            many exciting events planned for you to reunite with your former classmates and catch
                            up. </p>
                    </div>
                </div>
                
                <div class="full-page section" id="full-page-2"
                     v-waypoint="{ active: true, callback: toggleNavbar, options: intersectionOptions }"
                     data-anchor="hotels">
                    <img src="../assets/images/vmss60-hotelArtboard1.png" alt="blob" class="d-none d-xl-block">
                    <div id="full-page-2-text">
                        <img src="../assets/images/vmss60-hotelArtboard1.png" alt="blob" class="d-block d-xl-none"
                             id="full-page-2-image-mobile">
                        <h1>Hotels</h1>
                        <p>Traveling from out of town? We have worked with multiple local hotel partners to provide
                            discount
                            group rates for this reunion. Each hotel has unique instructions for redeeming this special
                            rate, so please follow the link below for more information.</p>
                        <nuxt-link to="/hotels" class="section-action-button" id="hotel-link">View hotels →</nuxt-link>
                    </div>
                </div>
                
                <div class="full-page section" id="full-page-3" data-anchor="events">
                    <!--                    <img src="../assets/images/bigglob.svg" alt="tes" id="full-page-3-back" class="d-none d-xl-block">-->
                    <img src="../assets/images/edin.png" alt="uhh" id="full-page-3-front" class="d-none d-xl-block">
                    <div id="full-page-3-text">
                        <!--                        <img src="../assets/images/bigglob.svg" alt="tes" id="full-page-3-back-mobile"-->
                        <!--                             class="d-sm-none d-md-block d-lg-block d-xl-none d-none">-->
                        <img src="../assets/images/edin.png" alt="uhh" id="full-page-3-front-mobile"
                             class="d-block d-xl-none">
                        <div style="z-index: 200;">
                            <h1>Events</h1>
                            <p>We have worked hard to plan exciting and enjoyable weekend for all of you! Events will be
                                running
                                from Friday evening throughout the entire day of Saturday. Check out a detailed listing
                                of
                                events below.</p>
                            <nuxt-link to="/events" class="section-action-button" id="event-link">Check out our events →</nuxt-link>
                        </div>
                    </div>
                </div>
                
                <!-- toggleBoth should ONLY be used when the end is light -->
                <div class="full-page section" id="full-page-4"
                     v-waypoint="{ active: true, callback: toggleBothEnd, options: intersectionOptions }"
                     data-anchor="contact">
                    <!-- toggleBoth should ONLY be used when the end is light -->
                    <div id="full-page-4-text">
                        <h1>Questions?</h1>
                        <p id="contact-desc">Email us at <a
                                href="mailto:masseymustangs2020@gmail.com"
                                class="expand-link">masseymustangs2020@gmail.com</a>.
                        </p>
                        <!--<form id="contact-form" v-on:submit.prevent="recaptcha">
                            <div class="form-group">
                                <label for="nameInput">Name</label>
                                <input type="text" class="form-control" id="nameInput" placeholder="John Smith"
                                       v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="emailInput">Email address</label>
                                <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"
                                       v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                          v-model="message"></textarea>
                            </div>
                            <p>This site is protected by reCAPTCHA and the Google
                                <a class="expand-link" href="https://policies.google.com/privacy">Privacy Policy</a> and
                                <a class="expand-link" href="https://policies.google.com/terms">Terms of Service</a>
                                apply.
                            </p>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        
                        </form>-->
                    </div>
                    <div class="vmss60-footer-desktop d-none d-xl-block">
                        <div class="quarter-circle-bottom-right">
                        </div>
                        <div class="vmss60-footer-text-desktop">
                            <p>Copyright &copy; 2020 Vincent Massey Secondary School.<br>Design by <a
                                    class="expand-link"
                                    href="https://davidhui.ca"
                                    target="_blank">David
                                Hui</a> and <a class="expand-link" href="https://jamesxu.ca" target="_blank">James
                                Xu</a>
                            </p>
                        </div>
                    </div>
                
                </div>
                <!--            <div class="vmss60-footer section" data-anchor="footer"-->
                <!--                 v-waypoint="{ active: true, callback: toggleNavbar, options: intersectionOptions }" v-if="mobileFooter">-->
                <!--                <div class="quarter-circle-bottom-right">-->
                <!--                </div>-->
                <!--                <div class="vmss60-footer-text">-->
                <!--                    <p>Copyright &copy; 2020 Vincent Massey Secondary School.<br>Design by <a class="expand-link"-->
                <!--                                                                                              href="https://davidhui.ca"-->
                <!--                                                                                              target="_blank">David-->
                <!--                        Hui</a> and <a class="expand-link" href="https://jamesxu.ca" target="_blank">James Xu</a>-->
                <!--                    </p>-->
                <!--                </div>-->
                <!--            </div>-->
            </full-page>
        </client-only>
        
        
        <!--        <div class="container" id="contact">-->
        <!--            <div class="row-tb-margin row align-items-center justify-content-center">-->
        <!--                <div class="col-md-10">-->
        <!--                    <h2>Contact</h2>-->
        <!--                    <p>Have a question? Feel free to use the contact form below or email <a-->
        <!--                            href="mailto:masseymustangs2020@gmail.com"-->
        <!--                            class="expand-link">masseymustangs2020@gmail.com</a>.-->
        <!--                    </p>-->
        <!--                    <form id="contact-form" v-on:submit.prevent="recaptcha">-->
        <!--                        <div class="form-group">-->
        <!--                            <label for="nameInput">Name</label>-->
        <!--                            <input type="text" class="form-control" id="nameInput" placeholder="John Smith"-->
        <!--                                   v-model="name">-->
        <!--                        </div>-->
        <!--                        <div class="form-group">-->
        <!--                            <label for="emailInput">Email address</label>-->
        <!--                            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"-->
        <!--                                   v-model="email">-->
        <!--                        </div>-->
        <!--                        <div class="form-group">-->
        <!--                            <label for="exampleFormControlTextarea1">Message</label>-->
        <!--                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"-->
        <!--                                      v-model="message"/>-->
        <!--                        </div>-->
        <!--                        <button type="submit" class="btn btn-primary">Submit</button>-->
        <!--                    </form>-->
        <!--                </div>-->
        <!--            -->
        <!--            </div>-->
        <!--        -->
        <!--        </div>-->
    </div>

</template>

<script>
    import Logo from '~/components/Logo.vue'
    import Swal from 'sweetalert2'
    import $ from 'jquery'
    import Navbar from '../components/Navbar'
    import VueCountdown from '@chenfengyuan/vue-countdown'
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        components: {
            Navbar,
            Logo,
            VueCountdown,
            FlipCountdown
        },
        data() {
            let now = new Date();
            let event = new Date(2020, 10, 9);
            return {
                message: '',
                name: '',
                email: '',
                counter: -1,
                intersectionOptions: {threshold: 0.5},
                time: event - now,
                options: {
                    licenseKey: 'dddddddd-dddddddd-dddddddd-dddddddd',
                    responsiveHeight: 480
                    // anchors: ['home','welcome','hotels','events','contact']
                },
            }
        },
        mounted() {
            // window.addEventListener('resize', () => {
            //     if (window.innerHeight < 480) {
            //         this.$refs.fullpage.api.destroy('all');
            //         console.log('destroying')
            //     }
            // });
            $.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stat-counter-frgvt/service/stat-counter/incoming_webhook/stat-increment-and-respond").then(response => {
                // console.log(response)
                this.counter = parseInt(response.$numberLong)
            })
        },
        head() {
            return {
                title: 'Home' + process.env.pageTitleTail,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: process.env.metaDescription
                    }
                ],
                link: [
                    {
                        rel: 'stylesheet',
                        href: '//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css'
                    }
                ]
            }
        },
        methods: {
            submitContactForm: function submitContactForm(token) {
                $.post('/api/contact-form', {
                    message: this.message,
                    name: this.name,
                    email: this.email,
                    token: token
                }).done(data => {
                    Swal.fire({
                        title: 'Message Sent!',
                        type: 'success',
                    })
                }).fail(error => {
                    this.$sentry.captureException(error);
                    Swal.fire({
                        title: 'There was an error!',
                        type: 'error',
                        text: `Code: ${error.status}, Error: ${error.statusText}`
                    })
                })
            },
            recaptcha: function recaptcha() {
                if (!this.message || !this.name || !this.email) {
                    Swal.fire({
                        title: 'Please fill out all fields!',
                        type: 'error',
                        text: 'To ensure your contact request is received and processed, please fill our your message, name, and email.'
                    })
                } else {
                    //console.log(this.$recaptcha);
                    this.$recaptcha('homepage').then((token) => {
                        //console.log(token);
                        this.submitContactForm(token)
                    })
                }
            },
            toggleNavbar: function toggleNavbar({going, direction}) {
                if(this.$refs.navbar){
                    this.$refs.navbar.toggleNavbar({going: going, direction: direction});
                }

            },
            toggleArrowDirTop: function toggleArrowDir({going, direction}) {
                if(this.$refs.navbar){
                    this.$refs.navbar.toggleArrowDir({going: going, direction: direction}, 'top');
                }
            },
            toggleArrowDirEnd: function toggleArrowDir({going, direction}) {
                if(this.$refs.navbar) {
                    this.$refs.navbar.toggleArrowDir({going: going, direction: direction}, 'end');
                }
            },
            toggleBothTop: function toggleBoth({going, direction}) {
                if(this.$refs.navbar){
                    this.$refs.navbar.toggleNavbar({going: going, direction: direction});
                    this.$refs.navbar.toggleArrowDir({going: going, direction: direction}, 'top');
                }
            },
            toggleBothEnd: function toggleBoth({going, direction}) {
                if(this.$refs.navbar){
                    this.$refs.navbar.toggleNavbar({going: going, direction: direction});
                    this.$refs.navbar.toggleArrowDir({going: going, direction: direction}, 'end');
                }
            },
            navTo: function navTo(location) {
                this.$refs.fullpage.api.moveTo(location);
            },
            navDir: function navDir(direction) {
                if (direction === 'up') {
                    this.$refs.fullpage.api.moveSectionUp();
                } else {
                    this.$refs.fullpage.api.moveSectionDown();
                }
            }
        }
    }
</script>
<style scoped>

</style>
