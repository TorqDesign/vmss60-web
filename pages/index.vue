<template>
  <div class="">
    <div class="hero-background">
      <div class="hero">
        <h1>VMSS 60th Reunion</h1>
        <h6>October 9th & 10th / 2020</h6>
        <p>(To be held at Vincent Massey S.S. & Caboto Club)</p>
        <!-- Begin Mailchimp Signup Form -->
        <!-- Begin Mailchimp Signup Form -->
<!--        <style type="text/css">-->
<!--          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}-->
<!--          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.-->
<!--             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */-->
<!--        </style>-->
        <div id="mc_embed_signup">
          <form action="https://gmail.us20.list-manage.com/subscribe/post?u=c259260007eff16ec9e630d39&amp;id=7fcb56d7d3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Our site is constantly being updated, subscribe for updates!</label>
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c259260007eff16ec9e630d39_7fcb56d7d3" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
          </form>
        </div>
  
        <!--End mc_embed_signup-->
  
        <!--End mc_embed_signup-->
      </div>
      <!--Content before waves-->
      <div class="inner-header flex">
      </div>
      <div class="filter"></div>
      <div class="slideshow">
        <div class="images">
        </div>
      </div>
      <!--<div class="video-wrapper">

        <video autoplay muted loop id="myVideo">
          <source src="~/assets/bgvid.mp4" type="video/mp4">
        </video>
      </div>-->

    </div>
    <div class="container" id="about">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-10">
          <h2>Our History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Porttitor lacus
            luctus accumsan tortor posuere ac. Eget nunc lobortis mattis aliquam faucibus. Diam vulputate ut pharetra
            sit
            amet aliquam id diam.</p>
        </div>
      </div>
    </div>
    <div class="container" id="schedule">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-10">
          <h2>Events</h2>
          <div class="schedule-box">
            <h6>Saturday Banquet</h6>
            <p>Fashion show of the decades featuring Massey alumni!</p>
          </div>
          <div class="schedule-box">
            <h6>Car and Antiques Show</h6>
            <p>Come see cars and antiques!</p>
          </div>
          <div class="schedule-box">
            <h6>Battle of the Bands</h6>
            <p>Band names to be announced!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="contact">
      <div class="row-tb-margin row align-items-center justify-content-center">
        <div class="col-md-10">
          <h2>Contact</h2>
          <p>Have a question? Feel free to use the contact form below or email <a href="mailto:hello@masseyhacks.ca"
                                                                                  class="expand-link">hello@masseyhacks.ca</a>.
          </p>
          <form id="contact-form" v-on:submit.prevent="submitContactForm">
            <div class="form-group">
              <label for="nameInput">Name</label>
              <input type="text" class="form-control" id="nameInput" placeholder="John Smith" v-model="name">
            </div>
            <div class="form-group">
              <label for="emailInput">Email address</label>
              <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      
      </div>
    
    </div>
  </div>

</template>

<script>
    import Logo from '~/components/Logo.vue'
    import Swal from 'sweetalert2'
    import axios from '@nuxtjs/axios'

    export default {
        components: {
            Logo
        },
        data() {
            return {
                message: '',
                name: '',
                email: ''
            }
        },
        methods: {
            submitContactForm: function submitContactForm() {
                this.$axios.post('/email/contact-form', {
                    message: this.message,
                    name: this.name,
                    email: this.email
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
            }
        }
    }
</script>

<style>
</style>
