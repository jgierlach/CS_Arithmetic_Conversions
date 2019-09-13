<template>
  <div>
    <transition name="slide" appear>
      <div>
        <div class="container">
          <div
            :class="[darkMode ? darkTextBackground : whiteBackground]"
            class="container padding move-down z-depth-4 center"
          >
            <!-- Tag line -->
            <h2 :class="[darkMode ? whiteText : '']">
              Your computer science conversions with explanations!
            </h2>
          </div>
        </div>
        <!-- Home page list of topics -->
        <appHomePageList></appHomePageList>
      </div>
    </transition>
  </div>
</template>

<script>
import HomePageList from '../components/HomePageList.vue'
export default {
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
  },
  components: {
    appHomePageList: HomePageList
  }
}
</script>

<style scoped>
.padding {
  padding: 1.5em;
}
</style>
