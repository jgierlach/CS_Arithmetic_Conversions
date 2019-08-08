<template>
  <div class="container">
    <transition name="slide" appear>
      <div>
        <div
          :class="[darkMode ? darkTextBackground : whiteBackground]"
          class="container center padding move-down z-depth-4"
        >
          <h3 :class="[darkMode ? whiteText : '']">Let's Get In Touch!</h3>
        </div>
        <div
          :class="[darkMode ? darkTextBackground : whiteBackground]"
          class="center padding move-down z-depth-4"
        >
          <form action="https://formspree.io/jegierlach@gmail.com" method="POST">
            <!-- This row contains the name fields on the same line -->
            <div class="row">
              <div class="input-field col s6">
                <label :class="[darkMode ? whiteText : '']" for="firstName">first name</label>
                <input :class="[darkMode ? whiteText : '']" id="firstName" type="text" name="name" />
              </div>
              <div class="input-field col s6">
                <label :class="[darkMode ? whiteText : '']" for="lastName">last name</label>
                <input :class="[darkMode ? whiteText : '']" id="lastName" type="text" name="name" />
              </div>
            </div>
            <!-- This row contains the email field -->
            <div class="row">
              <div class="input-field col s12">
                <label :class="[darkMode ? whiteText : '']" for="email">email</label>
                <input
                  :class="[darkMode ? whiteText : '']"
                  id="email"
                  class="validate"
                  type="email"
                  name="_replyto"
                />
              </div>
            </div>
            <!-- This row contains the message textarea -->
            <div class="row">
              <div class="input-field col s12">
                <label :class="[darkMode ? whiteText : '']" for="textarea">message</label>
                <textarea
                  :class="[darkMode ? whiteText : '']"
                  id="textarea"
                  class="materialize-textarea"
                  type="text"
                  name="message"
                ></textarea>
              </div>
            </div>
            <!-- This is the submit button -->
            <button class="btn waves-effect waves-light" type="submit" value="Send">
              Send
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
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
