<template>
    <div>
        <div v-if="$auth.loggedIn">Hello {{$auth.user.nickname}}</div>
        <div v-else>darn it</div>
    </div>
</template>

<script>

    export default {
        name: "index.vue",
        mounted() {
            console.log(this.$auth.getToken('auth0'))
        }
    }
</script>

<style scoped>

</style>