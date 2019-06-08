<template>
  <div>
    <transition name="slide" appear>
      <div>
        <div class="container">
          <div
            class="container padding white-background move-down z-depth-4 center"
          >
            <!-- Tag line -->
            <h2>Your computer science conversions with explanations!</h2>
          </div>
        </div>
        <!-- Home page list of topics -->
        <appHomePageList></appHomePageList>
      </div>
    </transition>
  </div>
</template>

<script>
import HomePageList from './HomePageList.vue'
export default {
  components: {
    appHomePageList: HomePageList
  }
}
</script>

<style scoped>
.padding {
  padding: 1.5em;
}

.move-down {
  margin-top: 3em;
}
</style>
