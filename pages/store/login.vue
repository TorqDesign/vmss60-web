<template>
    <div>
        <button @click="loginWithAuth0">Log In</button>
        <button @click="logoutWithAuth0">Log Out</button>
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
            logoutWithAuth0() {
                this.$auth.logout();
                window.location.replace(process.env.auth0LogoutUrl)
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