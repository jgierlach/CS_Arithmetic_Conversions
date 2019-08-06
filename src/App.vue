<template>
  <div id="app">
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
  }
}
</script>

<style>
body {
  background: #f5f5f5;
}

.white-background {
  background: white;
}

.green-background {
  background: #009688;
}

.move-down {
  margin-top: 4em;
}

.padding {
  padding: 1em;
}

.teal-background {
  background: #009688;
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

/* .slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
} */
</style>
