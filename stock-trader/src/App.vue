<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    appHeader : Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>

</style>
