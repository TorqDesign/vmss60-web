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
                <div class="vmss60-navbar-line-container"><div :class="'vmss60-navbar-line ' + getNavAddClass()"></div></div>
                <nuxt-link :class="'vmss60-navbar-item ' + getNavAddClass()" target="_blank" to="/store">
                    Store
                </nuxt-link>
                <div class="vmss60-navbar-line-container"><div :class="'vmss60-navbar-line ' + getNavAddClass()"></div></div>
                <a :class="'vmss60-navbar-item ' + getNavAddClass()" target="_blank" href="https://donorbox.org/vmss60">
                    Donate
                </a>
            </div>
            <div class="vmss60-navbar-item-container d-none d-lg-flex" v-else>
                <button :class="'vmss60-navbar-item ' + getNavAddClass() + ' first'" @click="goBack()">
                    {{backName}}
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
                    <li>
                        <nuxt-link class="vmss60-navbar-item mobile" to="/store">
                            Store
                        </nuxt-link>
                    </li>
                    <li>
                        <a class="vmss60-navbar-item mobile" target="_blank" href="https://donorbox.org/vmss60">
                            Donate
                        </a>
                    </li>
                    <li>
                        <nuxt-link class="vmss60-navbar-item mobile" to="/store/cart">
                            Shopping Cart ({{$store.state.cart.list.length}} items)
                        </nuxt-link>
                    </li>
                    <li v-if="$auth.loggedIn">
                    	<nuxt-link class="vmss60-navbar-item mobile" to="/account">
                    		Account
                    	</nuxt-link>
                    </li>
                    <li v-if="$auth.loggedIn">
                        <button class="vmss60-navbar-item mobile" @click="logoutWithAuth0()">
                            Logout {{$auth.user.nickname}}
                        </button>
                    </li>
                    <li v-else>
                        <button class="vmss60-navbar-item mobile" @click="loginWithAuth0()">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="'navbar-overlay' + (mobileNavOpen ? ' open' : '')"></div>
        <div :class="'page-move-arrow ' + getNavAddClass() + ' up'" @click="$emit('navDir', 'up')" v-if="arrow && upArrow"></div>
        <div :class="'page-move-arrow ' + getNavAddClass()" @click="$emit('navDir', 'down')" v-if="arrow && downArrow"></div>


        <!-- Click outside wrapper -->
        <div v-click-outside="onClickOutside">
            <!-- Shopping -->
            <div :class="'shopping-cart-icon-wrapper d-none d-lg-flex ' + getNavAddClass()" @click="toggleShoppingCartMenu">
                <div class="num-items-ind">
                    {{$store.state.cart.list.length}}
                </div>
            </div>
            <div ref="shoppingCartMenu" :class="'right-menu shopping-cart-menu ' + getShoppingCartMenuClass()">
                <div v-if="$store.state.cart.list.length > 0">
                    <ul class="m-0 p-0 list-unstyled">
                        <li class="mt-2 mb-2"v-for="cartItem in $store.state.cart.list">
                            <div class="row">
                                <div class="col-12">
                                    {{cartItem.name}} - <strong>${{cartItem.price}}</strong>
                                    <div class="float-right" style="text-align: center; margin-left: 1em;">
                                        <button class="button-link" @click="removeFromCart(item)">
                                            &times;
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li>
                            <hr>
                            <p class="text-right">Your total: <strong>${{getCartTotal()}}</strong></p>
                        </li>
                        <li>
                            <nuxt-link class="btn btn-primary float-right" to="/store/cart">Checkout</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    Your cart is empty.<br><br>
                    <nuxt-link class="btn btn-primary float-right" to="/store">Shop Now</nuxt-link>
                </div>
            </div>

            <!-- Account -->
            <div :class="'account-icon-wrapper d-none d-lg-flex ' + getNavAddClass()" @click="toggleAccountMenu"></div>
            <div ref="accountMenu" :class="'right-menu account-menu ' + getAccountMenuClass()">
                <ul class="m-0 p-0 list-unstyled">
                    <li v-if="$auth.loggedIn">Hello {{$auth.user.nickname}}</li>
                    <li v-if="$auth.loggedIn"><nuxt-link class="button-link" to="/account">Account Page</nuxt-link></li>
                    <li v-if="$auth.loggedIn"><button class="button-link" @click="logoutWithAuth0">Log Out</button></li>
                    <li v-else>
                        <button class="button-link" @click="loginWithAuth0">Log in</button>
                    </li>
                </ul>
            </div>
        </div>


        <div :class="'page-move-arrow ' + getNavAddClass() + ' up'" @click="$emit('navDir', 'up')" v-if="arrow && upArrow"></div>
        <div :class="'page-move-arrow ' + getNavAddClass()" @click="$emit('navDir', 'down')" v-if="arrow && downArrow"></div>
    </div>

</template>

<script>
    import vClickOutside from 'v-click-outside'
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
            arrow: { // page up and down arrow
                type: Boolean,
                default: false
            },
            backMode: {
                type: String,
                default: '<'
            },
            backName: {
                type: String,
                default: 'Back to Home'
            }
        },
        directives: {
            clickOutside: vClickOutside.directive
        },
        data() {
            return {
                mobileNavOpen: false,
                pageLightBack: this.lightBack,
                upArrow: false,
                downArrow: true,
                shoppingCartMenuOpen: false,
                accountMenuOpen: false,
                menuChangeQueue: {
                    accounts: false,
                    shoppingCart: false
                }
            }
        },
        methods: {
            toggleNavbar: function ({ going, direction }) {
                if(direction !== undefined){
                    this.pageLightBack = !this.pageLightBack;
                }

            },
            onClickOutside (event) {
                //this.accountMenuOpen = this.menuChangeQueue.accounts;

                if(this.accountMenuOpen){
                    this.accountMenuOpen = false;
                }

                if(this.shoppingCartMenuOpen){
                    this.shoppingCartMenuOpen = false;
                }
                console.log("hello");

            },
            getNavAddClass: function () {
                return this.mobileNavOpen ? "" : this.pageLightBack ? "black" : "";
            },
            toggleMobileNavbar: function toggleMobileNavbar() {
                this.mobileNavOpen = !this.mobileNavOpen;
            },
            goBack: function () {
                if(this.backMode === '<'){
                    if (this.client || !this.$routerHistory || !this.$routerHistory.hasPrevious()) {
                        // probably ssr, or hasn't navigated yet.
                        this.$router.push('/');
                    }

                    this.$router.push(this.$routerHistory.previous().path);
                }
                else {
                    this.$router.push(this.backMode);
                }

            },
            toggleArrowDir: function ({ going, direction }, triggerLocation) {
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
            toggleShoppingCartMenu: function() {
                console.log("bye");
                this.accountMenuOpen = false;
                this.shoppingCartMenuOpen = !this.shoppingCartMenuOpen;
            },
            toggleAccountMenu: function() {
                this.shoppingCartMenuOpen = false;
                this.accountMenuOpen = !this.accountMenuOpen;
            },
            getShoppingCartMenuClass: function() {
                return this.shoppingCartMenuOpen ? 'open' : '';
            },
            getAccountMenuClass: function() {
                return this.accountMenuOpen ? 'open' : '';
            },
            loginWithAuth0() {
                this.$auth.loginWith('auth0');
            },
            logoutWithAuth0(e, logoutUrl = process.env.defaultLogoutRef) {
                console.log(logoutUrl);
                this.$store.commit('cart/resetState');
                this.$auth.logout();
                window.location.replace(process.env.auth0LogoutUrl + logoutUrl + '&client_id=' + process.env.auth0ClientID)
            },
            removeFromCart(item) {
                this.$store.commit('cart/remove', item)
            },
            getCartTotal(){
                let total = 0;
                for(let cartItem of this.$store.state.cart.list) total+=cartItem.price;
                return Math.round(total*100)/100;
            }
        }
    }
</script>

<style scoped>

</style>