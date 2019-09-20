<template>
  <div class="">
    <div class="hero-background">
      <div class="hero">
        <h1>VMSS 60th Reunion</h1>
        <h6>April 25th - 26th, 2020 @ Vincent Massey S.S.</h6>
      </div>
      <!--Content before waves-->
      <div class="inner-header flex">
      </div>
      
      <!--Waves Container-->
      <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(186,223,219,0.7)"/>
            <use fill="rgba(0,114,255,0.5)" x="48" xlink:href="#gentle-wave" y="3"/>
            <use fill="rgba(151,150,240,0.3)" x="48" xlink:href="#gentle-wave" y="5"/>
            <use fill="rgba(167,215,197,0.9)" x="48" xlink:href="#gentle-wave" y="7"/>
          </g>
        </svg>
      </div>
      <div style="transform: rotate(180deg)">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="28" y="0" fill="rgba(248,169,120,0.5)"/>
            <use xlink:href="#gentle-wave" x="28" y="3" fill="rgba(186,223,219,0.7)"/>
            <use xlink:href="#gentle-wave" x="28" y="5" fill="rgba(252,249,0,0.3)"/>
            <use fill="rgba(167,215,197,0.9)" x="28" xlink:href="#gentle-wave" y="7"/>
          </g>
        </svg>
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
          <h2>Schedule</h2>
          <div class="schedule-box">
            <h6>Cup Stacking</h6>
            <p>9:00pm to 10:00pm</p>
          </div>
          <div class="schedule-box">
            <h6>Cup Stacking</h6>
            <p>9:00pm to 10:00pm</p>
          </div>
          <div class="schedule-box">
            <h6>Cup Stacking</h6>
            <p>9:00pm to 10:00pm</p>
          </div>
          <div class="schedule-box">
            <h6>Cup Stacking</h6>
            <p>9:00pm to 10:00pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
    import Logo from '~/components/Logo.vue'

    export default {
        components: {
            Logo
        }
    }
</script>

<style>
</style>
