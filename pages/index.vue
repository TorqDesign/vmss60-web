<template>
  <div class="">
    <div class="hero-background">
      <div class="hero">
        <h1>VMSS 60th Reunion</h1>
        <h6>October 9th - 10th, 2020 @ Vincent Massey S.S.</h6>
      </div>
      <!--Content before waves-->
      <div class="inner-header flex">
      </div>
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
            <button type="submit" class="btn btn-primary" style="font-size: 0.7em">Submit</button>
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
                Swal.fire('yay');
            }
        }
    }
</script>

<style>
</style>
