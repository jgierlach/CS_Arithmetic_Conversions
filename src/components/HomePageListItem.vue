<template>
  <div class="padding white-background move-down z-depth-4 center">
    <!-- Code block to display the type of conversion -->
    <div class="row">
      <div class="col s12">
        <h2>{{listItem.conversionType}}</h2>
      </div>
    </div>
    <!-- Code block for button to navigate to conversion -->
    <div class="row">
      <div class="col s12 m4">
        <button class="btn-large" @click="goToConversion">Conversion</button>
      </div>
      <!-- Code block for button to navigate to explanation -->
      <div class="col s12 m4">
        <button class="btn-large" @click="goToExplanation">Explanation</button>
      </div>
      <!-- Code block for button to navigate to practice problems -->
      <div class="col s12 m4">
        <button class="btn-large" @click="goToPracticeProblems">Practice</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['listItem'],
  methods: {
    // gets the url for **conversion** from props
    goToConversion() {
      this.$router.push(this.listItem.conversionButtonRoute)
    },
    // gets the url for the **explanation** from props
    goToExplanation() {
      this.$router.push(this.listItem.explanationButtonRoute)
    },
    // gets the url for **practice problems** from props
    goToPracticeProblems() {
      this.$router.push(this.listItem.practiceButtonRoute)
    }
  }
}
</script>

