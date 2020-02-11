<template>
    <div>
        <button @click="$auth.login()">Log In</button>
        <button @click="$auth.logout()">Log Out</button>
    </div>
</template>

<script>
    export default {
        name: "login.vue"
    }
</script>

<style scoped>

</style>