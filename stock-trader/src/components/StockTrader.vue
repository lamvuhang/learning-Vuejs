<template>
    <div class="container">
        <h1>Trade or View your Portfolio</h1>
        <span>You may Save & Load your Data</span>
        <br>
        <span>Click on 'End Day' to begin a New Day!</span>
        <hr>
        <span>Your Funds: {{ funds }}</span>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
            
        }
    }
}
</script>

<style scoped>

</style>