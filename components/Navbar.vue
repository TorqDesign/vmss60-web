<template>
    <div>
        <div :class="'vmss60-navbar-icon mobile '  + getNavAddClass()" @click="toggleMobileNavbar()"></div>
        <!--        <div class="navbar-icon mobile black" @click="toggleMobileNavbar()"></div>-->
        <div class="vmss60-navbar mobile">
            <div class="vmss60-navbar-item-container d-none d-lg-flex">
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
            <div :class="'vmss60-navbar-item-container d-block d-lg-none' + (mobileNavOpen ? ' open' : '')">
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
    </div>

</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                mobileNavOpen: false,
                lightBack: true, // First toggle is on page load, so technically the lightBack is set to false
            }
        },
        methods: {
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