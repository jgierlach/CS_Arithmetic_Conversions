<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    appNavbar: Navbar,
    appFooter: Footer
  }
}
</script>

<style>
body {
  background: #f5f5f5;
  /* background: #80cbc4 ; */
}
</style>
