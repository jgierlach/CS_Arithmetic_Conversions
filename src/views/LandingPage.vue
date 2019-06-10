<template>
  <transition name="slide" appear>
    <div class="container">
      <!-- The header explaining what conversions are possible -->
      <div class="container center white-background padding move-down z-depth-4">
        <div class="row">
          <div class="col s12">
            <h3>Quickly convert between Decimal, Binary, Hexadecimal, and Octal!</h3>
          </div>
        </div>
        <!-- Call to action button directing the user to the page with the full list of conversions -->
        <div class="row">
          <div class="col s12">
            <button class="btn-large">See full list of conversions!</button>
          </div>
        </div>
      </div>

      <div class="center white-background padding move-down z-depth-4">
        <div class="row">
          <div class="col s6 input-field">
            <select>
              <option
                v-for="(option, index) in options"
                :key="index"
                :value="option"
                :selected="option == '<the default value you want>'"
              >{{ option }}</option>
            </select>
          </div>
          <div class="col s6 input-field">
            <label>Value To Convert</label>
            <input type="text" v-model="userInput">
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <button class="btn-large">Convert!</button>
          </div>
        </div>

        <!-- This is where the user can immediately see the result of their conversion -->
        <div class="container">
          <div class="container move-down row center white-background z-depth-4">
            <div class="col s12">
              <h5>{{ output }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  beforeCreate: function() {
    var elems = document.querySelectorAll('select')
    var instances = M.FormSelect.init(elems, options)
    instances.getSelectedValues()
  },
  data() {
    return {
      userInput: '',
      output: 'The result will appear here!',
      options: [
        'Decimal To Binary',
        'Binary To Decimal',
        'Decimal To Hexadecimal',
        'Hexadecimal to Decimal',
        'Decimal To Octal',
        'Octal To Decimal'
      ]
    }
  }
}
</script>
