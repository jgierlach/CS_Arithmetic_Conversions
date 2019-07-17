<template>
  <div class="container">
    <transition name="slide" appear>
      <div class="center white-background padding move-down z-depth-4">
        <div class="row">
          <div class="col s12">
            <h4 class="flow-text">
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
            </h4>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    contact() {
      this.$router.push('/contact')
    }
  }
}
</script>
