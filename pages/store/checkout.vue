<template>
    <div>
        <Navbar light-back back-mode="/store" back-name="Back to Store"></Navbar>
        <div class="container" id="checkout" style="margin-top: 75px">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Your Cart</h2>
                    <p>If you have any questions or concerns, or need assistance, please email us at <a class="expand-link" href="mailto:masseymustangs2020@gmail.com?subject=Hotel book assistance">masseymustangs2020@gmail.com</a></p>
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
                                    <strong>${{cartItem.price}}</strong>
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
                    <button class="btn btn-success float-right" @click="buy" :disabled="$store.state.cart.list.length < 1">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../../components/Navbar';
    export default {
        name: "checkout",
        components: {Navbar},
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
                this.$axios.post("http://localhost:3005/createCheckoutSession", {
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

            }
        }
    }
</script>

<style scoped>

</style>