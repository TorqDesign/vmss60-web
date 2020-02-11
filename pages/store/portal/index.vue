<template>
    <div>
        <div v-if="$auth.loggedIn">Hello {{$auth.user.nickname}}</div>
        <div v-else>darn it</div>
    </div>
</template>

<script>

    export default {
        name: "index.vue",
    }
</script>

<style scoped>

</style>