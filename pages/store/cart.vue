<template>
    <div>
        <Navbar light-back back-mode="/store" back-name="Back to Store"></Navbar>
        <div class="container" id="checkout" style="margin-top: 75px">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Your Cart</h2>
                    <p>If you have any questions or concerns, or need assistance, please email us at <a class="expand-link" href="mailto:masseymustangs2020@gmail.com?subject=Store purchasing assistance">masseymustangs2020@gmail.com</a></p>
                </div>
                <div class="col-lg-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody v-if="$store.state.cart.list.length > 0">
                            <tr v-for="cartItem in $store.state.cart.list">
                                <td>
                                    {{cartItem.name}}
                                </td>
                                <td>
                                    {{cartItem.description}}
                                </td>
                                <td>
                                    <strong>${{cartItem.customerPrice}}</strong>
                                </td>
                                <td>
                                    <div style="text-align: center;">
                                        <button class="button-link" @click="removeFromCart(item)">
                                            &times;
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                        <tbody v-else>
                            <tr class="w-100">
                                <td colspan="4" class="d-flex align-items-center"><div>Your cart is empty.</div><nuxt-link class="btn btn-primary float-right ml-3" to="/store">Shop Now</nuxt-link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-12">
                    <hr>
                    <h6 class="text-right">NOTE: After you complete checkout and payment, you will be taken to your account dashboard. You MUST configure your items by clicking the yellow 'Configure Now' button.</h6>
                    <h6 class="text-right">Your total: <strong>${{getCartTotal()}}</strong></h6>
                </div>
                <div class="col-lg-12">
                    <button class="btn btn-success float-right" @click="buy" :disabled="$store.state.cart.list.length < 1">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../../components/Navbar';
    import Swal from 'sweetalert2';
    export default {
        name: "checkout",
        components: {Navbar},
        middleware: [
            'auth'
        ],
        head() {
            return {
                title: 'Checkout' + process.env.pageTitleTail,
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
        methods: {
            removeFromCart(item) {
                this.$store.commit('cart/remove', item)
            },
            getCartTotal(){
                let total = 0;
                for(let cartItem of this.$store.state.cart.list) total+=cartItem.customerPrice;
                return Math.round(total*100)/100;
            },
            async buy() {
                const token = await this.$auth.getToken('auth0');
                //console.log(token);

                let cartParsed = {};
                for (let i = 0; i < this.$store.state.cart.list.length; i++) {
                    //console.log(i);
                    if (this.$store.state.cart.list[i]['_id'] in cartParsed) {
                        cartParsed[this.$store.state.cart.list[i]['_id']]++;
                    } else {
                        cartParsed[this.$store.state.cart.list[i]['_id']] = 1
                    }
                }
                //console.log(cartParsed);
                // Use Axios to make a call to the API
                this.$axios.post(process.env.apiBaseURL + "/createCheckoutSession", {
                    cart: cartParsed
                }).then((res) => {
                    this.$store.commit('cart/resetState');
                    //console.log(res);
                    this.$stripe.import().redirectToCheckout({
                        sessionId: res.data.id
                    }).then((res) => {
                        //console.log(res);
                    }).catch((err) => {
                        this.$sentry.captureException(err);
                        Swal.fire({
                            type: 'error',
                            title: 'Error!',
                            html: this.$vmss60.generateErrorString(this.$route, 'Unable to redirect to checkout.', 'store/index/redirectToCheckout')
                        })
                    });
                }).catch((err) => {
                    this.$sentry.captureException(err);
                    Swal.fire({
                        type: 'error',
                        title: 'Error!',
                        html: this.$vmss60.generateErrorString(this.$route, 'Unable to create a checkout session.', 'store/cart/createCheckoutSession')
                    });
                });

            }
        }
    }
</script>

<style scoped>

</style>