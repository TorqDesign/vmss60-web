<template>
    <div>
        <div v-if="$auth.loggedIn">
            <button @click="buy">Buy</button>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: "index",
        methods: {

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