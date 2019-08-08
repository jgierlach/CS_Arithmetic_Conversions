<template>
  <div class="container">
    <transition name="slide" appear>
      <div
        :class="[darkMode ? darkTextBackground : whiteBackground]"
        class="center padding move-down z-depth-4"
      >
        <div class="row">
          <div class="col s12">
            <h3 :class="[darkMode ? whiteText : '']">
              I appreciate you checking out this
              project. I built this site because I wanted to learn and create
              something using Vuejs. I thought a resource like this would be
              helpful to students in intro level Computer Science classes. If
              you're interested in seeing the algorithms I wrote to do these
              operations you can find them
              <a
                href="https://github.com/jgierlach/conversion_scripts"
                target="_blank"
              >here</a>. If you have any questions or feedback feel free to
              <a @click="contact">reach out</a>
              to me.
            </h3>
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
      title: 'CS Conversions!',
      meta: []
    }
  },
  methods: {
    contact() {
      this.$router.push('/contact')
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
