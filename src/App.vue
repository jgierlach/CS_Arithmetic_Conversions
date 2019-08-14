<template>
  <div :class="[darkMode ? darkBackground : lightBackground]" id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'app',
  components: {
    appNavbar: Navbar,
    appFooter: Footer
  },
  data() {
    return {
      lightBackground: 'light-background',
      darkBackground: 'dark-background'
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  height: 100%;
  padding-bottom: 4em;
}

.button-margin {
  margin-top: 0.7em;
}

.light-background {
  background: #f5f5f5;
}

.white-background {
  background: white;
}

.dark-background {
  background-color: black;
}

.dark-nav {
  background: #263238;
}

.dark-text-background {
  background: #263238;
}

.green-background {
  background: #009688;
}

.move-down {
  margin-top: 4em;
}

.move-bottom {
  margin-bottom: 4em;
}

.padding {
  padding: 1em;
}

.teal-background {
  background: #009688;
}

.white-text {
  color: #f9ffee;
}

.black-text {
  color: black;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
