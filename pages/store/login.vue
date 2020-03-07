<template>
    <div>
        <div v-if="!$auth.loggedIn" class="container" style="padding-top: 75px; min-height: 100vh">
            <h2>Please login</h2>
            <p>An account is required to access this page.</p>
            <b-button variant="primary" @click="loginWithAuth0">Log In</b-button>
        </div>
        <div v-else class="container" style="padding-top: 75px; min-height: 100vh">
            <h2>Logged In</h2>
            <p>You have successfully logged in. Please wait a moment to be redirected.<br>Not working?</p>
            <nuxt-link class="btn btn-primary" to="/">Go to Home</nuxt-link>
        </div>

<!--        <button @click="logoutWithAuth0">Log Out</button>-->
    </div>
</template>

<script>
    export default {
        name: "login.vue",
        head() {
            return {
                title: 'Login' + process.env.pageTitleTail,
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
            loginWithAuth0() {
                this.$auth.loginWith('auth0');
            },
            logoutWithAuth0(e, logoutUrl = process.env.defaultLogoutRef) {
                this.$auth.logout();
                window.location.replace(process.env.auth0LogoutUrl + logoutUrl + '&client_id=' + process.env.auth0ClientID)
            }
        },
        mounted() {
            if (this.$route.hash) {
                this.$auth.setToken(
                    'auth0',
                    `Bearer ${this.$route.hash.split('=')[1].split('&')[0]}`
                )
            }
            // fetch user information from token
            this.$auth.fetchUser();
            // schedule a redirect depending on authentication results
            // setTimeout(() => {
            //     // only redirect if the user is still here
            //     if (this.$route.path.includes('/login/redirect')) {
            //         if (!this.$auth.user) {
            //             this.$router.push('/login')
            //         } else {
            //             this.$router.push('/profile')
            //         }
            //     }
            // }, 1.5 * 1000)
        }
    }
</script>

<style scoped>

</style>