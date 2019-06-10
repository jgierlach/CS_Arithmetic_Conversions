<template>
  <div class="container">
    <transition name="slide" appear>
      <div>
        <div
          class="container center white-background padding move-down z-depth-4"
        >
          <h3>Let's Get In Touch!</h3>
        </div>
        <div class="center white-background padding move-down z-depth-4">
          <form
            action="https://formspree.io/jegierlach@gmail.com"
            method="POST"
          >
            <!-- This row contains the name fields on the same line -->
            <div class="row">
              <div class="input-field col s6">
                <label for="firstName">first name</label>
                <input id="firstName" type="text" name="name" />
              </div>
              <div class="input-field col s6">
                <label for="lastName">last name</label>
                <input id="lastName" type="text" name="name" />
              </div>
            </div>
            <!-- This row contains the email field -->
            <div class="row">
              <div class="input-field col s12">
                <label for="email">email</label>
                <input
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
                <label for="textarea">message</label>
                <textarea
                  id="textarea"
                  class="materialize-textarea"
                  type="text"
                  name="message"
                ></textarea>
              </div>
            </div>
            <!-- This is the submit button -->
            <button
              class="btn waves-effect waves-light"
              type="submit"
              value="Send"
            >
              Send
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.padding {
  padding: 1.5em;
}

.move-down {
  margin-top: 3em;
}
</style>
