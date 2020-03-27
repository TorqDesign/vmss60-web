<template>
    <div>
        <Navbar light-back backMode="/"></Navbar>

        <div class="container" style="padding-top: 75px; min-height: 100vh">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Tickets and Merchandise</h2>
                    <strong>Due to the ongoing COVID-19 pandemic, we have temporarily disabled our online store. We apologize for the inconvenience.</strong><br><br>
                    <strong>Please note that we will be continuously adding items to this store.</strong>
                    <p>Each time a new item is added, we will send a link to the Vincent Massey Alumni & Friends Facebook page.</p>
                </div>
                <div class="col-lg-12">
                    <div v-if="$auth.loggedIn">
                        <div v-if="error">
                            <p v-html="error"></p>
                        </div>
                        <div class="store-item-flex-grid">
                            <div class="card" style="width: 20rem; margin: 10px;" v-for="item in items">
                                <img :src="item.image" class="card-img-top" alt="...">
                                <div class="card-body d-flex flex-column">
                                    <div style="margin-top: auto;">
                                        <h5 class="card-title">{{item.name}}</h5>
                                        <p class="card-text">{{item.description}}</p>
                                        <p><b>${{item.customerPrice.toFixed(2) + " " + item.priceUnit}}</b></p>
                                        <button @click="addToCart(item)" class="btn btn-primary" style="width: 100%">Add to cart</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h4>Reunion Tickets</h4>
                        <b>We strongly recommended reunion tickets to be purchased online as this gives us a better indication of the number of people who will be in attendance.</b> Please note that tickets for the golf outing and dinner banquet will be available for online purchase next week.
                        <br>
                        <br>
                        <ol>
                            <li>Tickets can be purchased online <button class="btn btn-primary" @click="loginWithAuth0">Please click here to set up an account or login</button></li>
                            <li>In person registration (Monday, Oct 5th / 2020 - Massey School office 5pm-8pm). <b>Limited tickets will be available.</b></li>
                            <li>In person late registration (Friday, Oct 9th / 2020 - Massey Library 4:00 pm onward). <b>Limited tickets will be available.</b></li>
                        </ol>
                        If you have any questions, please email us at <a href="mailto:masseymustangs2020@gmail.com" class="expand-link">masseymustangs2020@gmail.com</a>.
                        <br>
                        <br>
                        <h4>Merchandise</h4>
                        Stay tuned as we develop new items for sale!
<!--                        There are also three different options to purchase merchandise:-->
<!--                        <h6>On this website for pickup at event</h6>-->
<!--                        <p>If you would like to purchase merchandise for pickup at the event, you can do so in the store on this website. To serve you better, we require all customers to create an account before shopping, so please click the button below.</p>-->
<!--                        <button class="btn btn-primary" @click="loginWithAuth0">Login or Sign up</button>-->
<!--                        <h6>Purchase for delivery now</h6>-->
<!--                        <p>If you would like to purchase merchandise for delivery to you now, we will have a Entripy store for you available April 30th. Please keep an eye out for announcements and check back frequently!</p>-->
<!--                        <h6>Buy at the event</h6>-->
<!--                        <p>There will be a limited amount of merchandise available for purchase at the event. Prices may vary.</p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Navbar from "../../components/Navbar";
    import Swal from 'sweetalert2';
    
    export default {
        name: "index",
        components: {Navbar},
        head() {
            return {
                title: 'Store' + process.env.pageTitleTail,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: process.env.metaDescription
                    }
                ]
            }
        },
        data() {
            return {
                items: [],
                error: ''
            }
        },
        async asyncData(context) {
            const token = await context.$auth.getToken('auth0');
            //console.log(token);
            try {
                if (token) {
                    const res = await context.$axios.get(process.env.apiBaseURL + '/allProducts', {
                        headers: {
                            Authorization: token    // send the access token through the 'Authorization' header
                        }
                    });
                    // this.items = res.data;
                    return {items: res.data}
                }
            } catch (e) {
                context.$sentry.captureException(e);
                return {error: context.app.$vmss60.generateErrorString(context.route, 'Unable to retrieve store items.', 'store/index/retrieveItems')}
            }
        },
        methods: {
            addToCart(item) {
                this.$store.commit('cart/add', item);
                Swal.fire({
                    type: 'success',
                    title: 'Success',
                    text: item.name + ' has been added to your cart!'
                })
            },
            removeFromCart(item) {
                this.$store.commit('cart/remove', item)
            },
            loginWithAuth0() {
                // console.log(this.$auth.$storage.setUniversal());
                this.$auth.$storage.setUniversal('redirect', '/store/');
                this.$auth.loginWith('auth0');
            }
        }
    }
</script>

<style scoped>

</style>