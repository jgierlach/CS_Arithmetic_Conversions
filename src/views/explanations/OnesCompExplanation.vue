<template>
  <div
    :class="[darkMode ? darkTextBackground : whiteBackground]"
    class="container padding move-down z-depth-4"
  >
    <h3 :class="[darkMode ? whiteText : '']" class="center">How to convert to ones complement?</h3>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >We are going to learn how to convert a negative decimal number to its one’s compliment.</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      Let's begin by converting
      <strong>-24</strong> to its
      <strong>one's complement</strong>.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 1.</strong> We strip away the negative sign and convert
      <strong>24</strong> to binary.
    </p>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >Understanding how to convert between decimal and binary is a prerequisite to you performing ones and twos complement conversions.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      If you're not familiar with how to convert decimal values to binary check out our
      <router-link to="/decimal-to-binary-explanation">
        <a>decimal to binary explanation</a>
      </router-link>and
      <router-link to="/binary-decimal-conversion">
        <a>binary converter</a>
      </router-link>.
    </p>

    <ul class="collection with-header z-depth-3 container">
      <li class="collection-header center">
        <h5 class="flow-text">
          <strong>Steps In Conversion</strong>
        </h5>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 24, 12 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 12, 6 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 6, 3 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 3, 1 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 1, 0 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          24
          <sub>10</sub> =
          <span class="red-text">
            11000
            <sub>2</sub>
          </span>
        </p>
      </li>
    </ul>

    <br />
    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 2.</strong> For a number to be converted to one’s compliment it must be 8 bits in length.
    </p>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >We have 11000 which is only 5 bits long. To make it 8 bits we will append zeros (0) to the front of the string until it is 8 bits long.</p>
    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >Take note that by appending zeros to the front of the string we are not actually changing the value of the conversion.</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      So now the converted result is
      <strong>00011000</strong>
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 3.</strong> The third and final step simply involves inverting all the bits. So this means that the 0s become 1s and the 1s 0s.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">00011000</p>
    <p class="flow-text center red-text">11100111</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      The
      <strong>ones complement</strong> of
      <strong>-24</strong> =
      <strong>
        <span class="red-text answer-font-size">11100111</span>
      </strong>
    </p>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Learn How To Convert Negative Numbers To Ones Complement!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'Easily learn how to convert negative numbers to ones complement!'
        }
      ]
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
