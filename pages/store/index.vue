<template>
    <div>
        <div v-if="$auth.loggedIn">
            <button @click="buy">Buy</button>
        </div>
        <div class="container">
            <div style="display: flex;"><button v-for="cartItem in $store.state.cart.list" @click="removeFromCart(item)" class="btn btn-secondary" style="margin-right: 10px">{{cartItem.name}}</button></div>
            <div class="store-item-flex-grid">
                <div class="card" style="width: 20rem; margin: 10px;" v-for="item in items">
                    <img :src="item.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <p><b>${{item.price}}</b></p>
                        <button @click="addToCart(item)" class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: "index",
        data() {
            return {
                items: [
                    {
                        name: 'T-Shirt',
                        description: 'cotton shirt',
                        image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                        price: '24.00'
                    },
                    {
                        name: 'T-Shirt',
                        description: 'cotton shirt',
                        image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                        price: '24.00'
                    },
                    {
                        name: 'T-Shirt',
                        description: 'cotton shirt',
                        image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                        price: '24.00'
                    },
                    {
                        name: 'T-Shirt',
                        description: 'cotton shirt',
                        image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                        price: '24.00'
                    },
                    {
                        name: 'T-Shirt',
                        description: 'cotton shirt',
                        image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                        price: '24.00'
                    },
                    {
                        name: 'T-Shirt',
                        description: 'cotton shirt',
                        image: 'https://bananarepublic.gap.com/webcontent/0014/248/421/cn14248421.jpg',
                        price: '24.00'
                    }
                ]
            }
        },
        methods: {
            addToCart(item) {
                this.$store.commit('cart/add', item)
            },
            removeFromCart(item) {
                this.$store.commit('cart/remove', item)
            },
            async buy() {
                const token = await this.$auth.getToken('auth0');
                console.log(token);

                // Use Axios to make a call to the API
                this.$axios.get("http://localhost:3005/createCheckoutSession", {
                    headers: {
                        Authorization: token    // send the access token through the 'Authorization' header
                    }
                }).then((res) =>{
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