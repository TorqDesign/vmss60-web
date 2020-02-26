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
        }
    }
</script>

<style scoped>

</style>