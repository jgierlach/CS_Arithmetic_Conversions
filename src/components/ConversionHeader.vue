<template>
  <div class="container center white-background padding move-down z-depth-4">
    <div class="row">
      <div class="col s12">
        <h3>{{conversion_info.header}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <button class="btn" @click="navigateToLearn">Learn</button>
      </div>
      <div class="col s6">
        <button class="btn" @click="navigateToPractice">Practice</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['conversion_info'],
  methods: {
    navigateToLearn() {
      this.$router.push(this.conversion_info.learn)
    },
    navigateToPractice() {
      this.$router.push(this.$router.push(this.conversion_info.practice))
    }
  }
}
</script>

