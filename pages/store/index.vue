<template>
    <div>
        <Navbar light-back backMode="/"></Navbar>

        <div class="container" style="padding-top: 75px; min-height: 100vh">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Store</h2>
                </div>
                <div class="col-lg-12">
                    <div v-if="$auth.loggedIn">
                        <div class="store-item-flex-grid">
                            <div class="card" style="width: 20rem; margin: 10px;" v-for="item in items">
                                <img :src="item.image" class="card-img-top" alt="...">
                                <div class="card-body d-flex flex-column">
                                    <div style="margin-top: auto;">
                                        <h5 class="card-title">{{item.name}}</h5>
                                        <p class="card-text">{{item.description}}</p>
                                        <p><b>${{item.price}}</b></p>
                                        <button @click="addToCart(item)" class="btn btn-primary" style="width: 100%">Add to cart</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        To serve you better, we require all customers to create an account before shopping.<br><br>
                        <button class="btn btn-primary" @click="loginWithAuth0">Create one now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Navbar from "../../components/Navbar";

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
                items: [
                    // {
                    //     name: 'Event Ticket',
                    //     description: 'Ticket for entry into main reunion event. Lots of fun. Please spend money.',
                    //     image: 'https://developer.apple.com/wwdc19/images/wwdc19-og-twitter.jpg',
                    //     price: 40
                    // },
                    // {
                    //     name: 'T-Shirt',
                    //     description: 'cotton shirt',
                    //     image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                    //     price: 24.99
                    // },
                    // {
                    //     name: 'T-Shirt',
                    //     description: 'cotton shirt',
                    //     image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                    //     price: 24
                    // },
                    // {
                    //     name: 'T-Shirt',
                    //     description: 'cotton shirt',
                    //     image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                    //     price: 24
                    // },
                    // {
                    //     name: 'T-Shirt',
                    //     description: 'cotton shirt',
                    //     image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                    //     price: 24
                    // },
                    // {
                    //     name: 'T-Shirt',
                    //     description: 'cotton shirt',
                    //     image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                    //     price: 24
                    // }
                ]
            }
        },
        async beforeMount() {
            const token = await this.$auth.getToken('auth0');
            const res = await this.$axios.get(process.env.apiBaseURL + '/api/allProducts', {
                headers: {
                    Authorization: token    // send the access token through the 'Authorization' header
                }
            });
            this.items = res.data;
        },
        methods: {
            addToCart(item) { // TODO: authenticate products by storing cart item using an ID instead of whole object and signing the ID
                this.$store.commit('cart/add', item)
            },
            removeFromCart(item) {
                this.$store.commit('cart/remove', item)
            },
            async buy() {
                const token = await this.$auth.getToken('auth0');
                console.log(token);

                let cartParsed = {};
                for (let i = 0; i < this.$store.state.cart.list.length; i++) {
                    console.log(i);
                    if (this.$store.state.cart.list[i]['_id'] in cartParsed) {
                        cartParsed[this.$store.state.cart.list[i]['_id']]++;
                    } else {
                        cartParsed[this.$store.state.cart.list[i]['_id']] = 1
                    }
                }
                console.log(cartParsed);
                // Use Axios to make a call to the API
                this.$axios.post(process.env.apiBaseURL + "/api/createCheckoutSession", {
                    headers: {
                        Authorization: token    // send the access token through the 'Authorization' header
                    },
                    data: {
                        cart: cartParsed
                    }
                }).then((res) => {
                    console.log(res);

                    this.$stripe.import().redirectToCheckout({
                        sessionId: res.data.id
                    }).then((res) => {
                        console.log(res);
                    })
                });
            },
            loginWithAuth0() {
                this.$auth.loginWith('auth0');
            }
        }
    }
</script>

<style scoped>

</style>