<template>
    <div class="">
        <!--        <Navbar></Navbar>-->
        
        <div class="hero-background">
            <div class="hero">
                <h1>VMSS 60th Reunion</h1>
                <h6>October 9th &amp; 10th / 2020</h6>
                <p>(To be held at Vincent Massey S.S. &amp; Caboto Club)</p>
                <h5>TEMPORARY DEVELOPMENT NOTE: Best viewed on a computer</h5>
            </div>
        </div>
        <div class="full-page" id="full-page-1">
            <div id="full-page-1-text">
                <h1>Welcoming <span class="emphasis-span">60 years</span> of alumni back</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh venenatis
                    cras sed felis eget velit aliquet.</p>
            </div>
        </div><!--
        
        <div class="full-page" id="full-page-2">
            <div id="full-page-2-text">
                <h1>Hotels.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh venenatis
                    cras sed felis eget velit aliquet.</p>
            </div>
        </div>-->

        <div class="full-page" id="full-page-3">
            <img src="../assets/images/vmss604-01.svg" alt="tes" style="z-index: 1; height: 100vh; position: absolute">
            <img src="../assets/images/edin.png" alt="uhh" style="z-index: 2; height: 90vh; position: absolute; top: 5%; left: 2%;">
            <div id="full-page-3-text">
                <h1>Events.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nibh venenatis
                    cras sed felis eget velit aliquet.</p>
                <nuxt-link to="/events" class="section-action-button">Check them out →</nuxt-link>
            </div>
        </div>
        
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

    export default {
        components: {
            Navbar,
            Logo,
        },
        data() {
            return {
                message: '',
                name: '',
                email: ''
            }
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
            }
        }
    }
</script>
<style>
</style>
