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
                this.$auth.loginWith('auth0')
            },
            logoutWithAuth0() {
                this.$auth.logout();
                window.location.replace('https://vmss60.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2Fstore%2Flogin%2F&client_id=da66CdZisDbTvTAdF4KvT87iVx8DvwHf')
            }
        }
    }
</script>

<style scoped>

</style>