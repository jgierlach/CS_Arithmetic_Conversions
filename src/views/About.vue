<template>
  <div class="container">
    <transition name="slide" appear>
      <div
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="center padding move-down z-depth-4"
      >
        <div class="row">
          <div class="col s12">
            <h1 :class="[darkMode ? whiteText : '']" class="line-height left-align flow-text">
              Hi, my name is
              <a href="https://sven-magnus.com/" target="_blank">Sven Magnus</a>. I appreciate you checking out this project. I built this site because I wanted to learn and create something using Vuejs. I
              thought a resource like this would be helpful to students in intro
              level Computer Science classes. If you have any questions or feedback feel free to
              <router-link to="/contact">reach out</router-link> to me.
            </h1>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Sven Magnus',
      meta: []
    }
  },
  data() {
    return {
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text'
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped>
.line-height {
  line-height: 1cm;
}
</style>
