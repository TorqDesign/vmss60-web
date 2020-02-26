<template>
    <div>
        <button @click="loginWithAuth0">Log In</button>
        <button @click="logoutWithAuth0">Log Out</button>
    </div>
</template>

<script>
    export default {
        name: "login.vue",
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