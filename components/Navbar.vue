<template>
    <div>
        <div :class="'vmss60-navbar-icon mobile '  + getNavAddClass()" @click="toggleMobileNavbar()" v-if="navmode === 'front'"></div>
        <div :class="'vmss60-navbar-icon-back mobile '  + getNavAddClass()" @click="goBack()" v-else></div>
        <!--        <div class="navbar-icon mobile black" @click="toggleMobileNavbar()"></div>-->
        <div class="vmss60-navbar mobile">
            <div class="vmss60-navbar-item-container d-none d-lg-flex" v-if="navmode === 'front'"> <!-- Desktop Navbar -->
                <button :class="'vmss60-navbar-item ' + getNavAddClass() + ' first'" @click="$emit('navTo','home')">
                    VMSS60
                </button>
                <div class="vmss60-navbar-line-container"><div :class="'vmss60-navbar-line ' + getNavAddClass()"></div></div>
                <button :class="'vmss60-navbar-item ' + getNavAddClass()" @click="$emit('navTo','hotels')">
                    Hotels
                </button>
                <div class="vmss60-navbar-line-container"><div :class="'vmss60-navbar-line ' + getNavAddClass()"></div></div>
                <button :class="'vmss60-navbar-item ' + getNavAddClass()" @click="$emit('navTo','events')">
                    Events
                </button>
                <div class="vmss60-navbar-line-container"><div :class="'vmss60-navbar-line ' + getNavAddClass()"></div></div>
                <button :class="'vmss60-navbar-item ' + getNavAddClass()" @click="$emit('navTo','contact')">
                    Contact
                </button>
            </div>
            <div class="vmss60-navbar-item-container d-none d-lg-flex" v-else>
                <button :class="'vmss60-navbar-item ' + getNavAddClass() + ' first'" @click="goBack()">
                    Back to Home
                </button>
            </div>
            <div :class="'vmss60-navbar-item-container d-lg-none' + (mobileNavOpen ? ' open' : '')" v-if="navmode === 'front'"> <!-- Mobile Navbar -->
                <ul>
                    <li>
                        <button class="vmss60-navbar-item mobile" @click="$emit('navTo','home')">
                            VMSS60
                        </button>
                    </li>
                    <li>
                        <button class="vmss60-navbar-item mobile" @click="$emit('navTo','hotels')">
                            Hotels
                        </button>
                    </li>
                    <li>
                        <button class="vmss60-navbar-item mobile" @click="$emit('navTo','events')">
                            Events
                        </button>
                    </li>
                    <li>
                        <button class="vmss60-navbar-item mobile" @click="$emit('navTo','contact')">
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="'navbar-overlay' + (mobileNavOpen ? ' open' : '')"></div>
        <div :class="'page-move-arrow ' + getNavAddClass() + ' up'" @click="$emit('navDir', 'up')" v-if="arrow && upArrow"></div>
        <div :class="'page-move-arrow ' + getNavAddClass()" @click="$emit('navDir', 'down')" v-if="arrow && downArrow"></div>
    </div>

</template>

<script>
    export default {
        name: "Navbar",
        props: {
            navmode: {
                type: String,
                default: 'innerpage'
            },
            lightBack: {
                type: Boolean,
                default: false
            },
            arrow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                mobileNavOpen: false,
                pageLightBack: this.lightBack,
                upArrow: false,
                downArrow: true
            }
        },
        methods: {
            toggleNavbar: function toggleNavbar({ going, direction }) {
                if(direction !== undefined){
                    this.pageLightBack = !this.pageLightBack;
                }

            },
            getNavAddClass: function getNavAddClass() {
                return this.mobileNavOpen ? "" : this.pageLightBack ? "black" : "";
            },
            toggleMobileNavbar: function toggleMobileNavbar() {
                this.mobileNavOpen = !this.mobileNavOpen;
            },
            goBack: function goBack() {
                if (this.client || !this.$routerHistory || !this.$routerHistory.hasPrevious()) {
                    // probably ssr, or hasn't navigated yet.
                    this.$router.push('/');
                }

                this.$router.push(this.$routerHistory.previous().path);
            },
            toggleArrowDir: function toggleArrowDir({ going, direction }, triggerLocation) {
                if(direction !== undefined){
                    if(triggerLocation === 'top'){
                        if(direction === this.$waypointMap.DIRECTION_BOTTOM){ // coming in from the top, that means that use is about to enter first slide
                            // disable top arrow
                            this.upArrow = false;
                        }
                        else {
                            // going out, enable top arrow
                            this.upArrow = true;
                        }
                    }
                    else {
                        // bottom of page
                        if(direction === this.$waypointMap.DIRECTION_TOP){ // coming in from the top, that means that use is about to enter last slide
                            // disable bottom arrow
                            this.downArrow = false;
                        }
                        else {
                            // going out, enable bottom arrow
                            this.downArrow = true;
                        }
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>