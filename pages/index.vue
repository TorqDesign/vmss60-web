<template>
    <div id="main">
        <!--        <Navbar></Navbar>-->
        <div :class="'navbar-icon mobile '  + getNavAddClass()" @click="toggleMobileNavbar()"></div>
        <!--        <div class="navbar-icon mobile black" @click="toggleMobileNavbar()"></div>-->
        <div class="navbar mobile">
            <div class="navbar-item-container d-none d-md-flex">
                <nuxt-link to="#main" :class="'navbar-item ' + getNavAddClass() + ' first'">
                    VMSS60
                </nuxt-link>
                <div class="navbar-line-container">
                    <div :class="'navbar-line ' + getNavAddClass()"></div>
                </div>
                <nuxt-link to="#full-page-2" :class="'navbar-item ' + getNavAddClass()">
                    Hotels
                </nuxt-link>
                <div class="navbar-line-container">
                    <div :class="'navbar-line ' + getNavAddClass()"></div>
                </div>
                <nuxt-link to="#full-page-3" :class="'navbar-item ' + getNavAddClass()">
                    Events
                </nuxt-link>
                <div class="navbar-line-container">
                    <div :class="'navbar-line ' + getNavAddClass()"></div>
                </div>
                <nuxt-link to="#full-page-4" :class="'navbar-item ' + getNavAddClass()">
                    Contact
                </nuxt-link>
            </div>
            <div :class="'navbar-item-container d-block d-md-none' + (mobileNavOpen ? ' open' : '')">
                <ul>
                    <li>
                        <nuxt-link to="#main" class="navbar-item mobile">
                            VMSS60
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#full-page-2" class="navbar-item mobile">
                            Hotels
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#full-page-3" class="navbar-item mobile">
                            Events
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#full-page-4" class="navbar-item mobile">
                            Contact
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="'navbar-overlay' + (mobileNavOpen ? ' open' : '')"></div>
        <full-page ref="fullpage" id="fullpage" :options="options">
            <div class="hero-background full-page section fp-auto-height">
                <div class="hero">
                    <h1>VMSS 60th Reunion</h1>
                    <h6>October 9th &amp; 10th / 2020</h6>
                    <p>(To be held at Vincent Massey S.S. &amp; Caboto Club)</p>
                    <p>Page views so far: {{this.counter}}</p>
                    <countdown :time="this.time" tag="p">
                        <template slot-scope="props">Countdow: {{ props.days }} days, {{ props.hours }} hours, {{
                            props.minutes }} minutes, {{ props.seconds }} seconds.
                        </template>
                    </countdown>
                    <h5>TEMPORARY DEVELOPMENT NOTE: Best viewed on a computer</h5>
                </div>
            </div>
            <div class="full-page section fp-auto-height" id="full-page-1">
                <div id="full-page-1-text">
                    <h1>Welcoming <span class="emphasis-span">60 years</span> of alumni back</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh
                        venenatis
                        cras sed felis eget velit aliquet.</p>
                </div>
            </div>
            
            <div class="full-page section fp-auto-height" id="full-page-2"
                 v-waypoint="{ active: true, callback: toggleNavbar, options: intersectionOptions }">
                <img src="../assets/images/vmss60-hotelArtboard1.png" alt="blob" style="">
                <div id="full-page-2-text">
                    <h1>Hotels.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh
                        venenatis
                        cras sed felis eget velit aliquet.</p>
                    <nuxt-link to="/hotels" class="section-action-button">Check them out →</nuxt-link>
                </div>
            </div>
            
            <div class="full-page section fp-auto-height" id="full-page-3">
                <img src="../assets/images/bigglob.svg" alt="tes" id="full-page-3-back">
                <img src="../assets/images/edin.png" alt="uhh" id="full-page-3-front">
                <div id="full-page-3-text">
                    <h1>Events.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh
                        venenatis
                        cras sed felis eget velit aliquet.</p>
                    <nuxt-link to="/events" class="section-action-button">Check them out →</nuxt-link>
                </div>
            </div>
            
            <div class="full-page section fp-auto-height" id="full-page-4"
                 v-waypoint="{ active: true, callback: toggleNavbar, options: intersectionOptions }">
                <div id="full-page-4-text">
                    <h1>Questions?</h1>
                    <p>Feel free to use the contact form below or email <a
                            href="mailto:masseymustangs2020@gmail.com"
                            class="expand-link">masseymustangs2020@gmail.com</a>.
                    </p>
                    <form id="contact-form" v-on:submit.prevent="recaptcha">
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
                            <a class="expand-link" href="https://policies.google.com/terms">Terms of Service</a> apply.
                        </p>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    
                    </form>
                </div>
                <div class="vmss60-footer">
                    <div class="quarter-circle-bottom-right">
                    </div>
                    <div class="vmss60-footer vmss60-footer-text">
                        <p>Copyright &copy; 2020 Vincent Massey Secondary School.<br>Design by <a class="expand-link"
                                                                                                  href="https://davidhui.ca"
                                                                                                  target="_blank">David
                            Hui</a> and <a class="expand-link" href="https://jamesxu.ca" target="_blank">James Xu</a>
                        </p>
                    </div>
                </div>
            
            </div>
        </full-page>
        
        <!--        <div id="mc_embed_signup">-->
        <!--            <form action="https://gmail.us20.list-manage.com/subscribe/post?u=c259260007eff16ec9e630d39&amp;id=7fcb56d7d3"-->
        <!--                  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"-->
        <!--                  class="validate" target="_blank" novalidate>-->
        <!--                <div id="mc_embed_signup_scroll">-->
        <!--                    <label for="mce-EMAIL">Our site is constantly being updated, subscribe for updates!</label>-->
        <!--                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL"-->
        <!--                           placeholder="Email Address" required>-->
        <!--                    &lt;!&ndash; real people should not fill this in and expect good things - do not remove this or risk form bot signups&ndash;&gt;-->
        <!--                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"-->
        <!--                                                                                              name="b_c259260007eff16ec9e630d39_7fcb56d7d3"-->
        <!--                                                                                              tabindex="-1"-->
        <!--                                                                                              value=""></div>-->
        <!--                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe"-->
        <!--                                              id="mc-embedded-subscribe" class="button"></div>-->
        <!--                </div>-->
        <!--            </form>-->
        <!--        </div>-->
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
    import axios from '@nuxtjs/axios'
    import Navbar from '../components/Navbar'
    import VueCountdown from '@chenfengyuan/vue-countdown'

    export default {
        components: {
            Navbar,
            Logo,
            VueCountdown
        },
        data() {
            let now = new Date();
            let event = new Date(2020, 10, 9);
            return {
                message: '',
                name: '',
                email: '',
                counter: -1,
                intersectionOptions: {threshold: 0.95},
                mobileNavOpen: false,
                lightBack: false, // First toggle is on page load, so technically the lightBack is set to false
                time: event - now,
                options: {
                    licenseKey: 'dddddddd-dddddddd-dddddddd-dddddddd',
                }
            }
        },
        mounted() {
            // this.$axios.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stat-counter-frgvt/service/stat-counter/incoming_webhook/stat-increment-and-respond").then(response => {
            //     console.log(response)
            //     this.counter = parseInt(response.data.$numberLong)
            // })
        },
        methods: {
            submitContactForm: function submitContactForm(token) {
                this.$axios.post('/contact-form', {
                    message: this.message,
                    name: this.name,
                    email: this.email,
                    token: token
                }).then(data => {
                    Swal.fire({
                        title: 'Message Sent!',
                        type: 'success',
                    })
                }).catch(error => {
                    console.log(error);
                    Swal.fire({
                        title: 'There was an error!',
                        type: 'error',
                        text: error
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
                    this.$recaptcha('homepage').then((token) => {
                        console.log(token);
                        this.submitContactForm(token)
                    })
                }
            },
            toggleNavbar: function toggleNavbar() {
                this.lightBack = !this.lightBack;
            },
            getNavAddClass: function getNavAddClass() {
                return this.mobileNavOpen ? "" : this.lightBack ? "black" : "";
            },
            toggleMobileNavbar: function toggleMobileNavbar() {
                this.mobileNavOpen = !this.mobileNavOpen;
            }
        }
    }
</script>
<style scoped>

</style>
