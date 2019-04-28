 <template>
  <div>
    <transition name="slide" appear>
      <div class="container">
        <!-- The header introducing what this conversion does -->
        <div class="container center white-background padding move-down z-depth-4">
          <h3>Practice Hexadecimal Conversions</h3>
        </div>

        <div class="center white-background padding move-down z-depth-4">
          <h3>What is 1DF in decimal?</h3>
          <!-- This row contains the input form and button to check the answer -->
          <div class="row">
            <div class="col s6 m6 input-field">
              <input type="text" v-model="userInput">
            </div>
            <div class="col s6 m6">
              <button class="btn">Check answer!</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: ''
    }
  },
  methods: {}
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>

