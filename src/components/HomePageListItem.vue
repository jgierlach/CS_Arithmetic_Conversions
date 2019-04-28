<template>
  <div class="row padding white-background move-down z-depth-4 center">
    <!-- Code block to display the type of conversion -->
    <div class="col s6">
      <h4>{{listItem.conversionType}}</h4>
    </div>
    <!-- Code block for button to navigate to conversion -->
    <div class="col s2">
      <button class="btn" @click="goToConversion">Conversion</button>
    </div>
    <!-- Code block for button to navigate to explanation -->
    <div class="col s2">
      <button class="btn" @click="goToExplanation">Explanation</button>
    </div>
    <!-- Code block for button to navigate to practice problems -->
    <div class="col s2">
      <button class="btn" @click="goToPracticeProblems">Practice</button>
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

